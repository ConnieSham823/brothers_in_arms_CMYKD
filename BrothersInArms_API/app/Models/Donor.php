<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Donor extends Model
{
    protected $table = 'donors';
    protected $primaryKey = 'donor_id';
    protected $fillable = ['first_name','last_name' , 'org_name', 'anonymous', 'email','phone','donate_amount', 'donate_date'];
    protected $casts = ['donate_date' => 'datetime', 'phone' => 'string', 'donate_amount' => 'float', 'anonymous' => 'boolean'];
}
