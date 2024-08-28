function obtenerPagina(datos, numeroPagina) {
    const elementosPorPagina = 5;
    
    const inicio = (numeroPagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    
    return datos.slice(inicio, fin);
}

const datos = [
    'Elemento a', 'Elemento b', 'Elemento c', 'Elemento d', 'Elemento e',
    'Elemento f', 'Elemento g', 'Elemento h', 'Elemento i', 'Elemento j',
    'Elemento k', 'Elemento l', 'Elemento m', 'Elemento n', 'Elemento o',
    'Elemento p', 'Elemento q', 'Elemento r', 'Elemento s', 'Elemento t',
];

console.log(obtenerPagina(datos, 1))
