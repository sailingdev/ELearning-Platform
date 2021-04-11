<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\LessonPart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LessonPartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $validate = Validator::make($request->all(), [
            'title'=>'required',
            'sub_title'=>'required',
            'audio'=>'required|file',
            'id' => 'required|numeric'
        ]);
        $extension = $request['audio']->extension();
        if($validate->fails()){
            return response()->json($validate->errors(), 422);
        } elseif ($extension !== 'mp3' && $extension !== 'wav'){
            return response()->json('Audio must be mp3, wav file.', 422);
        }

        $name = time().'.'.$extension;
        $src = $request->file('audio')->storeAs('/uploads/course', $name, 'public');
        $part = new LessonPart;
        $part->title = $request['title'];
        $part->sub_title = $request['sub_title'];
        $part->lesson_id = $request['id'];
        $part->src = '/storage/'.$src;
        $part->save();
        $part->type = 'lesson_part';
        return response()->json([
            'lesson_part'=>$part,
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\LessonPart  $lessonPart
     * @return \Illuminate\Http\Response
     */
    public function show(LessonPart $lessonPart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\LessonPart  $lessonPart
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, LessonPart $lessonPart)
    {
        $validate = Validator::make($request->all(), [
            'title'=>'required',
            'sub_title'=>'required',
            'audio'=>'required|file',
        ]);
        $extension = $request['audio']->extension();
        if($validate->fails()){
            return response()->json($validate->errors(), 422);
        } elseif ($extension !== 'mp3' && $extension !== 'wav'){
            return response()->json('Audio must be mp3, wav file.', 422);
        }
        $name = time().'.'.$extension;
        $src = $request->file('audio')->storeAs('/uploads/course', $name, 'public');
        $lessonPart->title = $request['title'];
        $lessonPart->sub_title = $request['sub_title'];
        $lessonPart->lesson_id = $request['id'];
        $lessonPart->src = '/storage/'.$src;
        $lessonPart->save();
        $lessonPart->type = 'lesson_part';
        return response()->json([
            'lesson_part'=>$lessonPart,
        ], 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\LessonPart  $lessonPart
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(LessonPart $lessonPart)
    {
        $lessonPart->delete();
        return response()->json([
            'message'=>'success'
        ], 200);
    }
}
