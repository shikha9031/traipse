import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './component/home/home.component';
import { FavouritesComponent } from './component/favourites/favourites.component';
import { BookNowComponent } from './component/book-now/book-now.component';
import { GuardService } from './guard/guard.service';

const router:Routes=[
    { path:'', redirectTo:'home', pathMatch:'full' },
    { path:'home', component: HomeComponent, pathMatch:'full' },
    { path:'favourite', component: FavouritesComponent, pathMatch:'full' },
    { path:'bookNow', component:BookNowComponent,pathMatch:'full' },
    { path :'dashboard', loadChildren:'./component/admin/admin.module#AdminModule', canActivate:[GuardService] }
];

@NgModule({
    declarations:[],
    providers:[],
    imports:[RouterModule.forRoot(router)],
    exports: [RouterModule]
})

export class RouterClass{}