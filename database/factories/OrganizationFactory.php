<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class OrganizationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => fake()->company,
            'email' => fake()->companyEmail,
            'phone' => fake()->tollFreePhoneNumber,
            'address' => fake()->streetAddress,
            'city' => fake()->city,
            'region' => fake()->state,
            'country' => 'US',
            'postal_code' => fake()->postcode,
        ];
    }
}
