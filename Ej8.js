/*
8. Destructuring
a) Dado un objeto con propiedades de una persona, usa destructuring para extraer el
nombre y la edad en variables separadas.
b) Utiliza destructuring en una función para extraer las propiedades de un objeto pasado
como argumento.
c) Dado un array con información de una ciudad (nombre, país, población), usa destructuring
para asignar cada elemento a una variable.
*/

// a)
let persona = { 
    nombre: "Carlos", 
    edad: 30, 
    profesion: "Ingeniero" 
}
let {nombre, edad} = persona
console.log(nombre)
console.log(edad)

// b)
function mostrarInfo(p){
   let {nombre, edad} = p
    console.log(`Nombre: ${nombre}, Edad: ${edad}`)
}
mostrarInfo(persona)

// c)
let ciudad = ["Buenos Aires", "Argentina", 3000000]
let [nombreCiudad, pais, poblacion] = ciudad    
console.log(nombreCiudad)
console.log(pais)
console.log(poblacion)

