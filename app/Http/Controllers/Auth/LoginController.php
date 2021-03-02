<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your frontend screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    /**
     * get token from user email and password
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\View\View
     */
    public function login(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if ($validate->fails()){
            return response()->json($validate->errors(), 422);
        }
        $credential = $request->only('email', 'password');
        if (!Auth::attempt($credential)) {
            return response()->json(['message' => 'The provided credentials are incorrect'], 401);
        }
        $user = User::select('id', 'name', 'email', 'created_at')
            ->where('email', "$request->email")
            ->first();
        $user['role'] = Auth::user()->getRoleNames()->first();
        return response()->json([
            'accessToken' => $user->createToken($request->email, ['tortu'])->plainTextToken,
            'userData' => $user,
        ]);
    }

    public function logout(Request $request){
        $user = Auth::user();
        $id = $user->id;
        $user->tokens()->where('id', $id)->delete();
        return response()->json(200);
    }
}
