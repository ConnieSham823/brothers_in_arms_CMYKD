<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; 

use App\Models\Sponsorship;


class SponsorController extends Controller {
    public function getAll() {
        $sponsors = Sponsorship::with('images')->get();
        return response()->json($sponsors);
    }
}


