import { Component, OnInit }    from '@angular/core';
import {ActivatedRoute}         from '@angular/router'
import { Location }             from '@angular/common'

/**
 * Service Transactions
 */
import{TransactionsService} from '../../../../../services/personal-account/transactions.service'

/**
 * Helpers
 */
import{ Data } from '../../../../../helpers/functions/date.helper'

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.scss']
})
export class ViewTransactionComponent implements OnInit {

    constructor(
        public  transactionService  : TransactionsService,
        private route               : ActivatedRoute,
        private location            : Location,
        public  date                : Data 
    ) { }

    ngOnInit() {
        this.transactionService.viewTransaction(this.getAccountId(),this.getTransactionId()).subscribe( ()=>{} )
    }
    getAccountId(){
        return this.route.snapshot.paramMap.get('id')
    }
    getTransactionId(){
        return this.route.snapshot.paramMap.get('id_transaction')
    }
    back(){
        this.location.back()
    }
}
