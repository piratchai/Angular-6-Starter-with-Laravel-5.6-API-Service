<?php

namespace App\Http\Models\Api;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    /**
     * Rellationship with account table
     *
     * @return void
     */
    public function account(){
        return $this->belongsTo('App\Http\Models\Api\Account');
    }
    
    public $fillable = ['account_id','title','ammount'];
}
