<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigIncrements('order_number');

            $table->unsignedBigInteger('supplier_id');
            $table->unsignedBigInteger('payer_id');
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('city_id');

            $table->string('address');


            $table->date('from_date')->nullable();
            $table->date('to_date')->nullable();
            $table->time('from_time')->nullable();
            $table->time('to_time')->nullable();

            $table->decimal('deliver_longitude')->default(0);
            $table->decimal('deliver_latitude')->default(0);


            $table->integer('quentity')->default(1);
            $table->boolean('online_payment')->default(0);
            $table->integer('status')->default(0);



            $table->decimal('total',10,2);
            $table->integer('tax');
            $table->decimal('total_after_tax',10,2);



            $table->boolean('is_updated')->default(0);
            $table->boolean('is_canceled')->default(0);
            $table->timestamp('canceled_at')->nullable();
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
        Schema::dropIfExists('orders');
    }
}
