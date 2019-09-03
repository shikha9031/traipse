import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './component/home/home.component';
import { FavouritesComponent } from './component/favourites/favourites.component';

const router:Routes=[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'favourite', component: FavouritesComponent}
];

@NgModule({
    declarations:[],
    providers:[],
    imports:[RouterModule.forRoot(router)],
    exports: [RouterModule]
})

export class RouterClass{}