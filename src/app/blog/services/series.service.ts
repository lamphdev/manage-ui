import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/model/page';
import { Series } from 'src/app/shared/model/series';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) { }

  getPage(): Observable<Page<Series>> {
    const {endpoint: {getPageSeries}, resourceEndpoint} = environment;
    return this.http.get<Page<Series>>(`${resourceEndpoint}${getPageSeries}`)
  }

  create(payload: any): Observable<Series> {
    const {endpoint: {createSeries}, resourceEndpoint} = environment;
    return this.http.post<Series>(`${resourceEndpoint}${createSeries}`, payload);
  }

}
