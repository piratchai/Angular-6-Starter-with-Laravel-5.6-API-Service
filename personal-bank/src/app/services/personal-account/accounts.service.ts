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
import {Accounts} from '../../interfaces/personal-account/accounts'
import {Pagination} from '../../interfaces/helpers/pagination'


/**
 * Endpoint
 */
import { Api,HttpOptions } from '../../config/endpoint';


@Injectable({
  providedIn: 'root'
})
export class AccountsService {
    account         : object    = null
    accounts        : object    = null
    loading         : boolean   = false
    loadAddAccount  : boolean   = false
    loadViewAccount : boolean   = false
    loadDeleteAccount:boolean   = false

    lk_type  =  ['LEK','EUR','USD']

    paginate : Pagination

    constructor(
            private http    : HttpClient,
            private auth    : AuthService,
            private handler : ErrorhandlerService,
            private activatedRoute : ActivatedRoute
    ) { }

    listAccounts(page=null):Observable<Accounts>{
        this.loading = true
        let enpoint = page
        if( page == null ){
            enpoint = Api.accounts(this.auth.user.id).list
        }
        return this.http.get<Accounts>( enpoint ,HttpOptions.head(this.auth.token) ).pipe(
            tap( (response: Accounts) => {
                this.loading = false
                if( response.status == "success"  ){
                    this.accounts = response.results.data

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
    addAccount(data){
        this.loadAddAccount = true
        return this.http.post<Accounts>( Api.accounts(this.auth.user.id).create,data,HttpOptions.head(this.auth.token) ).pipe(
            tap( (response: Accounts) => {
                this.loadAddAccount = false
                this.listAccounts().subscribe(()=>{})
                this.handler.ShowMessage(response)
            }),
            catchError(this.handler.Error)
        );        
    }

    viewAccount(id):Observable<Accounts>{
        this.loadViewAccount = true
        return this.http.get<Accounts>( Api.accounts(this.auth.user.id,id).view ,HttpOptions.head(this.auth.token) ).pipe(
            tap( (response: Accounts) => {
                this.loadViewAccount = false
                if( response.status == "success"  ){
                    this.account = response.results.data
                }
            }),
            catchError(this.handler.Error)
        );
    }

    deleteAccount(id){
        this.loadDeleteAccount = true
        return this.http.delete<Accounts>( Api.accounts(this.auth.user.id,id).delete ,HttpOptions.head(this.auth.token) ).pipe(
            tap( (response: Accounts) => {
                this.loadDeleteAccount = false
                if( response.status == "success"  ){
                    this.handler.ShowMessage(response)
                    this.listAccounts().subscribe(()=>{})
                }
            }),
            catchError(this.handler.Error)
        );        
    }
}
