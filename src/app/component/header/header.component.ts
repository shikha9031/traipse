import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';
import { UserDetails } from '../../interface/user';
import { Store } from '@ngrx/store';
import { CommonInterface } from '../../interface/common_interface';
import * as commonVariableRef from '../../store/actions/common_variable.action';

declare const gapi: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showUserHeader:boolean = false;
  isUserLoggedIn:boolean = false;
  openProfileDropDown:boolean = false;
  userInfo:UserDetails = { email:'', name:'', number:'',password:'',typeOfUser:'' };

  constructor(public dialog: MatDialog, private router:Router, private _store:Store<any>) { }

  ngOnInit() {
  
    this._store.select('commonVariableReducer').subscribe((res:CommonInterface) => {
      this.isUserLoggedIn = res.isLoggedIn; 
      if(this.isUserLoggedIn)this.userInfo.name = sessionStorage.getItem('name');
    })
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

   /** google sign out  */

   signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    });
  }

  /** open profile drop down */
 
  showDropDown(){
    this.openProfileDropDown = !this.openProfileDropDown;
  }

  /** click outside div */

  onClickedOutside(e: any){
    if (!(e.target.parentNode && e.target.parentNode.classList[0] === "drop-down")) {
      this.openProfileDropDown = false;
    }
  }
  /** sign out user */
  signOutUser(){
    sessionStorage.clear();
    this._store.dispatch(new commonVariableRef.userLoggedInAction(false));    
  }
}
