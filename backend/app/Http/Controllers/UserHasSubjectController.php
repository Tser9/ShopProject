<?php

namespace App\Http\Controllers;

use App\Models\UserHasSubject;
use Illuminate\Http\Request;

class UserHasSubjectController extends Controller
{

    public function index()
    {
        return UserHasSubject::all();
    }

    public function show(UserHasSubject $user_has_subject)
    {
        return ($user_has_subject);
    }

    public function store(Request $request)
    {
        $user_has_subject = UserHasSubject::create($request->all());

        return response()->json($user_has_subject, 201);
    }

    public function update(Request $request, UserHasSubject $user_has_subject)
    {
        $user_has_subject->update($request->all());

        return response()->json($user_has_subject, 200);
    }

    public function delete(UserHasSubject $user_has_subject)
    {
        $user_has_subject->delete();

        return response()->json(null, 204);
    }
}