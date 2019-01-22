<?php

use Illuminate\Database\Seeder;

class Activity extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('activities')->insert([
            'user_id'  => 13,
            'owner_id' => 1,
            'type'     =>'account',
            'title'    => ' A new account inserted ',
            'state'    => 1
        ]);

        DB::table('activities')->insert([
            'user_id'  => 13,
            'owner_id' => 1,
            'type'     =>'transaction',
            'title'    => 'A new transaction inserted ',
            'state'    => 1
        ]);
    }
}
