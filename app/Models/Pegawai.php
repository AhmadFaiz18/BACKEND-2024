<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pegawai extends Model
{
    protected $table = 'pegawai';
    protected $fillable = ['nama','gender','phone','alamat','email','status','tanggal_masuk_kerja'];
    public $timestamps = false;
}
