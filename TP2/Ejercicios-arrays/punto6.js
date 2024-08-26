function sumaelem(numeros) {
    return numeros.reduce(function(acumulador, numero) {
      return acumulador + numero;
    }, 0);
}

const listanumeros = [1, 2, 3, 4, 5, 6];
const sumaTotal = sumaelem(listanumeros);
  
console.log(sumaTotal);
  