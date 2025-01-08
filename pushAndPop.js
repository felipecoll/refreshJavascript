// Metodos que modifican el array original (mutabilidad)

// push()

const countries = ['Argentina', 'Brasil', 'Uruguay'] 

const newCountries = countries.push('Usa', 'Canada')

console.log(countries)
console.log(newCountries)

// pop() 

const removeCountry = countries.pop()

console.log(countries)
console.log(removeCountry)