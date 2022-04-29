import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ColumnDefintion } from 'src/app/shared/components/table-data/table-data.component';
import { Page } from 'src/app/shared/model/page';
import { Post } from 'src/app/shared/model/post';
import { BlogService } from '../../services/blog.service';

const columnDefintion: ColumnDefintion[] = [
  {
    display: 'Id',
    key: 'id'
  },
  {
    display: 'Title',
    key: 'title'
  },
  {
    display: 'Content',
    key: 'content'
  }
]

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  postPage: Page<Post>;
  columns = columnDefintion;
  unsubscribe$ = new Subject<void>();

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.fetchPostData();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  fetchPostData(): void {
    this.blogService.getPagePost().pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => this.postPage = res);
  }

}
