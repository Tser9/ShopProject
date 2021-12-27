<?php

namespace App\Http\Controllers;

use App\Models\UserPeople;
use Illuminate\Http\Request;

class UserPeopleController extends Controller
{

    public function index()
    {
        return UserPeople::all();
    }

    public function show(UserPeople $id_user)
    {
        return $id_user;
    }

    public function store(Request $request)
    {
        $user_people = UserPeople::create($request->all());

        return response()->json($user_people, 201);
    }

    public function update(Request $request, UserPeople $user_people)
    {
        $user_people->update($request->all());

        return response()->json($user_people, 200);
    }

    public function delete(UserPeople $user_people)
    {
        $user_people->delete();

        return response()->json(null, 204);
    }
}
