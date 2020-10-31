import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { BoletaHeader } from '../../model/demo.model';
import { Product } from '../../model/product.model';
import { Entity} from '../../model/user.model';
import { ProductsService } from '../../core/services/products/products.service';
import { UserService } from '../../core/services/user/user.service';

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

  products: Product[];
  newUser: Entity;
  form: FormGroup;
  formUpdate: FormGroup;
  password = '';
  reTypePassword = '';

  constructor(
    private productService: ProductsService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.btnSearch();
    this.builder();
    this.builderUpdate();
  }

  private builder(): void {
    this.form = this.formBuilder.group({
      userName: '',
      email: '',
      password: '',
      reTypePassword: ''
    });
  }

  private builderUpdate(): void {
    this.formUpdate = this.formBuilder.group({
      userName: '',
      email: '',
      password: '',
      reTypePassword: ''
    });
  }

  btnSearch(): void {
    this.productService.allActiveProducts('null').subscribe(result => {
      this.products = result.response;
    });
  }

  btnSave(event: Event): void {
    event.preventDefault();
    this.form.get('password').setValue(btoa(this.form.get('password').value));
    const user: Entity = this.form.value;
    console.log(user);
    this.userService.regiter(user).subscribe(result => {
      if (result.code === 200) {
        this.newUser = result.response;
        console.log(this.newUser.id);
      }
    });
  }

  btnUpdate(event: Event): void {
    event.preventDefault();
    this.formUpdate.get('password').setValue(btoa(this.formUpdate.get('password').value));
    const user: Entity = this.formUpdate.value;
    user.id = 9;
    user.active = true;
    console.log(user);
    this.userService.update(user).subscribe(result => {
      if (result.code === 200) {
        this.newUser = result.response;
        console.log(this.newUser.id);
      }
    });
  }
}
