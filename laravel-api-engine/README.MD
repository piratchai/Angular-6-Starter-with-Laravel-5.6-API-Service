
# Laravel 5.6 Project Api

This api service project is part of [Project Personal Bank with Angular 6 ](https://github.com/kleviscipi/personal-bank.git)

## Installation 
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
Note: If you have problem with passport api use this instructions

```
    > composer require laravel/passport   
    > php artisan migrate
    > php artisan passport:install
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

#Api
See the file : [routes/api.php](https://github.com/kleviscipi/laravel-api-engine/tree/master/routes/api.php)

Thank you.
