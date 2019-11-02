import { Component, OnInit } from '@angular/core';
import { HostelListService } from '../service/hostel-list.service';
import { Hostel } from '../../../interface/hostel_list';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import * as hostelRef from '../../../store/actions/hostel.action';
import { Router } from '@angular/router'
import * as commonRef from '../../../store/actions/common_variable.action';

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
    private router: Router
  ) { }

  ngOnInit() {
    this.hostelListServiceObj.fetchHostelData().subscribe((res: any) => {
      this.hostelArr = res[0];
    },
      error => console.log(error));
  }
  editHostelData(param:Hostel) {
      this._store.dispatch(new hostelRef.EditHostelAction(param));
      this._store.dispatch(new commonRef.HostelEditClickAction(true));
      this.router.navigate(['/dashboard/admin/hostelAddForm']);      
  }
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
}
