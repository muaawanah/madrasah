<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ClassesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'            => (int) $this->id,
            'name'          => (string) ($this->name ?? ''),
            'arabic'        => (string) ($this->arabic ?? ''),
            'english'       => (string) ($this->english ?? ''),
            'code'          => (string) ($this->code ?? ''),
            'description'   => (string) ($this->description ?? ''),
            'staffId'       => (int) ($this->staff_id ?? 0),
            'teacherId'     => (int) ($this->staff_id ?? 0),
            'teacherName'   => (string) ($this->teacher->name ?? ''),
            'totalStudent'  => $this->when($this->whenLoaded('students', 1, 0), $this->students->count()),
            'totalSubject'  => $this->when($this->whenLoaded('subjects', 1, 0), $this->subjects->count()),
            'subjects'      => SubjectResource::collection($this->whenLoaded('subjects')),
            'exams'         => ExamResource::collection($this->whenLoaded('exams')),
            'fees'          => FeeResource::collection($this->whenLoaded('fees')),
            'classFees'     => ClassFeeResource::collection($this->whenLoaded('class_fees')),
            'optional_subject_code' => (int) ($this->optional_subject_code ?? 0),
        ];
    }
}
