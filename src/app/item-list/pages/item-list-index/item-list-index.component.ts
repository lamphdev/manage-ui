import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs';
import { ColumnDefintion } from 'src/app/shared/components/table-data/table-data.component';
import { initPage, Page } from 'src/app/shared/model/page';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { ItemGroupService } from '../../services/item-group.service';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-list-index',
  templateUrl: './item-list-index.component.html',
  styleUrls: ['./item-list-index.component.css'],
  animations: []
})
export class ItemListIndexComponent implements OnInit, OnDestroy {

  groupPage: Page<any> = initPage(0, 10);
  itemPage: Page<any> = initPage(0, 20);
  loading = false;

  constructor(private itemService: ItemService,
    private dialogService: DialogService,
    private itemGroupService: ItemGroupService) { }

  ngOnInit(): void {
    this.getItemGroupPage();
  }

  ngOnDestroy(): void {

  }

  getItemGroupPage(): void {
    const { page, limit } = this.groupPage;
    this.loading = true;
    this.itemGroupService.getPageItemGroup(page, limit, {}).pipe(
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

  openDialog(): void {
    console.log('open')
    this.dialogService.open(ItemListIndexComponent);
  }

}
