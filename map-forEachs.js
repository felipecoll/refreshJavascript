// Map

const numbers = [1,2,3,4,5]
const squareNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squareNumbers)


// ForEach

const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)

// Ejercicio => Fahrenheit a Celsius 

const tempEnFahrenjeit = [32, 68, 95, 104]

const tempEnCelsius = tempEnFahrenjeit.map(fahrenheit => (5/9) * (fahrenheit - 32))

console.log('La temperatura en Fahrenheit es: ' + tempEnFahrenjeit)
console.log('La temperatura en Celsius es: ', tempEnCelsius)

// Ejercicio => Suma de elementos en array

const numeros = [1,2,3,4,5]

let sum = 0

numeros.forEach(num => {
    sum += num
})

console.log('Array de numeros:', numeros)
console.log('Suma de los numeros en el array:', sum)