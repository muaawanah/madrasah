<?php

namespace App\Http\Controllers;

use Alkoumi\LaravelHijriDate\Hijri;
use App\Http\Resources\SettingResource;
use App\Models\HijriMonth;
use App\Models\Post;
use App\Models\Setting;
use App\Models\Staff;
use App\Models\Student;
use App\Providers\AppServiceProvider;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public static $current_academic_session = "44-45";

    public static $previous_academic_session = "43-44";

    protected function getSettingProperty($key, $settings = null)
    {
        SettingResource::withoutWrapping();

        $setting = ($settings ?? Setting::query())
            ->where('key', $key)
            ->first();

        if($setting) {
            $setting->value = $setting->value ?? $setting->dummy;
        }

        return new SettingResource($setting);
    }

    protected function getSettingValueByProperty($settings, $property)
    {
        $setting = $settings->where('key', $property)->first();

        return $setting
            ? ($setting->value ?? $setting->dummy) 
            : '';
    }

    protected function getLastSession()
    {
        return self::$previous_academic_session;
    }

    protected function setLastSession($academic_session)
    {
        self::$previous_academic_session = $academic_session;
    }

    protected function getCurrentSession()
    {
        return self::$current_academic_session;
    }

    protected function setCurrentSession($academic_session)
    {
        self::$current_academic_session = $academic_session;
    }

    public function getHijriDate($date = null)
    {
        $date = $date ?? date("d-m-Y");

        $date_array = explode("-", $date);

        if(strlen($date_array[2]) == 4) {
            $date_array = array_reverse($date_array);
        }

        // $date = implode("-", $date_array);

        // $day = Hijri::Date("d", $date);
        // $month = Hijri::Date("m", $date);
        // $year = Hijri::Date("Y", $date);

        // $month_name = HijriMonth::find($month)->bengali ?? $month;

        $day = $date_array[2];
        $month = $date_array[1];
        $year = $date_array[0];

        $month_name = AppServiceProvider::BANGLA_OF_GREGORIAN_MONTHS[$month] ?? "";
        
        return "{$day} - {$month_name} - {$year}";
    }

    public function getHijriMonth($date = null)
    {
        $date = $date ?? date("d-m-Y");

        $date_array = explode("-", $date);

        if(strlen($date_array[2]) == 4) {
            $date_array = array_reverse($date_array);
        }

        $date = implode("-", $date_array);

        return Hijri::Date("m", $date);
    }

    public function imageUploadGetLink()
    {
        // return $request;

        $image_path = "";
        $model_instance = "";
        $width = request()->width ?? 300;
        $height = request()->height ?? 300;

        $type = (int) (request()->type ?? 1);

        if (request()->hasFile('image')) {
            $image = request()->file('image');

            $extention = $image->getClientOriginalExtension();

            $fileName = Str::random(10) . time() . '.' . $extention;

            // $path = 'image/';

            $finalImage = ImageManagerStatic::make($image);

            $finalImage = $finalImage->fit($width, $height);

            $finalImage = $finalImage->encode($extention);

            $primary_directory =  "storage";
            
            $server_name = $_SERVER['SERVER_NAME'] ?? null;

            if($server_name) {
                $primary_directory = str_replace(".", "-", $server_name);
            }

            if(request()->option) {
                $primary_directory .= ("/" . request()->option);
            }

            if(request()->id) {
                $primary_directory .= ("/" . request()->id);
            }

            Storage::put($primary_directory . '/' . $fileName, $finalImage->__toString());

            $image_path = $primary_directory . '/' . $fileName;
        }
        
        if(request()->option == 'student') {
            $model_instance = Student::find(request()->id);
        }
        
        if(request()->option == 'staff') {
            $model_instance = Staff::find(request()->id);
        }
        
        if(request()->option == 'post') {
            $model_instance = Post::find(request()->id);
        }
        
        if(request()->option == 'logo') {
            Setting::query()
                ->where('id', request()->id)
                ->update([
                    'value' => $image_path,
                ]);

            Cache::forget(Setting::ALL_SETTING_DATA_CACHE_KEY);

            return $image_path;
        }

        if($model_instance && $image_path) {
            $this->imageUpdateOrCreate($model_instance, $image_path, $type);
        }

        return $image_path;
    }

    protected function imageUpdateOrCreate($model_instance, $image_path, $type = 1)
    {
        $model_instance = $model_instance->image()->updateOrCreate(
            [
                'type'      => $type,
            ],
            [
                'url'       => "/" . $image_path,
                'user_id'   => Auth::id(),
            ]
        );

        // if($type == 1) {
        //     if($model_instance->image && $model_instance->image->url) {
        //         Storage::delete(str_replace("storage", "public", $model_instance->image->url));
        //     }
        // }

        // if($type == 2) {
        //     if($model_instance->signature && $model_instance->signature->url) {
        //         Storage::delete(str_replace("storage", "public", $model_instance->signature->url));
        //     }
        // }
    }

    public function callArtisan($password, $command = 'list', $parameters = []) {
        if($password === 'msi313@mszannat') {
            $allowCommands = [
                "migrate:install",
                "migrate:status",
                "migrate",
                "key:generate",
                "storage:link",
                "route:cache",
                "route:clear",
                "view:cache",
                "view:clear",
                "cache:clear",
                "config:cache",
                "config:clear",
            ];
        
            if($command == 'list') {
                return $allowCommands;
            }
        
            if(!in_array($command, $allowCommands)) {
                return "Not Allow";
            }
        
            Artisan::call($command, $parameters);
        
            dd(Artisan::output());
        }
    }
}
