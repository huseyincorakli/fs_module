const fs= require('fs');
// Dosya Okuma
fs.readFile('intro.txt','utf-8',(err,data)=>{
    if (!err) console.log(data , "\ndosya okundu");
    
    else {console.log(err)} 
})
//Dosya Yazma
fs.writeFile('example.json','{"name":"Hüseyin","age":"22"}','utf-8',(err,data)=>{
    if(!err) console.log("json oluşturuldu");
    else console.log(err)
})
//Dosya Veri Ekleme
fs.appendFile('intro.txt','\nKahramanmaraş','utf-8',(err,data)=>{
    if(!err) console.log("Veri eklendi");
    else console.log(err);
})
//Dosya Silme
fs.unlink('delete.txt',(err)=>{
    if (!err) {
        console.log("dosya silindi");
    }
})
//Klasör Oluşturma
fs.mkdir('deneme/resimler/',{recursive:true},(err)=>{
    if (!err) {
        console.log("dosyalar eklendi");
    }
})

//Klasör Silme
fs.rmdir('deneme',{recursive:true},(err)=>{
    if (!err) {
        console.log("dosyalar silindi");
    }
})