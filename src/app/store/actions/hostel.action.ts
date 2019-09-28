import { Action } from '@ngrx/store';
import { HostelInt } from '../../interface/hostel_list';

export const HOSTEL_DATA = 'hostel_store_data'


export class HostelAction implements Action {
    readonly type = HOSTEL_DATA;
    constructor(public payload: HostelInt) {}
  }

  export type actions = HostelAction;