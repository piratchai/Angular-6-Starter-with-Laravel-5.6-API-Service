import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
    color       = "alert-primary"
    position    = "top-right"
    messages    = []
    isForClear  = true; 
    constructor() { }

    clearMessages(){
        let that = this
        setTimeout(function(){
            that.messages = []
        },5000)
    }
    showMessages(messages){
        this.messages = messages
    }

}
