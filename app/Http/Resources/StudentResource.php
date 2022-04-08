<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StudentResource extends JsonResource
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
            'id'                    => (int) $this->id,
            'name'                  => (string) ($this->name ?? ''),
            'registration'          => (string) ($this->registration ?? ''),
            'dateOfBirth'           => (string) ($this->date_of_birth ?? ''),
            'dateOfBirthWithFormat' => (string) ($this->date_of_birth ? $this->date_of_birth->format('d M Y') : ''),
            'gender'                => (int) ($this->gender ?? 0),
            'genderText'            => (string) ($this->genderText ?? ''),
            'birthCertificate'      => (string) ($this->birth_certificate ?? ''),
            'fatherInfoId'          => (int) ($this->father_info_id ?? 0),
            'fatherInfo'            => new GuardianResource($this->whenLoaded('father_info')),
            'motherInfoId'          => (int) ($this->mother_info_id ?? 0),
            'motherInfo'            => new GuardianResource($this->whenLoaded('mother_info')),
            'guardianInfoId'        => (int) ($this->guardian_info_id ?? 0),
            'guardianInfo'          => new GuardianResource($this->whenLoaded('guardian_info')),
            'guardianType'          => (int) ($this->guardian_type ?? 3),
            'presentAddressId'      => (int) ($this->present_address_id ?? 0),
            'presentAddress'        => new AddressResource($this->whenLoaded('present_address')),
            'permanentAddressId'    => (int) ($this->permanent_address_id ?? 0),
            'permanentAddress'      => new AddressResource($this->whenLoaded('permanent_address')),
            'isSameAddress'         => (boolean) ($this->is_same_address ?? 0),
        ];
    }
}