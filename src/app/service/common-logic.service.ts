import { Injectable } from '@angular/core';
import { City } from '../interface/city';
import { Hostel } from '../interface/hostel_list';

@Injectable({
  providedIn: 'root'
})
export class CommonLogicService {

  constructor() { }

   initialSetParams(payload: City[]): City[] {
    for (let i in payload) {
      payload[i].show = false;
      payload[i].showLocality = false;
    }
    return [...payload];
  }
  initialSetParamsForHostel(payload: any): Hostel[] {
    for (let i in payload) {
      payload[i].favFlag = false;
    }
    return [...payload];
  }
  getFavHostelList(payload:any):Hostel[]{
    let returnArray = [];
    payload.forEach(element => {
      if(element.favFlag) returnArray.push(element);
    });
    return returnArray;
  }
}
