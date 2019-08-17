import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { City } from './interface/city';
import * as cityRef from './store/actions/city.action';
import { mockData } from './mock/city-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  cityObj:any;
  constructor(private _store:Store<City>){
  }
  ngOnInit(){
    this.cityObj = mockData.results;
    this._store.dispatch(new cityRef.CityAction(this.cityObj));  
  }
}
