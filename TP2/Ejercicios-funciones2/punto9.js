function generarToken(usuario) {
    const payload = {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
    };

    const encodedPayload = btoa(JSON.stringify(payload));

    const header = {
        alg: 'HS256',
        typ: 'JWT'
    };

    const encodedHeader = btoa(JSON.stringify(header));

    const token = `${encodedHeader}.${encodedPayload}`;
    return token;
}

const usuario = {
    id: 1,
    nombre: 'Amalia',
    email: 'Amalia123@gmail.com'
};

const token = generarToken(usuario);
console.log('Token generado:', token);