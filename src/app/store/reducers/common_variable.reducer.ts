import { CommonInterface } from '../../interface/common_interface';
import { Action, createReducer, on, State } from '@ngrx/store';
import * as commonVariableRef from '../actions/common_variable.action';

export const initialState: CommonInterface = {
  favHostelList: false,
}


export function commonVariableReducer( state:CommonInterface=initialState, action: commonVariableRef.actions): any {

  switch (action.type) {
    case commonVariableRef.FAV_HOSTEL:
    state.favHostelList = action.payload;
      return state;
    default:
    return state;    
  }
}
