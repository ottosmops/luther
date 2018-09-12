<?php

namespace App\Http\Controllers;

use App\Http\Controllers;
use App\Book;

use DB, Response;

class ApiController extends Controller
{
    public function show($book, $chapter, $verse)
    {
        $book = strtolower($book);
        $result = DB::table('verses')
            ->leftJoin('books', 'verses.book_id', '=', 'books.id')
                ->whereRaw('(books.barth_abb = "'.$book.'" OR books.title = "' . $book .'")')
                ->where('chapter', $chapter)
                ->whereIn('verse', self::parseVerses($verse))
                ->select('verses.id', 'books.title as book', 'verses.chapter', 'verses.verse', 'verses.text')
                ->get();

        return response::json([
            'data' => $result->toArray(),
            ], 200);

    }

    /**
     * parseVerses
     * @param  array  $verses [description]
     * @return array          [description]
     */
    private static function parseVerses($verses = []) {

        if (is_integer($verses)) {
            $verses[] = $verses;
        }

        if (strpos($verses, 'ff')) {
            $verses = rtrim($verses, 'f. ');
            $to = $verses+3;
            $verses = $verses .'-'. $to;
        }

        if (strpos($verses, 'f')) {
            $verses = trim($verses, 'f. ');
            $to = $verses+1;
            $verses = $verses .'-'. $to;
        }

        if (strpos($verses, '-')) {
            list($start, $end) = explode('-', $verses);
            $verses = range($start, $end);
        }
        if (!is_array($verses)) {
            $verses = explode(',', $verses);
        }

        return $verses;
    }

}
