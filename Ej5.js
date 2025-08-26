/*5. Arrow Functions
a) Convierte la siguiente función tradicional a una arrow function:
function saludar(nombre) {
return "Hola, " + nombre + "!";
}
b) Crea una arrow function que reciba un número y devuelva su cuadrado.
c) Crea una arrow function que reciba dos números y devuelva el mayor de ellos.
d) Crea una arrow function que reciba un array y devuelva otro array con los elementos al
cuadrado. Usamos map() adentro y la menor cantidad de codigo posible.
*/

// a)
/*
function saludar(nombre) {
return "Hola, " + nombre + "!";
}   */
const saludar = (nombre) => {
    return `Hola, ${nombre}!`
}   
console.log(saludar("Bruno"))

// b)
const cuadradoDe = (numero) =>{
    return numero*numero
}
console.log(cuadradoDe(5))

// c)
const mayorDe = (num1,num2) =>{
    return num1 > num2 ? num1 : num2
} 
console.log(mayorDe(8,5))

// d)
const arrayAlCuadrado = (array) => array.map(x => x * x)
console.log(arrayAlCuadrado([1,2,3,4,5]))

/*

¿Qué hace .map()?
Recorre un array elemento por elemento.
Aplica una función a cada elemento.
**Devuelve un nuevo array con el resultado de esa función.
No modifica el array original.

*/