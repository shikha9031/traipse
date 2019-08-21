import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './component/home/home.component'

const router:Routes=[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component: HomeComponent}
];

@NgModule({
    declarations:[],
    providers:[],
    imports:[RouterModule.forRoot(router)],
    exports: [RouterModule]
})

export class RouterClass{}