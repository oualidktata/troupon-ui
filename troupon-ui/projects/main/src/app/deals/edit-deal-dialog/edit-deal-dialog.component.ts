import { AfterViewInit, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DealDto } from '../../../shared/models/deal-dto';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { LoadingService } from '../../../shared/loading/loading.service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DealsStore } from '../../services/deals-service/deals.store';
import { MessagesService } from '../../../shared/messages/messages.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'edit-deal-dialog',
  templateUrl: './edit-deal-dialog.component.html',
  styleUrls: ['./edit-deal-dialog.component.scss'],
  providers: [LoadingService, MessagesService],
})
export class EditDealDialogComponent {
  form: FormGroup;

  Deal: DealDto;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditDealDialogComponent>,
    @Inject(MAT_DIALOG_DATA) deal: DealDto,
    private dealsStore: DealsStore,
    private messagesService: MessagesService
  ) {
    this.Deal = deal;

    this.form = fb.group({
      description: [deal.Description, Validators.required],
      category: [deal.Category, Validators.required],
      releasedAt: [moment(), Validators.required],
      longDescription: [deal.LongDescription, Validators.required],
    });
  }

  save() {
    const changes = this.form.value;

    this.dealsStore.saveDeal(this.Deal.Id, changes).subscribe();

    this.dialogRef.close(changes);
  }

  close() {
    this.dialogRef.close();
  }
}
