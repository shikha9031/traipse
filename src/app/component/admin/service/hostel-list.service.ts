import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Hostel } from '../../../interface/hostel_list';

const baseUrl = environment.baseUrl;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class HostelListService {

  constructor(private http: HttpClient) { }

  /** GET:  fetch data  from database */

  fetchHostelData() {
    return this.http.get(baseUrl + 'fetchData').pipe(catchError(this.handleError));
  }

  /** POST: Hostel Data to the database */

  addHostel(hostelData: Hostel): Observable<any> {
    return this.http.post<any>(baseUrl+'insertHostelData', hostelData, httpOptions).pipe(catchError(this.handleError));
  }

/** Post: passing id of the hostel
 *  Delete Data of hostel 
 * */

  deleteHostel(id: string): Observable<any> {
    let dataToBeSend = {'id':id}
    return this.http.post<any>(baseUrl+'delete', JSON.stringify(dataToBeSend), httpOptions).pipe(catchError(this.handleError));
  }
  
  updateHostel(hostelData: Hostel): Observable<any> {
    return this.http.post<any>(baseUrl+'update', hostelData, httpOptions).pipe(catchError(this.handleError));
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
