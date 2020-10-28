import { Component, Input, OnInit } from '@angular/core';

import { UserLogin } from '../../../model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() userLogin: UserLogin = null;

  constructor(
  ) { }

  ngOnInit(): void {

    // this.userLogin = this.authenticationService.getUserLogin();
    console.log(this.userLogin.id);
    console.log(this.userLogin.userName);
    console.log(this.userLogin);
  }
}
