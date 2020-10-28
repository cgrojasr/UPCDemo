import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { UserLogin, UserAuthentication, UserChangePassword } from '../../../model/user.model';
import { Response } from '../../../model/response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userLogin: UserLogin = null;

  constructor(
    private http: HttpClient
  ) { }

  login(userAuth: UserAuthentication): Observable<Response<UserLogin>> {
    return this.http.post<Response<UserLogin>>(`${environment.url_api}user/login`, userAuth);
  }

  changePassword(userChangePassword: UserChangePassword): Observable<Response<boolean>> {
    return this.http.put<Response<boolean>>(`${environment.url_api}user/changepassword`, userChangePassword);
  }

  getUserLogin(): UserLogin {
    if (localStorage.getItem('userLogin') !== null) {
      return this.userLogin = JSON.parse(localStorage.getItem('userLogin'));
    }
  }
}
