let titulo = document.querySelector ("h1")
let body = document.querySelector ("body")
let parrafo = document.querySelector ("p")
let boton1 = document.querySelector ("#boton1")
let boton2 = document.querySelector ("#boton2")
let boton3 = document.querySelector ("#boton3")
let boton4 = document.querySelector ("#boton4")
let boton5 = document.querySelector ("#boton5")
let boton6 = document.querySelector ("#boton6")

boton1.onclick = function (){
parrafo.style.fontFamily = 'arial'
titulo.style.fontFamily = 'arial'
}
boton2.onclick = function (){
body.style.background = 'white'
}
boton3.onclick = function (){
titulo.style.color = 'skyblue'
parrafo.style.color = 'blue'
}
boton4.onclick = function (){
parrafo.textContent = 'futbol argentino en la pampa'
}
boton5.onclick = function (){ 
    parrafo.style.fontSize = '30px'
    titulo.style.fontSize = '50px'
} 
boton6.onclick = function (){
body.style.background = 'black'
parrafo.style.fontFamily = "Arial"
parrafo.style.fontSize = '25px'
parrafo.style.color = 'rgb(107, 155, 209)'
parrafo.textContent = 'Futbol Argentino, Club Deportivo Mac Allister, Formación y promoción de futbolistas'
titulo.style.color = 'cornflowerblue'
titulo.style.fontFamily = 'arial'
titulo.style.fontSize = '45px'
} 
