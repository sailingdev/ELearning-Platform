<?php

use Illuminate\Database\Seeder;
use App\User;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'user_manage']);
        Permission::create(['name' => 'role_manage']);
        Permission::create(['name' => 'permission_manage']);
        Permission::create(['name' => 'db_manage']);

        // create roles and assign existing permissions
        $role1 = Role::create(['name' => 'admin']);
        $role1->givePermissionTo('user_manage');
        $role1->givePermissionTo('role_manage');
        $role1->givePermissionTo('permission_manage');
        $role1->givePermissionTo('db_manage');

        $role2 = Role::create(['name' => 'user']);
        $role2->givePermissionTo('db_manage');

        // crate super-admin and assign existing super-admin role
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('admin123!@#')
        ]);
        $admin->assignRole($role1);

        // create user and assign existing user role
        $user = User::create([
            'name' => 'customer',
            'email' => 'customer@admin.com',
            'password' => bcrypt('admin123!@#')
        ]);
        $user->assignRole($role2);
    }
}
