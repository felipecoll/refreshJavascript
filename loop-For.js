// Bucle For

let listado = ['Comer', 'Dormir', 'Programar', 'Repetir y asi..']

for (let x = 0; x < listado.length; x++) {
        console.log(listado[x])
}

console.log('==================== > ')

// For of (arrays, strings)

let canasta = ['Naranjas', 'Bananas', 'Uvas']

for (fruta of canasta) {
    console.log(fruta)
}

console.log('==================== > ')

// For in (objetos)

const listaDeCompras = {
    manzana: 5, 
    pera: 3,
    naranja: 2,
    uva: 1
}

for (fruta in listaDeCompras) {
    console.log(fruta)
}

for (fruta in listaDeCompras) {
    console.log(`${fruta} : ${listaDeCompras[fruta]}`)
}

console.log('==================== > ')

// While (ciclo mientras que la condicion sea verdadera)

let contador = 0

while (contador < 10) {
    console.log(contador)
    contador++
}

console.log('==================== > ')

// Do

let contador2 = 0

do {
    console.log(contador2)
    contador2++
} while (contador2 < 5)