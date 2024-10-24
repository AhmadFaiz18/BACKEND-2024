<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
private $animals=['Kucing','Ayam','Ikan'];


//Menampilkan data Animals
 public function index()
 {
    foreach($this->animals as $animal){
    echo 'Menampilkan data Animals', $animal;
    }
 }

//Menambahkan hewan baru
 public function store(Request $request)
 {
  $newAnimal = $request->input('animal');
  array_push($this->animals,$newAnimal);
  return response()->json([
    'message'=>"Hewan {$newAnimal} berhasil ditambahkan!",
    'animals'=> $this->animals
  ]);
 }

//Mengupdate data hewan
 public function update(Request $request, $id)
 {
    $request->validate([
        'animal' => 'required|string'
    ]);
    if (isset($this->animals[$id])) {
        $updatedAnimal = $request->input('animal');
        $this->animals[$id] = $updatedAnimal;
        return response()->json([
            'message' => "Hewan dengan ID {$id} berhasil diperbarui menjadi {$updatedAnimal}!",
            'animals' => $this->animals
        ]);
    }else {
    return response()->json([
        'message' => "Hewan dengan ID {$id} tidak ditemukan!"
    ], 404);
    }
 }

 //Menghapus data hewan
 public function destroy($id)
 {
     if (isset($this->animals[$id])) {
        $deletedAnimal = $this->animals[$id];
        array_splice($this->animals, $id, 1);
        return response()->json([
            'message' => "Hewan dengan ID {$id} dan nama {$deletedAnimal} berhasil dihapus!",
            'total_animals' => count($this->animals),
            'animals' => $this->animals
        ]);
    } else {
        return response()->json([
            'message' => "Hewan dengan ID {$id} tidak ditemukan!"
        ], 404);
    }
 }
}
