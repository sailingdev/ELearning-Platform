<?php

namespace App\Http\Controllers;

use App\Post;
use http\Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            $post = Post::select(['id', 'cover_image', 'title', 'category_id', 'created_at', 'updated_at'])->with('category:id,name')->get();
            return response()->json([
                'dataList' => $post
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ], $e->getCode());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $row = Post::find($id);
        if ($row){
            return response()->json([
                'dataList' => Post::where('id', '=', $id)->with('category:id,name')->firstOrFail()
            ], 200);
        }
        return response()->json([
            'message' => "provided index is invalid."
        ], 400);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Post $post
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Post $post)
    {
        $validate = Validator::make($request->all(), [
            'favorites' => 'required|numeric'
        ]);
        if($validate->fails()) {
            return response()->json($validate->errors(), 422);
        }
        $post->favorites = $request->favorites;
        $post->update();

        return response()->json([
        ], 204);
    }
}
