import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedinLoginProvider } from 'angular-6-social-login';
import { UserDetails } from '../../interface/user';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import * as userRef from '../../store/actions/user-details.action';
import { Store } from '@ngrx/store';
import { UserService } from '../../service/user.service';
import { ToastrService } from 'ngx-toastr';

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
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    conFirmPass: new FormControl('', Validators.required),
    mobileNum: new FormControl('', [Validators.required , Validators.minLength(9)]),
    typeOfUser: new FormControl('', Validators.required)
  })

  userLoginObj = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  forgotPassObj = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  },)

  loginErrorMsg: string;
  registrationSuccess: string;
  registrationErrMsg:string;
  forgotErrMsg:String;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private socialAuthService: AuthService,
    private _store: Store<any>,
    private _userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this._store.select('userDetailsReducer').subscribe((res: UserDetails[]) => {
      this.userInfoArr = res;
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

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
  registerDetails(userDetails?: any) {
    if(this.matchPasword(userDetails.value.password, userDetails.value.conFirmPass)){
      this._userService.registerUserDetails(userDetails.value).subscribe(res => {
        this.registrationSuccess = res;
        this.clearRegistrationFields();
      },
        error => console.log(error)
      )
    }
   else{
      this.registrationErrMsg = "Both Password does not match";
   }
  }

  /**
   * user login service call to backend
   */

  userLogin(userDetails: any) {
    this._userService.loginUser(userDetails.value).subscribe(res => {
      if (res.length <= 0) this.loginErrorMsg = "Login Credential is not available";
      else {
        sessionStorage.setItem('name', res[0].name);
        sessionStorage.setItem('email', res[0].email);  
        sessionStorage.setItem('typeOfUser',res[0].typeOfUser);
        sessionStorage.setItem('mobileNum',res[0].mobileNum);        
      }
      this.clearLoginFields();      
    },
      error => console.log(error)
    )
  }

  /**  clear Fields */

  clearRegistrationFields() {
    this.userDetails = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      conFirmPass: new FormControl('', Validators.required),
      mobileNum: new FormControl('', [Validators.required , Validators.minLength(9)]),
      typeOfUser: new FormControl('', Validators.required)
    })
  }
  clearLoginFields() {
    this.userLoginObj = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }
  clearForgotFields(){
    this.forgotPassObj = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  /** forgot password */

  forgotPassword(event){
      this._userService.forgotPassword(event.value).subscribe(res=>{
        this.toastr.success(res);
      }) 
  }

  /** match Passwords that is password and confirm password are same or not */

  matchPasword(password, confirmPassword){
      if(password === confirmPassword) return true;
      else return false;
  }

/** check user can only enter number in the mobile num field */

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
