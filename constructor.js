
// const persona = {
//     nombre: 'Felipe',
//     apellido: 'Coll'
// }

function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad
}

// Instancia

const persona1 = new Persona('Juan', 'Perez', 34)
const persona2 = new Persona('Clara', 'Valdez', 23)

console.log(persona1)
console.log(persona2)

//Deseamos agregar un parametro que falto

// Lo hacemos con prototype

Persona.prototype.telefono = '1234-8976-2'

persona1.nacionalidad = 'Argentino'

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

persona1.saludar()
persona2.saludar()