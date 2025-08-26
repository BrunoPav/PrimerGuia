/*1. `let` y `const`
a) Declara una variable usando `let` para almacenar tu edad y otra usando `const` para tu
nombre. Luego, intenta reasignar valores a ambas y explica qué sucede.
b) Crea un bucle que incremente una variable declarada con `let`. ¿Qué pasaría si la
declaras con `const`?
c) Declara una constante que sea un objeto con tu información personal. Intenta modificar
una propiedad del objeto. ¿Es esto posible? ¿Por qué?.
d) Dentro de una función, declaramos una variable con var, otra con let y otra con const.
Luego imprimimos sus valores dentro y fuera de un bloque {}. Observamos y explicamos los
resultados.*/

// a)
let edad = 29;
const nombre = "Bruno"

edad = 30; //funciona, si declaro con let puedo pisar el valor
//nombre = "Manuel"   
//console.log(nombre) no funciona, una constante no puede cambiar de nombre ni de valor

// b)
for (let i = 0; i < 5; i++) {
    console.log(i) //funciona, puedo incrementar i porque esta declarada con let
}
// for (const j = 0; j < 5; j++) {
//     console.log(j) //no funciona, j es una constante y no puede cambiar su valor

// c)
const yo = {
    nombre: "Bruno",
    edad: 29
}

yo.nombre = "Manuel"
console.log(yo) //si, porque la referencia del objeto no cambia 

// d)
function pruebaVarLetConst() {
    var x = 10;
    let y = 20;
    const z = 30;
    console.log(x, y, z)//asi no imprmime nada porque no estoy llamando a la funcion
}
console.log(pruebaVarLetConst()) //si llamo a la funcion imprime

