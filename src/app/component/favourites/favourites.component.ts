import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonInterface } from '../../interface/common_interface';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favouriteFlag:boolean = false;

  constructor(private _store:Store<CommonInterface>) { }

  ngOnInit() {
    this._store.select('commonVariableReducer').subscribe((res:CommonInterface)=>{
      this.favouriteFlag = res.favHostelList;
    });
  }
}
