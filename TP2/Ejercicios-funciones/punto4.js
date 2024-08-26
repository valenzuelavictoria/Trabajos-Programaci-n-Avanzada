function crearPersona(nombre, edad) {
    return {
      nombre: nombre,
      edad: edad
    };
}

const persona = crearPersona("Maria", 21);
console.log(persona);
