import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDataComponent } from './components/table-data/table-data.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ComboboxComponent } from './components/combobox/combobox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    TableDataComponent,
    DatePickerComponent,
    PaginationComponent,
    ComboboxComponent,
    LoadingComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TableDataComponent,
    PaginationComponent,
    LoadingComponent,
    ButtonComponent,
    DatePickerComponent
  ]
})
export class SharedModule { }
