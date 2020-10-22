import { Component, OnInit } from '@angular/core';

import { Product } from '../../model/product.model';
import { ProductsService } from '../../core/services/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // lstProducts: Product[] = [
  //   {
  //     id: 1,
  //     description: 'Jersey FC Barcelona 19/20',
  //     image: '',
  //     price: 100,
  //     title: 'Jersey FC Barcelona 19/20',
  //     active: true,
  //     userId: 1
  //   },
  //   {
  //     id: 1,
  //     description: 'Jersey FC Barcelona 19/20',
  //     image: '',
  //     price: 100,
  //     title: 'Jersey FC Barcelona 19/20',
  //     active: true,
  //     userId: 1
  //   },
  //   {
  //     id: 1,
  //     description: 'Jersey FC Barcelona 19/20',
  //     image: '',
  //     price: 100,
  //     title: 'Jersey FC Barcelona 19/20',
  //     active: true,
  //     userId: 1
  //   },
  //   {
  //     id: 1,
  //     description: 'Jersey FC Barcelona 19/20',
  //     image: '',
  //     price: 100,
  //     title: 'Jersey FC Barcelona 19/20',
  //     active: true,
  //     userId: 1
  //   },
  //   {
  //     id: 1,
  //     description: 'Jersey FC Barcelona 19/20',
  //     image: '',
  //     price: 100,
  //     title: 'Jersey FC Barcelona 19/20',
  //     active: true,
  //     userId: 1
  //   }
  // ];

  lstProducts: Product[];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getall();
  }

  getall(): void {
    this.productsService.getall().subscribe(response => {
      this.lstProducts = response;
    });
  }
}