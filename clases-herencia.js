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


*/