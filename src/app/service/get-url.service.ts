import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUrlService {

  private getUrl = new Subject<boolean>();

  constructor() { }

  getCurrentUrlVal():Observable<any>{
    return this.getUrl.asObservable();
  }
  setCurrentUrlVal(param:boolean){
    this.getUrl.next(param);
  }
      
}
