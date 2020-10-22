import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { UserLogin, UserAuthentication, UserChangePassword } from '../../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    private http: HttpClient
  ) { }

  login(userLogin: UserLogin) {
    return this.http.post<UserAuthentication>(`${environment.url_api}user/login`, userLogin);
  }

  changePassword(userChangePassword: UserChangePassword) {
    console.log(userChangePassword);
    return this.http.put<boolean>(`${environment.url_api}user/changepassword`, userChangePassword);
  }
}
