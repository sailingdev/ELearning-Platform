<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Language;
use App\LanguageRole;
use http\Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LanguageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            $languages = Language::with('language_roles')->get();
            return response()->json([
                'dataList' => $languages
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ], $e->getCode());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $validate = Validator::make($request->all(), [
            'is_own' => 'required|boolean',
            'is_to_learn' => 'required|boolean',
        ]);
        if ($validate->fails()){
            return response()->json($validate->errors(), 422);
        }
        if ($request->is_own == false && $request->is_to_learn == false)
            return response()->json([
                'message'=>'Language role was not selected.'
            ], 400);
        $row = Language::find($id);
        if ($row){
            try {
                $roles = [];
                if ($request['is_own']) array_push($roles, 1);
                if ($request['is_to_learn']) array_push($roles, 2);
                $row->language_roles()->sync($roles);
                $languages = Language::with('language_roles')->get();
                return response()->json([
                    'dataList'=>$languages
                ], 201);
            } catch (Exception $e){
                return response()->json([
                    'message'=>$e->getMessage()
                ], $e->getCode());
            }
        } else {
            return response()->json([
                'message'=>'The provided index is invalid'
            ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $row = Language::find($id);
        if ($row){
            $row->language_roles()->detach();
            return response()->json([
                'dataList'=>Language::with('language_roles')->get()
            ], 200);
        } else {
            return response()->json([
                'message'=>'The provided index is invalid'
            ], 400);
        }
    }
}
