const producto = {
    nombre: 'Celular',
    precio: 5000,
    disponible: true
}

console.log('Objeto antes de eliminar propiedad', producto)

delete producto.disponible

console.log('cobjeto despues de eliminar propiedad', producto)