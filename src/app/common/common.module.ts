import { NgModule } from '@angular/core';
import { CommonModule as Ngcommon } from '@angular/common';

import { CommonRoutingModule } from './common-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    Ngcommon,
    CommonRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CommonModule { }
