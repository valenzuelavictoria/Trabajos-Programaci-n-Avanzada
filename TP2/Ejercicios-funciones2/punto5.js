function validarFormulario(datos) {

    if (datos.nombre && datos.email && datos.password && datos.nombre.trim() !== '' && datos.email.trim() !== '' && datos.password.trim() !== ''){
        return true
    } else {
        return false
    }
}

const formulario1 = {
    nombre: 'Juan',
    email: 'juan@example.com',
    password: 'contraseña123'
};

const formulario2 = {
    nombre: '',
    email: 'juan@example.com',
    password: 'contraseña123'
};

console.log(validarFormulario(formulario1))
console.log(validarFormulario(formulario2))