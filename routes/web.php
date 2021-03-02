<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::redirect('/admin', '/admin/dashboard');
Route::get('/admin/{any}', 'ApplicationController')->where('any', '.*');
//Route::get('/app', 'HomeController')->name('frontend');
Route::get('/{any}', 'HomeController')->where('any', '.*');
//Route::redirect('/', 'app');
