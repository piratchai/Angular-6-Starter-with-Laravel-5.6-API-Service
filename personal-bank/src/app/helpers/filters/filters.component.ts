import { Component, OnInit,Input,Injectable } from '@angular/core';
import { Storage } from '../functions/storage.helper'
import { QueryString } from '../functions/querystring.helper'

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
    
    @Input('data') data : Array<any> = [];

    @Input('onChange')  onChange    : Function  = ()=>{}
    @Input('onSubmit')  onSubmit    : Function  = ()=>{}
    @Input('clean')     clean       : boolean   = true
    @Input('storage')   storage     : any       = 'local'
    @Input('name')      name        : string    ='default'

    arrow_collapse='fa-arrow-down'
    model :object = <any>{}
    constructor( private Storage:Storage,private queryString:QueryString ) { }

    ngOnInit() {
        this.onNgSubmit =   this.onNgSubmit.bind(this)
        this.onNgChange =   this.onNgChange.bind(this)
        this.onNgClear  =   this.onNgClear.bind(this)
        this.collapseCard   = this.collapseCard.bind(this)
        if(this.storage != false ){
            let store = this.store().get(this.name)
            if(store){
                this.model = store
            }
        }
    }

    onNgChange(event){
        let name    = event.target.name
        let value   = event.target.value
        this.model[name] = value
        this.onChange(event)
        if(this.storage != false ){
            this.queryString.set(this.name,this.model)
            this.store().set(this.name,this.model)
        }
    }
    onNgSubmit(event){
        event.preventDefault()
        this.onSubmit(event)
    }
    onNgClear(){
        if(this.clean){
            this.model = {}
        }
        if(this.storage != false ){
            this.store().delete(this.name)
        }
    }
    collapseCard(){
        if(this.arrow_collapse=='fa-arrow-down'){
            this.arrow_collapse = 'fa-arrow-up'
        }else{
            this.arrow_collapse = 'fa-arrow-down'
        }
    }
    store(){
        return  this.storage=='local'? this.Storage.local() : this.Storage.session()
    }
}
