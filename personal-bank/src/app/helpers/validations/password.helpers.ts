import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProfilePasswordValidate {

    form = new FormGroup({
        password                : new FormControl(),
        password_confirmation   : new FormControl(),
    })
    
    inValidClass=""
    messages = {
        password    :{
            message :["Field is required"],
            error   :0,
        },
        password_confirmation:{
            message :["Field is required"],
            error   :0,
        }
    }

    constructor(public formBuilder : FormBuilder ) {

        this.form = this.formBuilder.group({
            password                : ['', Validators.required ],
            password_confirmation   : ['', Validators.required ]
        })
    }
    classError(name){
        if(this.isRequired(name)){
            return this.inValidClass
        }
    }
    hasError(name){
        if( ( this.form.controls[name].invalid  ) ) {
            return true;
        }
    }
    isRequired(name){
        if(this.hasError(name)){
            if(!this.form.controls[name].errors){
                this.inValidClass=''
                return false
            }
            if(this.form.controls[name].errors.required){
                this.inValidClass='is-invalid'
                return true
            }
        }

    }
    setErrors(errors){

        for(let lasterror in this.messages){
            this.messages[lasterror] = {
                message:[],
                error:0
            }   
        }
        for( let error in errors ){
            this.messages[error]={
                message:errors[error],
                error:1
            }
        }
    }
}
