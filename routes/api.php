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

//Route::middleware('auth:api')->get('/admin', function (Request $request) {
//    return $request->user();
//});

Route::post('/login', 'Auth\LoginController@Login');
Route::middleware('auth:sanctum')->group(function(){
    Route::post('/logout', 'Auth\LoginController@Logout');
});
Route::group(['middleware' => ['auth:sanctum', 'role:admin']],function(){
    Route::put('/post/{$id}', 'Admin\PostController@update');
    Route::resource('post', 'Admin\PostController');
});
