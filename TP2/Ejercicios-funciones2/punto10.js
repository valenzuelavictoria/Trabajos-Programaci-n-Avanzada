function actualizarUsuario(usuario,cambios){
    return Object.assign({},usuario,cambios)
}

const usuario={
    dni: 44444444,
    nombre:'Arturo',
    apellido: 'Barrios',
    edad: 21
}

const cambios={
    apellido: 'Vinzon',
    edad: 15
}
console.log('usuario antes de los cambios: ',usuario)

console.log('usuario despues de los cambios: ',actualizarUsuario(usuario,cambios))