const estudiante = {
    nombre: "Victoria",          
    edad: 21,                      
    direccion: {                   
      calle: "Belgrano",    
      ciudad: "Concepción del Uruguay",  
      pais: "Argentina"               
    }
};

console.log(estudiante)
console.log('Edad: '+estudiante.edad)
console.log(`Direccion:  ${estudiante.direccion.pais}, ${estudiante.direccion.ciudad}, ${estudiante.direccion.calle}`)