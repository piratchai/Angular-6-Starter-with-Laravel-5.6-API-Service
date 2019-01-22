<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Models\Api\Account;
use App\Http\Models\Api\Activity;
use App\Http\Models\Api\Transaction;
use App\User;

class AccountController extends Controller
{


    /**
     * Create a new controller instance.
     * 
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * View user accounts
     *
     * @param integer $user_id
     * @return void
     */
    public function index($user_id=null,Request $request = null){
        
        if( is_null($user_id) ){
            return $this->sendErrors( [] , ['We except <user_id:> ']); 
        }
        $accounts = User::find($user_id)->accounts()->paginate(10);

        return $this->sendResponse($accounts , ['Accounts extacted successfully']);   
    }

    /**
     * View a single article 
     *
     * @param integer $user_id
     * @param integer $account_id
     * @return void
     */
    public function view($user_id=null,$account_id=null){
       
        if( is_null($user_id) || is_null($account_id) ){
            return $this->sendErrors( [] , ['We except <user_id:> and <account_id>']); 
        }
        $account        = User::find($user_id)->accounts()->find($account_id);
        $transactions   = Account::find($account_id)->transactions()->get();
        $activities     = Activity::where('owner_id',$account_id)
                                            ->where('user_id',$user_id)
                                                ->where('type','account')
                                                    ->get();
        $account->transactions  = $transactions;
        $account->activities    = $activities;

        return $this->sendResponse( [ 'data'=> $account ] , ['Account extacted successfully']);          
    }

    /**
     * Create a new account
     *
     * @param integer $user_id
     * @param Request $request
     * @return void
     */
    public function create($user_id,Request $request){
        
        if( is_null($user_id) ){
            return $this->sendError( [] , ['We except <user_id> and <account_id>']); 
        }
        
        $validator = Account::validator( $request->all() );

        if( $validator->fails() ){
            return $this->sendError( $validator->errors() , ['Somethings goes wrong, Please try again.']); 
        }

        $create = Account::store($user_id,$request);

        if(!$create){
            return $this->sendError( [] , ['Somethings goes wrong, Please try again.']); 
        }

        Activity::create([
            'user_id'   =>  $user_id,
            'owner_id'  =>  $create->id,
            'type'      =>  $this->lookup()->typeActivity->account,
            'title'     =>  "A new Account was saved " . date('Y-m-d')." .",
            'state'     =>  2,
            'created_at'=>  date('Y-m-d H:i:s')
        ]);

        return $this->sendResponse( [
            "results"=>[
                'data'=>$create
            ]
        ] , ['Account created successfully']);  
    }
    
    /**
     * Delete Account Method
     * 
     * @param integer $user_id 
     * @param integer $account_id
     * @return void
     */
    public function delete( $user_id = null, $account_id = null ){

        if( is_null( $user_id ) || is_null( $account_id ) ){
            return $this->sendError([],['We except  <user_id> and <account_id>']);
        }
        
        $deleteAccount = User::find($user_id)->accounts()->find($account_id)->delete();
        if( !$deleteAccount ){
            return $this->sendError( [], [ 'Somethings goes wrong, Please try again.'] );
        }

        Activity::create([
            'user_id'   =>  $user_id,
            'owner_id'  =>  $account_id,
            'type'      =>  $this->lookup()->typeActivity->account,
            'title'     =>  "Account was deleted  " . date('Y-m-d')." .",
            'state'     =>  2,
            'created_at'=>  date('Y-m-d H:i:s')
        ]);  
        
        return $this->sendResponse( [
            "results"=>[
                'data'=>$account_id
            ]
        ] , ['Account deleted successfully']);  
    }

}
