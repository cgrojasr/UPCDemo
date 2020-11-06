import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { UserMainComponent } from './user-main/user-main.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'menu',
                pathMatch: 'full'
            },
            {
                path: 'menu',
                component: MenuComponent
            },
            {
                path: 'users',
                component: UserMainComponent
            },
            {
                path: 'userdetails/:id',
                component: UserDetailsComponent
            },
            {
                path: 'userdelete/:id',
                component: UserDeleteComponent
            },
            {
                path: 'products',
                component: ProductMainComponent
            },
            {
                path: 'productdetails/:id',
                component: ProductDetailsComponent
            },
            {
                path: 'productdelete/:id',
                component: ProductDeleteComponent
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

export class MaintenanceRoutingModule {}