import { Component, OnInit } from '@angular/core';
import { Comment } from '../../interface/comment';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CommentService } from '../../service/comment.service';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import * as commentRef from '../../store/actions/comment.action';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  commentObj = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl(''),
    telephone: new FormControl(''),
    comment: new FormControl(''),
  })

  constructor(
    private commentService: CommentService,
    private toastr: ToastrService,
    private _store:Store<any>
  ) { }

  ngOnInit() {
  }
  /**
   * @Param feedBackObj
   * submit feedback OF customers;
   */
  submitFeedBack(feedBackObj) {
    this.commentService.postComment(feedBackObj.value).subscribe(res => {
      if (res === "comments inserted successfully") {
        this.toastr.success("Comments Added Successfully");
        this.clearFieldsForNextComment();
        this._store.dispatch(new commentRef.CommentAction(feedBackObj.value))
      }
      else {
        this.toastr.error("Error!!! Please try after some time");
      }
    }), error => {
      this.toastr.error("Error!!! Please try after some time");
    };
  }

  /** clear Fields for the next comment */

  clearFieldsForNextComment(){
    this.commentObj = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl(''),
      telephone: new FormControl(''),
      comment: new FormControl(''),
    })
  }
}
