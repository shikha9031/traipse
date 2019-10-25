import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonInterface } from '../interface/common_interface';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private router:Router, private _store:Store<any>) { }
  canActivate(){
    this._store.select('commonVariableReducer').subscribe((res:CommonInterface) => {
      if(res.isLoggedIn) return true;
      else this.router.navigate(['/home']);
        return false;
    })
  }
}
