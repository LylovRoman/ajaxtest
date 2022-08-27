<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\CreateController;
use App\Http\Controllers\User\IndexController;
use App\Http\Controllers\User\ShowController;
use App\Http\Controllers\User\UpdateController;
use App\Http\Controllers\User\DeleteController;
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
    return $request->user();
});

Route::group(['prefix' => 'users'], function (){
    Route::post('/', CreateController::class);
    Route::get('/', IndexController::class);
    Route::get('/{user}', ShowController::class);
    Route::patch('/{user}', UpdateController::class);
    Route::delete('/{user}', DeleteController::class);
});


