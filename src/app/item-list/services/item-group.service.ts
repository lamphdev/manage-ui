import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable } from 'rxjs';
import { Page } from 'src/app/shared/model/page';
import { fakeDataGroup } from './fake-data';

@Injectable({
  providedIn: 'root'
})
export class ItemGroupService {

  constructor(private http: HttpClient) { }

  getPageItemGroup(page: number, limit: number, queryParams: any): Observable<Page<any>> {
    // return this.http.get<Page<any>>('');
    const idxStart = page * limit;
    const idxEnd = Math.min(idxStart + limit, fakeDataGroup.length);
    const data = fakeDataGroup.filter((el, idx) => idx >= idxStart && idx < idxEnd);
    const result: Page<any> = {
      content: data,
      page: page,
      size: limit,
      totalElements: fakeDataGroup.length,
      totalPages: Math.ceil(fakeDataGroup.length / limit)
    }
    return new BehaviorSubject<Page<any>>(result).pipe(delay(1000));
  }

}
