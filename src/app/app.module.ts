import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ClickOutsideModule } from 'ng-click-outside';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

/** custom modules import */

import { RouterClass } from './app.route';

/** custom component import  */

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { HeaderListComponent } from './component/header-list/header-list.component';
import { SearchComponent } from './component/search/search.component';
import { FooterComponent } from './component/footer/footer.component';
import { FilterComponent } from './component/filter/filter.component';
import { FavouritesComponent } from './component/favourites/favourites.component';

/** custom reducer import  */

import { cityReducer } from './store/reducers/city.reducer';
import { hostelReducer } from './store/reducers/hostel.reducer';
import { HostelListComponent } from './component/hostel-list/hostel-list.component';

/**custom service */
import { CommonLogicService } from './service/common-logic.service';
import { ModalComponent } from './component/modal/modal.component';

let reducer = {
  cityReducer: cityReducer,
  hostelReducer: hostelReducer
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
    ModalComponent
  ],
  imports: [
    ClickOutsideModule,
    BrowserModule,
    FormsModule,
    RouterClass,
    CommonModule,
    StoreModule.forRoot(reducer),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [CommonLogicService],
  bootstrap: [AppComponent],
  entryComponents: [ ModalComponent ]
})
export class AppModule { }
/**   {citydata:cityReducer},
      {hostelReducerArr:hostelReducer} */