<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /**
     * Get the comments for the blog post.
     */
    public function posts(){
        return $this->hasMany('App\Post');
    }
}
