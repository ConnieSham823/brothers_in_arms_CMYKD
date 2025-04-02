<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; 

use App\Models\Donor;


class DonorController extends Controller {
     public function getAll() {
         $donors = Donor::all();
         return response()->json($donors);
     }

     public function getOne($id) {
         $donor = Donor::findOrFail($id);
         return response()->json($donor);
     }

     public function getDonation() {
        $donationsAmount = DB::table('donation')->sum('amount');
        
        $donationsTopSpender = DB::table('donation')
        ->join('donors', 'donation.donor_id', '=', 'donors.donor_id')
        ->select('donation.donor_id', 
        DB::raw("CONCAT(donors.first_name, ' ', donors.last_name) as full_name"), DB::raw('SUM(amount) as total_amount'), 
        DB::raw('CASE 
                    WHEN SUM(donation.amount) > 5000 THEN "Top Spender" 
                    WHEN SUM(donation.amount) > 1000 THEN "Mid Spender" 
                    WHEN SUM(donation.amount) > 500 THEN "Low Spender" 
                    ELSE "Donor" 
                END as donor_tier'))
        ->groupBy('donor_id')
        ->orderBy('total_amount', 'desc')
        ->get();
            
        return response()->json(['amount' => $donationsAmount, 'top_spender' => $donationsTopSpender]);
     }

     public function getDonationByDonor($id) {
        $donation = DB::table('donation')
        ->where('donor_id', $id)
        ->select('amount','timestamp', 'donation_id')
        ->get();

        $total = DB::table('donation')
        ->where('donor_id', $id)
        ->sum('amount');

        return response()->json(['donation' => $donation, 'total' => $total]);
     }

     /**
      * @var milestone
      */

     public function getMilestone() {
        $milestones = DB::table('donation')
            ->selectRaw('
                SUM(amount) as total_amount,
                CASE 
                    WHEN SUM(amount) > 100000 THEN "C"
                    WHEN SUM(amount) > 50000 THEN "B"
                    WHEN SUM(amount) > 10000 THEN "A"
                    ELSE "On progress"
                END as milestone,
                CASE 
                    WHEN SUM(amount) > 100000 THEN 0
                    WHEN SUM(amount) > 50000 THEN 100000 - SUM(amount)
                    WHEN SUM(amount) > 10000 THEN 50000 - SUM(amount)
                    ELSE 10000 - SUM(amount)
                END as remaining_to_next_tier,
                CASE 
                    WHEN SUM(amount) > 100000 THEN NULL
                    WHEN SUM(amount) > 50000 THEN "C"
                    WHEN SUM(amount) > 10000 THEN "B"
                    ELSE "A"
                END as next_tier
            ')
            ->get();
        return response()->json($milestones);
    }



    //  public function getOne($id) {
    //     $book = Book::join('authors', 'books.author_id', '=', 'authors.id')->select('books.id', 'title', 'book_image', 'published_date', 'name', 'bio')->where('books.id', '=', $id)->get();
    //     return response()->json($book);
    // }


    //  public function save(Request $request) {
    //     $this->validate($request, [
    //         'title' => 'required',
    //         'author_id' => 'required',
    //         'published_date' => 'required|date',
    //         'book_image' => 'required'
    //     ]);
    //     $book = Book::create($request->all());
    //     return response()->json($book, 201);
    // }


    /* public function save(Request $request) {
         $this->validate($request, [
             'title' => 'required',
             'author_id' => 'required',
             'published_date' => 'required|date',
             'book_image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048'
         ]);

         if ($request->hasFile('book_image')) {
            $file = $request->file('book_image');
            $filename = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
            $imagePath = $file->storeAs('images', $filename, 'public');
         } else {
             return response()->json(['error' => 'Image upload failed'], 400);
         }

         $book = Book::create([
             'title' => $request->title,
             'author_id' => $request->author_id,
             'published_date' => $request->published_date,
             'book_image' => $imagePath
         ]);

         return response()->json($book, 201);
     } */
    

    public function update(Request $request, $id) {
        $book = Book::findOrFail($id);
    
        $this->validate($request, [
            'title' => 'required',
            'author_id' => 'required',
            'published_date' => 'required|date',
            'book_image' => 'required'
        ]);
        $book->update($request->all());
        return response()->json($book);
    }
    
    
    public function delete($id) {
        $book = Book::findOrFail($id);
        $book->delete();
        return response()->json(null, 204);
    }
}
