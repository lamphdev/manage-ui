import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs';
import { ColumnDefintion } from 'src/app/shared/components/table-data/table-data.component';
import { initPage, Page } from 'src/app/shared/model/page';
import { ItemGroupService } from '../../services/item-group.service';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-list-index',
  templateUrl: './item-list-index.component.html',
  styleUrls: ['./item-list-index.component.css'],
  animations: []
})
export class ItemListIndexComponent implements OnInit, OnDestroy {

  groupPage: Page<any> = initPage(0, 15);
  itemPage: Page<any> = initPage(0, 20);
  loading = false;
  columns: ColumnDefintion[] = [
    {
      display: 'ID',
      key: 'id'
    },
    {
      display: 'Name',
      key: 'name'
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

  constructor(private itemService: ItemService,
    private itemGroupService: ItemGroupService) { }

  ngOnInit(): void {
    this.getItemGroupPage();
  }

  ngOnDestroy(): void {

  }

  getItemGroupPage(): void {
    const { page, size } = this.groupPage;
    this.loading = true;
    this.itemGroupService.getPageItemGroup(page, size, {}).pipe(
      take(1),
      finalize(() => this.loading = false)
    ).subscribe(response => {
      this.groupPage = response;
    })
  }

  onPageChange(newPage: number) {
    this.groupPage = {
      ...this.groupPage,
      page: newPage
    };
    this.getItemGroupPage();
  }

}
