
import{Injectable} from '@angular/core'
import {Router,ActivatedRoute} from '@angular/router'

@Injectable()

export class General {
    
    constructor(private router:Router,private route:ActivatedRoute){

    }
    redirectActivityToAccount(id,type){
        if(type=="account"){
            this.router.navigate(['dashboard/accounts/'+id])
        }else if(type=="transaction"){
            this.router.navigate(['dashboard/transaction/'+id])
        }else if(type=="register"){
            this.router.navigate(['dashboard/user/profile'])
        }
    }
}