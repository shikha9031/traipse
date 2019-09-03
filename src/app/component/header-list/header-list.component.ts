import { Component, OnInit, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { City } from '../../interface/city';
import { Observable } from "rxjs";
import { CommonInterface } from '../../interface/common_interface';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'header-list',
  templateUrl: './header-list.component.html',
  styleUrls: ['./header-list.component.scss']
})
export class HeaderListComponent implements OnInit {

/** header variables declarations*/
  cityArr: City;

  constructor(private _store:Store<City>, private _elRef:ElementRef , private router:Router) { }

  ngOnInit() {
    this._store.select<City>(res=>res).subscribe((value:any) =>{
      this.cityArr = value.cityReducer;
    });
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
  onContactUsClick(){
    window.scrollTo(0,document.body.scrollHeight);
  }

  /** navigate to home on clicking home */

  onHomeClick(){
    window.scroll(0,0);
    this.router.navigate(['/home']);
  }
  
}
