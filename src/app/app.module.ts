import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ClickOutsideModule } from 'ng-click-outside';

/** custom modules import */

import { RouterClass } from './app.route';

/** custom component import  */

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component//header/header.component';
import { CityNameComponent } from './component//show-city/city-name.component';
import { SearchComponent } from './component//search/search.component';
import { FooterComponent } from './component//footer/footer.component';
import { FilterComponent } from './component//filter/filter.component';

/** custom reducer import  */

import { cityReducer } from './store/reducers/city.reducer';
import { HostelListComponent } from './component/hostel-list/hostel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CityNameComponent,
    SearchComponent,
    FooterComponent,
    FilterComponent,
    HostelListComponent
  ],
  imports: [
    ClickOutsideModule,
    BrowserModule,
    FormsModule,
    RouterClass,
    CommonModule,
    StoreModule.forRoot({citydata:cityReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
