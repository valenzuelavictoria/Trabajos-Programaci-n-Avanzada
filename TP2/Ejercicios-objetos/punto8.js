const persona1 = {
    nombre: 'Maria',
    dni: 44444444
}

const persona2 = {
    apellido: 'Suarez',
    edad: 20
}

const nuevaPersona = Object.assign({}, persona1, persona2);

console.log(persona1)
console.log(persona2)
console.log(nuevaPersona)