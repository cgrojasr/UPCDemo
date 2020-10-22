import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationService } from './services/authentication/authentication.service';
import { ProductsService } from './services/products/products.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthenticationService,
    ProductsService
  ]
})
export class CoreModule {}
