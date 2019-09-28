import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as cityRef from './store/actions/city.action';
import { mockData } from './mock/city-mock';
import { hostelMockList } from './mock/hostel-list';
import * as hostelRef from './store/actions/hostel.action';
import { City } from './interface/city';
import { HostelInt } from './interface/hostel_list';
import { CommonLogicService } from './service/common-logic.service';
import { GetUrlService } from './service/get-url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cityObj: any;
  hostelList: HostelInt;
  constructor(
    private _store: Store<any>,
    private _commonLogicService: CommonLogicService,
    private _getUrlService: GetUrlService) {
  }
  ngOnInit() {
    this.hostelList = {
      hostelArr: [],
      hostelObj: null
    };

    this.cityObj = mockData.results;
    this.hostelList.hostelArr = this._commonLogicService.initialSetParamsForHostel(hostelMockList.result);
    this._store.dispatch(new cityRef.CityAction(this._commonLogicService.initialSetParams(this.cityObj)));
    this._store.dispatch(new hostelRef.HostelAction(this.hostelList));
    
    /** show hide admin header according to home or dashboard location */
  }
}
