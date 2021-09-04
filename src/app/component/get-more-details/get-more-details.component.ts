import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HostelInt, Hostel } from '../../interface/hostel_list';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';

declare var $: any;

@Component({
  selector: 'get-more-details',
  templateUrl: './get-more-details.component.html',
  styleUrls: ['./get-more-details.component.scss']
})
export class GetMoreDetailsComponent implements OnInit {

  /** favourite flag */
  makeFavFlag: boolean = false;

  /** hostel variable declaration */
  hostel_arr: HostelInt;
  hostelImg: any;

  constructor(private _store: Store<HostelInt>, public dialog: MatDialog) { }

  ngOnInit() {
  
    this.hostel_arr = {
      hostelArr: [],
      hostelObj: null
    };
    this._store.select('hostelReducer').subscribe((value:HostelInt)=>{
      if(value.hostelArr.length>0)
        this.hostel_arr.hostelArr = value.hostelArr;
      
      if(value.hostelObj)
        this.hostel_arr.hostelObj = value.hostelObj;
      
    });
    console.log(this.hostel_arr.hostelObj);
    if(this.hostel_arr.hostelObj && this.hostel_arr.hostelObj.img && this.hostel_arr.hostelObj.img.url)
      this.hostelImg = this.hostel_arr.hostelObj.img[0].url;

  }

  /** for selecting new image in the list*/

  getImg(param) {
    this.hostelImg = param.url;
  }

  /** make hostel favourite */

  makeFav() {
    this.hostel_arr.hostelObj.favFlag = !this.hostel_arr.hostelObj.favFlag;
  }

  /** this counter function will return the array of rating like if rating is 3 then array will be return [1,2,3] 
   * @param count is the number of rating which is given
  */

  counter(count: number): any {
    let arrayCreated = [];
    for (let i = 0; i < count; i++) {
      arrayCreated.push(i + 1);
    }
    return arrayCreated;
  }

  /** schedule visit */

  /** schedule modal opening code */

  scheduleVisit(param) {
    let dialogRef;
    if (this.dialog.openDialogs) {
      dialogRef = this.dialog.open(ModalComponent, {
        data: { param: param }
      });
      dialogRef.afterClosed().subscribe(result => {
      });
    }
  }

  /** schedule modal closing code */

  /** Review modal starts */

  addReview(param) {

    let dialogRef;
    if (this.dialog.openDialogs) {
      dialogRef = this.dialog.open(ModalComponent, {
        data: { param: param }
      });
      dialogRef.afterClosed().subscribe(result => {
      });
    }
  }

  /** Review modal ends */
  
}
