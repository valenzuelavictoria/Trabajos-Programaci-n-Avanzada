function elevarAlCuadrado(numeros) {
 
    return numeros.map(function(numero) {
    return numero * numero;
    });
}

const listanumeros = [1, 2, 3, 4, 5];
const cuadrado = elevarAlCuadrado(listanumeros);
  
console.log(cuadrado);
  