document.addEventListener('DOMContentLoaded', () => {
    initContact();
});
let input_nombre;
let input_mail;
let input_errores;
let input_enviar;
let error;
let errores;


function initContact() {
    input_nombre = document.getElementById('name');
    input_mail = document.getElementById('email');
    input_errores = document.getElementById('errors');
    input_enviar = document.getElementById('enviar');
    error = '';
    errores = {};
    input_nombre.addEventListener('blur', () => {
        validarCampoTexto(input_nombre);
    });
    input_mail.addEventListener('blur', () => {
        validarEmail(input_mail);
    });
    input_enviar.addEventListener('click', (event) => {
        event.preventDefault();
        if (comprobarEnvio() && confirm('¿Estas seguro/a de que quieres enviar este formulario?')) {
            formulario.submit();
        }
    });
}

function validarCampoTexto(elemento) {
    let expre = /[A-Z]+$/;
    if (!expre.test(elemento.value)) {
        if (elemento.getAttribute('id') == 'nombre') {
            errores[elemento.getAttribute('id')] = 'El campo nombre solo puede contener letras <br>'
        } else {
            errores[elemento.getAttribute('id')] = 'El campo apellidos solo puede contener letras <br>'
        }
        elemento.focus();
    } else {
        if (elemento.getAttribute('id') == 'nombre') {
            errores[elemento.getAttribute('id')] = ''
        } else {
            errores[elemento.getAttribute('id')] = ''
        }
    }
    mostrarErrores();
}

function validarEmail(elemento) {
    let expre = /[@]{1}[a-zA-Z]+[\.]{1}[a-zA-Z]+$/;
    if (expre.test(elemento.value)) {
        errores[elemento.getAttribute('id')] = '';
    } else {
        errores[elemento.getAttribute('id')] = 'El campo E-mail es erróneo <br>';
        elemento.focus();
    }
    mostrarErrores();
}

function comprobarEnvio() {
    validarCampoTexto(input_nombre);
    validarEmail(input_mail);
    if (error != '') {
        event.preventDefault();
    }
    return error == '';
}

function mostrarErrores() {
    error = '';
    for (let err in errores) {
        console.log(err);
        error += errores[err]
    };
    input_errores.innerHTML = error;
}