import { Action } from '@ngrx/store';

export const FAV_HOSTEL = 'fav_hostel'


export class FavHostelPresentAction implements Action {
    readonly type = FAV_HOSTEL;
    constructor(public payload: boolean) {}
  }

  export type actions = FavHostelPresentAction;