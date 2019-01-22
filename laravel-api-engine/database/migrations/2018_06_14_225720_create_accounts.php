<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAccounts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(Schema::hasTable('accounts')){
            echo "\nTable <accounts> doesn't be affected by exist, Because exists.\n";
            return;
        }
        Schema::create('accounts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->nullable($value=false);
            $table->string('type','20')->nullable($value=false);
            $table->string('iban','255')->nullable($value=false);
            $table->string('balance','255')->nullable($value=false);
            $table->boolean('active')->default($value=true);
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
        Schema::dropIfExists('accounts');
    }
}
