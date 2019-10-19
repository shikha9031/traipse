import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { City } from '../../interface/city';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { GetUrlService } from '../../service/get-url.service';

declare var $: any;

@Component({
  selector: 'header-list',
  templateUrl: './header-list.component.html',
  styleUrls: ['./header-list.component.scss']
})
export class HeaderListComponent implements OnInit {

  /** header variables declarations*/
  cityArr: City[];

  constructor(
    private _store: Store<City>,
    private _elRef: ElementRef,
    private router: Router,
    public dialog: MatDialog,
    private _getUrlService: GetUrlService) { }

  ngOnInit() {

    /** city array getting from store */

    this._store.select('cityReducer').subscribe((value: City[]) => {
      this.cityArr = value;
    });

  }

  /** close dropdowns on clicking outside */

  onClickedOutside(e: any, param) {
    if (!(e.target.parentNode && e.target.parentNode.classList[0] === "city-name")) {
      param.show = false;
    }
  }
  onContactUsClick() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  /** navigate to home on clicking home */

  onHomeClick() {
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
    this._getUrlService.setCurrentUrlVal(false);
    this.router.navigate(['/', 'dashboard']);
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
