<?php

namespace App\Http\Models\Api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\Model;
use App\User;

class Account extends Model
{
    /**
     * Code of albanian state
     * Example :  AL47 2121 1009 0000 0002 3569 8741
     * @var string
     */
    private static $locale = "AL";

    /**
     * A fake bank code
     *
     * @var string
     */
    private static $banc_code = "472121";

    /**
     * Default values of columns database
     *
     * @var array
     */
    protected $attributes = [
        'balance'=>0,
        'type'=>'LEK',
        'iban'=>'AL'
    ];
 
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['user_id','type','balance','iban'];

    /**
     * Relationship with user (belongsTo)
     *
     * @return void
     */
    public function user(){
        return $this->belongsTo('App\User');
    }

    /**
     * Relationship with user (belongsTo)
     *
     * @return void
     */
    public function transactions(){
        return $this->hasMany('App\Http\Models\Api\Transaction');
    }  

    public static function store($user_id,$data){

        return Account::create([
                'user_id'   => $user_id,
                'type'      => $data['type'],
                'iban'      => Account::generateIban(),
                'balance'   =>0
            ]);
    }
    /**
     * Generate Iban for the account
     *
     * @param integer $length
     * @return void
     */
    public static function generateIban( $length=20 ) {
        return Account::$locale.Account::$banc_code.substr( hexdec(uniqid()).hexdec(uniqid()),0,$length );
    }
    
    /**
     * Get a validator for an incoming registration|another request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected static function validator(array $data,$type = 'create')
    {
        switch($type){
            case 'create':
            default:
            return Validator::make($data, [
                'user_id'   => 'required'
            ]);
        }

    }

}
