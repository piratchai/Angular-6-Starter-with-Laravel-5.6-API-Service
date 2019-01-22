<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public $nameAppToken = 'NGpersonal';

    public $lk_activity_type = [
        'account'       =>'account',
        'register'      =>'register',
        'transaction'   =>'transaction',
        'default'       =>'default'
    ];

    /**
     * 
     * Response code for api   
     *
     * @return object
     * @example
     * $this->code()->ok
     * 
     * {
     *       "status": "ok",
     *       "code": 200,
     *       "messages": [],
     *       "result": {
     *           "user": {
     *               "id": 123,
     *               "name": "shazow"
     *           }
     *       }
     *   }
     */
    public function code(){

        return (object) [
            'ok'            =>200,
            'created'       =>201,
            'accepted'      =>202,
            'nocontent'     =>204,
            'badrequest'    =>400,
            'unauthorized'  =>401,
            
        ];
    }
    /**
     * SOme lookups used for tables
     *
     * @return object
     */
    public function lookup(){

        return (object) [
            'typeActivity'=>(object) $this->lk_activity_type
        ];
    }

    public function  sendResponse( $results, $messages, $code = null ){

        if( is_null($code) ){
            $code = $this->code()->ok;
        }

        return response()->json(
            [
                'status'        => "success",
                'code'          => $code,
                'results'       => $results,
                'messages'      => $messages
            ],
            $code
        ); 
    }

    public function  sendError( $errors, $messages, $code = null ){

        if( is_null($code) ){
            $code = $this->code()->badrequest;
        }

        return response()->json(
            [
                'status'        => "fail",
                'code'          => $code,
                'results'       => [],
                'messages'      => $messages,
                'errors'        => $errors
            ],
            $code
        ); 
    }

    public function uploadFile($files = null,$path=null){
        if(is_null($files) || is_null($path)){
            return false;
        }
    }
}
