import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * Animations
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './modules/personal-account/dashboard/dashboard.component';
import { MessagesComponent } from './helpers/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './public-pages/error/error.component';
import { LoginComponent } from './public-pages/login/login.component';
import { SingupComponent } from './public-pages/singup/singup.component';
import { HomeComponent } from './public-pages/home/home.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { PublicHeaderComponent } from './layout/public-header/public-header.component';
import { AboutComponent } from './public-pages/about/about.component';

/**
 * Forms Module
 */

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'; 

/**
 * Auth && Guard Service 
 */
import {AuthService} from './services/personal-account/auth.service';
import {AuthGuardService} from './services/personal-account/auth-guard.service';

/**
 * Helpers
 */
import { Data } from './helpers/functions/date.helper';
import { General } from './helpers/functions/general.helper'
import { Storage } from './helpers/functions/storage.helper'
import { QueryString } from './helpers/functions/querystring.helper'

import { AccountsComponent }        from './modules/personal-account/accounts/accounts.component';
import { PaginationComponent }      from './helpers/pagination/pagination.component';
import { TableComponent }           from './helpers/table/table.component';
import { LoadingBtnComponent }      from './helpers/loading-btn/loading-btn.component';
import { ActivitiesComponent }      from './modules/personal-account/activities/activities.component';
import { ViewAccountComponent }     from './modules/personal-account/accounts/view-account/view-account.component';
import { AlertComponent }           from './helpers/alert/alert.component';
import { TransactionsComponent }    from './modules/personal-account/accounts/transactions/transactions.component';
import { ViewTransactionComponent } from './modules/personal-account/accounts/transactions/view-transaction/view-transaction.component';
import { ProfileComponent } from './modules/personal-account/profile/profile.component';
import { SearchComponent } from './helpers/search/search.component';
import { FiltersComponent } from './helpers/filters/filters.component';
import { DataComponent } from './modules/personal-account/profile/data/data.component';
import { AvatarComponent } from './modules/personal-account/profile/avatar/avatar.component';
import { PasswordComponent } from './modules/personal-account/profile/password/password.component';
import { ActivationNotificationComponent } from './public-pages/activation-notification/activation-notification.component';
import { ActivateComponent } from './public-pages/activate/activate.component';
import { ResetPasswordComponent } from './public-pages/reset-password/reset-password.component';
import { LoadingComponent } from './helpers/loading/loading.component';


@NgModule({
    declarations: [
        AppComponent,
        AppLayoutComponent,
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        DashboardComponent,
        MessagesComponent,
        ErrorComponent,
        LoginComponent,
        SingupComponent,
        HomeComponent,
        PublicLayoutComponent,
        PublicHeaderComponent,
        AboutComponent,
        AccountsComponent,
        PaginationComponent,
        TableComponent,
        LoadingBtnComponent,
        ActivitiesComponent,
        ViewAccountComponent,
        AlertComponent,
        TransactionsComponent,
        ViewTransactionComponent,
        ProfileComponent,
        SearchComponent,
        FiltersComponent,
        DataComponent,
        AvatarComponent,
        PasswordComponent,
        ActivationNotificationComponent,
        ActivateComponent,
        ResetPasswordComponent,
        LoadingComponent
            
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    providers:[
        AuthService,
        AuthGuardService,
        Data,
        General,
        Storage,
        QueryString
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
