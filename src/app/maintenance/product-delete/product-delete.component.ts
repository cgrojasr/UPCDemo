import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../../core/services/user/user.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params: Params) => {
      const id = params.result;
      this.deleteProduct(id);
    });
  }

  deleteProduct(id: number): void {
    this.userService.delete(id).subscribe(result => {
      if (result.code === 200) {
        console.log(result);
        this.router.navigate(['/maintenance/users']);
      }
    });
  }
}
