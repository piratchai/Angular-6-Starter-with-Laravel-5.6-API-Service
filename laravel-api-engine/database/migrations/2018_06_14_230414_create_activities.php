<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActivities extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(Schema::hasTable('activities')){
            echo "\nTable <activities> doesn't be affected by exist, Because exists.\n";
            return;
        }
        Schema::create('activities', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->nullable($value=false);
            $table->integer('owner_id')->nullable($value=false);
            $table->string('type','100')->nullable($value=false);
            $table->string('title','255')->nullable($value=true);
            $table->integer('state')->nullable($value=false)->default($value=0);
            $table->timestamp('created_at');	
        });        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activities');
    }
}
