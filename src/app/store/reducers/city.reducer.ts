import { Action, createReducer, on, State } from '@ngrx/store';
import * as cityRef from '../actions/city.action';
import { City } from '../../interface/city';

export const initialState: City = {
  name: '',
  locality: []
}


export function cityReducer( initialState, action: cityRef.actions): City[] {

  switch (action.type) {
    case cityRef.City_Data:
      return [...action.payload];
  }
  return initialState;

}
