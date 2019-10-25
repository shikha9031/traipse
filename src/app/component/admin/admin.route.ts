import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';
import { HostelListingComponent } from './hostel-listing/hostel-listing.component';

const router: Routes = [
    { path: '', redirectTo: 'admin' },
    {
        path: 'admin', component: AdminComponent, children:
        [
            { path: '', redirectTo: 'hostelAddForm' },
            { path: 'hostelAddForm', component: HostelListingComponent },
            { path: 'userFeedback', component: UserFeedbackComponent }
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