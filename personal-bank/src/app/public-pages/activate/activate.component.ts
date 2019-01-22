import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'

import {AuthService} from '../../services/personal-account/auth.service'

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss']
})
export class ActivateComponent implements OnInit {

    constructor(
        private auth    :AuthService,
        private route   :ActivatedRoute,
        private router  :Router
    ) { }

    ngOnInit() {
        let token = this.route.snapshot.paramMap.get('token')
        
        if(!token){
            this.router.navigate(['home'])
        }
        this.auth.active({
            token:token
        }).subscribe((response)=>{
            if(response.status=='success'){
                this.router.navigate(['login'])
            }else if(response.status=='fail'){
                this.router.navigate(['home'])
            }
        })
    }

}
