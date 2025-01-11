// Anatomia de un objeto ==> Estructura de datos
// Mini resumen

/*
    ¿Qué es un objeto en JavaScript?
Un objeto en JavaScript es una colección de propiedades. Cada propiedad tiene un nombre (llamado clave) y un valor asociado. Los valores pueden ser de cualquier tipo, incluyendo otros objetos, funciones, arreglos, etc.

Un objeto es como una "caja" donde puedes guardar diferentes valores relacionados entre sí. Es muy útil cuando tienes muchos datos que pertenecen a una misma entidad.

¿Cómo se utiliza?

Creas un objeto con un conjunto de propiedades.
Cada propiedad tiene un nombre (o clave) y un valor.
Puedes acceder, agregar o modificar estas propiedades.
Ejemplo:

Imaginemos que tienes un objeto que representa a un estudiante, con información como su nombre, edad y calificaciones.


// Ejemplo de objeto estudiante
let estudiante = {

    nombre: 'Marco',
    edad:17,
    // objeto calificaciones de mi estudiante
    calificaciones:{
        matematicas:8,
        ingles:9,
        historia:7,
    },
    // Imprimir saludo con nombre y edad
    saludar: function(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}
// Acceder a las propiedades del objeto
console.log(estudiante.nombre); // "Marco"
console.log(estudiante.calificaciones.ingles); // 9

// Usar un método del objeto
estudiante.saludar(); // "Hola, soy Marco y tengo 17 años."
¿Qué está pasando aquí?

Propiedades: El objeto estudiante tiene varias propiedades: nombre, edad y calificaciones. Estas propiedades almacenan datos relacionados con el estudiante.
Método: También tiene una función llamada saludar, que es un método del objeto. Los métodos son funciones que están asociadas a un objeto.
Acceso: Usamos la notación de punto (.) para acceder a las propiedades y métodos del objeto. Por ejemplo, estudiante.nombre devuelve "Juan".
*/

const persona = {
    nombre: 'Juan', 
    edad: 30, 
    direccion: {
        calle: 'Siempre viva 9',
        ciudad: 'Cordoba'
    },
        saludar() {
            console.log(`Hola, mi nombre es ${persona.nombre}`)
        }
}

console.log(persona)