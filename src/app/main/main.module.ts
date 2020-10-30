import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutComponent } from './layout/layout.component';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';

import { UserAuthentication } from './../model/user.model';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    ContactComponent,
    LayoutComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule {}
