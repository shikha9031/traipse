import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CommonInterface } from '../../../interface/common_interface';
import { Store } from '@ngrx/store';

const baseUrl = environment.baseUrl;
var authorizationToken = '';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private _store:Store<any>) { 
    this._store.select('commonVariableReducer').subscribe((res: CommonInterface) => {
      if (res.authorizationToken) authorizationToken = res.authorizationToken;
    })
  }

  fetchUserData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': 'Bearer '+authorizationToken            
      })
    };
    return this.http.get<any>(baseUrl + 'users/getUserDetails', httpOptions).pipe(catchError(this.handleError));
  }
  deleteUserData(index):Observable<any> {
    let dataToBeSent = {'id':index};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': 'Bearer '+authorizationToken            
      })
    };
    return this.http.post<any>(baseUrl + 'users/delete-user', dataToBeSent,httpOptions).pipe(catchError(this.handleError));
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
