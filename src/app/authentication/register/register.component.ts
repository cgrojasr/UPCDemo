import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../core/services/user/user.service';
import { Entity } from '../../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  password = '';
  reTypePassword = '';

  constructor(
    private formBuiler: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.builder();
  }

  private builder(): void {
    this.form = this.formBuiler.group({
      email: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      reTypePassword: ['', Validators.required],
    });
  }

  btnRegister(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      this.form.get('password').setValue(btoa(this.form.get('password').value));
      const user: Entity = this.form.value;
      this.userService.regiter(user).subscribe(result => {
        if (result.code === 200){
          this.router.navigate(['/auth/result/true']);
        }
      });
    }
  }
}
