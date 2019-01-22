import { Component, OnInit, Input, Injectable } from '@angular/core';
import {Router} from '@angular/router'
/**
 * Interface
 */
import{ Header,Data } from '../../interfaces/helpers/table'
import {Pagination} from '../../interfaces/helpers/pagination'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

@Injectable()

export class TableComponent implements OnInit {
    /**
     * Inputs
     */
    @Input('multiple')      multiple        : boolean = false
    @Input('header')        header          :  Header
    @Input('loading')       loading         :  boolean
    @Input('data')          data            :  any
    @Input('classTable')    classTable      =  "table"
    @Input('classHead')     classHead       =  "thead-dark"
    @Input('scopeTh')       scopeTh         =  "col"
    @Input('scopeTr')       scopeTr         =  "row"
    @Input('onClickTr')     onClickTr       :  Function
    @Input('classSelected') classSelected   = "selected" 
    @Input('paginate')      paginate        : Pagination = null
    @Input('onClickNext')   onClickNext     : Function
    @Input('onClickPreview')onClickPreview  : Function
    @Input('onClickPage')   onClickPage     : Function
    @Input('powerPaginate') powerPaginate   : boolean = true
    @Input('redirectDbClick') redirectDbClick   : string = null
    
    @Input('buttonActions') buttonActions   : any = ""
    @Input('convert')       convert         : Function
    @Input('convertTdClass') convertTdClass : Function

    dataSingle           = <any>{}
    dataMultiple         : Array<Object> =[]

    constructor(public router : Router){ }

    ngOnInit() {
        console.log("Ok ngOn Inti")
        this.onDoubleClick = this.onDoubleClick.bind(this)
        this.buttonDisabled = this.buttonDisabled.bind(this)
    }
    ngOnChanges() {
        console.log("ngOnChanges")
        if(this.loading){
            this.dataSingle     =   <any>{}
            this.dataMultiple   =   []
        }
    }
    ngAfterContentInit() {
        console.log(" ngAfterContentInit() ")
    }

    onDoubleClick(event,id){
        if(this.redirectDbClick !=null){
            this.router.navigate([this.redirectDbClick+'/'+id])
        }
    }

    handleClickHead( data ){}

    handleClickTh(){}

    handleClickTr(event,row){
    
        if(this.multiple){
            let newArray = []
            let ids =[]
            this.dataMultiple.map((m:any)=>{
                ids.push(m.id)
            })
            if(ids.includes(row.id)){
                this.dataMultiple.map((m:any)=>{
                    if(m.id !=row.id){
                        newArray.push(row)
                    }
                })
            }else{
                newArray.push(row)
                this.dataMultiple.map((m:any)=>{
                    newArray.push(m)
                })
            }
            this.dataMultiple = newArray
        }

        if(this.dataSingle.id == row.id){
            this.dataSingle = {}
        }else{
            this.dataSingle = row
        }   
        this.onClickTr(event,row)
    }

    handleClickTd(){

    }

    addClassSelected(id){
        if(this.multiple){
            let ids =[]
            this.dataMultiple.map((row:any)=>{
                ids.push(row.id)
            })
            
            if(this.dataMultiple && ids.includes(id) ){
                return this.classSelected 
            }
        }else{
            if(this.dataSingle && this.dataSingle.id == id){
                return this.classSelected
            }
        }

        return ""
    }

    buttonDisabled(type){
        let array_to_disabled = ['edit','view','delete']
        if(array_to_disabled.includes(type)){
            if(this.multiple){
                if(this.dataMultiple && this.dataMultiple.length>0){
                    return false
                }
                return true    
            }else{
                if(this.dataSingle && this.dataSingle.id){
                    return false
                }
                return true
            }
        }
        return false
    }
}
