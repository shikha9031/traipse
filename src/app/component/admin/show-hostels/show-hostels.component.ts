import { Component, OnInit } from '@angular/core';
import { HostelListService } from '../service/hostel-list.service';
import { Hostel } from '../../../interface/hostel_list';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import * as hostelRef from '../../../store/actions/hostel.action';
import { Router } from '@angular/router'
import * as commonRef from '../../../store/actions/common_variable.action';
import { AdminModalComponent } from '../admin-modal/admin-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-show-hostels',
  templateUrl: './show-hostels.component.html',
  styleUrls: ['./show-hostels.component.scss']
})
export class ShowHostelsComponent implements OnInit {
  hostelArr: Hostel[];
  constructor(
    private hostelListServiceObj: HostelListService,
    private toastr: ToastrService,
    private _store:Store<any>,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.hostelListServiceObj.fetchHostelData(localStorage.getItem('email')).subscribe((res: any) => {
      if(res.data) this.hostelArr = res.data;
    },
      error => console.log(error));
  }
  /**
   * 
   * @param param 
   *  pass hostel data to registration form for editing 
   */
  editHostelData(param:Hostel) {
      this._store.dispatch(new hostelRef.EditHostelAction(param));
      this._store.dispatch(new commonRef.HostelEditClickAction(true));
      this.router.navigate(['/dashboard/admin/hostelAddForm']);      
  }

  /****
   * 
   * @param index for deleting the hostel object
   * @param  param for getting id of the hostel object
   * this function will help for deleting the hostel data 
   */
  deleteHostleObj(index, param) {
    this.hostelListServiceObj.deleteHostel(param._id).subscribe(res => {
      if(res.deletedCount === 1){
        this.hostelArr.splice(index, 1);
        this.toastr.success("Deleted Successfully.")              
      }else{
        this.toastr.error("Something went wrong!!!. Please try after some time")        
      }
    },error=>{
      this.toastr.error("Something went wrong!!!. Please try after some time")              
    })
  }

   /** modal opening code */

   openDialog(param:any, index?:number, hostelObj?:Hostel): void {
    let dialogRef;
     if(this.dialog.openDialogs){
        dialogRef = this.dialog.open(AdminModalComponent, {
        data:{ param:param }
       });
       dialogRef.afterClosed().subscribe(result => {
         if(result === 'yes') this.deleteHostleObj(index, hostelObj);
       });
     }   
   }
}
