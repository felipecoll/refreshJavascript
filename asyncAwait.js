// Async and await => Devuelve una promesa

// Ejemplo 

// function fetchData () {
//     fetch("https://rickandmortyapi.com/api/character")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))


async function fetchData() {
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character")
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

/**
 
Async y Await en JavaScript
Async y await son dos palabras clave introducidas en JavaScript (ES8) para simplificar la programación asíncrona. Antes de su llegada, se utilizaban promesas para manejar operaciones asíncronas, pero el código podía resultar complejo y difícil de leer.

¿Qué es Async?

Async se utiliza para declarar una función como asíncrona.
Una función asíncrona siempre devuelve una promesa.
Dentro de una función async, puedes utilizar la palabra clave await.

¿Qué es Await?

Await se utiliza únicamente dentro de una función async.
Pausa la ejecución de la función hasta que la promesa asociada se resuelva o rechace.
El valor resuelto de la promesa se asigna a la variable que está a la izquierda de await.
Ventajas de usar Async/Await:

Código más legible: El código se parece más a código síncrono, lo que mejora la comprensión.
Manejo de errores más fácil: Puedes utilizar try...catch para manejar errores de las promesas.
Mejor estructuración del código: Facilita la organización del código asíncrono.
En resumen:

Async/await es una sintaxis que hace que el código asíncrono sea más fácil de escribir y leer. Transforma el código asíncrono en un estilo similar al síncrono, lo que mejora la mantenibilidad y legibilidad del código.


 */

const urls = ["https://rickandmortyapi.com/api/character",
              "https://rickandmortyapi.com/api/location",
              "https://rickandmortyapi.com/api/episode"
]

async function fetchNewData() {
    try {
        for await (url of urls) {
            let response = await fetch(url)
            let data = await response.json()
            console.log(data)
        }
    } catch (error) {
        console.log(error)
    }
}

/*

for await...of es una estructura de control en JavaScript utilizada para iterar sobre objetos iterables asíncronos. Permite procesar elementos de forma secuencial, esperando la resolución de cada elemento antes de pasar al siguiente.

for await...of es una herramienta poderosa para trabajar con datos asíncronos en JavaScript. Permite iterar sobre elementos de forma secuencial, esperando la resolución de cada elemento antes de continuar, lo que simplifica el manejo de operaciones asíncronas en comparación con el uso de promesas y bucles tradicionales.

Diferencia con for...of:

Mientras que for...of se utiliza para iterar sobre objetos iterables síncronos, for await...of está diseñado específicamente para manejar iterables asíncronos.

*/