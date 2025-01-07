// explicacion de clousure 

function outerFunction () {
    let outerVariable = 'I am from outer function'
    
    function interFunction () {
        console.log(outerVariable)
    }

    return interFunction
}

const clousureExample = outerFunction()
clousureExample()

function createCounter() {
    let count = 0

    return function () {
        count++
        console.log(count)
    }
}

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()

function outer () {
    let message = 'Hello, '

    function inner (name) {
        console.log(message + name)
    }
    return inner 
}

const clousureA = outer()
const clousureB = outer()

clousureA('Mika')
clousureB('Pedro')