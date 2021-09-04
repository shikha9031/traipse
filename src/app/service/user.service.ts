import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Store } from '@ngrx/store';
import { CommonInterface } from '../interface/common_interface';

const baseUrl = environment.baseUrl;
var authorizationToken = '';

var httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient, private _store: Store<any>) {
    this._store.select('commonVariableReducer').subscribe((res: CommonInterface) => {
      if (res.authorizationToken) authorizationToken = res.authorizationToken;
    })
  }

  /** POST: add Data to the database */

  registerUserDetails(registerUser: any): Observable<any> {
    return this.http.post<any>(baseUrl + "users/signup", registerUser, httpOptions).pipe(catchError(this.handleError));
  }

  /** POST: login user service call */

  loginUser(loginUserDetails): Observable<any> {
    return this.http.post<any>(baseUrl + "users/login", loginUserDetails, httpOptions).pipe(catchError(this.handleError));
  }

  /** POST: forgot password */


  forgotPassword(loginUserDetails): Observable<any> {
    return this.http.post<any>(baseUrl + "email/sendemail", loginUserDetails, httpOptions).pipe(catchError(this.handleError));
  }

  /** POST: update password */

  updatePassword(updatePasswordObj): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':'Bearer '+authorizationToken
      })
    };
    return this.http.post<any>(baseUrl + "users/update-password", updatePasswordObj, httpOptions).pipe(catchError(this.handleError));
  }

  /*** verify email address */

  varifyEmail(email): Observable<any> {
    let dataToBeSent = { 'email': email };
    return this.http.post<any>(baseUrl + "email/verify", dataToBeSent, httpOptions).pipe(catchError(this.handleError));
  }

  getAuthorizationToken(refreshToken):Observable<any>{
    let dataToBeSent = { 'token': refreshToken };
    return this.http.post<any>(baseUrl + "users/get-refresh-token", dataToBeSent, httpOptions).pipe(catchError(this.handleError));
  }
  
  signOutUser(refreshToken):Observable<any>{
    let dataToBeSent = { 'token': refreshToken };
    return this.http.post<any>(baseUrl + "users/logout-user", dataToBeSent, httpOptions).pipe(catchError(this.handleError));
  }
  /** Error Handling code */

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
