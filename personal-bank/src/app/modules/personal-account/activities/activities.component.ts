import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
/**
 * Helpers
 */
import { Lookup } from '../../../config/lookups'
import { Data } from '.././../../helpers/functions/date.helper'
import { General } from '../../../helpers/functions/general.helper'
/**
 *  Service
 */

import { ActivitiesService }    from '../../../services/personal-account/activities.service'
import { AuthService }          from '../../../services/personal-account/auth.service'

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

    headerTable=[
        {
            title : "ID",row :"id"
        },
        {
            title : "Type",row :"type"
        },
        {
            title : "Title",row :"title"
        },
        {
            title : "State",row :"state",tdTag:'span',tdTagClass:"badge badge-success"
        },
        {
            title : "Created",row :"created_at"
        }
    ]
    lastRecordSelected =<any>{}
    activityService     = null
    lookup              = null
    constructor( 
        public date                 : Data,
        public ActivitiesService    : ActivitiesService,
        private auth                : AuthService,
        public router               : Router,
        public general              : General
    ) {
        this.activityService = ActivitiesService
        this.lookup = Lookup
    }

    ngOnInit() {
        this.convertValues  = this.convertValues.bind(this)
        this.convertTdClass = this.convertTdClass.bind(this)
        this.onClickTr      = this.onClickTr.bind(this)
        this.onClickPage    = this.onClickPage.bind(this)

        this.activityService.listActivities().subscribe(()=>{})
    }
    onClickTr(event,row){
        this.lastRecordSelected  = row
    }
    onClickPage(page){
        if(this.auth.isLoggedIn){
            this.activityService.listActivities(page).subscribe(()=>{})
        }
    }
    objBtnActions(){
        return [
            {
                name    :   'View',
                click   :   null,
                class   :   'btn-info btn-sm',
                depend  :   true,
                target  :   '#openActivity',
                toogle  :   'modal',
                type    :   'view',
                loading :   false,
                icon    :   'fa-eye'         
            }
        ]
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
