import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../model/product.model';
import { CartService } from '../../core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  btnAddCart(): void {
    console.log(this.product);
    this.cartService.addCart(this.product);
  }
}
