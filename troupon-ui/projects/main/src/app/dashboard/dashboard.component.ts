import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ContactsService } from '../contacts/services/contacts.service';
import { SimpleDealViewModel } from '../deals/view-models/simple-deal-view-model';
import { DealsService } from '../services/deals-service/deals-service.service';
import { DealDto } from '../../shared/models/deal-dto';
import { DealsStore } from '../services/deals-service/deals.store';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  tenant!: string;
  dealsViewModel!: SimpleDealViewModel[];
  dealsDto!: DealDto[];
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dealService: DealsService
  ) {
    this.dealService.loadAllDeals().subscribe((data) => {
      this.handleLoadAllDealsResponse(data);
    });
    this.tenant = 'Tenant 1';
  }

  handleLoadAllDealsResponse(data: DealDto[]): SimpleDealViewModel[] {
    let viewModels: SimpleDealViewModel[] = [];
    data.forEach((dto) => {
      this.dealsViewModel.push(this.mapDeal(dto));
    });
    return viewModels;
  }

  mapDeal(deal: DealDto): SimpleDealViewModel {
    return new SimpleDealViewModel(
      deal.Id,
      deal.Description,
      deal.Category,
      deal.LongDescription,
      deal.SeqNo,
      10,
      deal.Price,
      deal.UploadedImageUrl
    );
  }
  ngOnInit(): void {}
}
