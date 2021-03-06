import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

const COMMON_ROOT = '//wcfl.excelmec.org/v3';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getUserDetails() {
    return this.http.get(COMMON_ROOT + '/userinfo', { withCredentials: true })
    .pipe(map(res => res['data']),
      retry(2),
      catchError(this.handleError)
    );

  }

  getRanklist() {
    return this.http.get(COMMON_ROOT + '/ranklist', { withCredentials: true })
    .pipe(map(res => res['data']),
      retry(2),
      catchError(this.handleError)
    );
  }


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
  }
}
