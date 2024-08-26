const producto = {
    nombre: 'Celular',
    precio: 5000,
    disponible: true
}

for (let prod in producto){
    console.log(`${prod}: ${producto[prod]}`)
}