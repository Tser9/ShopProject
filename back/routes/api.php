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


Route::get('comments', 'CommentsController@index');

Route::get('comments/{comment}', 'CommentsController@show');

Route::post('comments','CommentsController@store');

Route::put('comments/{comment}','CommentsController@update');

Route::delete('comments/{comment}', 'CommentsController@delete');



Route::get('user_has', 'UserHasController@index');

Route::get('user_has/{user_has}', 'UserHasController@show');

Route::post('user_has','UserHasController@store');

Route::put('user_has/{user_has}','UserHasController@update');

Route::delete('user_has/{user_has}', 'UserHasController@delete');



Route::get('user_table', 'UserTableController@index');

Route::get('user_table/{user_table}', 'UserTableController@show');

Route::post('user_table','UserTableController@store');

Route::put('user_table/{user_table}','UserTableController@update');

Route::delete('user_table/{user_table}', 'UserTableController@delete');


