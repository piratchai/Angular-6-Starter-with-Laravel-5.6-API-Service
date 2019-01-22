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
import {Transactions} from '../../interfaces/personal-account/transactions'
import {Pagination} from '../../interfaces/helpers/pagination'


/**
 * Endpoint
 */
import { Api,HttpOptions } from '../../config/endpoint';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
    transaction             :   object    = null
    transactions            :   object    = null
    loading                 :   boolean   = false
    loadAddFakeTransaction  :   boolean   = false
    loadViewTransaction     :   boolean   = false
    loadDeleteTransaction   :   boolean   = false

    paginate : Pagination

    constructor(
            private http    : HttpClient,
            private auth    : AuthService,
            private handler : ErrorhandlerService,
            private activatedRoute : ActivatedRoute
    ) { }

    listTransactions(id_accounts,page=null):Observable<Transactions>{
        this.loading = true
        let enpoint = page
        if( page == null ){
            enpoint = Api.transactions(this.auth.user.id,id_accounts).list
        }
        return this.http.get<Transactions>( enpoint ,HttpOptions.head(this.auth.token) ).pipe(
            tap( (response: Transactions) => {
                this.loading = false
                if( response.status == "success"  ){
                    this.transactions = response.results.data

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
    addFakeTransaction(id_account,data){
        this.loadAddFakeTransaction = true
        return this.http.put<Transactions>( Api.transactions(this.auth.user.id,id_account).createFake,data,HttpOptions.head(this.auth.token) ).pipe(
            tap( (response: Transactions) => {
                this.loadAddFakeTransaction = false
                this.listTransactions(id_account).subscribe(()=>{})
                this.handler.ShowMessage(response)
            }),
            catchError(this.handler.Error)
        );        
    }

    viewTransaction(id_account,id_transaction):Observable<Transactions>{
        this.loadViewTransaction = true
        return this.http.get<Transactions>( Api.transactions(this.auth.user.id,id_account,id_transaction).view ,HttpOptions.head(this.auth.token) ).pipe(
            tap( (response: Transactions) => {
                this.loadViewTransaction = false
                if( response.status == "success"  ){
                    this.transaction = response.results.data
                }
            }),
            catchError(this.handler.Error)
        );
    }
}
