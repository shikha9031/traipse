import { Action, createReducer, on, State } from '@ngrx/store';
import * as cityRef from '../actions/city.action';
import { City } from '../../interface/city';

export const initialState: City[] = [{
  name: '',
  locality: [],
  show: false,
  showLocality:false
}]


export function cityReducer(state:City[] = initialState, action: cityRef.actions): City[] {

  switch (action.type) {
    case cityRef.City_Data:
      return [...action.payload];
    default:
    return [...state];    
  }
}
