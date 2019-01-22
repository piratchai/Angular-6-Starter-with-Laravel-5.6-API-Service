import { NgModule } from '@angular/core';
import { RouterModule,Routes }  from '@angular/router';

/**
 * Layout Components
 */
import { PublicLayoutComponent }    from './layout/public-layout/public-layout.component';
import { AppLayoutComponent}        from './layout/app-layout/app-layout.component';

/**
 * Public Components
 */
import { LoginComponent }   from './public-pages/login/login.component';
import { SingupComponent }  from './public-pages/singup/singup.component';
import { HomeComponent }    from './public-pages/home/home.component';
import { AboutComponent }   from './public-pages/about/about.component';
import { ErrorComponent }   from './public-pages/error/error.component';

/**
 * Dashboard Components
 */
 import { DashboardComponent } from './modules/personal-account/dashboard/dashboard.component';

 /**
 * Accounts Component
 */
import {AccountsComponent} from './modules/personal-account/accounts/accounts.component'
import {ViewAccountComponent} from './modules/personal-account/accounts/view-account/view-account.component'
import {TransactionsComponent} from './modules/personal-account/accounts/transactions/transactions.component'
import {ViewTransactionComponent} from './modules/personal-account/accounts/transactions/view-transaction/view-transaction.component'

/**
 * Activities Component
 */
 import {ActivitiesComponent} from './modules/personal-account/activities/activities.component'

 /**
  * Profile User
  */
 import { ProfileComponent } from './modules/personal-account/profile/profile.component'

 /**
  * Auth Service Guard
  */
import { AuthGuardService } from './services/personal-account/auth-guard.service';
import { AuthService } from './services/personal-account/auth.service';
import { ActivateComponent } from './public-pages/activate/activate.component';
import { ActivationNotificationComponent } from './public-pages/activation-notification/activation-notification.component';

const routes : Routes = [
    {
        path:'',
        component:PublicLayoutComponent,
        children:[
            { path:'',component:HomeComponent},
            { path:'home',component:HomeComponent},
            { path:'about',component:AboutComponent},
            { path:'active/:token',component:ActivateComponent},
            { path:'thankyou',component:ActivationNotificationComponent},
        ]
    },
    {
        path:'dashboard',
        component:AppLayoutComponent,
        canActivate:[AuthGuardService],
        children:[
            { path:'',redirectTo: '/dashboard/home',pathMatch: 'full'},
            { path:'home',component:DashboardComponent},
            { path:'accounts',component:AccountsComponent},
            { path:'accounts/:id',component:ViewAccountComponent},
            { path:'accounts/:id/transactions',component:TransactionsComponent},
            { path:'accounts/:id/transactions/:id_transaction',component:ViewTransactionComponent},
            { path:'activities',component:ActivitiesComponent},
            { path:'user/profile',component:ProfileComponent}
        ],
       
    },
    { path:'login', component:LoginComponent },
    { path:'singup',component:SingupComponent },
    { 
        path:'**',
        component:PublicLayoutComponent,
        children:[
            {path:'**',component:ErrorComponent}
        ]
    }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes,{ useHash: false, enableTracing: true } ) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {  }
