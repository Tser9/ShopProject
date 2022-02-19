<?php

namespace App\Http\Controllers;

use App\Models\Mark;
use Illuminate\Http\Request;
use function PHPUnit\Framework\isEmpty;

class MarkController extends Controller
{

    public function index(Request $request)
    {
        //return Mark::all();
        $id_user=$request->input('id_user');
        $id_subject=$request->input('id_subject');
        $date_start=$request->input('date_start');
        $date_end=$request->input('date_end');
        $isteacher=\DB::table('user_people')->select('isteacher' )->where('id_user','=',$id_user)->get();
        if (!$id_user && !$id_subject && !$date_start && !$date_end) {
            return Mark::all();
        }
        if ($isteacher[0]->isteacher == 1) {
            $class_class=[];
            $class_class=\DB::table('user_has_class')->select('Class_id_class' )->where('User_id_user','=',$id_user)->get();
            //$lesson = \DB::table('lesson')->select('id_lesson')->where([['Subject_id_subject', '=', $id_subject], ['date', '=', $date]])->get();
            $i=0;
            $lesson=[];
            foreach ($class_class as $class) {
                $lesson[$i] = \DB::table('lesson')->select('id_lesson')->where([['Subject_id_subject', '=', $id_subject], ['Class_id_class', '=', $class->Class_id_class], ['date', '>=', $date_start], ['date', '<=', $date_end]])->get();
                ++$i;
            }
            $i=0;
            $marks=[];
            foreach ($lesson as $lesso) {
                foreach ($lesso as $les) {
                    $marks[$i] = \DB::table('marks')->select('id_mark', 'mark')->where([['User_id_user', '=', $id_user], ['Lesson_id_lesson', '=', $les->id_lesson]])->get();
                    ++$i;
                }
            }
            $i=0;
            $result=[];
            foreach ($marks as $mark) {
                foreach ($mark as $mar) {
                    if ($mar->id_mark) {
                        $result[$i] = $mar;
                        ++$i;
                    }
                }
            }
            return $result;
        } else {
            if ($isteacher[0]->isteacher == 2) {
                $class_class=$request->input('id_class');
                $id_student = \DB::table('user_has_class')->select('User_id_user as id_user')->where('Class_id_class', '=', $class_class)->get();
                $lesson = \DB::table('lesson')->select('id_lesson')->where([['Subject_id_subject', '=', $id_subject], ['Class_id_class', '=', $class_class], ['date', '>=', $date_start], ['date', '<=', $date_end]])->get();
                $i=0;
                $marks=[];
                foreach ($lesson as $les) {
                    foreach ($id_student as $student) {
                        $marks[$i] = \DB::table('marks')->select('id_mark', 'mark')->where([['User_id_user', '=', $student->id_user], ['Lesson_id_lesson', '=', $les->id_lesson]])->get();
                        ++$i;
                    }
                }
                $i=0;
                foreach ($marks as $mark) {
                    foreach ($mark as $mar) {
                        if ($mar->id_mark) {
                            $result[$i] = $mar;
                            ++$i;
                        }
                    }
                }
                $marks = $result;
                $result = [];
                return $marks;
            } else {
                if ($isteacher[0]->isteacher == 3) {
                    $id_user = $request->input('id_student');
                    $class_class = [];
                    $class_class = \DB::table('user_has_class')->select('Class_id_class')->where('User_id_user', '=', $id_user)->get();
                    //$lesson = \DB::table('lesson')->select('id_lesson')->where([['Subject_id_subject', '=', $id_subject], ['date', '=', $date]])->get();
                    $i = 0;
                    $lesson = [];
                    foreach ($class_class as $class) {
                        $lesson[$i] = \DB::table('lesson')->select('id_lesson')->where([['Subject_id_subject', '=', $id_subject], ['Class_id_class', '=', $class->Class_id_class], ['date', '>=', $date_start], ['date', '<=', $date_end]])->get();
                        ++$i;
                    }
                    $i = 0;
                    $marks = [];
                    foreach ($lesson as $lesso) {
                        foreach ($lesso as $les) {
                            $marks[$i] = \DB::table('marks')->select('id_mark', 'mark')->where([['User_id_user', '=', $id_user], ['Lesson_id_lesson', '=', $les->id_lesson]])->get();
                            ++$i;
                        }
                    }
                    $i = 0;
                    $result = [];
                    foreach ($marks as $mark) {
                        foreach ($mark as $mar) {
                            if ($mar->id_mark) {
                                $result[$i] = $mar;
                                ++$i;
                            }
                        }
                    }
                    return $result;
                }
            }
        }
    }

    public function show(Mark $marks)
    {
        return $marks;
    }

    public function store(Request $request)
    {
        //return $request;
        $id_user=$request->input('id_user');
        $id_lesson=$request->input('Lesson_id_lesson');
        $id_student=$request->input('User_id_user');
        $mark=$request->input('mark');
        $isteacher=\DB::table('user_people')->select('isteacher' )->where('id_user','=',$id_user)->get();
        if ($isteacher[0]->isteacher == 1) return [];
        if ($isteacher[0]->isteacher == 3) {
            $marks = Mark::create(['Lesson_id_lesson' => $id_lesson, 'User_id_user' => $id_student, 'mark' => $mark]);
            return response()->json($marks, 201);
        }
        $id_subject=\DB::table('lesson')->select('Subject_id_subject as id_subject' )->where('id_lesson','=',$id_lesson)->get();
        $id_user_subject = \DB::table('user_has_subject')->select('Subject_id_subject as id_subject')->where('User_id_user','=',$id_user)->get();
        $id_student_class=\DB::table('user_has_class')->select('Class_id_class as id_class' )->where('User_id_user','=',$id_student)->get();
        $id_user_class=\DB::table('user_has_class')->select('Class_id_class as id_class' )->where('User_id_user','=',$id_user)->get();
        $i=0;
        foreach ($id_user_subject as $id_user_sub) {
            if ($id_user_sub->id_subject == $id_subject[0]->id_subject) {
                foreach ($id_user_class as $id_user_cl) {
                    if ($id_user_cl->id_class == $id_student_class[0]->id_class) {
                        $marks = Mark::create(['Lesson_id_lesson' => $id_lesson, 'User_id_user' => $id_student, 'mark' => $mark]);
                        return response()->json($marks, 201);
                    }
                }
            }
        }
        return [];

        /*$marks = Mark::create($request->all());

        return response()->json($marks, 201);*/
    }

    public function update(Request $request/*тут хранится body*/, Mark $marks/*тут хранится url*/)
    {
        //return $request;

        $id_user=$request->input('id_user');
        $id_lesson=$marks->Lesson_id_lesson;
        $id_student=$marks->User_id_user;
        $mark=$marks->mark;
        $id_lesson_new=$request->input('Lesson_id_lesson');
        $id_student_new=$request->input('User_id_user');
        $mark_new=$request->input('mark');
        $isteacher=\DB::table('user_people')->select('isteacher' )->where('id_user','=',$id_user)->get();
        if ($isteacher[0]->isteacher == 1) return [];
        if ($isteacher[0]->isteacher == 3) {
            $marks->update(['Lesson_id_lesson' => $id_lesson_new, 'User_id_user' => $id_student_new, 'mark' => $mark_new]);
            return response()->json($marks, 200);
        }
        $id_subject=\DB::table('lesson')->select('Subject_id_subject as id_subject' )->where('id_lesson','=',$id_lesson)->get();
        $id_user_subject = \DB::table('user_has_subject')->select('Subject_id_subject as id_subject')->where('User_id_user','=',$id_user)->get();
        $id_student_class=\DB::table('user_has_class')->select('Class_id_class as id_class' )->where('User_id_user','=',$id_student)->get();
        $id_user_class=\DB::table('user_has_class')->select('Class_id_class as id_class' )->where('User_id_user','=',$id_user)->get();
        $i=0;
        foreach ($id_user_subject as $id_user_sub) {
            if ($id_user_sub->id_subject == $id_subject[0]->id_subject) {
                foreach ($id_user_class as $id_user_cl) {
                    if ($id_user_cl->id_class == $id_student_class[0]->id_class) {
                        $marks->update(['Lesson_id_lesson' => $id_lesson_new, 'User_id_user' => $id_student_new, 'mark' => $mark_new]);
                        return response()->json($marks, 200);
                    }
                }
            }
        }
        return [];

        /*$marks->update($request->all());

        return response()->json($marks, 200);*/
    }

    public function delete(Request $request, Mark $marks)
    {

        $id_user=$request->input('id_user');
        $id_lesson=$marks->Lesson_id_lesson;
        $id_student=$marks->User_id_user;
        $isteacher=\DB::table('user_people')->select('isteacher' )->where('id_user','=',$id_user)->get();
        if ($isteacher[0]->isteacher == 1) return [];
        if ($isteacher[0]->isteacher == 3) {
            $marks->delete();
            return response()->json(null, 204);
        }
        $id_subject=\DB::table('lesson')->select('Subject_id_subject as id_subject' )->where('id_lesson','=',$id_lesson)->get();
        $id_user_subject = \DB::table('user_has_subject')->select('Subject_id_subject as id_subject')->where('User_id_user','=',$id_user)->get();
        $id_student_class=\DB::table('user_has_class')->select('Class_id_class as id_class' )->where('User_id_user','=',$id_student)->get();
        $id_user_class=\DB::table('user_has_class')->select('Class_id_class as id_class' )->where('User_id_user','=',$id_user)->get();
        $i=0;
        foreach ($id_user_subject as $id_user_sub) {
            if ($id_user_sub->id_subject == $id_subject[0]->id_subject) {
                foreach ($id_user_class as $id_user_cl) {
                    if ($id_user_cl->id_class == $id_student_class[0]->id_class) {
                        $marks->delete();
                        return response()->json(null, 204);
                    }
                }
            }
        }
        return [];
        /*$marks->delete();

        return response()->json(null, 204);*/
    }


}
