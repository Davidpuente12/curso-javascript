//PROYECTO DOM: Lista de Compras

const formulario = document.querySelector(".formulario form")
const lista = document.querySelector(".formulario ul")
const modo = document.getElementById("btn-modoClaroyoscuro")

const confirmarPeticion = document.getElementById("confirmar-peticion")
const btnReset = document.getElementById("btn-resetearProyectoListaDeCompras")
let input = document.querySelector(".formulario input")

//crear elementos
function crearElementos(input){
    let nuevo = document.createElement("li")
    nuevo.textContent = input

    let botonDelete = document.createElement("span")
    botonDelete.textContent = " Borrar"
    botonDelete.classList.add("btn-delete")
    
    let botonEdit = document.createElement("span")
    botonEdit.textContent = " Editar"
    botonEdit.classList.add("btn-edit")
    
    let nuevodiv = document.createElement("div")
    nuevodiv.append(botonDelete,botonEdit)
    nuevo.append(nuevodiv)
    lista.append(nuevo)
}

//guardar valores en almacenamiento local
function Guardarinputs(input){
    let almacen = JSON.parse(localStorage.getItem("item") || "[]") 
    almacen.push(input) 
    localStorage.setItem("item", JSON.stringify(almacen))
}

//obtener valores del almacenamiento local
function traerLocalStorage(){
    const almacenLocalStorage = JSON.parse(localStorage.getItem("item") || "[]")
        almacenLocalStorage.forEach(item => {
        crearElementos(item)
    })
}traerLocalStorage()

//guardar elementos de la lista en almacenamiento local
function GuardarLista(){
    const elementos = Array.from(lista.querySelectorAll("li")).map(item => 
        item.firstChild.textContent)

        localStorage.setItem("item", JSON.stringify(elementos))
}

//Boton de enviar
formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    let valor = input.value

    if(valor){
        crearElementos(valor)
        Guardarinputs(valor)
        console.log(localStorage)
        input.value = ""
    }
})

//Boton de borrar y editar
lista.addEventListener("click", (event) => {
    if(event.target.classList.contains("btn-delete")){
        confirmarPeticion.style.display = "flex"

        confirmarPeticion.addEventListener("click", (evento) => {
            if(evento.target.classList.contains("btn-delete-confirm")){
                event.target.closest("li").remove()
                GuardarLista()
                confirmarPeticion.style.display = "none"
            }else if(evento.target){
                confirmarPeticion.style.display = "none"
            }
        })   
    }
    else if(event.target.classList.contains("btn-edit")){
        let input = document.querySelector(".proyecto-listaDeCompras input").value
        if(input == ""){
            confirmarPeticion.style.display = "flex"
            confirmarPeticion.textContent = "Se debe rellenar el campo"
        }
        else{
            confirmarPeticion.style.display = "none"
            event.target.closest("li").firstChild.textContent = input
            GuardarLista()
        }
    }
})

//boton de tema

modo.addEventListener("click", () => {

    if(modo.textContent == "modo ☀️"){
        modo.textContent = "modo 🌙"
        modo.style.border = "black 2px solid"
        modo.style.color = "black"
    }
    else if(modo.textContent == "modo 🌙"){
        modo.textContent = "modo ☀️"
        modo.style.border = "white 2px solid"
        modo.style.color = "white"
    }
    
    document.querySelector(".proyecto-listaDeCompras").classList.toggle("tema-claro-container")
    document.querySelector(".proyecto-listaDeCompras div").classList.toggle("tema-claro-formulario")
    
    const tema = 
    document.querySelector(".proyecto-listaDeCompras").classList.contains("tema-claro-container") ? "claro" : "oscuro";
    localStorage.setItem("tema",tema)
})
const temaActual = localStorage.getItem("tema")
if(temaActual == "claro"){
    document.querySelector(".proyecto-listaDeCompras").classList.add("tema-claro-container")
    document.querySelector(".proyecto-listaDeCompras div").classList.add("tema-claro-formulario")
}else if(temaActual == "oscuro"){
    document.querySelector(".proyecto-listaDeCompras").classList.remove("tema-claro-container")
    document.querySelector(".proyecto-listaDeCompras div").classList.remove("tema-claro-formulario")
}

//boton de resetear
btnReset.addEventListener("click", () => {
    localStorage.clear()
})