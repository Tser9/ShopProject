<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserHasClass extends Model
{protected $table = 'user_has_class';
    protected $primaryKey = 'id_user_has_class';
public $timestamps = false;
    protected $fillable= ['id_user_has_class','User_id_user', 'Class_id_class'];
}
