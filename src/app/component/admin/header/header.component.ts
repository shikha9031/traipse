import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  /** navigate to home on clicking home */

  onHomeClick() {
    window.scroll(0, 0);
    this.router.navigate(['/home']);
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
