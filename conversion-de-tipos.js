// Explicit Type Casting 

const string = '34'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

const stringDecimal = '3,14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

// Implicit Type Casting 

const sum = '5' + 2
console.log(sum)

const sumWithBoolean = '3' + true 
console.log(sumWithBoolean)

const stringValue = '10'
const numberValue = 10
const booleanValue = true 

console.log(stringValue + stringValue)