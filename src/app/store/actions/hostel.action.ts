import { Action } from '@ngrx/store';
import { Hostel } from '../../interface/hostel_list';

export const HOSTEL_DATA = 'hostel_store_data'


export class HostelAction implements Action {
    readonly type = HOSTEL_DATA;
    constructor(public payload: Hostel[]) {}
  }

  export type actions = HostelAction;