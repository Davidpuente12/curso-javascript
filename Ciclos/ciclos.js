//                     CICLOS
function ejecutarFor(){
    const consola = document.getElementById("consola-for")
    const consola2 = document.getElementById("consola-for2")
    const consola3 = document.getElementById("consola-for3")
    
    let numero = 10

    for (let i = 0; i <= 10; i++) {
    consola.textContent += i + " "
    consola2.textContent += (numero ++) + " "
    } 

    //Recorrer Arrays
    let frutas = ["mandarina","cambur","naranja","sandia"]

    for (let i = 0; i < frutas.length; i++){
        consola3.textContent += frutas[i] + " "
    }
}

function ejecutarForof(){
    const consola = document.getElementById("consola-for-of")
    const consola2 = document.getElementById("consola-for-of2")

    let canasta = ["harina","leche","pan","queso"]

    for(let item of canasta){
        consola.textContent += item + " "
    }

    //iterar string
    let string = "palabras"

    for(let item of string){
        consola2.textContent += item + " "
    }
}

function ejecutarForin(){
    const consola = document.getElementById("consola-for-in")
    const consola2 = document.getElementById("consola-for-in2")
    const consola3 = document.getElementById("consola-for-in3")

    const canasta = {
        harina: 5,
        leche: 3,
        pan: 2,
        queso: 1
    }

    for(let producto in canasta){
        consola.textContent += producto + " "
        consola2.textContent += canasta[producto] + " "
        consola3.textContent += producto + ": " + canasta[producto] + " "
    }
}

function ejecutarWhile(){
    const consola = document.getElementById("consola-while")

    let contador = 0

    while(contador <= 10){
        consola.textContent += contador + " "
        contador ++ 
    }
}

function ejecutarDoWhile(){
    const consola = document.getElementById("consola-Dowhile")

    let contador = 0

    do{
        consola.textContent += contador + " "
        contador ++
    }
    while(contador <= 10)
}