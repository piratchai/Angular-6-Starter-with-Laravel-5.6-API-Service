import { Component, OnInit } from '@angular/core';
/**
 * Import Service
 */
import {DashboardService} from '../../../services/personal-account/dashboard.service'
import {AuthService} from '../../../services/personal-account/auth.service'

/**
 * Interfaces
 */
import {Activity} from '../../../interfaces/personal-account/activities'

/**
 * Helpers
 */
import {Data} from '../../../helpers/functions/date.helper'
import {Lookup} from '../../../config/lookups'
import {General} from '../../../helpers/functions/general.helper'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    lk_status_transaction   =   Lookup.transaction.state
    lk_status_activity      =   Lookup.activity.state
    lk_activity_type        =   Lookup.activity.type
    lastActivity:Activity   = <any>{}

    constructor(
        public ds           : DashboardService,
        public auth         : AuthService,
        public date         : Data,
        public general      : General
    ) {

    }

    ngOnInit() {
        this.activitySelect = this.activitySelect.bind(this)

        if(this.auth.token){
            this.ds.lastActivityOnAccount().subscribe(()=>{})
            this.ds.lastTransactions().subscribe(()=>{})
            this.ds.lastActivities().subscribe(()=>{})
        }
    }
    ngOnChanges(){
    }
    spanClass(state){
        switch(state){
            case 0:
                return "badge-warning"
            case 1:
                return "badge-info"
            case 2: 
                return "badge-success"
            case -1:
                return "badge-danger"
        }
    }
    activitySelect(activity){
        this.lastActivity = activity
    }

}
