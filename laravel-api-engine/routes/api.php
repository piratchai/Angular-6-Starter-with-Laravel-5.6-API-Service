<?php

use Illuminate\Http\Request;
use Illuminate\Auth\Middleware\Authenticate;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$version = 'v1';

Route::group(['prefix' => $version ],function(){

    Route::get('/user', function (Request $request) {
        return $request->user();
    })->middleware('auth:api');
    
    
    Route::post('login', 'Api\Auth\LoginController@loginApi');
    Route::post('register', 'Api\Auth\RegisterController@register');
    Route::post('activate', 'Api\Auth\RegisterController@activate');
    Route::get('reset', 'Api\Auth\ForgotPasswordController@');
    Route::put('users/{id}/profile/update/avatar','Api\Auth\ProfileController@updateAvatar');
    
    Route::get('auth', 'Api\Auth\LoginController@checkAuth');
    Route::post('users/{id}/profile/update','Api\Auth\ProfileController@save');

    Route::group(['middleware' => 'auth:api'], function(){

        /**
         * User Profile
         */
        Route::get('users/{id}/profile/view','Api\Auth\ProfileController@view');
        Route::delete('users/{id}/profile/delete','Api\Auth\ProfileController@delete');
        Route::put('users/{id}/profile/update/password','Api\Auth\ProfileController@updatePassword');
        Route::put('users/{id}/profile/update/data','Api\Auth\ProfileController@updateData');

        /**
         * Dashboard
         */
        Route::get('users/{id}/dashboard/last/account','Api\DashboardController@account');
        Route::get('users/{id}/dashboard/last/activities','Api\DashboardController@activities');
        Route::get('users/{id}/dashboard/last/transactions','Api\DashboardController@transactions');

        /**
         * User accounts
         */
        Route::get('users/{id}/accounts','Api\AccountController@index');
        Route::post('users/{id}/accounts','Api\AccountController@index');
        Route::get('users/{id}/accounts/{id_account}','Api\AccountController@view');
        Route::put('users/{id}/accounts/{id_account}','Api\AccountController@update');
        Route::post('users/{id}/accounts/create','Api\AccountController@create');
        Route::delete('users/{id}/accounts/{id_account}','Api\AccountController@delete');
        Route::get('accounts','Api\AccountController@all');

        /**
         * User Activities
         */
        Route::get('users/{id}/activities','Api\ActivityController@index');
        Route::post('users/{id}/activities','Api\ActivityController@index');
        Route::get('users/{id}/activities/{type}','Api\ActivityController@viewbytype');
        Route::get('users/{id}/activities/{id_activity}','Api\ActivityController@view');

        /**
         * User Account transactions
         */
        Route::get('users/{id}/accounts/{id_account}/transactions','Api\TransactionController@index');
        Route::post('users/{id}/accounts/{id_account}/transactions','Api\TransactionController@index');
        Route::get('users/{id}/accounts/{id_account}/transactions/{id_transaction}','Api\TransactionController@view');
        Route::put('users/{id}/accounts/{id_account}/transactions/create/fake','Api\TransactionController@createFakeTransaction');

        /**
         * Search
         */
        Route::get('users/{id}/search','Api\SearchController@search');
    });

});

