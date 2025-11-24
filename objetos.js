// function saludar( nombre  ) {
//     return `Hola ${nombre}`
// }
// const saludo= saludar("Nancy")
// const suma = (num1=34,num2=76) => {
//     const rta=num1+num2
//     return rta
// }

// const num1=322
// const num2=32

// const rta=suma(num1,num2)
// console.log(rta);
const edad=67
const persona = {
    nombre:"Mariana",
    apellido:"Diaz",
    edad:22,
    gustos:{
        deporte:"Futbol",
        cancion:"nnnn",
        libros:{
            librodrama:"xxxx",
            libroaccion:"yyyy"
        }
    },
    isMayor:function () {
            if(this.edad>=18)
                return true
            else    
                return false
        
    }
}

//keys, values, entries

const claves=  Object.keys(persona)

for (let k = 0; k < claves.length; k++) {
    console.log(claves[k]);
    
}

console.log(claves);

const valores= Object.values(persona)
console.log(valores);


const entradas = Object.entries(persona)
console.log(entradas);
// persona.peso=72
// persona.gustos.comida="hamburguesa"
// console.log(persona);
// //destructuracion

// // const nombre=persona.nombre
// // const apellido=persona.apellido
// // const edad=persona.edad

// const {nombre,edad:edadPersona,gustos:{libros:{librodrama}}}=persona

// const {libroaccion}=persona.gustos.libros

// console.log(nombre,edadPersona,librodrama,libroaccion);

// const personas=[
//     {nombre:"xxxx",edad:22},
//     {nombre:"yyyy",edad:34},
//     {nombre:"zzzz",edad:21},
//     {nombre:"zzzz",edad:56},
// ]

// console.log(personas[1].edad);
// console.log(personas[3].nombre);

// for (let i = 0; i < personas.length; i++) {
//     console.log(personas[i].nombre)
// }