import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
/** custom modules import */

import { RouterClass } from './app.route';

/** custom component import  */

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CityNameComponent } from './show-city/city-name.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './filter/filter.component';

/** custom reducer import  */

import { cityReducer } from './store/reducers/city.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CityNameComponent,
    SearchComponent,
    FooterComponent,
    FilterComponent
  ],
  imports: [
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
