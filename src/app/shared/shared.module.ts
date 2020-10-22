import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CurrencyPipe } from './pipes/currency/currency.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CurrencyPipe],
    exports :[
      HeaderComponent,
      FooterComponent,
      CurrencyPipe,
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
