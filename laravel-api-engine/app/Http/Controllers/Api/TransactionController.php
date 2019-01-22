<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Http\Models\Api\Transaction;
use App\Http\Models\Api\Activity;

class TransactionController extends Controller
{
    /**
     * All User transactions under the one account 
     *
     * @param [type] $user_id
     * @param [type] $account_id
     * @return void
     */
    public function index($user_id = null , $account_id = null ){
        if( is_null( $user_id ) || is_null( $account_id ) ){
            return $this->sendError([],['WE except <user_id> and <account_id>']);
        }

        $transactions = User::find($user_id)->accounts()->find($account_id)->transactions()->paginate(10);
        return $this->sendResponse($transactions,['Transactions extracted successfully']);
    }
    /**
     * View a singel transactions
     *
     * @param integer $user_id
     * @param integer $account_id
     * @param integer $transaction_id
     * @return void
     */
    public function view($user_id = null,$account_id = null, $transaction_id = null){

        if( is_null( $user_id ) || is_null( $account_id ) || is_null( $transaction_id ) ){
            return $this->sendError([],['WE except <user_id> and <account_id> and <transaction_id>']);
        }

        $transactions  =User::find($user_id)
                            ->accounts()
                                ->find($account_id)
                                    ->transactions
                                        ->find( $transaction_id );
    
        return $this->sendResponse([
            'data'=>$transactions
        ],['Transaction extracted successfully']);
    }

    public function createFakeTransaction($user_id = null,$account_id = null, Request $request){
        
        if( is_null( $user_id ) || is_null( $account_id ) ){
            return $this->sendError([],['WE except <user_id> and <account_id> ']);
        }
        if( empty( $request['title'] ) )    $request['title']   = "Default Title";
        if( empty( $request['ammount'] ) )  $request['ammount'] = "0";
        
        $saveFakeData = Transaction::create([
            'account_id' => $request['account_id'],
            'title'      => $request['title'],
            'ammount'    => $request['ammount']
        ]);

        if(!$saveFakeData){
            return $this->sendError([],['Request Falied']);
        }

        Activity::create([
            'user_id'   =>  $user_id,
            'owner_id'  =>  $account_id?$account_id:$request['account_id'],
            'type'      =>  $this->lookup()->typeActivity->transaction,
            'title'     =>  "Transaction with import ".$request['ammount']." was generated " . date('Y-m-d')." .",
            'state'     =>  2,
            'created_at'=>  date('Y-m-d H:i:s')
        ]);  

        return $this->sendResponse([
            'results'=>[
                'data'=>$saveFakeData
            ]
        ],['Transaction created successfully']);
    }
    /**
     * Delete an transactions under the account
     *
     * @param integer $user_id
     * @param integer $account_id
     * @param integer $transaction_id
     * @return void
     */
    public function delete($user_id = null,$account_id = null, $transaction_id = null)
    {
        
        if( is_null( $user_id ) || is_null( $account_id ) || is_null( $transaction_id ) ){
            return $this->sendError([],['WE except <user_id> and <account_id> and <transaction_id>']);
        }

        $deleted=   User::find($user_id)
                        ->accounts()
                            ->find($account_id)
                                ->transactions
                                    ->find( $transactions_id )
                                        ->delete();
        if( !$deleted ){
            return $this->sendError([],['Something goes wrong,Please try again']);
        }

        return $this->sendResponse([
            'results'=>[
                'deleted'=>$deleted
            ]
        ],['Transaction deleted successfully']);
    }
}
