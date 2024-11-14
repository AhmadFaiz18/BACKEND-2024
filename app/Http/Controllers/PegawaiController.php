<?php

namespace App\Http\Controllers;

use App\Models\Pegawai;
use Illuminate\Http\Request;

class PegawaiController extends Controller
{
    public function index() {
        $pegawais = Pegawai::all();

        if ($pegawais->isEmpty()) {
            return response()->json([
                'message' => 'Data pegawai kosong'
            ], 200);
        }

        return response()->json([
            'message' => 'Berhasil mengakses data',
            'data' => $pegawais
        ], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'gender' => 'required|char|max:20',
            'phone' => 'required|string|max:255',
            'alamat' => 'required|text|max:100',
            'email' => 'required|string|max:100',
            'status' => 'required|string|max:100',
            'tanggal_masuk_kerja' => 'required|date|max:100',
        ]);

        $input = $request->only(['nama', 'gender', 'phone', 'alamat','email','status','tanggal_masuk_kerja']);
        $pegawais = Pegawai::create($input);

        $data = [
            'message' => 'Pegawai is created successfully',
            'data' => $pegawais,
        ];

        return response()->json($data, 201);
    }

    public function show($id){
        $pegawais= Pegawai::find($id);

        if($pegawais){
           $pegawais -> delete();

            $data = [
                'message'=>'Get detail pegawai'
            ];

        return response()->json($data,200);

        }else{
            $data = [
                'message' => 'Pegawais not found'
            ];
        return response()->json($data,404);
        }
    }

    public function update(Request $request, $id)
    {
        $pegawai = Pegawai::find($id);

        if (!$pegawai) {
            return response()->json([
                'message' => 'Pegawai not found'
            ], 404);
        }

        $validatedData = $request->validate([
            'nama' => 'required|string|max:255',
            'gender' => 'required|char|max:20',
            'phone' => 'required|string|max:255',
            'alamat' => 'required|text|max:100',
            'email' => 'required|string|max:100',
            'status' => 'required|string|max:100',
            'tanggal_masuk_kerja' => 'required|date|max:100',
        ]);

        $updateData = array_filter($validatedData, function($value) {
            return $value !== null;
        });

        $pegawai->update($updateData);

        return response()->json([
            'message' => 'Data berhasil di ubah',
            'data' => $pegawai
        ], 200);
    }

    public function destroy($id){

        $pegawai= Pegawai::find($id);

        if($pegawai){
            $pegawai->delete();
            $data = [
                'message'=>'Pegawai is delete',
            ];

        return response()->json($data,200);

        }else{
            $data = [
                'message' => 'Pegawai not found'
            ];
        return response()->json($data,400);
        }
    }


    public function searchResource(Request $request)
    {
        $name = $request->input('name');

        $pegawai = Pegawai::where('name', 'like', '%' . $name . '%')->get();

        if ($pegawai->isEmpty()) {
            return response()->json([
                'message' => 'Resource not found'
            ], 404);
        }

        return response()->json([
            'message' => 'Get searched resource',
            'data' => $pegawai
        ], 200);
    }

        public function getActiveResources(){

        $pegawai = Pegawai::where('status', 'active')->get();

        $totalActive = $pegawai->count();

        return response()->json([
            'message' => 'Get active resource',
            'total' => $totalActive,
            'data' => $pegawai
        ], 200);
    }

        public function getInactiveResources(){

        $pegawai = Pegawai::where('status', 'inactive')->get();

        $totalInactive = $pegawai->count();


        return response()->json([
            'message' => 'Get inactive resource',
            'total' => $totalInactive,
            'data' => $pegawai
        ], 200);
    }

        public function getTerminatedResources(){

        $pegawai = Pegawai::where('status', 'terminated')->get();

        $totalTerminated = $pegawai->count();

        return response()->json([
            'message' => 'Get terminated resource',
            'total' => $totalTerminated,
            'data' => $pegawai
        ], 200);
    }
}
