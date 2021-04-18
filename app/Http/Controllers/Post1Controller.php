<?php

namespace App\Http\Controllers;

use App\Post;
use http\Exception;
use Illuminate\Http\Request;

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
     * Display a Post data
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request)
    {
        $row = Post::where('id', $request->id)->with('category:id,name')->first();
        if ($row){
            return response()->json([
                'dataList' => $row
            ], 200);
        }
        return response()->json([
            'message' => "provided index is invalid."
        ], 400);
    }


}
