import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Hostel, price, ImgClass } from '../../../interface/hostel_list';
import { Store } from '@ngrx/store'
import * as hostelRef from '../../../store/actions/hostel.action';
import { HostelListService } from '../service/hostel-list.service';

@Component({
  selector: 'hostel-listing',
  templateUrl: './hostel-listing.component.html',
  styleUrls: ['./hostel-listing.component.scss']
})
export class HostelListingComponent implements OnInit {

  hostelObj: Hostel;
  hostelArr: Hostel[];
  sharingType: price[];
  imgArray: ImgClass[];

  /** upload images */
  @ViewChild('myInput') imgFieldRef:ElementRef;
  file: File;
  loaderImgFlag:boolean = false;

  constructor(private _store: Store<any>, private hostelListServiceObj: HostelListService) { }

  ngOnInit() {
    this.sharingType = [{ sharing: '', price: '', available: '' }];
    this.imgArray = [];
    this.hostelObj = {
      food_available: false,
      label: '',
      pg_for: '',
      rating: '',
      price: this.sharingType,
      contact_number: '',
      img: [],
      city:'',
      district:'',
      favFlag:false,
      lane:'',
      pincode:'',
      state:''
    }
    this.hostelListServiceObj.fetchHostelData().subscribe(res => {
    },
      error => console.log(error));
  }

  /** submit hostel details */

  submitHostelDetails(param) {
  }

  /** add more sharing rooms */

  addMoreSharing() {
    this.hostelObj.price.push({ sharing: '', price: '', available: '' });
  }

  /** upload image and get image url */

  uploadImages() {
    this.loaderImgFlag = true;    
    this.hostelListServiceObj.uploadImages(this.file).subscribe(res => {
      let url = res;
      this.imgArray.push({url:url});
      this.imgFieldRef.nativeElement.value = "";
      this.loaderImgFlag = false;
    });
  }
  uploadSingleImg(event) {
      this.file = event.target.files[0];
  }
}
