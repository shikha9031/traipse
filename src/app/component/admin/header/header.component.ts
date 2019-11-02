import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  email:string;
  tabActive = {hostelAdd: true, userFeedback:false, showHostels: false};
  constructor(private router: Router) { }

  ngOnInit() {
      this.email = sessionStorage.getItem('email');
      if(window.location.pathname === '/dashboard/admin/hostelAddForm'){
        this.tabActive.hostelAdd = true;
        this.tabActive.showHostels = false;
        this.tabActive.userFeedback = false;
      }
      else if(window.location.pathname === '/dashboard/admin/show-hostels'){
        this.tabActive.hostelAdd = false;
        this.tabActive.showHostels = true;
        this.tabActive.userFeedback = false;
      }
      else{
        this.tabActive.hostelAdd = false;
        this.tabActive.showHostels = false;
        this.tabActive.userFeedback = true;
      }
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
    this.router.navigate(['/dashboard/admin/userFeedback']);
  }
  navigateAddHostelForm() {
    this.tabActive.hostelAdd = true;
    this.tabActive.showHostels = false;
    this.tabActive.userFeedback = false;
    this.router.navigate(['/dashboard/admin/hostelAddForm']);
  }
  seeListingHostels(){
    this.tabActive.hostelAdd = false;
    this.tabActive.showHostels = true;
    this.tabActive.userFeedback = false;
    this.router.navigate(['/dashboard/admin/show-hostels']);    
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
