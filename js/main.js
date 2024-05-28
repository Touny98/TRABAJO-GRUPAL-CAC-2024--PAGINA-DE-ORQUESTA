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

    if (nombre.value.length < 2) {
        warnings += `Debe contener al menos 2 letras <br>`
        entrar = true
    }

    console.log(regexEmail.test(email.value))
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es válido <br>`
        entrar = true
    }

    if (tel.value.length < 7) {
        warnings += `Debe tener mas de 7 digitos <br>`
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