function obtenerUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .catch(console.warn); 
}

const mapearUsuarios= () => {
    return obtenerUsuarios()
        .then(usuarios => {
            return usuarios.map(usuario=>({
                nombre: usuario.name,
                email: usuario.email
            }))
        })
    .catch(console.warn)
}

mapearUsuarios()
    .then(usuariosMapeados =>{
        console.log(usuariosMapeados)
    })
    .catch(console.warn)