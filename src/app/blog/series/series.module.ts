import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesListComponent } from './pages/series-list/series-list.component';
import { SeriesUpdateComponent } from './pages/series-update/series-update.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SeriesListComponent,
    SeriesUpdateComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class SeriesModule { }
