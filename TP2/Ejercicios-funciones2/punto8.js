function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(usuario => usuario.email === email)
}

const usuarios = [
    { id: 1, nombre: 'Andrea', email: 'Andrea123@gmail.com' },
    { id: 2, nombre: 'Ana', email: 'Ana123@gmail.com' },
    { id: 3, nombre: 'Jorge', email: 'Jorge123@gmail.com' },
]

const emailBuscado = 'Jorge123@gmail.com';
console.log(buscarUsuarioPorEmail(usuarios, emailBuscado))