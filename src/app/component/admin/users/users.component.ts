import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { AdminModalComponent } from '../admin-modal/admin-modal.component';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersArray:any = [];
  constructor(private _userDetails:UsersService, public dialog: MatDialog,private toastr: ToastrService) { }

  ngOnInit() {
    this._userDetails.fetchUserData().subscribe(res => {
      if(res.data) this.usersArray = res.data;
    })
  }
  deleteIndividualUser(index, value){
    this._userDetails.deleteUserData(value._id).subscribe(res=>{
      this.usersArray.splice(index,1);
      this.toastr.success("Deleted Successfully.")                    
    }, error=>{
      this.toastr.error("Something went wrong!!!.")              
    })
  }
   /** modal opening code */

   openDialog(param:any, index?:number, value?:any): void {
    let dialogRef;
     if(this.dialog.openDialogs){
        dialogRef = this.dialog.open(AdminModalComponent, {
        data:{ param:param }
       });
       dialogRef.afterClosed().subscribe(result => {
         if(result === 'yes') this.deleteIndividualUser(index,value);
       });
     }   
   }
}
