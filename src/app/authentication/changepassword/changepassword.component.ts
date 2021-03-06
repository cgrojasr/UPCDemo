import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UserChangePassword } from '../../model/user.model';

import { AuthenticationService} from '../../core/services/authentication/authentication.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  form: FormGroup;
  error = false;
  errorMessage: string;
  strRetypePassword = '';
  strNewPassword = '';


  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private authenticationService: AuthenticationService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      userName: '',
      oldPassword: '',
      newPassword: '',
      retypeNewPassword: ''
    });
  }

  btnSave(event: Event): void {
    event.preventDefault();
    if (this.form.valid){
      this.form.get('oldPassword').setValue(btoa(this.form.get('oldPassword').value));
      this.form.get('newPassword').setValue(btoa(this.form.get('newPassword').value));
      const userChangePassword = this.form.value;
      this.authenticationService.changePassword(userChangePassword).subscribe(response => {
        if (response.code === 200) {
          this.route.navigate(['/auth/result/' + response]);
        }
        else {
          this.error = true;
          this.errorMessage = response.description;
        }
      });
    }
  }
}
