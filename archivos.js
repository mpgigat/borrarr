const fs = require("fs")

const data = fs.readFileSync("entrada.txt", "utf8")
console.log(data);

for ( const caracter of data){
    console.log(caracter);
}

// const lineas= data

// const lineas= data.split("\n")
// console.log(lineas);

// for( const linea of lineas){
//     console.log(`linea: ${linea}`);
// }


// const data =fs.readFile("entrada.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("Archivo no existe");
//     }else{
      
//         const lineas= data.split("\n")
//         console.log(lineas);

//         for( const linea of lineas){
//             console.log(`linea: ${linea}`);
//         }

//     }
// })

const materias=["fisica", "quimica","español","sociales","filosofia","matematicas"]

// fs.writeFileSync("salida.txt",materias.join("\n"),"utf-8")
fs.appendFileSync("salida.txt","nueva linea","utf-8")