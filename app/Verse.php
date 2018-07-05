<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Verse extends Model
{
    protected $guarded = [];

    public function book()
    {
        return $this->belongsTo('App\Book');
    }
}
