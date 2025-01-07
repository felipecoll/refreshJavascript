// Como crear un array

// 1. new Array() or Array()

const fruits = Array('Apple', 'orange', 'uva')
console.log(fruits)

const justOneNumber = Array(12)
console.log(justOneNumber)

const number = Array(1,2,3,4,5,6,7,8)
console.log(number)

// 2. Array literal sintax

const oneNumber = [6]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ['Futbol', 'Rugby', 'Ping pong']
console.log(sports)

const recipeIngredients = [
    'Harina', 
    true, 
    2,
    {
        ingredient: 'Leche', cantidad: '1 taza'
    },
    false
]

console.log(recipeIngredients)

const firstFruit = fruits[0]
console.log(firstFruit)

// Length

const numberOfFruits = fruits.length
console.log(numberOfFruits)