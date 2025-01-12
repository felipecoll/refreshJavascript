// Herencia

class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre,
        this.tipo = tipo
    }
    emitirSonido() {
        console.log('El animal emite un sonido')
    }
}

class Perro extends Animal{
    constructor(nombre, tipo, raza) {
        super(nombre, tipo) // Sin super() no puedo heredar de la clase animal o extends 
        this.raza = raza
    }
    emitirSonido() {
        console.log('El perro ladra')
    }
    correr() {
        console.log(`${this.nombre} corre alegremente.`)
    }
}

const perro1 = new Perro('Don Omar', 'Perro', 'Labrador')

console.log(perro1)
perro1.correr()
perro1.emitirSonido()

perro1.nuevoMetodo = function () {
    console.log('Este es un nuevo metodo')
}

perro1.prototype.segundoMetodo = function () {
    console.log('Es otro nuevo metodo')
}

// Eplicacion en datalle con ejemplos

/*

La herencia en JavaScript es un mecanismo que permite a una clase "heredar" propiedades y métodos de otra clase. Esto facilita la reutilización de código y la organización de clases de forma más eficiente. Cuando una clase hereda de otra, la clase hija (o subclase) tiene acceso a las propiedades y métodos de la clase padre (o superclase).

La palabra clave super se utiliza para llamar al constructor de la clase padre desde el constructor de la clase hija. Es fundamental cuando necesitas inicializar las propiedades que se definen en la clase padre.

Solo existe en objetos o funciones constructoras

¿Cómo se utiliza?

La herencia se utiliza cuando tienes una clase con una estructura general y necesitas crear otras clases que sean una versión especializada de la clase base. Para ello, usas la palabra clave extends para crear la relación entre las clases, y dentro del constructor de la clase hija, llamas a super() para heredar las propiedades y métodos del constructor de la clase padre.

Ejemplo:


// Clase padre estudiante
class estudiante {
  constructor (nombre, edad, grado){
    this.nombre = nombre;
    this.edad = edad;
    this.grado = grado;
    }
// Método que comparten todos los estudiantes
saludar() { 
  console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`);
}
}

// Clase hija estudianteUniversitario que hereda de Estudiante
class estudianteUniversitario extends estudiante{
  constructor (nombre, edad, grado,materiaFavorita){
// Llamamos al constructor de la clase padre con 'super'
    super (nombre, edad, grado);
    this.materiaFavorita = materiaFavorita; // Nueva propiedad específica de estudianteUniversitario
  }
  mostrarClaseFavorita (){
    console.log(`Mi clase favorita es ${this.materiaFavorita}`)
  }
}

// Crear una instancia de estudianteUniversitario
const estudianteUni = new estudianteUniversitario ("Miguel", 23,"11°", "Matematicas");

// Usamos los métodos heredados y los específicos
estudianteUni.saludar();
estudianteUni.mostrarClaseFavorita();
Clase padre Estudiante: Esta clase tiene las propiedades generales (nombre, edad, grado) y un método saludar() que todos los estudiantes pueden usar.
Clase hija EstudianteUniversidad: Esta clase hereda de Estudiante usando extends, lo que significa que también tendrá las propiedades nombre, edad y grado, así como el método saludar().
Dentro del constructor de la clase hija, usamos super() para llamar al constructor de la clase padre y pasarle las propiedades que necesita. Luego, agregamos una propiedad nueva (claseFavorita) y definimos un método adicional (mostrarClaseFavorita()).
Instancia de EstudianteUniversidad: Creamos un nuevo objeto estudianteUni usando la clase hija, que hereda de Estudiante. Este objeto puede usar tanto los métodos heredados como los propios.


Ejemplo practico

class PrimeroB {
    constructor(nombre, apellido, sexo, edad, estatura, calificacionMatematicas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
        this.edad = edad;
        this.estatura = estatura;
        this.calificacionMatematicas = calificacionMatematicas;  // Esta es la propiedad
    }
    
    mostrarCalificacionMatematicas() {  // El nombre del método debe ser diferente
        console.log(`Esta es tu calificación en Matemáticas: ${this.calificacionMatematicas} del niño ${this.nombre}`);
    }
}

class CalificacionEspañol extends PrimeroB {
    constructor(nombre, apellido, sexo, edad, estatura, calificacionMatematicas, calificacionEspañol) {
        super(nombre, apellido, sexo, edad, estatura, calificacionMatematicas);
        this.calificacionEspañol = calificacionEspañol;  // Nueva propiedad para calificación en Español
    }
    
    mostrarCalificacionEspañol() {
        console.log(`Esta es tu calificación en Español: ${this.calificacionEspañol} del niño ${this.nombre}`);
    }
}

// Creando un objeto de la clase CalificacionEspañol
const alumno = new CalificacionEspañol("Alejandro", "Sánchez", "Masculino", 30, 1.75, 9, 8);

// Mostrando las calificaciones
alumno.mostrarCalificacionMatematicas();  // Esta es tu calificación en Matemáticas: 9 del niño Alejandro
alumno.mostrarCalificacionEspañol();      // Esta es tu calificación en Español: 8 del niño Alejandro

```class PrimeroB {

&#x20;   constructor(nombre, apellido, sexo, edad, estatura, calificacionMatematicas) {

&#x20;       this.nombre = nombre;

&#x20;       this.apellido = apellido;

&#x20;       this.sexo = sexo;

&#x20;       this.edad = edad;

&#x20;       this.estatura = estatura;

&#x20;       this.calificacionMatematicas = calificacionMatematicas;  // Esta es la propiedad

&#x20;   }

&#x20;  &#x20;

&#x20;   mostrarCalificacionMatematicas() {  // El nombre del método debe ser diferente

&#x20;       console.log(`Esta es tu calificación en Matemáticas: ${this.calificacionMatematicas} del niño ${this.nombre}`);

&#x20;   }

}



class CalificacionEspañol extends PrimeroB {

&#x20;   constructor(nombre, apellido, sexo, edad, estatura, calificacionMatematicas, calificacionEspañol) {

&#x20;       super(nombre, apellido, sexo, edad, estatura, calificacionMatematicas);

&#x20;       this.calificacionEspañol = calificacionEspañol;  // Nueva propiedad para calificación en Español

&#x20;   }

&#x20;  &#x20;

&#x20;   mostrarCalificacionEspañol() {

&#x20;       console.log(`Esta es tu calificación en Español: ${this.calificacionEspañol} del niño ${this.nombre}`);

&#x20;   }

}



// Creando un objeto de la clase CalificacionEspañol

const alumno = new CalificacionEspañol("Alejandro", "Sánchez", "Masculino", 30, 1.75, 9, 8);



// Mostrando las calificaciones

alumno.mostrarCalificacionMatematicas();  // Esta es tu calificación en Matemáticas: 9 del niño Alejandro

alumno.mostrarCalificacionEspañol();      // Esta es tu calificación en Español: 8 del niño Alejandro

*/