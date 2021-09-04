import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Hostel } from '../../../interface/hostel_list';
import { Store } from '@ngrx/store';
import { CommonInterface } from '../../../interface/common_interface';

const baseUrl = environment.baseUrl;
var authorizationToken = '';



@Injectable({
  providedIn: 'root'
})
export class HostelListService {

  constructor(private http: HttpClient, private _store:Store<any>) {
    this._store.select('commonVariableReducer').subscribe((res: CommonInterface) => {
      if (res.authorizationToken) authorizationToken = res.authorizationToken;
    })
   }

  /** GET:  fetch data  from database */

  fetchHostelData(param) {
    let dataToBeSend = {'email': param};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': 'Bearer '+authorizationToken    
      })
    };
    return this.http.post<any>(baseUrl + 'hostel-list/filter', JSON.stringify(dataToBeSend), httpOptions).pipe(catchError(this.handleError));
  }

  /** POST: Hostel Data to the database */

  addHostel(hostelData: Hostel): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': 'Bearer '+authorizationToken    
      })
    };
    return this.http.post<any>(baseUrl+'hostel-list/insertHostelData', hostelData, httpOptions).pipe(catchError(this.handleError));
  }

/** Post: passing id of the hostel
 *  Delete Data of hostel 
 * */

  deleteHostel(id: string): Observable<any> {
    let dataToBeSend = {'id':id};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': 'Bearer '+authorizationToken    
      })
    };
    return this.http.post<any>(baseUrl+'hostel-list/delete', JSON.stringify(dataToBeSend), httpOptions).pipe(catchError(this.handleError));
  }
  
  updateHostel(hostelData: Hostel): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': 'Bearer '+authorizationToken    
      })
    };
    return this.http.post<any>(baseUrl+'hostel-list/update', hostelData, httpOptions).pipe(catchError(this.handleError));
  }
  
  uploadImages(file:File){
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>((baseUrl+"fileUpload"), formData);
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
