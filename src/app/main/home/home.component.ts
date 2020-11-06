import { Component, OnInit } from '@angular/core';

import { Product } from '../../model/product.model';
import { UserLogin } from '../../model/user.model';

import { ProductsService } from '../../core/services/products/products.service';
import { CartService } from '../../core/services/cart/cart.service';

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
    private productsService: ProductsService,
    private cartService: CartService
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
