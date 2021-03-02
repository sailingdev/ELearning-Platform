<?php

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $array = [
            [
                'id' => 1,
                'name' => 'vocabulary'
            ],
            [
                'id' => 2,
                'name' => 'grammar'
            ],
            [
                'id' => 3,
                'name' => 'dialogues'
            ]
        ];
            DB::table('categories')->insert($array);
    }
}
