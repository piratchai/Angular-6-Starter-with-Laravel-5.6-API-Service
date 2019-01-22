import { Component, OnInit } from '@angular/core';

import {AuthService} from '../../../../services/personal-account/auth.service'

@Component({
  selector: 'app-profile-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
    file    = null
    preview = null
    constructor(public auth:AuthService) { }

    ngOnInit() {
        this.upload         = this.upload.bind(this)
        this.onFileSelected = this.onFileSelected.bind(this)

    }
    onFileSelected(event){
        event.preventDefault();
        let file    = event.target.files[0]
        this.file   = file
        let this_   = this
        let reader = new FileReader();
        reader.onloadend = () => {
            this_.preview                   = reader.result
            this_.auth.profile.avatar_url   = reader.result
        }
        reader.readAsDataURL(file)
    }
    upload(event){
        const ds = new FormData()
        ds.append('avatar',this.file)
        this.auth.uploadFile(ds)
    }
    classInput(name){
        return " form-control"
    }
}
