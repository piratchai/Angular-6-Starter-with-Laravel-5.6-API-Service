import { Component, OnInit,Input } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger('listState', [
        state('active', style({opacity: 1, transform: 'translateX(0)'})),
        transition('void => *', [
          style({
            opacity: 0,
            transform: 'translateX(-100%)'
          }),
          animate('0.2s ease-in')
        ]),
        transition('* => void', [
          animate('0.2s 0.1s ease-out', style({
            opacity: 0,
            transform: 'translateX(100%)'
          }))
        ])
      ])
  ]
})
export class SearchComponent implements OnInit {

    @Input('data')      data        : object = <any>[
        {
            id:10,
            title:"Bla Bla",
            type:'account'
        },
        {
            id:10,
            title:"Ble Ble",
            type:'account'
        }
    ]

    @Input('kind')      kind        : string = 'suggestion'
    @Input('onSearch')  onSearch    : Function = ()=>{}
    @Input('onGoToItem')onGoToItem  : Function = ()=>{}
    state : string = 'inactive'
    value : string = ''
    constructor() { }

    ngOnInit() {
        this.onSearch   = this.onSearch.bind(this)
        this.onNgSearch = this.onNgSearch.bind(this)
        this.onNgGoToItem = this.onNgGoToItem.bind(this)
    }

    onNgSearch(event){
        if(event.target.value !=""){
            this.state ='active'
        }else{
            this.state = 'inactive'
        }
        this.value = event.target.value
        let these = this
        setTimeout(function(){
            these.onSearch(event)
        },500)
    }

    onNgGoToItem(component){
        this.state = 'inactive'
        this.onGoToItem(component)
    }
}
