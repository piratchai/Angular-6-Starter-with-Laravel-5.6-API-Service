import { Injectable } from '@angular/core';
import { Observable, of,throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Services
 */
 import { MessagesService } from '../services/helpers/messages.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService {

    constructor( private msg:MessagesService ) { }
    
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    public Error(error: HttpErrorResponse) {

        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error);
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

    private log(report){
        this.msg.showMessages( report )
    }
    public ShowMessage(response){

        try{
            switch( response.status ){
                case 'success':
                    this.msg.color = "alert-success"
                break;
                case 'fail':
                    this.msg.color = "alert-danger"
                break;
            }

            this.msg.showMessages( response.messages )
        }catch(e){
            console.log(e)
            this.msg.showMessages( ['Something bad happened; please try again later'] )
            return throwError(
                'Something bad happened; please try again later.');
        }

    }

}
