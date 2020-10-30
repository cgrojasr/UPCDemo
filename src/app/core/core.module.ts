import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationService } from './services/authentication/authentication.service';
import { ProductsService } from './services/products/products.service';
import { UserService } from './services/user/user.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthenticationService,
    ProductsService,
    UserService
  ]
})
export class CoreModule {}
