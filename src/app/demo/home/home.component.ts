import { Component, OnInit } from '@angular/core';

import { BoletaHeader } from '../../model/demo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  example = 'Hola mundo';
  paises = [
    'Peru', 'Chile', 'Colombia', 'Bolivia', 'Ecuador', 'Brasil'
  ];

  boletas: BoletaHeader[] = [
    {
      id: 1,
      cliente: 'pciscroj',
      montoTotal: 100,
      impuesto: 20
    },
    {
      id: 2,
      cliente: 'u812125',
      montoTotal: 50,
      impuesto: 10
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
