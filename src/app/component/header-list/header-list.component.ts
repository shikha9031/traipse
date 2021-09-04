import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { City } from '../../interface/city';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CommonService } from '../../service/common.service';
import { CommonInterface } from '../../interface/common_interface';
import { GetCityService } from '../../service/get-city.service';

declare var $: any;

@Component({
  selector: 'header-list',
  templateUrl: './header-list.component.html',
  styleUrls: ['./header-list.component.scss']
})
export class HeaderListComponent implements OnInit {

  /** header variables declarations*/
  cityArr: City[];
  isUserLoggedIn: boolean;
  typeOfUser: string;
  tabClick = { home: false, contactUs: false }

  constructor(
    private _store: Store<City>,
    private _elRef: ElementRef,
    private router: Router,
    public dialog: MatDialog,
    private _commonService: CommonService,
    private _getCityService:GetCityService
  ) { }

  ngOnInit() {

    /** city array getting from store */
    this._store.select('cityReducer').subscribe((res:City[]) =>{
        if(res[0].city.length>0) this.cityArr = res;
    })

    /** check whether user is login or not */
    this._store.select('commonVariableReducer').subscribe((res: CommonInterface) => {
      this.isUserLoggedIn = res.isLoggedIn;
      if (this.isUserLoggedIn) this.typeOfUser = localStorage.getItem('typeOfUser');
      if (window.location.pathname === '/home') {
        this.tabClick.home = true;
        this.tabClick.contactUs = false;
      }
    })
  }

  /** close dropdowns on clicking outside */

  onClickedOutside(e: any, param) {
    if (!(e.target.parentNode && e.target.parentNode.classList[0] === "city-name")) {
      param.show = false;
    }
  }
  onContactUsClick() {
    this.tabClick.home = false;
    this.tabClick.contactUs = true;
    window.scrollTo(0, document.body.scrollHeight);
  }

  /** navigate to home on clicking home */

  onHomeClick() {
    this.tabClick.home = true;
    this.tabClick.contactUs = false;
    window.scroll(0, 0);
    this.router.navigate(['/home']);
  }

  /** show localities dropdown in city */
  showList(param: City) {
    param.show = !param.show;
    this.cityArr.forEach((element: City) => {
      if (element != param) element.show = false;
    });
  }
  /** dashboard open  */

  openDashBoard() {
    this._commonService.setCurrentUrlVal(false);
    this.router.navigate(['/dashboard']);
  }

  /** onscroll function call */

  @HostListener('window:scroll', ['$event'])
  onScrollFunCall(param) {
    /*** sticky headers code*/

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

}
