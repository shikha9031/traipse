import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as cityRef from './store/actions/city.action';
import { mockData } from './mock/city-mock';
import { hostelMockList } from './mock/hostel-list';
import * as hostelRef from './store/actions/hostel.action';
import { City } from './interface/city';
import { Hostel } from './interface/hostel_list';
import { CommonLogicService } from './service/common-logic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  cityObj:any;
  hostelList:any;
  constructor(private _store:Store<City>, private _commonLogicService:CommonLogicService){
  }
  ngOnInit(){
    this.cityObj = mockData.results;
    this.hostelList = hostelMockList.result;
    this._store.dispatch(new cityRef.CityAction(this._commonLogicService.initialSetParams(this.cityObj)));  
    this._store.dispatch(new hostelRef.HostelAction(this._commonLogicService.initialSetParamsForHostel(this.hostelList)));
  }
}
