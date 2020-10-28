import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UserAuthentication, UserLogin } from '../../model/user.model';
import { Response } from '../../model/response.model';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { importType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error = false;
  errorMessage: string;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      userName: '',
      password: ''
    });
  }

  btnLogin(event: Event): void{
    this.form.get('password').setValue(btoa(this.form.get('password').value));
    const userAuth: UserAuthentication = this.form.value;
    this.authenticationService.login(userAuth).subscribe(result => {
      if (result.code === 200) {
        localStorage.setItem('userLogin', JSON.stringify(result.response));
        this.router.navigate(['/main']);
      }
      else {
        this.error = true;
        this.errorMessage = result.description;
      }
    });
  }
}
