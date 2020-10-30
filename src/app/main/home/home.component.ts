import { Component, OnInit } from '@angular/core';

import { Product } from '../../model/product.model';
import { UserAuthentication, UserLogin } from '../../model/user.model';

import { ProductsService } from '../../core/services/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[];
  userLogin: UserLogin;
  // descripcion: string;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.userLogin = JSON.parse(localStorage.getItem('userLogin'));
    this.btnSearch('null');
  }

  btnSearch(descripcion: string): void {
    this.productsService.allActiveProducts(descripcion).subscribe(response => {
      console.log(response);
      if (response.code === 200) {
        this.products = response.response;
      }
    });
  }
}
