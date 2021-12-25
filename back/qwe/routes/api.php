<?php

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('products', 'ProductsController@index');

Route::get('products/{product}', 'ProductsController@show');

Route::post('products','ProductsController@store');

Route::put('products/{product}','ProductsController@update');

Route::delete('products/{product}', 'ProductsController@delete');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('cart', 'CartController@index');

Route::get('cart/{cart}', 'CartController@show');

Route::post('cart','CartController@store');

Route::put('cart/{cart}','CartController@update');

Route::delete('cart/{cart}', 'CartController@delete');
Route::delete('cart', 'CartController@destroy');

Route::get('comments', 'CommentController@index');

Route::get('comments/{comment}', 'CommentController@show');

Route::post('comments','CommentController@store');

Route::put('comments/{comment}','CommentController@update');

Route::delete('comments/{comment}', 'CommentController@delete');
