const producto = {
    nombre: 'Celular',
    precio: 5000,
    disponible: true
}

const propiedad = function tienePropiedad(objeto, propiedad){
    if (objeto.hasOwnProperty(propiedad)){
        return `El objeto tiene la propiedad ${propiedad}`
    } else {
        return `El objeto no tiene la propiedad ${propiedad}`
    }
}

console.log(tienePropiedad(producto, 'edicion'));    
console.log(tienePropiedad(producto, 'nombre'));