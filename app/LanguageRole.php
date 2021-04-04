<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LanguageRole extends Model
{
    public function languages()
    {
        return $this->belongsToMany(Language::class, 'language_has_roles');
    }
}
