<?php

namespace App\Http\Models\Api;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['user_id','type','state','title','owner_id','created_at'];

    public $timestamps = false;
    
    public function user(){
        return $this->belongTo('App\User');
    }

}
