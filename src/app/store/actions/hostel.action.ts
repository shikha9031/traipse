import { Action } from '@ngrx/store';
import { HostelInt, Hostel } from '../../interface/hostel_list';

export const HOSTEL_DATA = 'hostel_store_data';
export const HOSTEL_OBJ = 'hostel-obj';

export class HostelAction implements Action {
    readonly type = HOSTEL_DATA;
    constructor(public payload: Hostel[]) {}
  }
  export class EditHostelAction implements Action {
    readonly type = HOSTEL_OBJ;
    constructor(public payload: Hostel) {}
  }
  export type actions = HostelAction | EditHostelAction;