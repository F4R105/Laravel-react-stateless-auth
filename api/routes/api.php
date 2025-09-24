<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', function (Request $request) {
    $credentials = $request->only('email', 'password');

    if (!Auth::attempt($credentials)) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    $user = Auth::user();
    $token = $user->createToken('auth-token')->plainTextToken;

    return response()->json(['token' => $token, 'message' => 'Logged in successfully']);
});

Route::post('/register', function (Request $request) {
    $data = $request->only('name', 'email', 'password');

    $user = User::create($data);
    $token = $user->createToken('auth-token')->plainTextToken;

    Auth::login($user);

    return response()->json(['token' => $token, 'message' => 'Registered successfully']);
});

Route::post('/logout', function () {

    Auth::logout();

    return response()->json(['message' => 'Logged out successfully']);
});
