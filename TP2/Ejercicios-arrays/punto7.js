const numeros = [5, 8, 12, 3, 7, 20, 1];

const hayMayoresDeDiez = numeros.some(function(numero) {
  return numero > 10;
});

console.log(hayMayoresDeDiez);
