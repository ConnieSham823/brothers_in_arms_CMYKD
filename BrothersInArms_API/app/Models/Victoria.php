<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Victoria extends Model
{
    protected $table = 'victoria_crosses';
    protected $primaryKey = 'receipt_id';
   
    public function images()
    {
        return $this->hasMany(Image::class, 'receipt_id', 'receipt_id');
    }
}
