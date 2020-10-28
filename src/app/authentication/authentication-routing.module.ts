import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'changepassword',
                component: ChangepasswordComponent
            },
            {
                path: 'result/:result',
                component: ResultComponent
            }
        ]
    },
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