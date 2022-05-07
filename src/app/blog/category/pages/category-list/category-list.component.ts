import { Component, OnInit } from '@angular/core';
import { delay, finalize, take } from 'rxjs';
import { CategoryService } from 'src/app/blog/services/category.service';
import { ColumnDefintion } from 'src/app/shared/components/table-data/table-data.component';
import { Category } from 'src/app/shared/model/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];
  loadingTask = 0;
  columns: ColumnDefintion[] = [
    {
      display: 'Code',
      key: 'code'
    },
    {
      display: 'Name',
      key: 'name'
    },
    {
      display: 'Path',
      key: 'path'
    },
    {
      display: 'Description',
      key: 'description'
    },
    {
      display: 'Status',
      key: 'status'
    }
  ]

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getListCategory();
  }

  getListCategory(): void {
    this.setLoading(true);
    this.categoryService.getList().pipe(
      take(1),
      finalize(() => this.setLoading(false))
    ).subscribe(response => this.categories = response);
  }

  setLoading(loading: boolean): void {
    if (loading) {
      this.loadingTask = this.loadingTask + 1;
    } else {
      this.loadingTask = this.loadingTask - 1;
    }
  }

}
