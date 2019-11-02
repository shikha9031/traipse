import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HostelInt, Hostel } from '../../interface/hostel_list';
import { Observable } from 'rxjs';
import * as hostelRef from '../../store/actions/hostel.action';
import { CommonLogicService } from '../../service/common-logic.service';
import * as favHostel from '../../store/actions/common_variable.action';
import { Router } from '@angular/router';
import { CommonInterface } from '../../interface/common_interface';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'hostel-list',
  templateUrl: './hostel-list.component.html',
  styleUrls: ['./hostel-list.component.scss']
})
export class HostelListComponent implements OnInit {

  /** hostel variable */
  hostel_arr:HostelInt;
  isLoggedIn:boolean;

  constructor(
        private _store:Store<HostelInt>,
        private _commonLogicService:CommonLogicService,
        private route:Router,
        public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.hostel_arr = {
      hostelArr:[],
      hostelObj:null
    };

    if(window.location.pathname === '/home'){
      this._store.select('hostelReducer').subscribe((value:HostelInt)=>{
        this.hostel_arr.hostelArr = value.hostelArr;
      });
    }
    else{
      this._store.select('hostelReducer').subscribe((value:HostelInt)=>{
        this.hostel_arr.hostelArr = this._commonLogicService.getFavHostelList(value.hostelArr);
      });
    }  
    this._store.select('commonVariableReducer').subscribe((res:CommonInterface) => {
      this.isLoggedIn = res.isLoggedIn;
    })   
  }

  /** this counter function will return the array of rating like if rating is 3 then array will be return [1,2,3] 
   * @param count is the number of rating which is given
  */

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
    this._store.dispatch(new favHostel.FavHostelPresentAction(true));
  }

  /** navigate to book now  page  
   * @param param is the one object of Hostel
  */

  redirectToBookPage(param:Hostel){
    if(this.isLoggedIn){
      this.hostel_arr.hostelObj = param;
      this._store.dispatch(new hostelRef.HostelAction(this.hostel_arr)); 
      sessionStorage.setItem('hostelItem', JSON.stringify(param));   
      this.route.navigate(['/bookNow']);
    }
   else{
    this.openDialog('login');
   }
  }
     /** modal opening code */

     openDialog(param): void {
      let dialogRef;
       if(this.dialog.openDialogs){
          dialogRef = this.dialog.open(ModalComponent, {
          data:{ param:param }
         });
         dialogRef.afterClosed().subscribe(result => {
         });
       }   
     }
  
     /** modal closing code */

}
