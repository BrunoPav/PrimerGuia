/*
7. Spread Operator
a) Crea una función que reciba un número indefinido de argumentos y devuelva la suma de
todos ellos usando el spread operator.
b) Dado un array de números, usa el spread operator para encontrar el número máximo.
c) Combina dos objetos en uno solo utilizando el spread operator.
d) Tenemos un array con subarrays (por ejemplo: [1, [2, 3], [4]]). Usamos el spread
operator para combinar todo en un solo array plano.(tip: no alcanza solo con spread)
*/

// a)
function sumar(...numeros){
    return numeros.reduce((acum, curr) => acum + curr, 0)
}
console.log(sumar(1,2,3,4,5))
console.log(sumar(10,20,30))
console.log(sumar(5,15,25,35,45,55))

// b)
let arrayNum = [3,5,7,2,8,1]    
let maxNum = Math.max(...arrayNum)
console.log(maxNum)

// c)
let obj1 = {a:1, b:2}
let obj2 = {c:3, d:4}   
let objCombinado = {...obj1, ...obj2}
console.log(objCombinado)

// d)
let arrayConSubarrays = [1, [2, 3], [4]]    
let arrayPlano = [].concat(...arrayConSubarrays) //usamos concat para aplanar el array
console.log(arrayPlano)

