import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginValidate {

    form = new FormGroup({
        username: new FormControl(),
        password: new FormControl(),
    })
    inValidClass=""
    messages = {
        username:{
            message:[],
            error:0
        },
        password:{
            message:[],
            error:0
        }
    }

    constructor(public formBuilder : FormBuilder ) {

        this.form = this.formBuilder.group({
            username: ['', Validators.required ],
            password: ['', Validators.required ]
        })
    }
    classError(name){
        if(this.isRequired(name)){
            return this.inValidClass
        }
    }
    hasError(name){
        if( ( this.form.controls[name].invalid && this.form.dirty )  ) {
            return true;
        }
    }
    isRequired(name){
        if(this.hasError(name)){
            if(!this.form.controls[name].errors){
                this.inValidClass=''
                this.messages[name] = {
                    message:[],
                    error:0
                }
                return false
            }
            if(this.form.controls[name].errors.required){
                this.inValidClass='is-invalid'
                this.messages[name] = {
                    message:["Field is required"],
                    error:0
                }
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
