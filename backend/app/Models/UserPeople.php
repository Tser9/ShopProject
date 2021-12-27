<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPeople extends Model
{  protected $primaryKey = 'id_user';public $timestamps = false;
    protected $fillable= ['id_user', 'fio', 'isteacher'];
}
