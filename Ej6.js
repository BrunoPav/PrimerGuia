/*
6. Métodos de array
a) Dado un array de números, utiliza `filter()` para obtener un nuevo array solo con los
números pares.
b) Crea un array de objetos representando estudiantes con propiedades de nombre, edad y
calificación. Usa `map()` para obtener un nuevo array solo con los nombres y las edades de
los estudiantes.
c) Dado el array de objetos con nombre y edad anterior, usamos find() para obtener la
primera persona mayor de 25 años.
d) Utiliza `reduce()` para calcular la suma de todos los números en un array.
*/

// a)
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numerosPares = numeros.filter(x => x % 2 === 0) 
console.log(numerosPares)   

// b)
let estudiantes = [
    { nombre: "Ana", edad: 22, calificacion: 8.5 },
    { nombre: "Luis", edad: 28, calificacion: 7.0 },
    { nombre: "Marta", edad: 24, calificacion: 9.0 }
]

let nombreYEdad = estudiantes.map(e => ({ nombre: e.nombre, edad: e.edad }))
console.log(nombreYEdad)

// c)
let mayorDe25 = estudiantes.find(e => e.edad > 25)
console.log(mayorDe25)

// d)
let sumaTotal = numeros.reduce((acum, curr) => acum + curr, 0)
console.log(sumaTotal)


