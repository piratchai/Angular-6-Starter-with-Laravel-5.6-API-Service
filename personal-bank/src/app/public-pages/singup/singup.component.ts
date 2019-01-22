import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
/**
 * Services
 */

import{ AuthService } from '../../services/personal-account/auth.service';

/**
 * Validate
 */

 import {SingupValidate} from '../../helpers/validations/singupvalidate.helpers'

 /**
 * Interfaces 
 */
import { Auth } from '../../interfaces/personal-account/auth';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
    
    loading :boolean    = false;
    btntext :string     = "SingUp";

    data = {
        name        : "",
        subname     : "",
        email       : "",
        username    : "",
        password    : "",
        password_confirmation:"",
    }
    constructor( 
        private auth: AuthService ,
        public  validate: SingupValidate,
        private route: Router
    ) { }

    ngOnInit() {
        this.singUp = this.singUp.bind(this)
    }

    singUp(event){

        this.loading = true
        this.btntext = "SingUp...";
        this.auth.singUp(this.data).subscribe((response:Auth)=>{
            this.loading = false
            this.btntext = "SingUp"
            if(  response.status =="success"){
                this.btntext = "SingUp Success"
                this.route.navigate(['thankyou'])
            }else if(response.status=='fail'){
                this.validate.setErrors(response.errors)
            }
        })   
    }

    onChange(event){
        this.data[event.target.name] = event.target.value;
    }
}
