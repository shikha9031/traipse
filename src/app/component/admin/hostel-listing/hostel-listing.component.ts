import { Component, OnInit } from '@angular/core';
import { Hostel } from '../../../interface/hostel_list';
import { Store } from '@ngrx/store'
import * as hostelRef from '../../../store/actions/hostel.action';

@Component({
  selector: 'hostel-listing',
  templateUrl: './hostel-listing.component.html',
  styleUrls: ['./hostel-listing.component.scss']
})
export class HostelListingComponent implements OnInit {

  hostelObj:Hostel;
  hostelArr:Hostel[];

  constructor(private _store:Store<any>) { }

  ngOnInit() {
  }

}
