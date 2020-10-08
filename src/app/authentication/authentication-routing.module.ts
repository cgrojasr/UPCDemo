import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'changepassword',
        component: ChangepasswordComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AuthenticationRoutingModule {}