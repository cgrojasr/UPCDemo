import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { Product } from '../../../model/product.model';
import { Response } from '../../../model/response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  // En caso queramos todos los articulos disponibles enviar el texto null
  allActiveProducts(description: string): Observable<Response<Product[]>> {
    return this.http.get<Response<Product[]>>(`${environment.url_api}product/allactiveproducts/${description}`);
  }
}
