import { Component, OnInit } from '@angular/core';

import { UserLogin } from '../../model/user.model';

import { AuthenticationService } from '../../core/services/authentication/authentication.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  userLogin: UserLogin;

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.userLogin = this.authService.getUserLogin();
  }
}
