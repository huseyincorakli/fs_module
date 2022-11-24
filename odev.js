const fs= require('fs')
let newEmp={"name": "Hacı Fedakar", "salary": 5000}

const Create=()=>{
    fs.writeFile('employees.json',' [{"name": "Hüseyin Çoraklı", "salary": 2000}]',(err)=>{
        if (!err) {
            console.log("Dosya oluşturulma Başarılı.")
        }
    })
}
const Read=()=>{
    fs.readFile('employees.json',(err,data)=>{
        if (!err) {
            console.log(JSON.parse(data))
        }
        console.log(err);
    })
}
const Update=()=>{
    fs.readFile('employees.json',(err,data)=>{
        if (!err) {
            let arr=JSON.parse(data);
            arr.push(newEmp);
            fs.writeFile('employees.json',JSON.stringify(arr),'utf-8',(err)=>{
                if (err) console.log(err);
                console.log("Güncelleme Başarılı");
            })
        }
    })
}
const Delete=()=>{
    fs.unlink('employees.json',(err)=>{
        if (err) {
            console.log("Silme işlemi başarısız");
        }
        console.log("Silme işlemi başarılı");
    })
}

//Create();
//Read();
Update();
//Delete();