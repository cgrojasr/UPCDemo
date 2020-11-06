import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';

import { CartService } from '../../core/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Product[];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(products => {
      this.cart = products;
    });
  }

}
