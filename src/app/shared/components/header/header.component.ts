import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserLogin } from '../../../model/user.model';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userLogin: UserLogin;

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.userLogin = this.authService.getUserLogin();
  }
}
