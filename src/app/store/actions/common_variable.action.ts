import { Action } from '@ngrx/store';

export const FAV_HOSTEL = 'fav_hostel'
export const IS_USER_LOGGED_IN = 'is_user_logged_in'
export const IS_EDIT_CLICKED = 'user-click-on-edit'

export class FavHostelPresentAction implements Action {
    readonly type = FAV_HOSTEL;
    constructor(public payload: boolean) {}
  }
  export class userLoggedInAction implements Action {
    readonly type = IS_USER_LOGGED_IN;
    constructor(public payload: boolean) {}
  }
  export class HostelEditClickAction implements Action {
    readonly type = IS_EDIT_CLICKED;
    constructor(public payload: boolean) {}
  }
  export type actions = FavHostelPresentAction | userLoggedInAction | HostelEditClickAction;