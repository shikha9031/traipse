import * as cityRef from '../actions/city.action';
import { City } from '../../interface/city';

export const initialState: City[] = [{
  city: '',
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
