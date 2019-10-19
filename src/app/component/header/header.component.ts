import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';

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

  constructor(public dialog: MatDialog, private router:Router) { }

  ngOnInit() {}

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
}
