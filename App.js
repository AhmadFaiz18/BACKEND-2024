const nama = "Ahmad Faiz";
const umur = 19;
const jurusan = "Teknik Informatika";

console.log(nama,umur,jurusan);

console.log('=====');
//
const nilai = 92;
let grade ="";
if(nilai>90){
    grade = "A";
}else if(nilai>80){
    grade = "B";
}else{
    grade = "C";
}
console.log(`Nilai anda : ${grade}`);
//
const user  = {
    name : "Ahmad Faiz",
    address: "Depok",
    age : 19,
    isMarried: false,
};

const {name,address,age,isMarried}=user;

console.log(name,address,age,isMarried);
//


