function autenticarUsuario(credenciales){
    return new Promise((resolve, reject)=>{
        const usuarioGenerico={
            usuario:'Pepe',
            contraseña:'contraseña'
        }

        setTimeout(()=>{
            if (credenciales.usuario===usuarioGenerico.usuario && credenciales.contraseña===usuarioGenerico.contraseña){
                resolve(true) 
            } else {
                reject(false)
            }
            
        }, 1000)
    })
}

const credencialesCorrectas={usuario:'Marta',contraseña:'Marta123'}
const credencialesIncorrectas={usuario:'Cacho',contraseña:'Cacho123'}

autenticarUsuario(credencialesCorrectas)
    .then(resultado => {
        console.log("Autenticación exitosa:", resultado); 
    })
    .catch(error => {
        console.log("Autenticación fallida:", error); 
    });

autenticarUsuario(credencialesIncorrectas)
    .then(resultado => {
        console.log("Autenticación exitosa:", resultado);
    })
    .catch(error => {
        console.log("Autenticación fallida:", error);
    });