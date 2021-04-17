<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Language;
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
            'is_own' => 'required|in:true,false',
            'is_to_learn' => 'required|in:true,false',
            'cover_image' => 'nullable|image'
        ]);
        if ($validate->fails()){
            return response()->json($validate->errors(), 422);
        }
        $is_own = filter_var($request->is_own, FILTER_VALIDATE_BOOLEAN);
        $is_to_learn = filter_var($request->is_to_learn, FILTER_VALIDATE_BOOLEAN);
        if ($is_own == false && $is_to_learn == false)
            return response()->json([
                'message'=>'Language role was not selected.'
            ], 400);
        $row = Language::find($id);
        if ($row){
            try {
                if ($request->cover_image !== null){
                    $extension = $request->cover_image->extension();
                    $img_name = time().'.'.$extension;
                    $img_src = $request->file('cover_image')->storeAs('/uploads/language', $img_name, 'public');
                    $row->cover_image = '/storage/'.$img_src;
                    $row->save();
                }

                $roles = [];
                $course = new CourseController();
                if ($is_own) array_push($roles, 1);
                if ($is_to_learn) array_push($roles, 2);
                $res = $row->language_roles()->sync($roles);
                if (count($res['detached']) > 0) $course->destroy($id, $res['detached']);
                if (count($res['attached']) > 0) $course->store($id, $res['attached']);

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
            $course = new CourseController();
            $detached = [1,2];
            $course->destroy($id, $detached);
            return response()->json([
                'dataList'=>Language::with('language_roles')->get()
            ], 200);
        } else {
            return response()->json([
                'message'=>'The provided index is invalid'
            ], 400);
        }
    }

    /**
     * Assign course
     */
}
