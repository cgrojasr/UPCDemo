import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';

import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DemoModule { }
