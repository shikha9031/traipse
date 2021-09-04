import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../../service/comment.service';
import { Comment } from '../../../interface/comment';
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.scss']
})
export class UserFeedbackComponent implements OnInit {

  commentArr:Comment[]=[];

  constructor(private commentService:CommentService, private store:Store<any>) { }

  ngOnInit() {
    this.commentService.getComment().subscribe(res=>{
        if(res.message === 'success'){
            this.commentArr = res.data;
            this.assignInitialVal();
        }
       
    })
    this.store.select('commentReducerObj').subscribe(res=>{
        this.commentArr.push(res);   
        this.assignInitialVal();        
    })
  }
  assignInitialVal(){
      for(let i = 0; i< this.commentArr.length; i++ ){
          this.commentArr[i].showComment = false;
      }
  }

}
