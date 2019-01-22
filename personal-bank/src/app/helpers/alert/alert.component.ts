import { Component, OnInit,Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

    @Input('header_text')       header_text         : string    = "Alert!"
    @Input('warning_text')      warning_text        : string    = "Are you sure to want to proceed ?" 
    @Input('btn_cancel_text')   btn_cancel_text     : string    = "Close"
    @Input('btn_confirm_text')  btn_confirm_text    : string    = "Proceed"
    @Input('loading')           loading             : boolean   = null
    @Input('modal_id')          modal_id            : string    = "default"

    @Input('onConfirm')         onConfirm           : Function
    @Input('onClose')           onClose             : Function

    constructor(){
        
    }

    ngOnInit(){
        this.onConfirm = this.onConfirm.bind(this)
    }
    ngOnChanges(){
        if( this.loading == false){
            setTimeout(function(){
                $('.modal').modal('hide');
            },600)
        }
    }
}
