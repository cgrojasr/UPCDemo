import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

import { AuthenticationRoutingModule} from './authentication-routing.module';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    LoginComponent,
    ChangepasswordComponent,
    HeaderComponent,
    ResultComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    AuthenticationRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
