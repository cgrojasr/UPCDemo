import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserMainComponent } from './user-main/user-main.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';

@NgModule({
  declarations: [
    UserMainComponent,
    UserDetailsComponent,
    ProductMainComponent,
    ProductDetailsComponent,
    LayoutComponent,
    MenuComponent,
    ProductDeleteComponent,
    UserDeleteComponent],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MaintenanceModule { }
