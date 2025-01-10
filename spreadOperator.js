//Spread operator

// 1. Copiando el array


const arrayOriginal = [1,2,3,4,5,6]

const copiaDeArray = [...arrayOriginal]

console.log(arrayOriginal)
console.log(copiaDeArray)

// 2. Combinando arrays

const array1 = [1,2,3]
const array2 = [7,8,9]

const combinacionArrays = [...array1, ...array2]

console.log(combinacionArrays)

// 3. Creando un array con elementos adicionales

const arrayBase = [1,2,3]

const arrayConElementos = [...arrayBase, 8,9,4,5]

console.log(arrayBase)
console.log(arrayConElementos)

// 4. Pasar elementos a funciones 

function sum(a,b,c) {
    return a + b + c 
}

const numbers = [1,2,3]
const result = sum(...numbers)

console.log(result)

//================ Fin de clase 