import { Action } from '@ngrx/store';
import { City } from '../../interface/city';

  export const City_Data = 'city_store_data'


export class CityAction implements Action {
    readonly type = City_Data;
  
    // Demonstrate authentication data is defined in a model(interface)
    // However, any supported objects can be used here, such as a "string"
    constructor(public payload: City) {}
  }

  export type actions = CityAction;