import { CommonInterface } from '../../interface/common_interface';
import { Action, createReducer, on, State } from '@ngrx/store';
import * as commonVariableRef from '../actions/common_variable.action';

export var initialState: CommonInterface = {
  favHostelList: false,
  isLoggedIn: false,
  isEditClicked: false,
  authorizationToken: ''
}
if (localStorage.getItem('name')) { initialState.isLoggedIn = true; }

export function commonVariableReducer(state: CommonInterface = initialState, action: commonVariableRef.actions): any {

  switch (action.type) {
    case commonVariableRef.FAV_HOSTEL:
      state.favHostelList = action.payload;
      return { ...state };
    case commonVariableRef.IS_USER_LOGGED_IN:
      state.isLoggedIn = action.payload;
      return { ...state };
    case commonVariableRef.IS_EDIT_CLICKED:
      state.isEditClicked = action.payload;
      return { ...state };
    case commonVariableRef.AUTHORIZATION_TOKEN:
      state.authorizationToken = action.payload;
      return { ...state }
    default:
      return { ...state };
  }
}
