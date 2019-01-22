<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Http\Models\Api\Account;
use Illuminate\Support\Facades\DB;


class SearchController extends Controller
{
    public function search($user_id,Request $request){

        if(is_null($user_id)){
            return $this->sendError([],["We except user id"]);
        }
        $data=[];
        foreach($this->accounts($user_id,$request->q) as $account ){
            $data[] = [
                'title' =>$account->type .' '.substr($account->iban,-8),
                'type'  =>'account',
                'id'    =>$account->id
            ];
        }
        foreach( $this->transactions($user_id,$request->q) as $tr ){
            $data[] = [
                'title' =>substr($tr->title,0,15).'...',
                'type'  =>'transaction',
                'id'    =>$tr->id
            ];
        }
        $results = [
            'data'=>$data
        ];

        return $this->sendResponse($results,[""]);
    }

    private function accounts($user_id,$q){
       return DB::table('accounts')
                ->where('accounts.type','like','%'.strtolower($q).'%')
                    ->where('accounts.user_id',$user_id)
                        ->orderBy('accounts.created_at','desc')
                            ->limit(5)
                                ->get();
    }

    private function transactions($user_id,$q){
        return DB::table('accounts')
                    ->leftJoin('transactions', 'accounts.id', '=', 'transactions.account_id')
                        ->where('transactions.title','like','%'.strtolower($q).'%')
                            ->where('accounts.user_id',$user_id)
                                ->limit(5)
                                    ->get();
    }

}
