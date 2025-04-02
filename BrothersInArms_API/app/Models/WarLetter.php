<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WarLetter extends Model
{
    protected $table = 'war_letters';
    protected $primaryKey = 'letter_id';
   
    public function images()
    {
        return $this->hasMany(Image::class, 'receipt_id', 'receipt_id');
    }
}
