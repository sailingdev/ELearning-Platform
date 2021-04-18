<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
Route::resource('blog', 'PostController');
Route::post('/login', 'Auth\LoginController@Login');
Route::middleware('auth:sanctum')->group(function(){
    Route::post('/logout', 'Auth\LoginController@Logout');
});
Route::group(['middleware' => ['auth:sanctum', 'role:admin']],function(){
    Route::resource('course', 'Admin\CourseController');
    Route::resource('post', 'Admin\PostController');
//    Route::put('/post/{$id}', 'Admin\PostController@update');
    Route::resource('language', 'Admin\LanguageController');
//    Route::put('/language1/{$id}', 'Admin\LanguageController@update');
    Route::resource('lesson', 'Admin\LessonController');
//    Route::put('/lesson/{$id}', 'Admin\LessonController@update');
    Route::resource('/lesson-part', 'Admin\LessonPartController');
//    Route::put('/lesson-part/{$id}', 'Admin\LessonPartController@update');
});
