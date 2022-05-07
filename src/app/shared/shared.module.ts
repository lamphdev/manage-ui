import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDataComponent, TableHeaderDirective, TableRowDirective } from './components/table-data/table-data.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ComboboxComponent } from './components/combobox/combobox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { InputComponent } from './components/input/input.component';
import { DialogContainerComponent, DialogContentDirective } from './components/dialog-container/dialog-container.component';



@NgModule({
  declarations: [
    TableDataComponent,
    DatePickerComponent,
    PaginationComponent,
    ComboboxComponent,
    LoadingComponent,
    ButtonComponent,
    HeaderComponent,
    SideBarComponent,
    InputComponent,
    TableRowDirective,
    TableHeaderDirective,
    DialogContainerComponent,
    DialogContentDirective
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
    DatePickerComponent,
    HeaderComponent,
    SideBarComponent,
    InputComponent,
    ComboboxComponent,
    TableRowDirective,
    TableHeaderDirective,
    DialogContentDirective
  ]
})
export class SharedModule { }
