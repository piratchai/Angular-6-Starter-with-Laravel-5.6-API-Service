import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
/**
 * Services
 */
import{ AuthService }       from '../../../services/personal-account/auth.service'
import{ AccountsService }   from '../../../services/personal-account/accounts.service'

/**
 * 
 */
import {Lookup} from '../../../config/lookups'


 @Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
    filters=[
        {
            label   :"Type",
            type    :"text",
            name    :'type',
            kind    :'select',
            options :[
                {value:'LEK',name:'LEK'},
                {value:'EUR',name:'EUR'},
                {value:'USD',name:'USD'},
            ],
            class_div:"col-md-3",
            class_input:'form-control'
        },
        {
            label   :"State",
            type    :"text",
            name    :'status',
            kind    :'select',
            options :[
                {value:0,name:'No'},
                {value:1,name:"Si"}
            ],
            class_div:"col-md-3",
            class_input:'form-control'
        }
    ];
    headerTable=[
        {title : "ID",row :"id"},
        {title : "Type",row :"type"},
        {title : "Iban",row :"iban"},
        {title : "Balance",row :"balance"},
        {title : "Active",row :"active"}
    ]
    
    redirectDbClick :string = 'dashboard/accounts'
    
    accountService  :any
    
    data = {type:"LEK"}
    

    lastRecordSelected :any

    filtersSearched = <any>{}

    constructor(
        private auth  : AuthService,
        public  as    : AccountsService,
        private router : Router
    ) {
        this.accountService = as
     }

    ngOnInit() {
        this.onClickPage        = this.onClickPage.bind(this)
        this.btnDeleteAccount   = this.btnDeleteAccount.bind(this)
        this.btnViewAccount     = this.btnViewAccount.bind(this)
        this.onFilterSubmit     = this.onFilterSubmit.bind(this)
        this.onFilterSearch     = this.onFilterSearch.bind(this)

        this.onClickTr          = this.onClickTr.bind(this)
        if(this.auth.isLoggedIn){
            this.as.listAccounts().subscribe(()=>{})
        }
    }
    onClickTr(event,row){
        this.lastRecordSelected  = row
    }
    onChange(event){
        this.data[event.target.name] = event.target.value
    }
    saveAccount(){
        let values ={
            type    :this.data.type,
            user_id :this.auth.user.id
        }
        this.as.addAccount(values).subscribe(()=>{})
    }
    onClickPage(page){
        if(this.auth.isLoggedIn){
            this.as.listAccounts(page).subscribe(()=>{})
        }
    }
    
    onFilterSearch(event){
        this.filtersSearched[event.target.name] = event.target.value
    }

    onFilterSubmit(event){
        this.as.listAccounts().subscribe(()=>{})
    }
    btnDeleteAccount(event,id){
        this.as.deleteAccount(this.lastRecordSelected.id).subscribe(()=>{})
    }
    btnViewAccount(event,row){
        if(!row.id){
            return false
        }
        this.router.navigate(['/dashboard/accounts/'+row.id])
    }
    objBtnActions(){
        return [
            {
                name    : 'Add Account',
                click   : null,
                class   : 'btn-success btn-sm',
                depend  : false,
                target  : '#addAccount',
                toogle  : 'modal',
                type    :'add',
                loading :false,
                icon    :'fa-save'   

            },
            {
                name    : 'View',
                click   : this.btnViewAccount,
                class   : 'btn-info btn-sm',
                depend  : true,
                target  : null,
                toogle  : null,
                type    :'view',
                loading :false,
                icon    :'fa-eye'          

            },
            {
                name    : 'Delete',
                click   : null,
                class   : 'btn-danger btn-sm',
                depend  : true,
                target  : '#alert-deleteAccount',
                toogle  : 'modal',
                type    :'delete',
                loading :false,
                icon    :'fa-trash-alt'         
            }
        ]
    }
    convertValues(data,row){
        let lk_active = Lookup.account.active

        switch(row){
            case 'active':
                return  lk_active[data]
            default:
                return data
        }
    }
}
