import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router'
import { CommonInterface } from '../../../interface/common_interface';
import { Store } from '@ngrx/store'

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  email:string;
  tabActive = {hostelAdd: true, userFeedback:false, showHostels: false, users:false};
  commonVariableRef:CommonInterface;
  
  constructor(private router: Router, private _store: Store<any>) { }

  ngOnInit() {
      this.email = localStorage.getItem('email');
      if(window.location.pathname === '/dashboard/hostelAddForm' || window.location.pathname === '/dashboard'){
        this.tabActive.hostelAdd = true;
        this.tabActive.showHostels = false;
        this.tabActive.userFeedback = false;
        this.tabActive.users = false;
      }
      else if(window.location.pathname === '/dashboard/show-hostels'){
        this.tabActive.hostelAdd = false;
        this.tabActive.showHostels = true;
        this.tabActive.userFeedback = false;
        this.tabActive.users = false;        
      }
      else if(window.location.pathname === '/dashboard/users'){
        this.tabActive.hostelAdd = false;
        this.tabActive.showHostels = false;
        this.tabActive.userFeedback = false;
        this.tabActive.users = true;        
      }
      else{
        this.tabActive.hostelAdd = false;
        this.tabActive.showHostels = false;
        this.tabActive.userFeedback = true;
        this.tabActive.users = false;        
      }
      this._store.select('commonVariableReducer').subscribe((res:CommonInterface)=>{
        this.commonVariableRef = res;
        if(this.commonVariableRef.isEditClicked){
            this.tabActive.hostelAdd = true;
            this.tabActive.showHostels = false;
            this.tabActive.userFeedback = false;
        };
    })
   }

  /** navigate to home on clicking home */

  onHomeClick() {
    window.scroll(0, 0);
    this.router.navigate(['/home']);
  }
  
/** naviagation to some routes */

  userFeedback() {
    this.tabActive.hostelAdd = false;
    this.tabActive.showHostels = false;
    this.tabActive.userFeedback = true;
    this.tabActive.users = false;    
    this.router.navigate(['/dashboard/userFeedback']);
  }
  navigateAddHostelForm() {
    this.tabActive.hostelAdd = true;
    this.tabActive.showHostels = false;
    this.tabActive.userFeedback = false;
    this.tabActive.users = false;    
    this.router.navigate(['/dashboard/hostelAddForm']);
  }
  seeListingHostels(){
    this.tabActive.hostelAdd = false;
    this.tabActive.showHostels = true;
    this.tabActive.userFeedback = false;
    this.tabActive.users = false;    
    this.router.navigate(['/dashboard/show-hostels']);    
  }
  seeTotalusers(){
    this.tabActive.hostelAdd = false;
    this.tabActive.showHostels = false;
    this.tabActive.userFeedback = false;
    this.tabActive.users = true;    
    this.router.navigate(['/dashboard/users']);   
  }

  @HostListener('window:scroll', ['$event'])
  onScrollFunCall() {
    /*** sticky headers code*/
    var header = document.getElementById("adminHeader");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}
