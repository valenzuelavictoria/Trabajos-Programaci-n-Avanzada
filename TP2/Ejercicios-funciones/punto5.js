function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
}

const persona = {
    nombre: "Maria",
    edad: 21
};
  
console.log("Antes de actualizar:", persona);
  
actualizarEdad(persona, 30);
  
console.log("Después de actualizar:", persona);