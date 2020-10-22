import { Component, OnInit } from '@angular/core';
import { UserAuthentication, UserLogin } from '../../model/user.model';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  loginUser(): void {
    this.authenticationService.login(this.userLogin).subscribe(response => {
      console.log(response);
    });
  }

}
