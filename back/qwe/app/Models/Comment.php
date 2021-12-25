<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $table = 'comments';protected $primaryKey = 'comment_id';
    public $timestamps = false;
    protected $fillable= ['comment_id', 'fio', 'feedback'];
}
