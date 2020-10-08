import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AuthenticationRoutingModule} from './authentication-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    ChangepasswordComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
