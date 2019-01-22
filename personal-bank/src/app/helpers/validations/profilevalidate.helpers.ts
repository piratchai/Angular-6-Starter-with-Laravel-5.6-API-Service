import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProfileValidate {

    form = new FormGroup({
        name            : new FormControl(),
        lastname        : new FormControl(),
        email           : new FormControl(),
        subname         : new FormControl(),
        username        : new FormControl()
    })
    inValidClass=""
    messages = {
        name        : {
            message :["Field is required"],
            error   :0,
        },
        subname     :{
            message :["Field is required"],
            error   :0,
        },
        email       :{
            message :["Field is required"],
            error   :0,
        },
        username    : {
            message :["Field is required"],
            error   :0,
        }
    }

    constructor(public formBuilder : FormBuilder ) {

        this.form = this.formBuilder.group({
            name            : ['', Validators.required ],
            subname         : ['', Validators.required ],
            email           : ['', Validators.required ],
            username        : ['', Validators.required ]
        })
    }
    classError(name){
        if(this.isRequired(name)){
            return this.inValidClass
        }
    }
    hasError(name){
        if( ( this.form.controls[name].invalid && this.form.dirty ) ) {
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
