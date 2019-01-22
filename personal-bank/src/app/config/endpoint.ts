import { environment }  from '../../environments/environment';

import { HttpHeaders,HttpRequest } from '@angular/common/http';

export const Endpoint = {
    v1:{
        /**
         * Auth
         */
        auth:()=>{
            return{
                login       : environment.apiHost + '/api/'+environment.apiVersion+'/login',
                singup      : environment.apiHost + '/api/'+environment.apiVersion+'/register',
                activate    : environment.apiHost + '/api/'+environment.apiVersion+'/activate',
                reset       : environment.apiHost + '/api/'+environment.apiVersion+'/reset'
            }
        },
        /**
         * Dashboard
         */
        dashboard   : (id_user)=>{
            return {
                account     : environment.apiHost + '/api/'+environment.apiVersion+'/users/'+id_user+'/dashboard/last/account',
                activities  : environment.apiHost + '/api/'+environment.apiVersion+'/users/'+id_user+'/dashboard/last/activities',
                transactions: environment.apiHost + '/api/'+environment.apiVersion+'/users/'+id_user+'/dashboard/last/transactions'
            }
        },
        /**
         * Accounts
         */
        accounts     : (id_user,id_account:number=null)=>{
            return{
                list        :  environment.apiHost + '/api/'+environment.apiVersion+'/users/'+id_user+'/accounts',
                create      :  environment.apiHost + '/api/'+environment.apiVersion+'/users/'+id_user+'/accounts/create',
                view        :  environment.apiHost + '/api/'+environment.apiVersion+'/users/'+id_user+'/accounts/'+id_account,
                delete      :  environment.apiHost + '/api/'+environment.apiVersion+'/users/'+id_user+'/accounts/'+id_account,
            }
        },
        /**
         * Activities
         */
        activities     : (id_user,id_account:number=null)=>{
            return{
                list            :  environment.apiHost + '/api/'+environment.apiVersion+'/users/'+id_user+'/activities',
                listByAccount   :  environment.apiHost + '/api/'+environment.apiVersion+'/users/'+id_user+'/accounts/'+id_account,
            }
        },
        /**
         * Transactions
         */
        transactions  : (id_user,id_account:number=null,id_transaction:number = null)=>{
            return{
                list            :  environment.apiHost + '/api/'+environment.apiVersion+'/users/'+id_user+'/accounts/'+id_account+'/transactions',
                view            :  environment.apiHost + '/api/'+environment.apiVersion+'/users/'+id_user+'/accounts/'+id_account+'/transactions/'+id_transaction,
                createFake      :  environment.apiHost + '/api/'+environment.apiVersion+'/users/'+id_user+'/accounts/'+id_account+'/transactions/create/fake',
            }
        },
        /**
         * User Profile
         */
        profile  : (id_user)=>{
            return{
                view    :  environment.apiHost + '/api/'+environment.apiVersion+'/users/'+id_user+'/profile/view',
                update  :  environment.apiHost + '/api/'+environment.apiVersion+'/users/'+id_user+'/profile/update/data',
                delete  :  environment.apiHost + '/api/'+environment.apiVersion+'/users/'+id_user+'/profile/delete',
                avatar  :  environment.apiHost + '/api/'+environment.apiVersion+'/users/'+id_user+'/profile/update/avatar',
                password:  environment.apiHost + '/api/'+environment.apiVersion+'/users/'+id_user+'/profile/update/password',
            }
        },
        /**
         * Search
         */
        search  : (id_user)=>{
            return{
                all     :  environment.apiHost + '/api/'+environment.apiVersion+'/users/'+id_user+'/search',   
            }
        }

    }
}

export const Api = Endpoint[environment.apiVersion]


export const HttpOptions = {
    headWithNoAuthorization:()=>{
        return {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
            })
        }
    },
    head:(token)=>{
        return {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization':'Bearer ' + token  
            })
        }
    },
  
    headUpload:(token,endpoint,data)=>{
        return  new HttpRequest('PUT', endpoint , data, {
            reportProgress: true,
            // headers:new HttpHeaders({ 
            //     'Authorization':'Bearer ' + token  
            // })
        })
    }
};