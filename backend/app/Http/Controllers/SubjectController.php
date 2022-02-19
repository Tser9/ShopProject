<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use Illuminate\Http\Request;

class SubjectController extends Controller
{
    public function index()
    {
        return Subject::all();
    }

    public function show(Subject $subject)
    {
        return $subject;
    }

    public function store(Request $request)
    {$isteacher=$request->input('isteacher');
        $subject_name=$request->input('subject_name');
        if( $isteacher == 3){
            $id_user_class = \DB::table('subject')->where('Subject_name','=',$subject_name)->get();

            if (!count($id_user_class)){
                $subject = Subject::create(['subject_name'=> $subject_name]);

                return response()->json($subject, 201);}}
    }

    public function update(Request $request, Subject $subject)
    {$isteacher=$request->input('isteacher');
        $subject_name=$request->input('subject_name');
        if( $isteacher == 3){
            $id_user_class = \DB::table('subject')->where('Subject_name','=',$subject_name)->get();

            if (!count($id_user_class)){
                $subject ->update(['subject_name'=> $subject_name]);
                return response()->json($subject, 200);}}




    }

    public function delete(Request $request, Subject $subject)
    {$isteacher=$request->input('isteacher');

        if( $isteacher == 3){$subject->delete();
            return response()->json(null, 204);}
    }


}
