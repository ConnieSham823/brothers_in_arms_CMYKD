<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sponsorship extends Model
{
    protected $table = 'sponsorship';
    protected $primaryKey = 'sponsorship_id';
   
    public function images()
    {
        return $this->hasMany(Image::class, 'sponsorship_id', 'sponsorship_id');
    }
}
