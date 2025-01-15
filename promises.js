////// Estados de las promesas

// Promesas => tiene o presenta 3 estados

// A. Pending ==> Cuando se crea la promesa y aguarda por su estado

// B. Full Filled ==> Para bien o para mal

// C. Rejected ==> Promesa no se resolvio

///// Fin estados

// La misma cuenta con 2 callbacks

// 1 - Resolve ==> La promesa se resolvio satisfactoriamente

// 2 - Reject ==> La promesa no se resolvio adecuadamente

// Metodos

// then ==> cuando se resulve

// catch ==> obtenemos el error para saber poque no se resolvio

const promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        let operationSuccessful = true
        if (!operationSuccessful){
            resolve('La operacion fue exitosa.')
        }else {
            reject('Fallo la operacion.')
        }
    }, 2000)
   
})