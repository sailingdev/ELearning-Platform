<?php

use Illuminate\Database\Seeder;

class LanguageRoleSeeder extends Seeder
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
                'id'=>1,
                'name' => 'Own'
            ],
            [
                'id'=>2,
                'name'=> 'To Learn'
            ]
        ];
        DB::table('language_roles')->insert($array);
    }
}
