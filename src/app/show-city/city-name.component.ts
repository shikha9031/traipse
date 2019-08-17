import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { City } from '../interface/city';

@Component({
  selector: 'city-name',
  templateUrl: './city-name.component.html',
  styleUrls: ['./city-name.component.scss']
})
export class CityNameComponent implements OnInit {

/** header variables declarations*/
  cityDataArr:City[];

  constructor(private _store:Store<City>) { }

  ngOnInit() {
    this._store.select('citydata').subscribe((res:City[])=>{
      this.cityDataArr =  res;
    })
  }

}
