<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Book;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testVerifyBooks()
    {
        $books = ['Gen', 'Ex', 'Lev', 'Num', 'Dtn', 'Jos', 'Ri', '1.Sam', '2.Sam', '1.Kön', '2.Kön', '1.Chr', '2.Chr', 'Esra, Neh', 'Esth', 'Hiob', 'Ps', 'Spr', 'Pred', 'Hld', 'Jes', 'Jer', 'Klagel', 'Hes', 'Dan', 'Hos', 'Joel', 'Am', 'Ob', 'Jona', 'Mi', 'Nah', 'Hab', 'Zeph', 'Hag', 'Sach', 'Mal', 'Jdt', 'Weish', 'Tob', 'Sir', 'Bar', '1.Makk', '2.Makk', 'Est', 'Dan', 'Geb Man', 'Mt', 'Mk', 'Lk', 'Joh', 'Act', 'Röm', '1.Kor', '2.Kor', 'Gal', 'Eph', 'Phil', 'Kol', '1.Thess', '2.Thess', '1.Tim', '2.Tim', 'Tit', 'Phlm', '1.Petr', '2.Petr', '1.Joh', '2.Joh', '3.Joh', 'Hebr', 'Jak', 'Jud', 'Apk'];

        foreach($books as $book) {
            $match = Book::where('barth_abb', $book)->first();
            if (!isset($match)) {
                echo 'did not find '.$book.PHP_EOL;
            } else {
                $this->assertEquals($match->barth_abb, $book);    
            }
            
        }
    }
}
