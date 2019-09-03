import { Action } from '@ngrx/store';
import * as hostelRef from '../actions/hostel.action';
import { Hostel } from '../../interface/hostel_list';

export const initialState: Hostel[] = [{
    img: '',
    label: '',
    price:null,
    rating:0,
    favFlag:false
}]

export function hostelReducer(state: Hostel[] = initialState, action: hostelRef.actions): Hostel[] {

  switch (action.type) {
    case hostelRef.HOSTEL_DATA:
      return [...action.payload];
  }
  return [...initialState];

}