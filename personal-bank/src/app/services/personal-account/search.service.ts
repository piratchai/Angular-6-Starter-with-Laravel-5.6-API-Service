import { Injectable } from '@angular/core';
import { Observable,of }    from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { catchError, map, tap,delay } from 'rxjs/operators';

/**
 * Services
 */
import { ErrorhandlerService } from "../errorhandler.service"
import {AuthService} from './auth.service'
/**
 * Interfaces 
 */
import {Search} from '../../interfaces/personal-account/search'

/**
 * Endpoint
 */
import { Api,HttpOptions } from '../../config/endpoint';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

    loadSearch  :   boolean    = false
    data        :   object     = <any>[]

    constructor(
        private http    : HttpClient,
        private auth    : AuthService,
        private handler : ErrorhandlerService
    ) { }
    
    list(search) : Observable<Search>{
        this.loadSearch = true
        let str =  search?'?q='+search:""
        return this.http.get<Search>( Api.search(this.auth.user.id).all+str,HttpOptions.head(this.auth.token) ).pipe(
            tap( (response: Search) => {
                this.loadSearch = false
                if( response.status == "success"  ){
                    this.data = response.results.data
                }
          }),
          catchError( this.handler.Error )
        );
    }
}
