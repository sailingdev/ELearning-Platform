<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\Course;
use App\Http\Controllers\Controller;
use App\Language;
use App\LanguageHasRoles;
use App\LanguageRole;
use App\Lesson;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Collection;
use phpDocumentor\Reflection\Types\True_;

class CourseController extends Controller
{

    private $category;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $categories = Category::select('id', 'name as text')->get();
        foreach ($categories as $category) {
            $this->category = $category->id;
            $category['children'] = $this->get_own_list();
        }
        return response()->json([
            'dataList' => $categories
        ], 200);
    }

    private function get_own_list ()
    {
        $owns = Course::select('courses.own_id as id', 'languages.name as text')
            ->where('courses.category_id', '=', $this->category)
            ->leftJoin('languages', 'languages.id', '=', 'courses.own_id')
            ->distinct()
            ->get();
        foreach($owns as $own){
            $own['children'] = $this->get_to_learn_list($own->id);
        }
        return $owns;
    }

    private function get_to_learn_list($id)
    {
        $courses = Course::select('courses.id as id', 'languages.name as text')
            ->where('courses.category_id','=', $this->category)
            ->where('own_id', '=', $id)
            ->leftJoin('languages', 'languages.id', '=', 'courses.to_learn_id')
            ->get();
        foreach ($courses as $course){
            $course['type'] = 'course';
            $course['children'] = $this->get_lessons($course['id']);
        }
        return $courses;
    }

    private function get_lessons($course_id)
    {
        $lessons = Lesson::select('id', 'title as text')
            ->where('course_id', '=', $course_id)
            ->get();
        foreach ($lessons as $lesson){
            $lesson['type'] = 'lesson';
        }
        return $lessons;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  $id
     * @param $attached
     * @return bool
     */
    public function store($id, $attached)
    {
        $category_ids = Category::pluck('id');
        $rows = collect([]);
        foreach ($attached as $role_id) {
            $assigned_ids = LanguageHasRoles::where('language_role_id', '=', $role_id)
                ->where('language_id', '!=', $id)
                ->pluck('language_id');

            foreach ($category_ids as $category_id) {
                foreach ($assigned_ids->all() as $assigned_id) {
                    $row =
                        $role_id === 1
                            ? ['own_id' => $id, 'to_learn_id' => $assigned_id, 'category_id' => $category_id ]
                            : ['own_id' => $assigned_id, 'to_learn_id' => $id, 'category_id' => $category_id];
                    $rows->push($row);
                }
            }
        }
        Course::insert($rows->all());
        return true;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  $lang_id
     * @param $detached
     * @return bool
     */
    public function destroy($lang_id, $detached)
    {
        if (count($detached) === 1){
            // For own
            $field_name = $detached[0] = 1 ? 'own_id' : 'to_learn_id';
            Course::where($field_name, '=', $lang_id)->delete();
        } elseif(count($detached) === 2){
            // For to_learn
            Course::where('own_id', '=', $lang_id)->orWhere('to_learn_id', '=', $lang_id)->delete();
        }
        return true;
    }
}
