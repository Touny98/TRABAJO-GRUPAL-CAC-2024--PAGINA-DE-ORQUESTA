const nombre = document.getElementById("name")
const tel = document.getElementById("phone")
const email = document.getElementById("email")
const text = document.getElementById("message")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    if (nombre.value == "") {
        alert("Por favor, escriba su Nombre y Apellido")
        entrar = true
    }

    if (email.value == "") {
        alert("Por favor, escriba su E-mail")
        entrar = true
    }
    console.log(regexEmail.test(email.value))
    if (!regexEmail.test(email.value)) {
        warnings += `El E-mail no es válido <br>`
        entrar = true
    }
    if (tel.value == "") {
        alert("Por favor, ingrese su Teléfono")
        entrar = true
    }
    if (tel.value.length < 8) {
        warnings += `Teléfono debe tener al menos 8 digitos <br>`
        entrar = true
    }

    if (text.value.length > 100) {
        warnings += `Supera máximo de 100 caracteres <br>`
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "Enviado!"
    }
})


// function revisaFormulario() {
//     objeto = document.formulario;
//     if (objeto.name.value == "") {
//         alert("Por favor, escriba su Nombre y Apellido")
//         return false;
//     } else if (objeto.phone.value == "") {
//         alert("Por favor, escriba su Teléfono")
//         return false;
//     } else if (objeto.email.value == "") {
//         alert("Por favor, escriba su E-mail")
//         return false;
//     } else {
//         return true
//     }
// }