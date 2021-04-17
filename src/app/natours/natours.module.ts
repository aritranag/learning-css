import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NatoursRoutingModule } from './natours-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NatoursRoutingModule
  ]
})
export class NatoursModule { }
