import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/model/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getList(): Observable<Category[]> {
    const {resourceEndpoint, endpoint: {getListCategory}} = environment;
    const url = `${resourceEndpoint}${getListCategory}`;
    return this.http.get<Category[]>(url);
  }

}
