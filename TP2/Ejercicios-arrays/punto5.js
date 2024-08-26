function filtrarMayores(numeros, referencia) {
    return numeros.filter(function(numero) {
      return numero > referencia;
    });
}

const listanumeros = [2, 7, 21, 5, 10, 53, 1, 13];
const valorrefer = 9;
const filtro = filtrarMayores(listanumeros, valorrefer);
  
console.log(filtro);