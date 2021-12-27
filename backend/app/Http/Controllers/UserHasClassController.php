<?php

namespace App\Http\Controllers;

use App\Models\UserHasClass;
use Illuminate\Http\Request;

class UserHasClassController extends Controller
{

    public function index()
    {
        return UserHasClass::all();
    }

    public function show(UserHasClass $user_class_class)
    {
        return $user_class_class;
    }

    public function store(Request $request)
    {
        $user_class_class = UserHasClass::create($request->all());

        return response()->json($user_class_class, 201);
    }

    public function update(Request $request, UserHasClass $user_class_class)
    {
        $user_class_class->update($request->all());

        return response()->json($user_class_class, 200);
    }

    public function delete(UserHasClass $user_class_class)
    {
        $user_class_class->delete();

        return response()->json(null, 204);
    }

}