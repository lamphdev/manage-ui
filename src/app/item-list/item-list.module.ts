import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemListRoutingModule } from './item-list-routing.module';
import { ItemListIndexComponent } from './pages/item-list-index/item-list-index.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ItemListIndexComponent
  ],
  imports: [
    CommonModule,
    ItemListRoutingModule,
    SharedModule
  ]
})
export class ItemListModule { }
