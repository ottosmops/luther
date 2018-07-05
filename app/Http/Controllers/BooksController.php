<?php

namespace App\Http\Controllers;

use DB, Response;
use App\Book;

class BooksController extends Controller
{

    public function index()
    {
        $result = Book::select(['id', 'title as book', 'barth_abb as alt_abb', 'alternative_title as titles' ])->get();

        return response::json([
            'data' => $result->toArray(),
            ], 200);
    }
}
