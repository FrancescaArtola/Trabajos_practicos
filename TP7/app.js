let ej1 = document.querySelector ('#ej1')
let botonej1 = document.querySelector ('#botonej1')
let edad = 15
botonej1.onclick = function(){
    //ej1.textcontent = 'resultado'
    if (edad >=18) {
        ej1.textContent =  'sos mayor de edad'
    } else {
        ej1.textContent = 'sos menor de edad'
    }
}

let nombredeusuario = "Nahuel"
let ejercicio2 = document.querySelector("#eje2")
let botoneje2 = document.querySelector("#eje2")
botoneje2.onclick = function () {
    if(nombredeusuario == "Nahuel") {
        ejercicio2.textContent = "bienvenido Nahuel, como estas?"
    }
    else {ejercicio2.textContent = "bienvenido usuario"
 }
}

let nombredeusuario = "marcos" +"nahuel"
let ejercicio3 = document.querySelector ("#eje3")
let botoneje3 = document.querySelector ("#eje")
botoneje3.onclick = function (){
if(nombredeusuario == "marcos" + "nahuel") {
ejercicio3.textContent = "bienvenido marcos" + "bienvenido nahuel"
}
else {ejercicio3.textContent = "bienvenido usuario" 
}
}