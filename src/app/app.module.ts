/** inbuilt modules import */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ClickOutsideModule } from 'ng-click-outside';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from "angular-6-social-login";
import { MatNativeDateModule, MatDatepickerModule, MatFormFieldModule, MatDialogModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import * as $ from 'jquery';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

/** custom modules import */

import { RouterClass } from './app.route';


/** custom reducer import  */

import { cityReducer } from './store/reducers/city.reducer';
import { hostelReducer } from './store/reducers/hostel.reducer';
import { commonVariableReducer } from './store/reducers/common_variable.reducer';
import { userReducer } from './store/reducers/user-details.reducer';

/**custom service */
import { CommonLogicService } from './service/common-logic.service';
import { GetUrlService } from './service/get-url.service';
import { UserService } from './service/user.service';

/** custom component import  */

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { HeaderListComponent } from './component/header-list/header-list.component';
import { SearchComponent } from './component/search/search.component';
import { FooterComponent } from './component/footer/footer.component';
import { FilterComponent } from './component/filter/filter.component';
import { FavouritesComponent } from './component/favourites/favourites.component';
import { HostelListComponent } from './component/hostel-list/hostel-list.component';
import { ModalComponent } from './component/modal/modal.component';
import { BookNowComponent } from './component/book-now/book-now.component';

/** pipe import statement */

import { FilterPipe } from './pipe/filter.pipe';

/*** reducer variable  */

let reducer = {
  cityReducer: cityReducer,
  hostelReducer: hostelReducer,
  commonVariableReducer: commonVariableReducer,
  userDetailsReducer: userReducer
}

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("628351886543-ngn7qi1u4u5c8prvco9pusqovkmintlb.apps.googleusercontent.com")
      },
    ]
  )
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeaderListComponent,
    SearchComponent,
    FooterComponent,
    FilterComponent,
    HostelListComponent,
    FavouritesComponent,
    ModalComponent,
    BookNowComponent,
    FilterPipe,
  ],
  imports: [
    ClickOutsideModule,
    BrowserModule,
    FormsModule,
    RouterClass,
    CommonModule,
    StoreModule.forRoot(reducer),
    SocialLoginModule,
    /** angular material imports  */
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    BrowserAnimationsModule,  
    ToastrModule.forRoot(),  
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CommonLogicService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    GetUrlService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }