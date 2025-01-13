/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

//Desarrollo del mismo =====================> 

function loguinSocialNetwork() {
    const usario = prompt('Ingrese un usuario')
    const clave = prompt('Ingrese una contraseña')

    const usuario = usersDatabase.find(user => usuario === usersDatabase.username && clave === usersDatabase.password)
    const frases = usersTimeline.find(user => usario === usersTimeline.username)

    if (usuario && clave) {
        console.log(`Bienvenido ${usuario} nuevamente!`)
        console.log(`Estas son tus ultimas citas de tu autoria ${frases}`)
    } else {
        console.log('Datos para iniciar sesion erroneos')
    }

console.log(usario, clave)

}




// Fin desarrollo ===========================>    

const usersDatabase = [
    {
      username: "andres",
      password: "123",
    },
    {
      username: "caro",
      password: "456",
    },
    {
      username: "mariana",
      password: "789",
    },
  ];
  
  const usersTimeline = [
    {
      username: "Estefany",
      timeline: "Me encata Javascript!",
    },
    {
      username: "Oscar",
      timeline: "Bebeloper es lo mejor!",
    },
    {
      username: "Mariana",
      timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
    },
    {
      username: "Andres",
      timeline: "Yo hoy no quiero trabajar",
    },
  ];