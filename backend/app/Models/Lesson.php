<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{protected $table = 'lesson';protected $primaryKey = 'id_lesson';
public $timestamps = false;
    protected $fillable= ['id_lesson', 'date', 'class_id_class','Subject_id_subject'];
}
