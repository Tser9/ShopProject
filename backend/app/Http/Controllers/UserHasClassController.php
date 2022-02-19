<?php

namespace App\Http\Controllers;

use App\Models\Mark;
use App\Models\UserHasClass;
use Illuminate\Http\Request;

class UserHasClassController extends Controller
{

    public function index(Request $request)
    {
        $id_user=$request->input('id_user');
        $id_class=$request->input('id_class');

        if(!$id_user && !$id_class){
            return UserHasClass::all(); }
        if(!$id_user && $id_class)
        {$id_user_class_class = \DB::table('user_has_class')->where('class_id_class','=',$id_class)->get();
            return $id_user_class_class;}
        if($id_user && !$id_class)
        {$id_user_class_class = \DB::table('user_has_class')->where('user_id_user','=',$id_user)->get();
            return $id_user_class_class;}
        if($id_user && $id_class)
        {$id_user_class_class = \DB::table('user_has_class')->where([['user_id_user','=',$id_user],['class_id_class','=',$id_class]])->get();
            return $id_user_class_class;}
    }

    public function show(UserHasClass $id_user_class_class)
    {
        return $id_user_class_class;
    }

    public function store(Request $request)
    { $user_id_user=$request->input('User_id_user');
        $class_id_class=$request->input('Class_id_class');
        $isteacher=$request->input('isteacher');

        if( $isteacher == 3){
            if ($user_id_user && $class_id_class ){
                $id_user_class_class = \DB::table('user_has_class')->where([['class_id_class','=',$class_id_class],['user_id_user','=',$user_id_user]])->get();

                if(count($id_user_class_class)== 0){
                    $user_class_class = UserHasClass::create(['User_id_user' => $user_id_user, 'Class_id_class' => $class_id_class]);
                    return response()->json($user_class_class, 201);}} }
    }

    public function update(Request $request, UserHasClass $id_user_class_class)
    {

        $user_id_user=$request->input('User_id_user');
        $class_id_class=$request->input('Class_id_class');
        $isteacher=$request->input('isteacher');

        if( $isteacher == 3){
            if ($user_id_user && $class_id_class ){
                $id_user_class = \DB::table('user_has_class')->where([['class_id_class','=',$class_id_class],['user_id_user','=',$user_id_user]])->get();

                if(count($id_user_class)== 0){
                    $id_user_class_class->update(['User_id_user' => $user_id_user, 'Class_id_class' => $class_id_class]);
                    return response()->json($id_user_class_class, 200);}} }



    }

    public function delete(Request $request, UserHasClass $id_user_class_class)
    {
        $isteacher=$request->input('isteacher');
        if( $isteacher == 3){
            $id_user_class_class->delete();

            return response()->json(null, 204);}
    }

}
