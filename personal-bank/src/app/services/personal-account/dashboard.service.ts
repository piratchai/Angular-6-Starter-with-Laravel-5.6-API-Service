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
import {Account,Activities,Transactions} from '../../interfaces/personal-account/dashboard'

/**
 * Endpoint
 */
import { Api,HttpOptions } from '../../config/endpoint';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
    last_activity_on_account: object    =  null
    last_transactions       : object    =  null
    last_ativities          : object    =  null

    loadAccount             : boolean   = false
    loadTransaction         : boolean   = false
    loadActivities          : boolean   = false

    constructor(
        private auth    :   AuthService,
        private http    :   HttpClient,
        private handler :   ErrorhandlerService,
    ) {}

    lastActivityOnAccount():Observable<Account>{
        this.loadAccount = true
        return this.http.get<Account>( Api.dashboard(this.auth.user.id).account,HttpOptions.head(this.auth.token) ).pipe(
            tap( (response: Account) => {
                this.loadAccount = false
                if( response.status == "success"  ){
                    this.last_activity_on_account = response.results.data
                }
          }),
          catchError(this.handler.Error)
        );
    }
    lastTransactions():Observable<Transactions>{
        this.loadTransaction = true
        return this.http.get<Transactions>( Api.dashboard(this.auth.user.id).transactions,HttpOptions.head(this.auth.token) ).pipe(
            tap( (response: Account) => {
                this.loadTransaction = false
                if( response.status == "success"  ){
                    this.last_transactions = response.results.data
                }
          }),
          catchError(this.handler.Error)
        );
    }
    lastActivities():Observable<Activities>{
        this.loadActivities = true
        return this.http.get<Activities>( Api.dashboard(this.auth.user.id).activities,HttpOptions.head(this.auth.token) ).pipe(
            tap( (response: Activities) => {
                this.loadActivities = false
                if( response.status == "success"  ){
                    this.last_ativities = response.results.data
                }
          }),
          catchError(this.handler.Error)
        );
    }
}
