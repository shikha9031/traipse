import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Hostel, price, HostelInt } from '../../../interface/hostel_list';
import { Store } from '@ngrx/store'
import * as hostelRef from '../../../store/actions/hostel.action';
import { HostelListService } from '../service/hostel-list.service';
import { City } from '../../../mock/city';
import { ToastrService } from 'ngx-toastr';
import { CommonInterface } from '../../../interface/common_interface';

@Component({
  selector: 'add-hostel',
  templateUrl: './add-hostel.component.html',
  styleUrls: ['./add-hostel.component.scss']
})
export class AddHostelComponent implements OnInit {

  sharing: price[] = [{ sharing: '', price: '', available: '' , amenities:''}];    
  hostelObj: Hostel = {
    email:'',
    food_available: false,
    label: '',
    pg_for: '',
    rating: '',
    sharing: this.sharing,
    contact_number: '',
    img: [],
    favFlag:false,      
    city:'',
    lane:'',
    pincode:'',
    state:'',
    desc:''
  };
  hostelArr: Hostel[];
  stateList:any;
  commonVariableRef:CommonInterface;

  /** upload images */
  @ViewChild('myInput') imgFieldRef:ElementRef;
  file: File;
  loaderImgFlag:boolean = false;

  constructor(
    private _store: Store<any>,
    private hostelListServiceObj: HostelListService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.stateList = City.results;
    this._store.select('hostelReducer').subscribe((res:HostelInt)=>{
      if(res.hostelObj){
        this.hostelObj = res.hostelObj;
      }
    })
    this._store.select('commonVariableReducer').subscribe((res:CommonInterface)=>{
        this.commonVariableRef = res;
    })
  }

  /** submit hostel details */

  submitHostelDetails(param:Hostel) {
    param.email = sessionStorage.getItem('email');
    if(!this.commonVariableRef.isEditClicked) this.submitFun(param);
    else this.updateFun(param);
  }
  
  submitFun(param:Hostel){
    this.hostelListServiceObj.addHostel(param).subscribe(res=>{
      this.toastr.success("Hostel Added Successfully. You can check on 'See your Hostels List Page'.")      
      this.clearFields();
    }, error=>{
      this.toastr.error("Something went wrong!!!. Please try after some time")
    })
  }
  updateFun(param:Hostel){
    this.hostelListServiceObj.updateHostel(param).subscribe(res=>{
      this.toastr.success("Updated Successfully")      
      this.clearFields();
    }, error=>{
      this.toastr.error("Something went wrong!!!. Please try after some time")
    })
  }

  /** add more sharing rooms */

  addMoreSharing() {
    this.hostelObj.sharing.push({ sharing: '', price: '', available: '' , amenities:''});
  }
  /** remove last object in Sharing array  */
  removeOne(){
    if(this.hostelObj.sharing.length>1)
      this.hostelObj.sharing.pop()
  }

  /** upload image and get image url */

  uploadImages() {
    if(this.file){
      this.loaderImgFlag = true;    
      this.hostelListServiceObj.uploadImages(this.file).subscribe(res => {
        let url = res;
        this.hostelObj.img.push({url:url});
        this.imgFieldRef.nativeElement.value = "";
        this.loaderImgFlag = false;
      });
    }
  }
  uploadSingleImg(event) {
      this.file = event.target.files[0];
  }
  clearFields(){
    this.hostelObj = {
      email:'',
      food_available: false,
      label: '',
      pg_for: '',
      rating: '',
      sharing: [{ sharing: '', price: '', available: '' , amenities:''}],
      contact_number: '',
      img: [],
      favFlag:false,      
      city:'',
      lane:'',
      pincode:'',
      state:'',
      desc:''
    };
    this.imgFieldRef.nativeElement.value="";
  }
}
