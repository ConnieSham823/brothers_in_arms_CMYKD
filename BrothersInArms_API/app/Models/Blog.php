<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $table = 'blog';
    protected $primaryKey = 'blog_id';
    protected $fillable = ['blog_title', 'blog_tag', 'blog_date', 'blog_link','blog_content', 'blog_status'];
    protected $casts = ['blog_date' => 'string', 'blog_status' => 'boolean'];

    public function images()
    {
        return $this->hasMany(Image::class, 'blog_id', 'blog_id');
    }
}
