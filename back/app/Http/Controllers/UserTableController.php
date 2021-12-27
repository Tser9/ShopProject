<?php

namespace App\Http\Controllers;

use App\Models\UserTable;
use Illuminate\Http\Request;

class UserTableController extends Controller
{

    public function index()
    {
        return UserTable::all();
    }

    public function show(UserTable $user_table)
    {
        return $user_table;
    }

    public function store(Request $request)
    {
        $user_table = UserTable::create($request->all());

        return response()->json($user_table, 201);
    }

    public function update(Request $request, UserTable $user_table)
    {
        $user_table->update($request->all());

        return response()->json($user_table, 200);
    }

    public function delete(UserTable $user_table)
    {
        $user_table->delete();

        return response()->json(null, 204);
    }
}
