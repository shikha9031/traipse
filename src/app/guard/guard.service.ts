import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonInterface } from '../interface/common_interface';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  isLoggedIn:boolean;

  constructor(private router:Router, private _store:Store<any>) { }
  canActivate():boolean{
    this._store.select('commonVariableReducer').subscribe((res:CommonInterface) => {
      this.isLoggedIn = res.isLoggedIn;
    })
    if(this.isLoggedIn) return true;
    else this.router.navigate(['/home']);
    return false;
  }
}
