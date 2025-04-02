<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $table = 'event';
    protected $primaryKey = 'event_id';
    protected $fillable = ['event_title', 'event_date', 'event_detail'];
    protected $casts = ['event_date' => 'datetime'];

    public function images()
    {
        return $this->hasMany(Image::class, 'event_id', 'event_id');
    }

    public function getEventDateAttribute($value) {
        return \Carbon\Carbon::parse($value)->format('Y-m-d');
    }
}
