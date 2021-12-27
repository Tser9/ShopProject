<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mark extends Model
{protected $primaryKey = 'id_mark';public $timestamps = false;
    protected $fillable= ['id_mark', 'Lesson_id_lesson','User_id_user','mark'];
}
