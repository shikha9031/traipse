import { Component, OnInit } from '@angular/core';
import { Filter } from '../../mock/filter';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

/*** variables declaration for filters */

filterArr:any;

  constructor() {}

  ngOnInit() {
    this.filterArr = Filter;
  }

}
