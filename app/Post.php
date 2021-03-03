<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title', 'cover_image', 'category_id', 'content'
    ];

    /**
     * Get the category owns the post.
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
