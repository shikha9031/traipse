import { Action, createReducer, on, State } from '@ngrx/store';
import * as cityRef from '../actions/city.action';
import { City } from '../../interface/city';

export const initialState: City = {
  name: '',
  locality: []
}


export function cityReducer(state: City = initialState, action: cityRef.actions): City {

  switch (action.type) {
    case cityRef.City_Data:
      let return_val = initialSetParams(action.payload);
      return return_val;
  }
  return initialState;

}

function initialSetParams(payload: City): City {
  for (let i in payload) {
    payload[i].show = false;
  }
  return payload;
}