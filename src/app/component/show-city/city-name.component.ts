import { Component, OnInit, ElementRef} from '@angular/core';
import { Store } from '@ngrx/store';
import { City } from '../../interface/city';

declare var $:any;

@Component({
  selector: 'city-name',
  templateUrl: './city-name.component.html',
  styleUrls: ['./city-name.component.scss']
})
export class CityNameComponent implements OnInit {

/** header variables declarations*/
  cityDataArr:City[];

  constructor(private _store:Store<City>, private _elRef:ElementRef) { }

  ngOnInit() {
    this._store.select('citydata').subscribe((res:City[])=>{
      this.cityDataArr =  res;
    })
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      // Do something
      if(scroll>0){
        $(".city-name-collection-wrapper").css("top","0");
      }
      else{
        $(".city-name-collection-wrapper").css("top","104px");
      }
  });
  }

  /** close dropdowns on clicking outside */

  onClickedOutside(e:any, param){
    if(!(e.target.parentNode && e.target.parentNode.classList[0] === "city-name")){
        param.show = false;
    }
  }
}
