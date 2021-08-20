import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { DealDto } from '../../../shared/models/deal-dto';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditDealDialogComponent } from '../../deals/edit-deal-dialog/edit-deal-dialog.component';
import { filter, tap } from 'rxjs/operators';
import { SimpleDealViewModel } from '../../deals/view-models/simple-deal-view-model';

@Component({
  selector: 'deal-card-view',
  templateUrl: './deal-card-view.component.html',
  styleUrls: ['./deal-card-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DealCardViewComponent implements OnInit {
  @Input()
  dealViewModel!: SimpleDealViewModel;

  @Output()
  private dealChanged = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  editDeal(viewModel: SimpleDealViewModel) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    dialogConfig.data = this.dealViewModel;

    const dialogRef = this.dialog.open(EditDealDialogComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .pipe(
        filter((val) => !!val),
        tap(() => this.dealChanged.emit())
      )
      .subscribe();
  }
}
