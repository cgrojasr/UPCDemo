import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';

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

export class DemoRoutingModule {}