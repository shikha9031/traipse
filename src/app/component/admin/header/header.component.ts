import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    /*** sticky headers code*/
    
    $(window).scroll(function (event) {
      var header = document.getElementById("adminHeader");
      var sticky = header.offsetTop;
      if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
  });
  
  }
  /** navigate to home on clicking home */

  onHomeClick(){
    window.scroll(0,0);
    this.router.navigate(['/home']);
  }

}
