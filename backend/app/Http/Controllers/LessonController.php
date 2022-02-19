<?php

namespace App\Http\Controllers;

use App\Models\Lesson;
use App\Models\UserHasSubject;
use Illuminate\Http\Request;

class LessonController extends Controller
{
    public function index(Request $request )
    {
        $id_class=$request->input('id_class');
        $id_subject=$request->input('id_subject');

        if(!$id_class && !$id_subject){
            return Lesson::all(); }
        if(!$id_class && $id_subject)
        {$id_user_class_class = \DB::table('lesson')->where('subject_id_subject','=',$id_subject)->get();
            return $id_user_class_class;}
        if($id_class && !$id_subject)
        {$id_user_class_class = \DB::table('lesson')->where('class_id_class','=',$id_class)->get();
            return $id_user_class_class;}
        if($id_class && $id_subject)
        {$id_user_class_class = \DB::table('lesson')->where([['class_id_class','=',$id_class],['subject_id_subject','=',$id_subject]])->get();
            return $id_user_class_class;}

    }

    public function show(Lesson $lesson)
    {
        return $lesson;
    }

    public function store(Request $request)
    {$isteacher=$request->input('isteacher');
        $date=$request->input('date');
        $class_id_class=$request->input('Class_id_class');
        $subject_id_subject=$request->input('Subject_id_subject');


        if($isteacher==3){
            $lesson = Lesson::create(['date'=> $date,'Class_id_class'=> $class_id_class,'Subject_id_subject'=> $subject_id_subject]);

            return response()->json($lesson, 201);}
    }

    public function update(Request $request, Lesson $lesson)
    {$isteacher=$request->input('isteacher');
        $date=$request->input('date');
        $class_id_class=$request->input('Class_id_class');
        $subject_id_subject=$request->input('Subject_id_subject');


        if($isteacher==3){
            $lesson->update(['date'=> $date,'Class_id_class'=> $class_id_class,'Subject_id_subject'=> $subject_id_subject]);

            return response()->json($lesson, 200);}
    }

    public function delete(Request $request, Lesson $lesson)
    {$isteacher=$request->input('isteacher');
        if($isteacher==3){
            $lesson->delete();

            return response()->json(null, 204);}
    }


}
