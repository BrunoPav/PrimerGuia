/*2. Arrays (operaciones básicas)
a) Crea un array con los nombres de cinco frutas. Añade una fruta al principio y otra al final
usando métodos de array.
b) Dado un array de números del 1 al 5, crea otro array que contenga el doble de cada
número usando un bucle `for`.
c) Crea un array con tres colores. Luego, crea otro array con dos colores más. Combina
ambos arrays en uno solo usando el método `concat()`.
d) Dado un array de 6 elementos, eliminamos el primero y el último, y mostramos el
resultado. ¿Qué método usamos para hacer lo mismo y no modificar el array original?*/

// a)
let frutas = ["banana", "manzana", "pera"]
frutas.unshift("kiwi") //agrega al principio
frutas.push("naranja") //agrega al final
console.log(frutas)


/*let numeros = [1, 2, 3, 4, 5]
function duplicarValores(){
    let arrayDup = []
    for(let i = 0; i < numeros.length; i++){
        arrayDup[i] = numeros[i]*2
    }
    return arrayDup
}

consol.log(duplicarValores())*/


// b)
let numeros = [1, 2, 3, 4, 5]
let arrayDup = []
for (let i = 0; i < numeros.length; i++) {
    arrayDup[i] = numeros[i] * 2
}           
console.log(arrayDup)

// c)
let colores = ["azul", "rojo", "verde"]
let masColores =["amarillo", "violeta"]

console.log(colores.concat(masColores))

// d)
let elementos = [1, 2, 3, 4, 5, 6]
elementos.shift() //elimina el primero
elementos.pop() //elimina el ultimo
console.log(elementos) 
//para no modificar el array original usamos slice
let elementos2 = [1, 2, 3, 4, 5, 6]
let nuevoArray = elementos2.slice(1, elementos2.length - 1) //crea un nuevo array sin el primero y el ultimo
console.log(nuevoArray) //muestra el nuevo array
console.log(elementos2) //muestra el array original sin modificar

