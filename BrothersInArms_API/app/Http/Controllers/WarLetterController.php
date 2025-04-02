<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; 

use App\Models\WarLetter;


class WarLetterController extends Controller {
    public function getAll() {
        $letters = WarLetter::with('images')->get();
        return response()->json($letters);
    }
}


