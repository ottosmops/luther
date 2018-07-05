<?php

use Illuminate\Http\Request;
use App\Book;
use App\Http\Resources\BookCollection;
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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('/{book}/{chapter}/{verse}', '\App\Http\Controllers\ApiController@show');

Route::get('/books', function () {
    return new BookCollection(Book::paginate());
});

Route::resource('/', '\App\Http\Controllers\ApiController', ['only' => ['index', 'show']]);

