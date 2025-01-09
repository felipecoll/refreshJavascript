// Find == Devuelve primer elemento que cumple con la condición

const multipleOf5 = [5, 10, 15, 20]

const firstNumberThan10 = multipleOf5.find(number => number  > 10 )

console.log(multipleOf5)
console.log(firstNumberThan10)

// FindIndex

const randomNumbers = [14, 4, 56, 90]

const indexNumber = randomNumbers.findIndex(number => number > 50)

console.log(randomNumbers)
console.log(indexNumber)