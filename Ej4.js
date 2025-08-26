/*
4. Template Literals
a) Usando template literals, crea una cadena que incluya variables para tu nombre, edad y
profesión.
b) Crea una función que reciba un precio y una cantidad, y devuelva una frase usando
calculos. La frase es “El total es: [total]“
c) Utiliza template literals para crear un mensaje de error que incluya el nombre del error y
su descripción
*/

// a)
let nombre = "Bruno"
let edad = 29
let profesion = "Estudiante"
console.log(`Mi nombre es ${nombre}, tengo ${edad} años y soy ${profesion}`)

// b)
function calcula(precio,cantidad){
    total = precio * cantidad
    return console.log(`El total es: ${total}`)
}
calcula(4,24)

// c)
let errorNombre = "TypeError"
let descripcion = "El valor no es del tipo esperado"    
console.log(`Error: ${errorNombre}, Descripción: ${descripcion}`)