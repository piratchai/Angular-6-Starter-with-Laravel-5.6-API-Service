<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
        if(Schema::hasTable('users')){
            echo "\nTable Users doesn't be affected by exist, Because exists.\n";
            return;
        }

        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name','100')->nullable($value=false);
            $table->string('subname','100')->nullable($value=false);
            $table->string('email','100')->unique()->nullable($value=false);
            $table->string('password')->unique()->nullable($value=false);
            $table->string('token')->nullable($value=true);
            $table->string('role_id')->nullable($value=true);
            $table->string('avatar_url')->nullable($value=true);
            $table->boolean('active')->nullable($value=false)->default($value=true);
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
