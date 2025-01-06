// Tema referido a funciones

function calculateDiscountedPrice(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount
}

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)

console.log('Original price: $' + originalPrice)
console.log('Discount:' + discountPercentage + '%')
console.log('Price with discount: $' + finalPrice)

// Funciones vs metodos


// 1. Pasar funciones como argumentos => callbak

function a () {}
function b (a) {}
b(a)

// Retornar funciones

function a () {
    function b () {}
    return b
}

// Asignar funciones a variables -> Expresion de funcion

// const a = function () {}

// Tener propiedades y metodos

// function a () {}
// const obj = {}
// a.call(obj)

// Anidar funciones 
// function a () {
//     function b () {
//         function c () {}
//         c()
//     }
//     b()
// }
// a()

// Es posible almacenar funciones en objetos?

const rocket = {
    name: 'FALCON 9', 
    launchMessage: function launchMessage() {
        console.log('🔥')
    }
}
rocket.launchMessage()
    
/*

Las funciones pueden realizar tareas y calcular valores y para calificar como función debe tomar alguna entrada y devolver una salida.

Un método es una función asociada a un objeto específico.

Los métodos están ligados a un objeto y se llaman en el contexto de ese objeto.

por lo tanto, un método es esencialmente una función que opera sobre propiedades o comportamientos de un objeto.

*/

