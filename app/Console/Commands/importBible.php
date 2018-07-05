<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Verse;
use App\Book;

class importBible extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:bible';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Read Luther 1912, parse it and import it into the database';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $filename = base_path('public/Martin_Luther_Uebersetzung_1912.txt') ;

        $lines = file($filename);

        $i = 0; 
        foreach ($lines as $line) {
            preg_match('/(\w{3})\s(\d+):(\d+) (.+)/', $line, $matches); 
            $array[] = $matches;
            $i++;

            $book = Book::firstOrCreate(['title' => $matches[1]]);
            $book->save();

            $verse = new Verse();
            $verse->chapter = $matches[2];
            $verse->verse = $matches[3];
            $verse->text = $matches[4];
            $verse->book()->associate($book);
            $verse->save();
        }

        print_r($array);
        

    }
}
