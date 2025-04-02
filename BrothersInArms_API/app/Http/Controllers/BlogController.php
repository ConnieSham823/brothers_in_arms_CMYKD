<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; 

use App\Models\Blog;


class BlogController extends Controller {
    public function getAll() {
        $blogs = Blog::with('images')->where('blog_status', 1)->get()->map(function ($blog) {
            $blog->blog_date = \Carbon\Carbon::parse($blog->blog_date)->format('Y-m-d');
            return $blog;
        });
        return response()->json($blogs);
    }

     public function getOne($id) {
        $blog = Blog::with('images')->findOrFail($id);
        $blog->blog_date = \Carbon\Carbon::parse($blog->blog_date)->format('Y-m-d');
        return response()->json($blog);
     }
}


