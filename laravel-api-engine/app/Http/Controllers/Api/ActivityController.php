<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\User;

class ActivityController extends Controller
{
    
    /**
     * All User activities
     *
     * @param integer $user_id
     * @param integer $account_id
     * @return void
     */
    public function index($user_id = null ,Request $request ){
        
        if( is_null( $user_id ) ){
            return $this->sendError([],['WE except <user_id> ']);
        }

        if($request['type']){
            //
        }

        $activities = User::find( $user_id )->activities()->paginate(10);
        
        return $this->sendResponse($activities,['Activities extracted successfully']);
    }

     /**
     * A single activity 
     *
     * @param integer $user_id
     * @param integer $account_id
     * @return void
     */
    public function view($user_id = null ,$activity_id = null ){
        if( is_null( $user_id ) || is_null( $activity_id ) ){
            return $this->sendError([],['WE except <user_id> ']);
        }

        $activitie = User::find($user_id)->activities()->find($activity_id)->firts();
        
        return $this->sendResponse([
            'data'=>$activitie
        ],['Activity extracted successfully']);
    }

    /**
     * All activities by 
     *
     * @param [type] $user_id
     * @param [type] $account_id
     * @return void
     */
    public function viewByType($user_id = null ,$type = null ){
        if( is_null( $user_id ) || is_null( $type ) ){
            return $this->sendError([],['WE except <user_id> and <type> ']);
        }

        $activities = User::find($user_id)->activities()->where('type', $type );
        
        return $this->sendResponse([
            'results'=>[
                'data'=>$activities
            ]
        ],['Activites with type:$type extracted successfully']);
    }
    
}
