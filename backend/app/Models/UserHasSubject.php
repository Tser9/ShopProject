<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserHasSubject extends Model
{protected $table = 'user_has_subject';protected $primaryKey = 'user_id_user';
public $timestamps = false;
    protected $fillable= ['User_id_user', 'Subject_id_subject'];
}
