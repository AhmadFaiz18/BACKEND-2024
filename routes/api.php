<?php
use App\Http\Controllers\PegawaiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/pegawais', [PegawaiController::class, 'index']);
Route::post('/pegawais', [PegawaiController::class, 'store']);
Route::get('/pegawais/{id}', [PegawaiController::class, 'show']);
Route::put('/pegawais/{id}', [PegawaiController::class, 'update']);
Route::delete('/pegawais/{id}', [PegawaiController::class, 'destroy']);
Route::get('/pegawais/{id}', [PegawaiController::class, 'search']);
Route::get('/pegawais/{id}', [PegawaiController::class, 'active']);
Route::get('/pegawais/{id}', [PegawaiController::class, 'inactive']);   
Route::get('/pegawais/{id}', [PegawaiController::class, 'terminated']);
