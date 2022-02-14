<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserHasSubject extends Model
{protected $table = 'user_has_subject';protected $primaryKey = 'id_user_has_subject';
public $timestamps = false;
    protected $fillable= ['id_user_has_subject','User_id_user', 'Subject_id_subject'];
}
