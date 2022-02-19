<?php

namespace App\Http\Controllers;

use App\Models\UserHasClass;
use App\Models\UserHasSubject;
use Illuminate\Http\Request;

class UserHasSubjectController extends Controller
{

    public function index(Request $request)
    {

        $id_user=$request->input('id_user');
        $id_subject=$request->input('id_subject');

        if(!$id_user && !$id_subject){
            return UserHasSubject::all(); }
        if(!$id_user && $id_subject)
        {$id_user_class_class = \DB::table('user_has_subject')->where('subject_id_subject','=',$id_subject)->get();
            return $id_user_class_class;}
        if($id_user && !$id_subject)
        {$id_user_class_class = \DB::table('user_has_subject')->where('user_id_user','=',$id_user)->get();
            return $id_user_class_class;}
        if($id_user && $id_subject)
        {$id_user_class_class = \DB::table('user_has_subject')->where([['user_id_user','=',$id_user],['subject_id_subject','=',$id_subject]])->get();
            return $id_user_class_class;}

    }

    public function show(UserHasSubject $id_user_has_subject)
    {
        return ($id_user_has_subject);
    }

    public function store(Request $request)
    {
        $user_id_user=$request->input('User_id_user');
        $subject_id_subject=$request->input('Subject_id_subject');
        $isteacher=$request->input('isteacher');

        if( $isteacher == 3){
            if ($user_id_user && $subject_id_subject ){
                $id_user_class_class = \DB::table('user_has_subject')->where([['subject_id_subject','=',$subject_id_subject],['user_id_user','=',$user_id_user]])->get();

                if(count($id_user_class_class)== 0){
                    $user_class_class = UserHasSubject::create(['User_id_user' => $user_id_user, 'Subject_id_subject' => $subject_id_subject]);
                    return response()->json($user_class_class, 201);}} }

    }
    public function update(Request $request, UserHasSubject $id_user_has_subject)
    {


        $user_id_user=$request->input('User_id_user');
        $subject_id_subject=$request->input('Subject_id_subject');
        $isteacher=$request->input('isteacher');

        if( $isteacher == 3){
            if ($user_id_user && $subject_id_subject ){
                $id_user_class = \DB::table('user_has_subject')->where([['subject_id_subject','=',$subject_id_subject],['user_id_user','=',$user_id_user]])->get();

                if(count($id_user_class)== 0){
                    $id_user_has_subject->update(['User_id_user' => $user_id_user, 'Subject_id_subject' => $subject_id_subject]);
                    return response()->json($id_user_has_subject, 200);}} }



    }

    public function delete(Request $request,UserHasSubject $id_user_has_subject)
    {
        $isteacher=$request->input('isteacher');
        if( $isteacher == 3){
            $id_user_has_subject->delete();

            return response()->json(null, 204);}
    }
}
