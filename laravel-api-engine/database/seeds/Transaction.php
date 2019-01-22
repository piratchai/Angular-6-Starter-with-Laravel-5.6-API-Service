<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Transaction extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $account = DB::table('accounts')->orderBy('id','desc')->first();

        DB::table('transactions')->insert([
            'account_id'    => $account->id,
            'ammount'       => 190.12,
            'title'         => 'Transfert to another account',
            'state'         => 0
        ]);

        DB::table('transactions')->insert([
            'account_id'    => $account->id,
            'ammount'       => 190.12,
            'title'         => 'T-Shirt from btn store. ',
            'state'         => 1
        ]);  

        DB::table('transactions')->insert([
            'account_id'    => $account->id,
            'ammount'       => 190.12,
            'title'         => 'Transfert to paypal',
            'state'         => 2
        ]);

        DB::table('transactions')->insert([
            'account_id'    => $account->id,
            'ammount'       => 190.12,
            'title'         => 'Pull from atm machine',
            'state'         => 3
        ]);         
    }
}
