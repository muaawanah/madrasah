<?php

namespace App\Models;

use App\Traits\BloodGroup;
use App\Traits\Gender;
use App\Traits\Resident;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Student extends Model
{
    use HasFactory, SoftDeletes, BloodGroup, Gender, Resident;

    protected $guarded = [];

    protected $appends = [
        'resident_text',
        'gender_text',
        'guardian_type',
        'payment_purpose',
        'due',
        'age',
        // 'due_purpose_id',
    ];
    
    protected $casts = [
        'date_of_birth' => 'date',
    ];

    public static $previous_session = "43-44";

    public static $current_session = "44-45";

    public function getAgeAttribute()
    {
        if ($this->date_of_birth) {
            return Carbon::parse($this->date_of_birth)->age;
        }

        return 0;
    }
    

    public function getPaymentPurposeAttribute()
    {
        $admission_id = $this->current_admission->id ?? '';

        $purposes_array = Payment::query()
            ->where('admission_id', $admission_id)
            ->pluck('purposes')
            ->toArray();

        // dd($purposes_array);

        $purposes = [];

        if(is_array($purposes_array)) {
            foreach($purposes_array as $purpose_array) {
                if(count($purpose_array ?? [])) {
                    $purposes = array_merge($purposes, $purpose_array);
                }
            }
        }

        return (array) ($purposes);
    }

    public function getDuePurposeIdAttribute()
    {
        $admission_id = $this->current_admission->id ?? '';

        $last_payment = Payment::query()
            ->where('admission_id', $admission_id)
            ->latest()
            ->first();

        return $last_payment
            ? $last_payment->purpose
            : 0;
    }

    public function getDueAttribute()
    {
        $admission_id = $this->current_admission->id ?? '';

        $last_payment = Payment::query()
            ->where('admission_id', $admission_id)
            ->latest()
            ->first();

        return $last_payment->due ?? 0;
    }

    public function getGuardianTypeAttribute()
    {
        if($this->father_info_id == $this->guardian_info_id) {
            return 1;
        }

        if($this->mother_info_id == $this->guardian_info_id) {
            return 2;
        }

        return 3;
    }

    public function getIsSameAddressAttribute()
    {
        return (boolean) ($this->present_address_id == $this->permanent_address_id);
    }

    public function scopeActive($query)
    {
        $query->where('status', 1);
    }

    public function scopeInactive($query)
    {
        $query->where('status', 0);
    }

    public function scopeStudent($query)
    {
        $query->whereIn('status', [0,1]);
    }

    public function scopeAdmission($query)
    {
        $query->whereIn('status', [2,3]);
    }

    public function father_info()
    {
        return $this->belongsTo(Guardian::class, 'father_info_id');
    }

    public function mother_info()
    {
        return $this->belongsTo(Guardian::class, 'mother_info_id');
    }

    public function guardian_info()
    {
        return $this->belongsTo(Guardian::class, 'guardian_info_id');
    }

    public function present_address()
    {
        return $this->belongsTo(Address::class, 'present_address_id');
    }

    public function permanent_address()
    {
        return $this->belongsTo(Address::class, 'permanent_address_id');
    }

    public function admissions()
    {
        return $this->hasMany(Admission::class);
    }

    public function last_session_admission()
    {
        $session = self::$previous_session;

        return $this->hasOne(Admission::class)
            ->where('admissions.session', $session)
            ->whereIn('status', [4]);
    }

    public function current_admission()
    {
        $session = self::$current_session;

        return $this->hasOne(Admission::class)
            ->where('admissions.session', $session)
            ->whereIn('status', [4]);
    }

    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }
}
