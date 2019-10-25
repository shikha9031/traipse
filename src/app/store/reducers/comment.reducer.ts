import { Action, createReducer, on, State } from '@ngrx/store';
import * as commentRef from '../actions/comment.action';
import { Comment } from '../../interface/comment';

export const initialState: Comment = {
    comment:'',
    email:'',
    name:'',
    telephone:''
}

export function commentReducer(state:Comment = initialState, action: commentRef.actions): Comment {
  switch (action.type) {
    case commentRef.COMMENT_ADD:
      return {...action.payload};
    default:
    return {...state};    
  }
}
