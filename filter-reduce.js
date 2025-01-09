// Filter y Reduce

// Filter

const numbers = [1,2,3,4,5,6,7,8]

const eventNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers)
console.log(eventNumbers)

// Reduce

const numerosReduce = [1,2,3,4,5]

const sum = numerosReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numerosReduce)
console.log(sum)

// Reduce 2 

const words = ['Apple', 'Hello', 'Bye', 'Banana', 'Banana']

const wordsFrecuency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log(wordsFrecuency)

