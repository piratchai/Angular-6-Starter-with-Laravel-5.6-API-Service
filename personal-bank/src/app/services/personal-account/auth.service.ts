import { Injectable }       from '@angular/core';
import { Observable,of }    from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap,delay } from 'rxjs/operators';

/**
 * Services
 */
import { ErrorhandlerService } from "./../errorhandler.service"

/**
 * Interfaces 
 */
import { Auth,User,Profile,UserProfile,ProfileDelete,ActiveAccount } from '../../interfaces/personal-account/auth';

/**
 * Endpoint
 */
import { Api,HttpOptions } from '../../config/endpoint';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    isLoggedIn          =   false;
    token               :   string        = ''
    redirectUrl         :   string  = "login";
    user                :   User     = null
    objStorage          :   'personal-account'
    profile             :   UserProfile
    loadProfile         :   boolean = false
    loadUpdateProfile   :   boolean = false
    loadDeleteProfile   :   boolean = false
    loadActiveAccount   :   boolean = false

    loadUpdateAvatarProfile     : boolean = false
    loadUpdatePasswordProfile   : boolean = false

    constructor(
        private http    :   HttpClient,
        private handler :   ErrorhandlerService,
    ){

        let authDataStorage    = JSON.parse(window.localStorage.getItem('auth'))

        if( authDataStorage ){
            const{ isLoggedIn,user,token } = authDataStorage
            if(token && user && isLoggedIn){
                this.token      = token
                this.isLoggedIn = true;
                this.user       = user
            }

        }
    }
    active(data):Observable<ActiveAccount>{
        this.loadActiveAccount = true
        return this.http.post<ActiveAccount[]>( Api.auth().activate , data, HttpOptions.headWithNoAuthorization()).pipe(
            tap( (auth: ActiveAccount) => {
                this.handler.ShowMessage(auth)
                this.loadActiveAccount=false
            }),
            catchError(this.handler.Error)
        );     
    }
    login( credentials ):Observable<Auth>{
        return this.http.post<Auth[]>( Api.auth().login , credentials, HttpOptions.headWithNoAuthorization()).pipe(
          tap( (auth: Auth) => {
                this.handler.ShowMessage(auth)
                if( auth.results.token && auth.status == "success"  ){
                    this.isLoggedIn = true
                    this.user       = auth.results.data
                    this.token      = auth.results.token
                    let authData = {
                        token       :   auth.results.token,
                        user        :   auth.results.data,
                        isLoggedIn  :   true
                    }

                    window.localStorage.setItem('auth',JSON.stringify(authData))
                }else{
                    window.localStorage.setItem('auth',null)
                }
          }),
          catchError(this.handler.Error)
        );
    }

    logout():void{
        this.isLoggedIn = false;
        this.token = ""
        window.localStorage.setItem('auth',null)
    }

    singUp(data){
        return this.http.post<Auth[]>( Api.auth().singup , data, HttpOptions.headWithNoAuthorization()).pipe(
            tap( (auth: Auth) => {
                this.handler.ShowMessage(auth)
            }),
            catchError(this.handler.Error)
        );        
    }

    viewProfile():Observable<Profile>{
        this.loadProfile = true
        return this.http.get<Profile[]>(Api.profile(this.user.id).view,HttpOptions.head(this.token)).pipe(
            tap( (profile: Profile) => {
                    this.loadProfile = false;
                    this.handler.ShowMessage(profile)
                    
                    if( profile.status == "success"  ){
                        this.profile   = <UserProfile>profile.results.data
                    }

            }),
            catchError(this.handler.Error)
          );
    }
    

    updateProfile(data):Observable<Profile>{
        this.loadUpdateProfile = true
        return this.http.put<Profile[]>( Api.profile(this.user.id).update , data, HttpOptions.head(this.token)).pipe(
            tap( (response: Profile) => {
                this.handler.ShowMessage(response)
                this.loadUpdateProfile = false
            }),
            catchError(this.handler.Error)
        );     
    }

    updatePassword(data):Observable<Profile>{
        this.loadUpdatePasswordProfile = true
        return this.http.put<Profile[]>( Api.profile(this.user.id).password , data, HttpOptions.head(this.token)).pipe(
            tap( (response: Profile) => {
                this.handler.ShowMessage(response)
                this.loadUpdatePasswordProfile = false
            }),
            catchError(this.handler.Error)
        );     
    }

    deleteProfile():Observable<ProfileDelete>{
        this.loadDeleteProfile = true
        return this.http.delete<ProfileDelete[]>( Api.profile(this.user.id).delete,HttpOptions.head(this.token)).pipe(
            tap( (response: ProfileDelete) => {
                this.loadDeleteProfile = false
                this.handler.ShowMessage(response)
            }),
            catchError(this.handler.Error)
        );     
    }    

    uploadFile(file){
        this.loadUpdateAvatarProfile = true
        console.log("This is the file",file)

        return this.http.put(Api.profile(this.user.id).avatar,{
            file,headers:new HttpHeaders({ 
                'Content-Type': undefined,
                'Authorization':'Bearer  ' + this.token
            })}).subscribe(
            data => {
                console.log(data); 
                this.loadUpdateAvatarProfile = false
            },
            error => {
                this.loadUpdateAvatarProfile = false
                console.log(error);
            }
        );
    }

}
