import { Component, OnInit , ViewChild} from '@angular/core';
import { Store } from '@ngrx/store';
import { City } from '../../interface/city';
import { MatDatepicker } from '@angular/material';

declare var $:any;
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

/** PERSON VARIABLES */

  personFlag: boolean = false;
  personCount: number = 1;

/** GENDER VARIABLES */

  genderFlag: boolean = false;
  genderObj:string = "Gender";

  /** LOCATION VARIABLES DECLARATION */

  showAvailableLocation: boolean = false;
  cityArr: City[];
  location: string = 'Location';
  filterObj:string;
  localityObj:string;

   /** datepicker */
   
   @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
   minDate = new Date();
   getDate:string;

  constructor(private _store:Store<City>) {   }

  ngOnInit() {

    /** get city data from store */
    this._store.select('cityReducer').subscribe((value:City[]) =>{
      this.cityArr = value;
    });

  }

  /** closing dropdown on  outside click*/

  onClickedOutsidePerson(event: any) {
    if (!(event.target.parentNode && event.target.parentNode.classList[0] === "choose-person-container")) {
      this.personFlag = false;
    }
  }
  onClickedOutsideGender(event: any) {
    if (!(event.target.parentNode && event.target.parentNode.classList[0] === "gender-wrapper")) {
      this.genderFlag = false;
    }
  }

  onClickedOutsideLocation(event:any){
    if (!(event.target.parentNode && event.target.parentNode.classList[0] === "location-wrapper")) {
      this.showAvailableLocation = false;
      this.cityArr.forEach((element:City) => {
       element.showLocality = false;
    });
    }
  }

  /** person count logic */

  totalPerson(param){
    if(param === 'add') this.personCount++;
    else if(param === 'minus' && this.personCount>1) this.personCount--;
  }

  /** gender logic */

  chooseCategory(param){
    this.genderObj = param;
    this.genderFlag = false;
  }

  /** location logic */
  showLocations(){
    this.showAvailableLocation = !this.showAvailableLocation;
  }
  showLocalities(param:City){
    param.showLocality = !param.showLocality;
    this.cityArr.forEach((element:City) => {
        if(element != param) element.showLocality = false;
    });
  }
  chooseLocation(param, value){
    this.location = param;
    this.showAvailableLocation = false;
    value.showLocality = false;
  }

  /** datepicker Logic */

  getDateFun(param){
  }
}
