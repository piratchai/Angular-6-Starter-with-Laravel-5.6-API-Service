import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../services/personal-account/auth.service'
import {ProfilePasswordValidate} from '../../../../helpers/validations/password.helpers';

@Component({
  selector: 'app-profile-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

    fieldUserPasswords = {
        password                : "",
        password_confirmation   : ""
    }
    constructor(
        public auth     :   AuthService,
        public validate :   ProfilePasswordValidate) { }

    ngOnInit() {
        this.updatePassword = this.updatePassword.bind(this)
        this.onChange       = this.onChange.bind(this)
    }
    onChange(event){
        this.fieldUserPasswords[event.target.name] = event.target.value
    }
    updatePassword(event){
        this.fieldUserPasswords['id'] = this.auth.profile.id
        this.auth.updatePassword(this.fieldUserPasswords).subscribe((response)=>{
            this.validate.setErrors(response.messages)
        })
    }
    classInput(name){
        return " form-control " + this.validate.classError(name)
    }
}
