import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';

declare const gapi: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {}

   /** modal opening code */

   openDialog(param): void {
    let dialogRef;
     if(this.dialog.openDialogs){
        dialogRef = this.dialog.open(ModalComponent, {
       });
       dialogRef.afterClosed().subscribe(result => {
         console.log('The dialog was closed');
       });
     }   
   }

   /** modal closing code */

   /** google sign out  */

   signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
}
