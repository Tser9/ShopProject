<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductsController extends Controller
{

    public function index()
    {
        return Product::all();
    }

    public function show(Product $subject)
    {
        return $subject;
    }

    public function store(Request $request)
    {
        $subject = Product::create($request->all());

        return response()->json($subject, 201);
    }

    public function update(Request $request, Product $subject)
    {
        $subject->update($request->all());

        return response()->json($subject, 200);
    }

    public function delete(Product $subject)
    {
        $subject->delete();

        return response()->json(null, 204);
    }

}
