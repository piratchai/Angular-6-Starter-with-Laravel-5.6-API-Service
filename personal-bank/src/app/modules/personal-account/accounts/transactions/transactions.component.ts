import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'

/**
 * Helpers
 */
import { Lookup } from '../../../../config/lookups'
import { Data } from '../.././../../helpers/functions/date.helper'

/**
 *  Service
 */

import { TransactionsService }    from '../../../../services/personal-account/transactions.service'
import { AuthService }          from '../../../../services/personal-account/auth.service'

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {


    headerTable=[
        {
            title : "ID",row :"id"
        },
        {
            title : "Ammount",row :"ammount"
        },
        {
            title : "Title",row :"title"
        },
        {
            title : "State",row :"state",tdTag:'span',tdTagClass:"badge badge-success"
        },
        {
            title : "Created",row :"created_at"
        },
        {
            title : "Updated",row :"updated_at"
        }
    ]
    
    lastRecordSelected =<any>{}
    transactionService = null
    lookup             = null
    redirectDbClick :string = 'dashboard/accounts'
    fakeDataTransaction = {
        title       :"",
        ammount     :"",
        account_id  :null
    }
    constructor( 
        public date                 : Data,
        public TransactionsService  : TransactionsService,
        private auth                : AuthService,
        public router               : Router,
        public route                : ActivatedRoute
    ) {
        this.transactionService = TransactionsService
        this.lookup = Lookup
    }

    ngOnInit() {
        this.convertValues  = this.convertValues.bind(this)
        this.convertTdClass = this.convertTdClass.bind(this)
        this.onClickTr      = this.onClickTr.bind(this)
        this.onClickPage    = this.onClickPage.bind(this)
        this.onSaveTransaction = this.onSaveTransaction.bind(this)
        this.redirectDbClick = '/'+this.getAccountId()+'/transactions'
        this.redirectToTransaction = this.redirectToTransaction.bind(this)

        this.transactionService.listTransactions(this.getAccountId()).subscribe(()=>{})
    }
    onChange(event){
        this.fakeDataTransaction[event.target.name] = event.target.value
    }
    onSaveTransaction(event){
        event.preventDefault()
        this.fakeDataTransaction.account_id = this.getAccountId();
        this.transactionService.addFakeTransaction(this.getAccountId(),this.fakeDataTransaction).subscribe((response)=>{})
    }
    onClickTr(event,row){
        this.lastRecordSelected  = row
    }
    onClickPage(page){
        if(this.auth.isLoggedIn){
            this.transactionService.listTransactions(this.getAccountId(),page).subscribe(()=>{})
        }
    }
    objBtnActions(){
        return [
            {
                name    :   'View',
                click   :   this.redirectToTransaction,
                class   :   'btn-info btn-sm',
                depend  :   true,
                type    :   'view',
                loading :   false,
                icon    :   'fa-eye'         
            },
            {
                name    :   'Add Fake Transaction',
                click   :   null,
                class   :   'btn-warning btn-sm',
                depend  :   false,
                target  :   '#addFakeTransaction',
                toogle  :   'modal',
                type    :   'add',
                loading :   false,
                icon    :   'fa-save'         
            }
        ]
    }
    redirectBtn(id,type){
        if(type=="account"){
            this.router.navigate(['dashboard/accounts/'+id])
        }else if(type=="transaction"){
            this.router.navigate(['dashboard/accounts/'+this.getAccountId()+'/transactions/'+id])
        }
    }
    redirectToTransaction(event){
        event.preventDefault()
        this.redirectBtn(this.lastRecordSelected.id,'transaction')
    }
    getAccountId(){
        return this.route.snapshot.paramMap.get('id')
    }
    convertValues(data,row){
        let lk_state = Lookup.activity.state

        switch(row){
            case 'state':
                return  lk_state[data]
            case 'created_at':
                return this.date.format(data,'dd/mm/yyyy')
            default:
                return data
        }
    }

    convertTdClass(classTdTag,value,row) {
        switch(row){
            case 'state':
                if( value==0 ){
                    return 'badge badge-info'
                }else if(value==1){
                    return 'badge badge-success'
                }else {
                    return 'text-white badge badge-warning'
                }
            default:
                return classTdTag
        }        
    }
}
