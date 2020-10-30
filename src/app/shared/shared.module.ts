import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CurrencyPipe } from './pipes/currency/currency.pipe';
import { ProductCodePipe } from './pipes/product-code/product-code.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CurrencyPipe,
    ProductCodePipe],
    exports: [
      HeaderComponent,
      FooterComponent,
      CurrencyPipe,
      ProductCodePipe
    ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
