import { Injectable } from '@angular/core';
import { Observable,of }    from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router'

import { catchError, map, tap,delay } from 'rxjs/operators';

/**
 * Services
 */
import { ErrorhandlerService } from "../errorhandler.service"
import {AuthService} from './auth.service'
/**
 * Interfaces 
 */
import {Activities} from '../../interfaces/personal-account/activities'
import {Pagination} from '../../interfaces/helpers/pagination'


/**
 * Endpoint
 */
import { Api,HttpOptions } from '../../config/endpoint';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
    
    activities  : object    =  null
    loading     : boolean   = false
    paginate    : Pagination

    constructor(
        private http    :   HttpClient,
        private auth    :   AuthService,
        private handler :   ErrorhandlerService
        
    ) { }

    listActivities(page=null):Observable<Activities>{
        this.loading    = true
        let enpoint     = page

        if( page == null ){
            enpoint = Api.activities(this.auth.user.id).list
        }

        return this.http.get<Activities>( enpoint ,HttpOptions.head(this.auth.token) ).pipe(
            tap( (response: Activities) => {
                this.loading = false
                if( response.status == "success"  ){
                    this.activities = response.results.data

                    this.paginate = {
                        total           :   response.results.total,
                        current_page    :   response.results.current_page,
                        last_page_url   :   response.results.last_page_url,
                        next_page_url   :   response.results.next_page_url,
                        prev_page_url   :   response.results.prev_page_url,
                        per_page        :   response.results.per_page,
                        path            :   response.results.path
                    }
                }
            }),
            catchError(this.handler.Error)
        );
    }
}
