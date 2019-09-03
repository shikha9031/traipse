import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hostel } from '../../interface/hostel_list';
import { Observable } from 'rxjs';
import * as hostelRef from '../../store/actions/hostel.action';
import { CommonLogicService } from '../../service/common-logic.service';
import { CommonInterface } from '../../interface/common_interface';

@Component({
  selector: 'hostel-list',
  templateUrl: './hostel-list.component.html',
  styleUrls: ['./hostel-list.component.scss']
})
export class HostelListComponent implements OnInit {

  /** hostel variable */
  hostel_arr:Hostel[];
  arr = new Array<any>();
  constructor(private _store:Store<Hostel>,private _commonLogicService:CommonLogicService) { }

  ngOnInit() {
    if(window.location.pathname === '/home'){
      this._store.select<Hostel>(res => res).subscribe((value:any)=>{
        this.hostel_arr = value.hostelReducer;
      });
    }
    else{
      this._store.select<Hostel>(res => res).subscribe((value:any)=>{
        this.hostel_arr = this._commonLogicService.getFavHostelList(value.hostelReducer);
      });
    }     
  }
  counter(count:number):any{    
    let arrayCreated = [];
    for(let i = 0; i<count; i++){
      arrayCreated.push(i+1);
    }
    return arrayCreated;
  }
  /** this function is for favourite list */
  makeFav(param:Hostel){
    param.favFlag = !param.favFlag;
    this._store.dispatch(new hostelRef.HostelAction(this.hostel_arr));
  }
}
