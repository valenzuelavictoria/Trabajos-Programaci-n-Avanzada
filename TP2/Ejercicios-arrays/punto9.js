const personas = [
    { nombre: "Marta", edad: 18 },
    { nombre: "Jose", edad: 23 },
    { nombre: "Mario", edad: 38 },
    { nombre: "Magali", edad: 56 }
];
  
const Primermayorde30 = personas.find(function(persona) {
    return persona.edad > 30;
});

console.log(Primermayorde30);
  