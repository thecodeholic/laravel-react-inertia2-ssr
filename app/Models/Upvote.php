<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Upvote extends Model
{
    public $timestamps = false;

    protected $fillable = ['feature_id', 'user_id', 'upvote'];

    public function feature(): BelongsTo
    {
        return $this->belongsTo(Feature::class);
    }
}
