<?php

namespace App\Http\Controllers\Admin;

use App\Post;
use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $post = Post::select(['id', 'cover_image', 'title', 'category_id', 'created_at', 'updated_at'])->with('category:id,name')->get();
        return response()->json([
            'dataList' => $post
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|string|max:255',
            'category' => 'required|max:1',
            'cover_image' => 'required|image',
            'content' => 'required|string'
        ]);

        try {
            $post = new Post;
            $extension = $request->cover_image->extension();
            $img_name = time().'.'.$extension;
            $img_src = $request->file('cover_image')->storeAs('/uploads/blog', $img_name, 'public');
            $post->title = $request['title'];
            $post->cover_image = '/storage/'.$img_src;
            $post->category_id = $request['category'];
            $post->content = $request['content'];
            $post->save();
            return response()->json([
                'message' => 'successfully created.'
            ], 201);
        } catch (Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], $e->getCode());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
            $row = Post::find($id);
            if ($row){
                $post = $row->select('title', 'category_id', 'content', 'cover_image')->firstOrFail();
                return response()->json([
                    'post' => $post
                ], 200);
            }
            return response()->json([
                'message' => "provided index is invalid."
            ], 400);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'title' => 'required|string|max:255',
            'category' => 'required|max:1',
            'cover_image' => 'nullable|image',
            'content' => 'required|string',
        ]);

        $row = Post::find($id);
        if ($row){
            try {
                $row->title = $request['title'];
                $row->category_id = $request['category'];
                $row->content = $request['content'];
                if ($request->cover_image){
                    $extension = $request->cover_image->extension();
                    $oldImg_name = Str::replaceFirst('/storage', '', $row->cover_image);
                    Storage::delete($oldImg_name);
                    $img_name = time().'.'.$extension;
                    $img_src = $request->file('cover_image')->storeAs('/uploads/blog', $img_name, 'public');
                    $row->cover_image = '/storage/'.$img_src;
                }
                $row->update();
                return response()->json([
                    'message' => 'successfully updated.'
                ], 201);
            } catch (Exception $e) {
                return response()->json([
                    'message' => $e->getMessage()
                ], $e->getCode());
            }
        } else {
            return response()->json([
                'message' => 'provided index is invalid.'
            ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
