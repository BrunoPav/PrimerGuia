/* 3. Objetos y cómo acceder a las propiedades
a) Crea un objeto que represente un libro con propiedades como título, autor y año. Accede
a cada propiedad e imprimilas.
b) Dado un objeto que representa una persona, añade una nueva propiedad "hobby" y
modifica la propiedad "edad".
c) Crea un objeto que represente una calculadora con métodos para sumar, restar,
multiplicar y dividir. Utiliza estos métodos con diferentes números.
d) Creamos un objeto con varias propiedades. Accedemos a una de ellas usando una
variable con el nombre de la propiedad
*/

// a)
let libro ={
    titulo: "La Montaña",
    autor: "Pedro Lozano",
    año: "1984"
}
console.log(libro)

// b)
let persona = {
    nombre: "Javier",
    edad: "54",
    altura:"1.70"
}
persona.hobby = "correr"
persona.edad = "30"

console.log(persona)

// c)
let calculadora = {
    sumar(x,y){
        return x+y
    }
    ,
    restar(x,y){
        return x-y
    }
    ,
    multiplicar(x,y){
        return x*y
    }   
    ,
    dividir(x,y){
        return x/y
    }

}
console.log(calculadora.sumar(2,3))
console.log(calculadora.restar(5,3))    
console.log(calculadora.multiplicar(4,3))
console.log(calculadora.dividir(10,2))

// d)
let auto = {
    marca: "VolksWagen",
    cilindrada:"1800",
    modelo:"2018"
}
auto["marca"] = "Ford" 
console.log(auto)
