import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';

const router:Routes=[
    { path:'', redirectTo:'admin' },
    { path:'admin', component: AdminComponent },
];

@NgModule({
    declarations:[],
    providers:[],
    imports:[RouterModule.forChild(router)],
    exports: [RouterModule]
})

export class AdminRouterClass{}