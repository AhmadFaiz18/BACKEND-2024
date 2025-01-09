const Student = require("../models/Student");

class StudentController{
   async index(req,res){
        const students= await Student.all();

        if(students.length > 0){
            const data ={
                pesan: "Menampilkan semua data students",
                data:students,
        };
        res.status(200).json(data);
     }else{
        const data ={
            pesan :"Data student kosong",
        };
        res.status(200).json(data);
     }
}

   async store(req,res){
        const {nama,nim,email,jurusan}=req.body;

        if (!nama || !nim || !email || !jurusan){
            const data ={
                pesan : "Semua data harus dikirim",
            };
            
            return res.status(422).json(data);
        }

        const student = await Student.create(req.body); 
        const data = {
            message : "Menambahkan data student",
            data : student,
        };  

            return res.status(201).json(data);
}

   async update(req,res){
        const {id} = req.params;
        const student = await Student.find(id);

        if (student){
            const student = await Student.update(id, req.body);
            const data = {
                pesan : `Mengedit data Students`,
                data : student,
            };
            res.status(200).json(data);
        }else{
            const data = {
                pesan : `Data student tidak ditemukan`,
            };
            res.status(404).json(data);
        }
}

   async destroy(req,res){
        const {id} =req.params;
        const student= await Student.find(id);

        if(student){
            await Student.delete(id);
            const data = {
                pesan : `Menghapus data Student`,
            };
            res.status(200).json(data);

        }else{
            const data= {
                pesan : `Data Student tidak ada`,
            };
            res.status(404).json(data);
        }     
    }
    
    async show(req,res){
        const {id} =req.params;
        const student= await Student.find(id);

        if(student){
            const data = {
                pesan : `Menampilkan detail Students`,
                data :  student,
            };
            res.status(200).json(data);

        }else{
            const data ={
                pesan :`Data Student tidak ditemukan`,
            };
            res.status(404).json(data);
        }     
    }
}

const object = new StudentController();

module.exports = object;