<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\student;
use Illuminate\Support\Facades\Redis;
use PhpParser\Builder\Function_;
use PhpParser\Node\Expr\FuncCall;

class StudentController extends Controller
{
    //
    public function index(){
        // melihat data
        //kalo memakai query builder student = DB::table('student)->get();
        $student = student::all(); //menggunakan eloquent
        $data = [
            'message'=> 'Berhasil mengakses data',
            'data' => $student
        ];
        return response()->json($data, 200);
    }

    public Function store(Request $request){
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ];
        $student= Student::create($input);
        $data = [
            'message' => 'Student is created succesfully',
            'data' => $student,
        ];
        return response()->json($data,201);
    }

    public function update(Request $request, $id) {
        $student= Student::find($id);

        if($student){
            $input = [
                'nama' => $request->nama ?? $student->nama,
                'nim' => $request->nim ?? $student->nim,
                'email' => $request->email ?? $student->email,
                'jurusan' => $request->jurusan ?? $student->jurusan,
            ];

            $student -> update($input);

            $data = [
                'message'=>'Student is update',
                'data'=> $student
            ];

        return response()->json($data,200);

        }else{
            $data = [
                'message' => 'Student not found'
            ];

        return response()->json($data,400);
        }

    }

    public function destroy($id){

    $student= Student::find($id);

    if($student){
        $data = [
            'message'=>'Student is delete',
            'data'=> $student
        ];

    return response()->json($data,200);

    }else{
        $data = [
            'message' => 'Student not found'
        ];
    return response()->json($data,400);
    }
}

}
