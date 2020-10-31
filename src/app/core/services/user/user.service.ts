import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { Entity } from '../../../model/user.model';
import { Response } from '../../../model/response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  regiter(user: Entity): Observable<Response<Entity>> {
    return this.http.post<Response<Entity>>(`${environment.url_api}user`, user);
  }

  update(user: Entity): Observable<Response<Entity>> {
    return this.http.put<Response<Entity>>(`${environment.url_api}user`, user);
  }
}