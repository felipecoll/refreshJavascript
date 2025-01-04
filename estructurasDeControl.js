// Estructura If

let nombre = 'Diego'

if (nombre === 'Diego') {
    console.log('Hola Pedro')
} else if (nombre === 'Pedro'){
    console.log('Hola Pedro')
} else {
    console.log('Nombre no encontrado')
}

// Estructura Switch

let expr = 'Paltas'

switch (expr) {
    case 'Naranjas':
        console.log('Las naranjas salen $ 9.00 el kilo')
        break
    case 'Bananas':
        console.log('Las bananas salen $15.00 el kilo')
        break
    case 'Mangos':
    case 'Paltas':
        console.log('Los mangos y paltas salen $ 35.00 el kilo')
        break
    default:
        console.log('No esta el producto buscado')
}
console.log('Desea algo mas de superchotomercado??')