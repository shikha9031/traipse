import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

/** custom modules import  */
import { AdminRouterClass } from './admin.route';
import { FormsModule  } from '@angular/forms';

/** custom service import */

import { HostelListService } from './service/hostel-list.service';

/** custom component import */

import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { AddHostelComponent } from './add-hostel/add-hostel.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';
import { ShowHostelsComponent } from './show-hostels/show-hostels.component';

@NgModule({
  declarations: [AdminComponent, HeaderComponent, AddHostelComponent, UserFeedbackComponent, ShowHostelsComponent],
  imports: [
    CommonModule,
    AdminRouterClass,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    ],
  providers:[
    HostelListService
  ]
})
export class AdminModule { }
