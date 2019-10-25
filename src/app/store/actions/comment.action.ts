import { Action } from '@ngrx/store';
import { Comment } from '../../interface/comment';

export const COMMENT_ADD = 'comment_data_add'


export class CommentAction implements Action {
    readonly type = COMMENT_ADD;
    constructor(public payload: Comment) {}
  }

  export type actions = CommentAction;