import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** custom modules import  */
import { AdminRouterClass } from './admin.route';
import { FormsModule  } from '@angular/forms';

/** custom component import */

import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { HostelListingComponent } from './hostel-listing/hostel-listing.component';


@NgModule({
  declarations: [AdminComponent, HeaderComponent, HostelListingComponent],
  imports: [
    CommonModule,
    AdminRouterClass,
    FormsModule 
  ]
})
export class AdminModule { }
