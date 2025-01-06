// Funciones puras e impuras 

//===>  Funciones puras

// Side Effects

// 1. Modificar variabels globales 
// 2. Modificar parametros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Obtener la hora actual

function sum(a, b) {
    return a + b
}


// Funcion impura
function sum(a, b) {
    console.log('A:', a)
    return a + b
}

let total = 0

function sumWithSideEffect(a) {
    total += a // Linea mejorada que suplanta el accionar -> total + total + a
    return total
}

// FUNCION pura

function square (x) {
    return x * x
}

function addTen(y) {
    return y + 10
}

const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)