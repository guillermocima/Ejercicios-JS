const fs = require("fs");

/*//usar el metodo writefile para escribir un archivo 
fs.writefile(file, data¨options,calback)

fs.writeFile("archivo.txt","texto-contenido del archivo", (err)=>{
    if(err)throw err;
  console.log("el archivo se ha creado");
});*/

//modifica el texto del archivo.txt
//escribe aqui abajo el metodo correspondiente para leer el archivo.txt y obtener el texto nuevo 
fs.readFile("archivo.txt", "utf8", (err,data)=>{
  if (err)throw err;
  console.log(data);
});