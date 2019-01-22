import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../../services/personal-account/auth.service';
/**
 * Validate
 */
import { ProfileValidate } from '../../../../helpers/validations/profilevalidate.helpers'


@Component({
  selector: 'app-profile-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})

export class DataComponent implements OnInit {

    fieldUserData = {
        id      :null,
        name    :null,
        subname :null,
        email   :null
    }
    makeChanges = false
    constructor( public auth : AuthService,public validate:ProfileValidate) { }

    ngOnInit() {
        this.setFieldData()
        this.onChange       = this.onChange.bind(this)
        this.updateData     = this.updateData.bind(this)
        this.rollbackFieldUserData = this.rollbackFieldUserData.bind(this)
    }
    onChange(event){
        let name            = event.target.name
        let value           = event.target.value
        this.makeChanges    = true
        this.fieldUserData[name]= value
    }
    updateData(event){
        this.auth.updateProfile(this.fieldUserData).subscribe((response)=>{
            this.validate.setErrors(response.errors)
        })
    }
    classInput(name){
        return " form-control " + this.validate.classError(name)
    }
    rollbackFieldUserData(event){
        this.setFieldData()
    }
    setFieldData(){
        const{id,name,subname,email} = this.auth.profile
        this.fieldUserData = {
            id      :   id,
            name    :   name,
            subname :   subname,
            email   :   email
        }
    }
}
