import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'

/**
 * Services
 */
import { AccountsService } from '../../../../services/personal-account/accounts.service'
import{ MessagesService } from '../../../../services/helpers/messages.service'

/**
 * Helpers
 */
import{ Data } from '../../../../helpers/functions/date.helper'

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.scss']
})
export class ViewAccountComponent implements OnInit {
    id: string = null
    constructor( 
        public  accountService  : AccountsService,
        private location        : Location,
        private route           : ActivatedRoute,
        public  date            : Data,
        public  router          : Router,
        public  msg             : MessagesService 
    ) {
        this.router.events.subscribe(event => {
            if(Number(this.id) != Number(this.getAccountId()) ){
                this.accountService.viewAccount(this.getAccountId()).subscribe(()=>{})
            }
        });
        console.log("OKOkOkOkOk")
    }

    ngOnInit() {
        this.redirectBtn  = this.redirectBtn.bind(this)
        this.id = this.getAccountId()
        if(this.getAccountId() == null ||  !Number(this.getAccountId()) ){
            this.msg.showMessages(['The account dosn\'t exists'])
            this.router.navigate(['dashboard'])
        }

        this.accountService.viewAccount(this.getAccountId()).subscribe(()=>{})
    }
    back(){
        this.location.back()
    }
    redirectBtn(){
        this.router.navigate(['dashboard/accounts/'+this.getAccountId()+'/transactions'])
    }

    getAccountId(){
        return this.route.snapshot.paramMap.get('id')
    }
}
