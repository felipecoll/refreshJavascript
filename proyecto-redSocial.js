/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/
function loguinSocialNetwork() {
    const username = prompt('Ingrese un usuario');
    const password = prompt('Ingrese una contraseña');
    
    // Buscar el usuario en la base de datos
    const usuario = usersDatabase.find(user => username === user.username && password === user.password);
    // Buscar frases asociadas en el timeline
    const frases = usersTimeline.find(user => username === user.username);
    
    if (usuario) {
        console.log(`Bienvenido ${usuario.username} nuevamente!`);
        if (frases) {
            console.log(`Estas son tus últimas citas de tu autoría: ${frases.timeline}`);
        } else {
            console.log(`No hay citas asociadas a ${usuario.username}`);
        }
    } else {
        console.log('Datos para iniciar sesión erróneos');
    }
}

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
        timeline: "Me encanta Javascript!",
    },
    {
        username: "Oscar",
        timeline: "Bebeloper es lo mejor!",
    },
    {
        username: "mariana",
        timeline: "A mí me gusta más el café que el té",
    },
    {
        username: "andres",
        timeline: "Yo hoy no quiero trabajar",
    },
];

loguinSocialNetwork();
