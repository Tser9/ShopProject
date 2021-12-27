<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{protected $table = 'subject';
    protected $primaryKey = 'id_subject';public $timestamps = false;

    protected $fillable= ['id_subject', 'subject_name'];
}
