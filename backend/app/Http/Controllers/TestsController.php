<?php

namespace App\Http\Controllers;

use App\Models\Test;
use Illuminate\Http\Request;

class TestsController extends Controller
{
    public function index()
    {
        return Test::all();
    }

    public function show(Test $qwe)
    {
        return $qwe;
    }

}
