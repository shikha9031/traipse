import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';
import { AddHostelComponent } from './add-hostel/add-hostel.component';
import { ShowHostelsComponent } from './show-hostels/show-hostels.component';

const router: Routes = [
    { path: '', redirectTo: 'admin' },
    {
        path: 'admin', component: AdminComponent, children:
        [
            { path: '', redirectTo: 'hostelAddForm' },
            { path: 'hostelAddForm', component: AddHostelComponent },
            { path: 'userFeedback', component: UserFeedbackComponent },
            { path: 'show-hostels', component:ShowHostelsComponent }
        ]
    },
];

@NgModule({
    declarations: [],
    providers: [],
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})

export class AdminRouterClass { }