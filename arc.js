const fs=require("fs")
// // const data = fs.readFileSync('x.txt', 'utf8');
// // console.log(data);
// // for (item in data){
// //     console.log(item);
// // }



// // const lineas = data.split('\n'); // divide el texto por saltos de línea

// // for (const linea of lineas) {
// //   console.log('Línea:', linea);
// // }

// fs.readFile('x.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error al leer el archivo:', err);
//     return;
//   }
//  const lineas = data.split('\n'); // divide el texto por saltos de línea

// for (const linea of lineas) {
//   console.log('Línea:', linea);
// }
// });




const lineas = [
  'Primera línea',
  'Segunda línea',
  'Tercera línea'
];

// fs.writeFileSync('salida.txt', lineas.join("\n"), 'utf8');
// console.log('Archivo escrito correctamente');


fs.appendFileSync('salida.txt', 'Nueva línea 1\n');
fs.appendFileSync('salida.txt', 'Nueva línea 2\n');
console.log('Líneas agregadas');