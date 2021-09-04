import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as cityRef from './store/actions/city.action';
import { mockData } from './mock/city-mock';
import { hostelMockList } from './mock/hostel-list';
import * as hostelRef from './store/actions/hostel.action';
import { City } from './interface/city';
import { HostelInt } from './interface/hostel_list';
import { CommonLogicService } from './service/common-logic.service';
import { HostelService } from './shared/hostel.service';
import { GetCityService } from './service/get-city.service';
import * as commonVarRef from './store/actions/common_variable.action';
import { Router } from "@angular/router";
import { UserService } from './service/user.service';

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
    private _hostelObj:HostelService,
    private _getCityService:GetCityService,
    private router: Router,
    private _userService:UserService
  ) {
  }
  ngOnInit() {
    this.router.navigate([''])    
    this.hostelList = {
      hostelArr: [],
      hostelObj: null
    };
    if(localStorage.getItem('typeOfUser') === 'owner'){
      this._userService.getAuthorizationToken(localStorage.getItem('refreshToken')).subscribe(res=>{
        if(res.token) this._store.dispatch(new commonVarRef.AuthorizationToken(res.token));        
      })
    }
    this._hostelObj.fetchHostelData().subscribe((res:any)=>{
      if(res.data && res.data.length>0){
        this.hostelList.hostelArr = res.data;
        this.hostelList.hostelArr = this._commonLogicService.initialSetParamsForHostel(this.hostelList.hostelArr);
        this._store.dispatch(new hostelRef.HostelAction(this.hostelList.hostelArr));   
      }
     
    },      
       error => console.log(error)
  );
    this._getCityService.getCityName().subscribe(res=>{
      if(res.data && res.data.length>0){
        this._store.dispatch(new cityRef.CityAction(res.data));
      }
    })
  }
}
