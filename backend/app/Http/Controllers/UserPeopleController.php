<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use App\Models\UserPeople;
use Illuminate\Http\Request;

class UserPeopleController extends Controller
{


    public function index(Request $request)
    {

        $id_user=$request->input('id_user');
        $fio=$request->input('fio');
        $isteacher=$request->input('isteacher');
        $email=$request->input('email');
        $password=$request->input('password');

        if(!$isteacher && !$id_user && $email && !$fio && $password){
            $user_people = \DB::table('user_people')->select('id_user','fio','isteacher')->where([['email','=',$email],['password','=',$password]])->get();
            return $user_people;}
        if($isteacher && $id_user && !$email && !$fio && !$password){
            $user_people = \DB::table('user_people')->select('id_user' )->where('isteacher','=',$isteacher)->get();
            $i=0;
            foreach ($user_people as $user){
                $user_has_class[$i] = \DB::table('user_has_class')->select('Class_id_class')->where('user_has_class.User_id_user', '=', $user->id_user)->get();
                $i=$i+1;
            }
            return $user_has_class;}


        if(!$isteacher && !$id_user && !$email && !$fio && !$password){
            return UserPeople::all();}


    }

    public function show(UserPeople $id_user)
    {
        return $id_user;
    }

    public function store(Request $request)
    {
        $fio=$request->input('fio');
        $email=$request->input('email');
        $password=$request->input('password');
        $isteacher=$request->input('isteacher');
        $id_user_class = \DB::table('user_people')->where([['email','=',$email],['password','=',$password]])->get();

        if(!count($id_user_class)){
            $user_people = UserPeople::create(['fio'=> $fio,'email'=> $email,'password'=> $password,'isteacher'=> $isteacher]);

            return response()->json($user_people, 201);

        }





    }

    public function update(Request $request, UserPeople $user_people)
    {$fio=$request->input('fio');
        $email=$request->input('email');
        $password=$request->input('password');
        $isteacher=$request->input('isteacher');
        $id_user_class = \DB::table('user_people')->where([['email','=',$email],['fio','=',$fio],['isteacher','=',$isteacher],['password','=',$password]])->get();
        if(!count($id_user_class)){
            $user_people->update(['fio'=> $fio,'email'=> $email,'password'=> $password,'isteacher'=> $isteacher]);

            return response()->json($user_people, 200);}
    }

    public function delete(UserPeople $user_people)
    {
        $user_people->delete();

        return response()->json(null, 204);
    }
}
