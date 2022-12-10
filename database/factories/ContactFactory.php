<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ContactFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'first_name' => fake()->firstName,
            'last_name' => fake()->lastName,
            'email' => fake()->unique()->safeEmail,
            'phone' => fake()->tollFreePhoneNumber,
            'address' => fake()->streetAddress,
            'city' => fake()->city,
            'region' => fake()->state,
            'country' => 'US',
            'postal_code' => fake()->postcode,
        ];
    }
}
