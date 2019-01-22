import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


/**
 * Services
 */
import { AuthService } from '../../services/personal-account/auth.service';

/**
 * Helpers
 */
import { LoginValidate } from '../../helpers/validations/loginvalidate.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loading :boolean = false;
    btntext = "Sing in";
    credentials = {
        username:"",
        password:""
    }

    constructor(
        private auth:AuthService,
        public  route:Router,
        public validate:LoginValidate,
    ) {
        if(auth.isLoggedIn){
            this.route.navigate(['dashboard'])
        }
    }

    ngOnInit() {

    }

    login(){

        this.loading = true
        this.btntext = "Singin...";
        this.auth.login(this.credentials).subscribe((response)=>{
            this.loading = false
            this.btntext = "Sing in"
            this.validate.setErrors(response.errors)
            if( response.results.token && response.status=='success' ){
                this.btntext = "Singin Success"
                this.route.navigate(['dashboard'])
            }
        })   
    }

    logout(){
        this.auth.logout();
    }
    
    onChange(event){
        this.credentials[event.target.name] = event.target.value;
    }
}
