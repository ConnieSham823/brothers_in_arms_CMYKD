<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; 

use App\Models\Victoria;


class VictoriaController extends Controller {
    public function getAll() {
        $receipts = Victoria::with('images')->get();
        return response()->json($receipts);
    }

     public function getOne($id) {
        $receipt = Victoria::with('images')->findOrFail($id);
        return response()->json($receipt);
     }
}


