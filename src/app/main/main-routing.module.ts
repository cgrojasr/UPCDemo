import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'cart',
                component: CartComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            },
            {
                path: 'logout',
                component: LogoutComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
    ],
    exports: [
        RouterModule
    ]
})

export class MainRoutingModule {}