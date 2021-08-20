import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '@shared.main/loading/loading.service';
import { MessagesService } from '@shared.main/messages/messages.service';
import { DealDto, sortDealsBySeqNo } from '@shared.main/models/deal-dto';

@Injectable({
  providedIn: 'root',
})
export class DealsStore {
  private subject = new BehaviorSubject<DealDto[]>([]);

  deals$: Observable<DealDto[]> = this.subject.asObservable();
  dealsBaseUri$: string = 'assets/data/deals.json';
  constructor(
    private http: HttpClient,
    private loading: LoadingService,
    private messages: MessagesService
  ) {
    this.loadAllDeals();
  }

  private loadAllDeals() {
    const loadDeals$ = this.http.get<DealDto[]>(this.dealsBaseUri$).pipe(
      map((response) => response['payload']),
      catchError((err) => {
        const message = 'Could not load deals';
        this.messages.showErrors(message);
        console.log(message, err);
        return throwError(err);
      }),
      tap((deals) => this.subject.next(deals))
    );

    this.loading.showLoaderUntilCompleted(loadDeals$).subscribe();
  }

  saveDeal(dealId: string, changes: Partial<DealDto>): Observable<any> {
    const deals = this.subject.getValue();

    const index = deals.findIndex((deal) => deal.Id == dealId);

    const newDeal: DealDto = {
      ...deals[index],
      ...changes,
    };

    const newDeals: DealDto[] = deals.slice(0);

    newDeals[index] = newDeal;

    this.subject.next(newDeals);

    return this.http.put(`/api/deals/${dealId}`, changes).pipe(
      catchError((err) => {
        const message = 'Could not save deal';
        console.log(message, err);
        this.messages.showErrors(message);
        return throwError(err);
      }),
      shareReplay()
    );
  }

  filterByCategory(category: string): Observable<DealDto[]> {
    return this.deals$.pipe(
      map((deals) =>
        deals.filter((deal) => deal.Category == category).sort(sortDealsBySeqNo)
      )
    );
  }
}
