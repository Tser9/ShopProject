<?php

namespace App\Http\Controllers;

use App\Models\Iclass;
use Illuminate\Http\Request;
use App\Models\Camp;
class CampsController extends Controller
{
    public function index()
    {
        return Camp::all();
    }
    public function store(Request $request)
    {
        $camps = Camp::create($request->all());

        return response()->json($camps, 201);
    }

}
