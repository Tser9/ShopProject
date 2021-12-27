<?php

namespace App\Http\Controllers;

use App\Models\Iclass;
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
    {
        $class_class = Iclass::create($request->all());

        return response()->json($class_class, 201);
    }

    public function update(Request $request, Iclass $class_class)
    {
        $class_class->update($request->all());

        return response()->json($class_class, 200);
    }

    public function delete(Iclass $class_class)
    {
        $class_class->delete();

        return response()->json(null, 204);
    }
}
