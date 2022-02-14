<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();});

/*Testing*/
Route::get('tests', 'TestsController@index');

Route::get('tests/{qwe}', 'TestsController@show');




Route::get('subject', 'SubjectController@index');

Route::get('subject/{subject}', 'SubjectController@show');

Route::post('subject','SubjectController@store');

Route::put('subject/{subject}','SubjectController@update');

Route::delete('subject/{subject}', 'SubjectController@delete');


Route::get('class_class', 'IclassController@index');

Route::get('class_class/{class_class}', 'IclassController@show');

Route::post('class_class','IclassController@store');

Route::put('class_class/{class_class}','IclassController@update');

Route::delete('class_class/{class_class}', 'IclassController@delete');

Route::get('camps', 'CampsController@index');
Route::post('camps','CampsController@store');





Route::get('lesson', 'LessonController@index');

Route::get('lesson/{lesson}', 'LessonController@show');

Route::post('lesson','LessonController@store');

Route::put('lesson/{lesson}','LessonController@update');

Route::delete('lesson/{lesson}', 'LessonController@delete');





Route::get('marks', 'MarkController@index');

Route::get('marks/{marks}', 'MarkController@show');

Route::post('marks','MarkController@store');

Route::put('marks/{marks}','MarkController@update');

Route::delete('marks/{marks}', 'MarkController@delete');




Route::get('user_has_class', 'UserHasClassController@index');

Route::get('user_has_class/{id_user_class_class}', 'UserHasClassController@show');

Route::post('user_has_class','UserHasClassController@store');

Route::put('user_has_class/{id_user_class_class}','UserHasClassController@update');

Route::delete('user_has_class/{id_user_class_class}', 'UserHasClassController@delete');




Route::get('user_people', 'UserPeopleController@index');

Route::get('user_people/{id_user}', 'UserPeopleController@show');

Route::post('user_people','UserPeopleController@store');

Route::put('user_people/{user_people}','UserPeopleController@update');

Route::delete('user_people/{user_people}', 'UserPeopleController@delete');




Route::get('user_has_subject', 'UserHasSubjectController@index');

Route::get('user_has_subject/{id_user_has_subject}', 'UserHasSubjectController@show');

Route::post('user_has_subject','UserHasSubjectController@store');

Route::put('user_has_subject/{id_user_has_subject}','UserHasSubjectController@update');

Route::delete('user_has_subject/{id_user_has_subject}', 'UserHasSubjectController@delete');

