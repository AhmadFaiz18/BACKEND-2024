<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\student;


class StudentController extends Controller
{
    //
    public function index() {
        $students = Student::all();

        if ($students->isEmpty()) {
            return response()->json([
                'message' => 'Data mahasiswa kosong'
            ], 404);
        }

        return response()->json([
            'message' => 'Berhasil mengakses data',
            'data' => $students
        ], 200);
    }



    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'nim' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'jurusan' => 'required|string|max:100',
        ]);

        $input = $request->only(['nama', 'nim', 'email', 'jurusan']);
        $student = Student::create($input);

        $data = [
            'message' => 'Student is created successfully',
            'data' => $student,
        ];

        return response()->json($data, 201);
    }


    public function update(Request $request, $id)
    {
        $student = Student::find($id);

        if (!$student) {
            return response()->json([
                'message' => 'Student not found'
            ], 404);
        }

        $validatedData = $request->validate([
            'nama' => 'required|string|max:255',
            'nim' => 'required|numeric',
            'email' => 'required|email|max:255',
            'jurusan' => 'required|string|max:100'
        ]);

        $updateData = array_filter($validatedData, function($value) {
            return $value !== null;
        });

        $student->update($updateData);

        return response()->json([
            'message' => 'Data berhasil di ubah',
            'data' => $student
        ], 200);
    }



    public function destroy($id){

    $student= Student::find($id);

    if($student){
        $student->delete();
        $data = [
            'message'=>'Student is delete',
        ];

    return response()->json($data,200);

    }else{
        $data = [
            'message' => 'Student not found'
        ];
    return response()->json($data,400);
    }
}

public function show($id)
{
    $student= Student::find($id);

    if($student){
       $student -> delete();

        $data = [
            'message'=>'Get detail student'
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
