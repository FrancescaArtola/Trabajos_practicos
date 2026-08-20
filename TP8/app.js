let ej1 = document.querySelector('#ej1')
let botonej1 = document.querySelector('#botonej1')
let inputEj1 = document.querySelector('#inputEj1')
let edad = 0
botonej1.onclick = function () {
    edad = inputEj1.value 
    if (edad >= 18) {
    ej1.textContent = 'sos mayor de edad'
    
}else {
        ej1.textContent = 'sos menor de edad'
}
}
