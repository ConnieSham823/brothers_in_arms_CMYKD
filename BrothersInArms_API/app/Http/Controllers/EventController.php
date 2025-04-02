<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; 

use App\Models\Event;


class EventController extends Controller {
    public function getAll() {
        $events = Event::with('images')->get();
        return response()->json($events);
    }

     public function getOne($id) {
        $event = Event::with('images')->findOrFail($id);
        return response()->json($event);
     }
}


