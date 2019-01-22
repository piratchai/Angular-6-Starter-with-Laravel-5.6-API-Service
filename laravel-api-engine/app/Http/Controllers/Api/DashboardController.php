<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{

    public function account($user_id){
        if( is_null( $user_id ) ){
            return $this->sendError([],['WE except <user_id> ']);
        }
        $last_activity_account = User::find( $user_id )
                                    ->accounts()
                                            ->orderBy('updated_at','desc')
                                                ->first();  

        return $this->sendResponse([
            'data'=>$last_activity_account
        ],['Last Activiti On Account extracted successfully']);        
    }
    public function transactions($user_id){

        if( is_null( $user_id ) ){
            return $this->sendError([],['WE except <user_id> ']);
        }

        $last_ten_transactions = DB::table('users')
                    ->join('accounts', 'users.id', '=', 'accounts.user_id')
                        ->join('transactions', 'accounts.id', '=', 'transactions.account_id')
                            ->where('users.id',$user_id)
                                ->select('transactions.*')
                                    ->orderBy('transactions.id','desc')
                                        ->take(10)    
                                            ->get();

        return $this->sendResponse([
            'data'=>$last_ten_transactions
        ],['Last Ten Transactions  extracted successfully']); 
    }
    public function activities($user_id){
        if( is_null( $user_id ) ){
            return $this->sendError([],['WE except <user_id> ']);
        }

        $last_ten_transactions = User::find($user_id)
                                    ->activities()
                                        ->orderBy('id', 'desc')
                                            ->take(10)
                                                ->get();

        return $this->sendResponse([
            'data'=>$last_ten_transactions
        ],['Last Ten Transactions  extracted successfully']); 
    }
}
