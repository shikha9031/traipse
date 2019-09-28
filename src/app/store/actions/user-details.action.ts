import { Action } from '@ngrx/store';
import { UserDetails } from '../../interface/user';

export const USER_DATA = 'user_data'


export class UserAction implements Action {
    readonly type = USER_DATA;
    constructor(public payload: UserDetails[]) {}
  }

  export type actions = UserAction;