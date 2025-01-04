const numeroSecreto = Math.floor(Math.random() * 10 + 1)

const numeroJugador = parseInt(prompt('Adivina el numero entre los valores 1 y 10'))

console.log(`Este es el numero secreto ${numeroJugador}`)

if (numeroJugador === numeroSecreto) {
    console.log('Felicidades, adivinaste el numero!!!')
} else if (numeroJugador < numeroSecreto) {
    console.log('El numero es demasiado bajo')
} else {
    console.log('El numero es demasiado alto')
}

