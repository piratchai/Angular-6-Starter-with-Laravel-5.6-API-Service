import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/personal-account/auth.service'

import { UserProfile } from '../../../interfaces/personal-account/auth'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    isDeleted = false
    constructor(
        public auth     :   AuthService,
        public router   :   Router
    ) { }

    ngOnInit() {
        this.onChange       = this.onChange.bind(this)
        this.update         = this.update.bind(this)
        this.onFileSelected = this.onFileSelected.bind(this)
        this.deleteAccount  = this.deleteAccount.bind(this)

        if(this.auth.isLoggedIn){
            this.auth.viewProfile().subscribe(()=>{});
        }
    }
    onChange(event){
        let name    = event.target.name
        let value   = event.target.value
        this.auth.profile[name] = value
    }
    onFileSelected(event){
        this.auth.profile.avatar = event.target.files[0]
    }
    update(){
        const fd = new FormData()
        fd.append('avatar',this.auth.profile.avatar)
        this.auth.updateProfile(this.auth.profile).subscribe((response)=>{
        })
    }

    deleteAccount(){
        let this_ = this
        this_.auth.deleteProfile().subscribe((response)=>{
            if(response.results.deleted){
                this.isDeleted = true
                setTimeout(function(){
                    this_.auth.logout()
                    this_.router.navigate(['singup'])
                },800)
            }
        })
    }
}
