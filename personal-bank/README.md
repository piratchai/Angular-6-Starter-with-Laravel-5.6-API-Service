# Angular 6 and Laravel 5.6 
This project is a starter for creating interface with ` Angular ` using  `bootstrap  && css && sass` and using `Laravel 5.6` for api requests.


## Technologies
----------------
* [Angular](https://angular.io/)
* [Laravel](http://laravel.com)
* [Bootstrap](https://getbootstrap.com/)
* [Sass](https://sass-lang.com/)
* [Npm](https://www.npmjs.com/)

### Structure Folders

[![Structure Design Folders](https://trello-attachments.s3.amazonaws.com/5b222c0fc1111c2c8a3c69a5/5b22662a1b0b25a322809525/458ed4a740941e76b025bb80d4f52cc7/Screenshot_from_2018-07-29_18-16-52.png)](https://trello-attachments.s3.amazonaws.com/5b222c0fc1111c2c8a3c69a5/5b22662a1b0b25a322809525/458ed4a740941e76b025bb80d4f52cc7/Screenshot_from_2018-07-29_18-16-52.png)

### Check-out this link [Trello Board](https://trello.com/b/p9m8lTvO/peronal-bank-with-angular-e-laravel)


## Installation

This project is divided in two parts (projects) and before use them you should follow the instructions below:</p>

### Angular Project Interface
#### Local Environment

```
    git clone https://github.com/kleviscipi/personal-bank.git
    cd personal-bank <br />
    npm install 
    ng serve 
```

#### Production Environment
    For production mode you must build the project with command `ng build ---prod` and upload the folder `dist/personal-bank` where you want.
    If you want to upload and host on firebase use this instructions:
    
```
    > ng build ---prod
    > npm install -g firebase-tools 
    > firebase init    # Generate a firebase.json (REQUIRED)
    > firebase deploy   # Start development server
```
#### Environment config

Local 

```js
    let protocol = window.location.protocol

    export const environment = {
    production    : false,
    host          : protocol+'//localhost',
    apiHost       : 'http://xxxxxxxx.xxx,
    apiVersion    :'v1'           
    }
```
Prod 

```js
    let protocol = window.location.protocol

    export const environment = {
    production    : true,
    host          : protocol+'//personal-bank.firebaseapp.com',
    apiHost       :'https://api-personal-bank-laravel.herokuapp.com',
    apiVersion    :'v1'  
    }
```

### Config Api Calls
See the file: [app/config](https://github.com/kleviscipi/personal-bank/tree/master/src/app/config/)

## Further help angular cli
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Note : If you are unfamiliar with firebase please go to the [documentation](https://firebase.google.com/docs/web/setup)

### Laravel Project Api
#### Local Environment 

``` 
    > git clone https://github.com/kleviscipi/laravel-api-engine.git
    > cd laravel-api-engine 
    > composer install
```
Now you must configure the environment file *.env* se the example file on project *.env.example* and don't forget to configure the variables for email.
```
    > php artisan migrate   # This will migrate and save all tables of database. see: *database/migrations*
    > php artisan serve     # This start , Laravel development server at: *http://127.0.0.1:800*

```
Note: If you have problem with passport api use this instructions <br>

```
    > php artisan passport:install <br />
    > php artisan passport:keys <br />
```
#### Production Environment 
After you have upload files on your production env you must create and configure the environment file *.env*
If you want to upload the Laravel Project Api on [https://www.heroku.com/](https://www.heroku.com/) you should before install the heroku cli go to this link : [Heroku Cli Dev Center](https://devcenter.heroku.com/articles/heroku-cli)
After you have installed that : 

```
    > heroku login 
    > git init 
    > heroku git:remote -a you-app-name # This command connect your api created on your Heroku dashboard. 
    > git add .
    > git commit -am "make it better"
    > git push heroku master  # Push all files on your app
    > heroku config:set APP_KEY=…  # This command set  variables of your environment on heroku app and so on.... Like .env
```
                    
Note: On Production mode don't forget to configure the variables for your email server.
**MAIL_DRIVER**,**MAIL_HOST**,**MAIL_PORT**,**MAIL_USERNAME**,**MAIL_PASSWORD**,**MAIL_ENCRYPTION**
After registration you receive an active link email which active the account.

## Architecture and Requrements of project

Se [https://trello.com/b/p9m8lTvO/peronal-bank-with-angular-e-laravel](https://trello.com/b/p9m8lTvO/peronal-bank-with-angular-e-laravel)

## For You:

You can modify those project how you want and you are welcome for any suggestion or questions.

> Note:
> Do not block yourself for any reason,just code something new and do it well


Thank you.
