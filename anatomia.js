// Estructura de datos

// Key / value

// objeto {
//     propiedad: valor,
//     propiedad: valor,

//     metodos()
// }

const persona = {
    nombre: 'Leyla',
    edad: 30, 
    direccion: {
        calle: 'alguna por ahi',
        ciudad: 'Mexicanote'
    },
    saludar() {
        console.log(`Hola, mi nombre es: ${persona.nombre}`)
    },
}

console.log(persona)
persona.saludar()

persona.telefono = '345789'

console.log(persona.telefono)

persona.despedir = () => {
    console.log('Adios!!')
}

persona.despedir()

delete persona.telefono

delete persona.despedir