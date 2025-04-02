<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $table = 'image';
    protected $primaryKey = 'image_id';
    protected $fillable = ['image_link', 'blog_id', 'image_type', 'image_name', 'image_alt','image_link','event_id', 'soldier_letter_id', 'testimonial_id', 'sponsorship_id'];
    protected $hidden = ['event_id', 'blog_id', 'soldier_letter_id', 'testimonial_id', 'sponsorship_id'];
    public function blog()
    {
        return $this->belongsTo(Blog::class, 'blog_id', 'blog_id');
    }
    public function event()
    {
        return $this->belongsTo(Event::class, 'event_id', 'event_id');
    }
    public function warLetter()
    {
        return $this->belongsTo(Event::class, 'war_letter_id', 'letter_id');
    }

    public function sponsorship()
    {
        return $this->belongsTo(Event::class, 'sponsorship_id', 'sponsorship_id');
    }
}