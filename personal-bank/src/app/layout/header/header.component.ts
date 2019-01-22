import { Component, OnInit,Injectable } from '@angular/core';
import {Router} from '@angular/router'
/**
 * Services
 */
import{ AuthService } from '../../services/personal-account/auth.service'
import{ SearchService } from '../../services/personal-account/search.service'

@Injectable()

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    search = null
    constructor( 
        public router  :Router,
        public auth    :AuthService,
        public  SearchService:SearchService ) {
        this.search = SearchService
    }

    ngOnInit() {
        this.onGoToItem     = this.onGoToItem.bind(this)
        this.onSearch       = this.onSearch.bind(this)
    }
    logout(){
        this.auth.logout()
    }
    onSearch(event){
        console.log("Search",event.target.value)
        this.SearchService.list(event.target.value).subscribe(()=>{})
    }
    onGoToItem(component){
        if(!component.type){
            return
        }
        switch(component.type){
            case 'account':
                this.router.navigate(['dashboard/accounts/'+component.id])
            break;
            case 'transaction':
                this.router.navigate(['dashboard/transactions/'+component.id])
            break;
            default:
                return
        }
    }
}
