<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Upvote extends Model
{
    public function feature(): BelongsTo
    {
        return $this->belongsTo(Feature::class);
    }
}
