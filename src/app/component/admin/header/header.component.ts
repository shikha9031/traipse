import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  email:string;

  constructor(private router: Router) { }

  ngOnInit() {
      this.email = sessionStorage.getItem('email');
   }

  /** navigate to home on clicking home */

  onHomeClick() {
    window.scroll(0, 0);
    this.router.navigate(['/home']);
  }

  userFeedback() {
    this.router.navigate(['/dashboard/admin/userFeedback']);
  }
  navigateAddHostelForm() {
    this.router.navigate(['/dashboard/admin/hostelAddForm']);
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
