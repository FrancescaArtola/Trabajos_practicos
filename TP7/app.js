let eje1 = document.querySelector('#ej1')
let botonej1 = document.querySelector('#botonej1')
let edad = 15
botonej1.onclick = function () {
    //ej1.textcontent = 'resultado'
    if (edad >= 18) {
        ej1.textContent = 'sos mayor de edad'
    } else {
        ej1.textContent = 'sos menor de edad'
    }
}

let nombredeusuario = "Nahuel"
let ejercicio2 = document.querySelector("#eje2")
let botoneje2 = document.querySelector("#eje2")
botoneje2.onclick = function () {
    if (nombredeusuario == "Nahuel") {
        ejercicio2.textContent = "bienvenido Nahuel, como estas?"
    }
    else {
        ejercicio2.textContent = "bienvenido usuario"
    }
}

let nombredeusuario2 = "marcos"
let ejercicio3 = document.querySelector("#eje3")
let botoneje3 = document.querySelector("#eje")
botoneje3.onclick = function () {
    if (nombredeusuario == "marcos" + "nahuel") {
        ejercicio3.textContent = "bienvenido marcos" + "bienvenido nahuel"
    }
    else {
        ejercicio3.textContent = "bienvenido usuario"
    }
}

let numero = 0
let botoneje4 = document.querySelector("#botoneje4")
let eje4 = document.querySelector("#eje4")
botoneje4.onclick = function () {
    if (numero < 0) {
        eje4.textContent = "el numero es negativo"
    } else if (numero > 0) {
        eje4.textContent = "el numero es positivo"
    } else if (numero == 0) {
        eje4.textContent = "el numero es 0"
    }
}

let ejercicio = document.querySelector("#eje5")
let botoneje5 = document.querySelector("#botoneje5")
let edad2 = 80
botoneje5.onclick = function () {
    if ((edad >= 6) && (edad <= 11)) {
        eje5.textContent = "la edad corresponde un niño"
    } else if ((edad >= 12) && (edad <= 18)) {
        eje5.textContent = "la edad corresponde a un adolescente"
    } else if ((edad >= 19) && (edad <= 26)) {
        eje5.textContent = "la edad corresponde a un adulto"
    } else if (edad >= 60) {
        eje5.textContent = "la edad corresponde a un anciano"
    }
}

let eje7 = document.querySelector ("#eje7")
let botoneje7 = document.querySelector ("#botoneje7")
let contrasenia = "123456"
botoneje7.onclick = function () {
    if (contrasenia == "secreto"){
    eje7.textContent = "acceso concedido"
} else {
    eje7.textContent = "acceso denegado"
}
}
