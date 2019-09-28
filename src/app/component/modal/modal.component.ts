import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedinLoginProvider } from 'angular-6-social-login';
import { UserDetails } from '../../interface/user';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import * as userRef from '../../store/actions/user-details.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  /** review array declaration */

  reviewArr = [{ 'name': '', 'comment': '' }];

  /** user Details variable declaration for register and login */

  userInfoArr: UserDetails[] = [];
  userDetails = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    conFirmPass: new FormControl('', Validators.required),
    mobileNum: new FormControl('', Validators.required),
    typeOfUser: new FormControl('', Validators.required)
  })

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private socialAuthService: AuthService,
    private _store:Store<any>
  ) { }

  ngOnInit() {
    this._store.select('userDetailsReducer').subscribe((res:UserDetails[])=>{
        this.userInfoArr = res;
        console.log(this.userInfoArr);
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  // submitDetails(userDetails?: any) {
  //   let arr:UserDetails = [];
  //   arr.push(userDetails.value);
  //  this._store.dispatch(new userRef.UserAction(arr));
  // }

  /** google linkedIn sign in */

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => { }
    );
  }
  /** register user Form Details */

}
