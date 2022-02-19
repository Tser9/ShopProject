<?php

namespace App\Http\Controllers;

use App\Models\Iclass;
use App\Models\Subject;
use Illuminate\Http\Request;

class IclassController extends Controller
{
    public function index()
    {
        return Iclass::all();
    }

    public function show(Iclass $class_class)
    {
        return $class_class;
    }

    public function store(Request $request)
    {$isteacher=$request->input('isteacher');
        $class_name=$request->input('class_name');
        if( $isteacher == 3){
            $id_user_class = \DB::table('class_class')->where('class_name','=',$class_name)->get();

            if (!count($id_user_class)){
                $class_class = Iclass::create(['class_name'=> $class_name]);

                return response()->json($class_class, 201);}}


    }

    public function update(Request $request, Iclass $class_class)
    {$isteacher=$request->input('isteacher');
        $class_name=$request->input('class_name');
        if( $isteacher == 3){
            $id_user_class = \DB::table('class_class')->where('class_name','=',$class_name)->get();

            if (!count($id_user_class)){
                $class_class->update(['class_name'=> $class_name]);

                return response()->json($class_class, 201);}}



    }

    public function delete(Request  $request, Iclass $class_class)
    {$isteacher=$request->input('isteacher');
        if($isteacher==3){
            $class_class->delete();

            return response()->json(null, 204);}

    }
}
