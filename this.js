// This => referencia al objeto o clase 

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre,
        this.edad = edad
    }
}

const persona1 = new Persona('Felipe', 41)

console.log(persona1)

persona1.nuevoMetodo = function () {
    console.log(`Mi nombre es ${this.nombre}`)
}

persona1.nuevoMetodo()