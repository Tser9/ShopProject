<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Iclass extends Model
{protected $table = 'class_class';protected $primaryKey = 'id_class';public $timestamps = false;
    protected $fillable= ['class_name'];
}
