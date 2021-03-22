<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\LanguageRole;
class Language extends Model
{
    /**
     *  Get language_roles owns the language
     */
    public function language_roles()
    {
        return $this->belongsToMany(LanguageRole::class, 'language_has_roles', 'language_id', 'language_role_id');
    }
}
