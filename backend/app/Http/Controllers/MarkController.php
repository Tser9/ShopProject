<?php

namespace App\Http\Controllers;

use App\Models\Mark;
use Illuminate\Http\Request;

class MarkController extends Controller
{

    public function index()
    {
        return Mark::all();
    }

    public function show(Mark $marks)
    {
        return $marks;
    }

    public function store(Request $request)
    {
        $marks = Mark::create($request->all());

        return response()->json($marks, 201);
    }

    public function update(Request $request, Mark $marks)
    {
        $marks->update($request->all());

        return response()->json($marks, 200);
    }

    public function delete(Mark $marks)
    {
        $marks->delete();

        return response()->json(null, 204);
    }


}
