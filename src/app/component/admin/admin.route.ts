import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';
import { AddHostelComponent } from './add-hostel/add-hostel.component';
import { ShowHostelsComponent } from './show-hostels/show-hostels.component';
import { UsersComponent } from './users/users.component';


const router: Routes = [
    { path: '', component : AdminComponent, children:[
        { path: '', component: AddHostelComponent },        
        { path: 'hostelAddForm', component: AddHostelComponent },
        { path: 'userFeedback', component: UserFeedbackComponent },
        { path: 'show-hostels', component:ShowHostelsComponent },
        { path: 'users', component: UsersComponent }
    ] ,
  }
];


@NgModule({
    declarations: [],
    providers: [],
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})

export class AdminRouterClass { }