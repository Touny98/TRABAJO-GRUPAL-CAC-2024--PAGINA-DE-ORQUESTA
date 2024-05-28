const nombre = document.getElementById("name")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const dni = document.getElementById("dni")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    if (nombre.value.length < 2) {
        warnings += `EL nombre debe contener al menos 2 siglas <br>`
        entrar = true
    }

    // if (apellido.value.length < 2) {
    //     warnings += `EL apellido debe contener al menos 2 siglas <br>`
    //     entrar = true
    // }

    console.log(regexEmail.test(email.value))
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es válido <br>`
        entrar = true
    }

    if (dni.value.length < 7) {
        warnings += `DNI incorrecto. Debe tener mas de 7 digitos <br>`
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "Enviado!"
    }
})