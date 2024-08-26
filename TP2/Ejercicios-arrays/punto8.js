const numeros = [5, 8, 12, 3, 7];

const positivos = numeros.every(function(numero) {
  return numero > 0;
});

console.log(positivos);