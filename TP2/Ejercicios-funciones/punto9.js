function crearMultiplicador(x){
    return function(num){
        return num*x
    }
}

const multiplicarPorCinco= crearMultiplicador(5)
console.log(multiplicarPorCinco(3))