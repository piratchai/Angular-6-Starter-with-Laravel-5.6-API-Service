<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CreateAccountsClass extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('accounts')->insert([
            'user_id'   => 1,
            'type'      => "lek",
            'iban'      => 'AL47212110090000000235698741',
            'balance'   => 30
        ]);        
    }
}
