import { Component, OnInit } from '@angular/core';
/**
 * Service
 */
import{ MessagesService } from '../../services/helpers/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

    constructor( public msg:MessagesService ) { 

    }

    ngOnInit() {
        if( this.msg.isForClear ){
            this.msg.clearMessages();
        }
    }

}
