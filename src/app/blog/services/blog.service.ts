import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/model/page';
import { Post } from 'src/app/shared/model/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getPagePost(): Observable<Page<Post>> {
    const url = `${environment.production}/${environment.endpoint.getPagePost}`;
    return this.http.get<Page<Post>>(url);
  }

}
