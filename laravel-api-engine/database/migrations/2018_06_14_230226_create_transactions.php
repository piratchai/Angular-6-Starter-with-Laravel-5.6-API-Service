<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransactions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(Schema::hasTable('transactions')){
            echo "\nTable <transactions> doesn't be affected by exist, Because exists.\n";
            return;
        }
        
        Schema::create('transactions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('account_id')->nullable($value=false);
            $table->string('ammount','255')->nullable($value=false)->default($value=0);
            $table->string('title','255')->nullable($value=true);
            $table->integer('state')->default($value=0);;
            $table->timestamps();
        });        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
}
