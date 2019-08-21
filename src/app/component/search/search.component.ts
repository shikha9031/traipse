import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  /** variable declarations */

  personFlag: boolean = false;
  genderFlag: boolean = false;

  constructor() { }

  ngOnInit() {
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

}
