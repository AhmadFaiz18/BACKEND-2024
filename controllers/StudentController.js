const students = require('../data/student.js');

class StudentController{
    index(req,res){
        res.json({
            pesan: "Menampilkan semua data students",
            data:students,
    });
}
    store(req,res){
        const {name} =req.body;
        if (name){
            students.push(name);
            res.json({
                pesan: `Menambahkan data student: ${name}`,
                data : students,
            });
        }else{
            res.status(400).json({pesan:"Nama Student harus diisi"});
        }
}
    update(req,res){
        const {id} =req.params;
        const {name} =req.body;
        const studentIndex=parseInt(id)-1;

        if(studentIndex>= 0 && studentIndex < students.length && name){
            students[studentIndex] = name;
            res.json({
                pesan: `Mengedit student id ${id}, nama ${name}`,
                data : students,
            });
        }else{
            res.status(400).json({pesan: "ID atau nama tidak valid"});
        }     
}
    destroy(req,res){
        const {id} =req.params;
        const studentIndex=parseInt(id)-1;

        if(studentIndex>= 0 && studentIndex < students.length){
           const removeStudent = students.splice(studentIndex,1);
            res.json({
                pesan: `Menghapus student id ${id}`,
                data : students,
            });
        }else{
            res.status(400).json({pesan: "ID tidak valid"});
        }     
}
}

const object = new StudentController();

module.exports = object;