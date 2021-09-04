import { Action } from '@ngrx/store';
import * as hostelRef from '../actions/hostel.action';
import { HostelInt } from '../../interface/hostel_list';

export const initialState: HostelInt = {
  hostelArr: [],
  hostelObj: null
}

export function hostelReducer(state: HostelInt = initialState, action: hostelRef.actions): HostelInt {

  switch (action.type) {
    case hostelRef.HOSTEL_DATA:
      return { 
        hostelArr : action.payload,
        hostelObj : state.hostelObj
      };
    case hostelRef.HOSTEL_OBJ:
      return{
        hostelArr : state.hostelArr,
        hostelObj : action.payload
      }
    default:
      return { ...state };
  }
}