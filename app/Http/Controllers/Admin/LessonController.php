<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Lesson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LessonController extends Controller
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'name'=>'required',
            'title'=>'required',
            'sub_title'=>'required',
            'audio'=>'required|file',
            'id'=> 'required|numeric'
        ]);
        $extension = $request['audio']->extension();
        if($validate->fails()){
            return response()->json($validate->errors(), 422);
        } elseif ($extension !== 'mp3' && $extension !== 'wav' ){
            return response()->json('Audio must be mp3, wav file.', 422);
        }

        $lesson = new Lesson;
        $lesson->title = $request['name'];
        $lesson->course_id = $request['id'];
        $lesson->save();

        $payload = $request;
        $payload['id'] = $lesson->id;
        $lesson_part = new LessonPartController();
        $part = $lesson_part->store($payload);
        if ($part->exception)
            return response()->json(['error'=>'error'],500);
        else
            return response()->json(['lesson' => [
                'id'=>$lesson->id,
                'title' =>$lesson->title,
            ]], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
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
