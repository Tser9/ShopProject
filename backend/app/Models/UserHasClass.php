<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserHasClass extends Model
{protected $table = 'user_has_class';protected $primaryKey = 'user_id_user';
public $timestamps = false;
    protected $fillable= ['User_id_user', 'Class_id_class'];
}
