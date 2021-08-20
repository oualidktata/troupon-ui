import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DealDto } from '@shared.main/models/deal-dto';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DealOptionDto } from '@shared.main/models/deal-option-dto';
import { DealOptionViewModel } from '@deals.main/view-models/dealoption-view-model';
import { EnvironmentService } from '@environments.main/environment.service';

@Injectable({
  providedIn: 'root',
})
export class DealsService {
  constructor(
    private http: HttpClient,
    @Inject(EnvironmentService) private environmentService: EnvironmentService
  ) {}

  loadDealById(dealId: number) {
    return this.http
      .get<DealDto>(`${this.environmentService.dealsBaseUri}/${dealId}`)
      .pipe(shareReplay());
  }

  loadAllDealLessons(dealId: number): Observable<DealOptionDto[]> {
    return this.http
      .get<DealOptionDto[]>('/api/dealOptions', {
        params: {
          pageSize: '10000',
          DealId: dealId.toString(),
        },
      })
      .pipe(
        map((res) => res['payload']),
        shareReplay()
      );
  }

  loadAllDeals(): Observable<DealDto[]> {
    return this.http.get<DealDto[]>('/api/deals').pipe(
      map((res) => res['payload']),
      shareReplay()
    );
  }

  saveDeal(dealId: string, changes: Partial<DealDto>): Observable<any> {
    return this.http.put(`/api/deals/${dealId}`, changes).pipe(shareReplay());
  }

  searchLessons(search: string): Observable<DealOptionDto[]> {
    return this.http
      .get<DealOptionDto[]>('/api/lessons', {
        params: {
          filter: search,
          pageSize: '100',
        },
      })
      .pipe(
        map((res) => res['payload']),
        shareReplay()
      );
  }
}
