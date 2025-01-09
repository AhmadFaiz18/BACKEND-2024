const Student = require("../models/Student");

class StudentController{
   async index(req,res){
        const students= await Student.all();
        console.log(students);

        const data ={
            pesan: "Menampilkan semua data students",
            data:students,
    };
res.json(data);
}
   async store(req,res){
        const student = await Student.create(req.body); 
        const data = {
            message : "Menambahkan data student",
            data : student,
        };  
res.json(data);  
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