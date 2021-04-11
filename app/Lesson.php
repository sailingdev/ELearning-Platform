<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    protected $fillable = [
        'title'
    ];

    /**
     * Get lesson_parts for the lesson.
     */
    public function lesson_parts()
    {
        return $this->hasMany(LessonPart::class);
    }
}
