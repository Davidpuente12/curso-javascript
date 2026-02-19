//MOSTRAR Y OCULTAR BLOQUES 
const temas = [
    //HOME
    "Home",
    //datosPrimitivos
    "explicacion-strings",
    "explicacion-number",
    //ARRAYS
    "ver-mas-arrays",
    //metodos inmutables
    "explicacion-concat",
    "explicacion-map",
    "explicacion-forEach",
    "explicacion-filter",
    "explicacion-reduce",
    "explicacion-find",
    "explicacion-slice",
    "explicacion-some",
    "explicacion-join",
    "explicacion-flat",
    //metodos mutables
    "explicacion-splice",
    "explicacion-sort",
    //OBJETOS
    "ver-mas-objeto",
    "explicaciom-funcionConstructora",
    "explicacion-clases",
    //CICLOS
    "explicacion-cicloFor",
    "explicacion-cicloForof",
    "explicacion-cicloForin",
    "explicacion-ciclo-while",
    "explicacion-do-while",
    //Detalles
    'detalle-json',
    //DOM
    'mostrar-HTMLCollection',
    "mostrar-NodeList",
    "explicacion-addEventListener",
    //TABLAS
    'tabla-tiposdeNodos',
    'tabla-propiedadesDom',
    'mostrar-tabalaComparativa-HTMLCollectionVsNodeList',
    'tablas-eventos',
    'tabla-propiedadesDeeventoClick',
    "tabla-comparacion-arrayVSlistaEnlazada",
    'tabla-response',
]

function mostrarExplicacion(tipo){

    for(let i = 0; i < temas.length; i++){

        if(temas[i] == tipo){
            const bloque = document.getElementById(temas[i])
            bloque.style.display = (bloque.style.display == "none") ? "block" : "none"
        }
    }

    const nextExample = document.getElementById("lista-reduce-uno")
    const nextExample2 = document.getElementById("lista-reduce-dos")

    if(tipo == "explicacion-dos"){
        nextExample.style.display = "none"
        nextExample2.style.display = "block"
    }else if(tipo == "explicacion-uno"){
        nextExample.style.display = "block"
        nextExample2.style.display = "none"
    }
    
}

//MOSTRAR SIGUIENTE BLOQUE

const bloques = ["then-uno","then-dos","then-tres"]
const botones = ["btn-uno","btn-dos","btn-tres"]

function next(tipo){
    for(i = 0 ; i < bloques.length ; i ++){

        if(tipo == bloques[i]){
            if(tipo == "then-uno") {
                let max = bloques.length - 1
                const bloque = document.getElementById(bloques[max])
                const boton = document.getElementById(botones[max])

                const bloque2 = document.getElementById(bloques[i])
                const boton2 = document.getElementById(botones[i])
                
                const bloqueyboton = [bloque,boton]
                const bloqueyboton2 = [bloque2,boton2]
                
                bloqueyboton.forEach(item => item.style.display = "none")
                bloqueyboton2.forEach(item => item.style.display = "block")
            }

            const bloque = document.getElementById(bloques[i-1])
            const boton = document.getElementById(botones[i-1])
            
            const bloque2 = document.getElementById(bloques[i])
            const boton2 = document.getElementById(botones[i])

            const bloqueyboton = [bloque,boton]
            const bloqueyboton2 = [bloque2,boton2]
            
            bloqueyboton.forEach(item => { if(item) item.style.display = "none"} )
            bloqueyboton2.forEach(item => item.style.display = "block")
        }
    }
}
// ..........................................

// VARIABLES
    //SCOPE
function ejecutarScope(){
    const consola = document.getElementById("consola-scope")
    const consola2 = document.getElementById("consola-scope2")

    let mensajeGlobal = "Hola desde afuera"

    if(true) {
        let mensajeBloque = "hola desde el bloque"
        var mensajeVar = "hola soy var"
        consola.innerHTML = `
        <b class="golden">mensajes()</b> <br>
        ${mensajeGlobal} <br>
        ${mensajeBloque} <br> 
        ${mensajeVar} <br>
        `
    }

    consola2.innerHTML = `
    <b class="sky">mensajeGlobal</b> ${mensajeGlobal}<br>
    <b class="sky">mensajeBloque</b> ❌ <br>
    <b class="sky">mensajeVar</b> ${mensajeVar}
    `
}ejecutarScope()

function ejecutarVariablesDeEntorno(){
    const consola = document.getElementById("consola-variables-entorno")

    let nombre = process.env.NOMBRE || "Sin nombre"
    console.log(nombre)

    consola.innerHTML = `
    <p style="margin-top:0">
        <b class="sky">nombre</b> ${nombre}
    </p>
    `
}

    //CLOSURE
function closure(){
    const consola = document.getElementById("consola-closure")

    function saludo(){
        
        let mensaje = "hola Bienvenido/a"
        let numero = 1

        function imprimir(nombre){
            consola.innerHTML += `${mensaje}  ${nombre}  <span class="verde">${numero}<span> <br>`
            numero++
        }
        return imprimir
    }
    
    const mostrar = saludo()
    const mostrar2 = saludo()
    mostrar("Luis")
    mostrar("Puente")
    mostrar2("Sharon")
    mostrar2("Gamez")
}closure()

/////////////////////////// TIPOS DE DATOS

///////STRINGS
function ejecutarString(){
    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value

    const consola = document.getElementById("consola1") 
    const consola2 = document.getElementById("consola2") 

    if(nombre == "" || edad == ""){
        consola.textContent = "⚠️ Completa todos los campos!"
        return;
    }

    consola2.textContent = "Hola soy " + nombre + " y tengo " + edad + " años"
    consola.textContent = `Hola soy ${nombre} y tengo ${edad} años`
}

//metodos de los string
function metodosStrings(){
    let frase = document.getElementById("frase").value
    let palabra = "Genial"

    const consola = document.getElementById("consolaStrings")
    const consola2 = document.getElementById("consolaStrings2")
    const consola3 = document.getElementById("consolaStrings3")
    const consola4 = document.getElementById("consolaStrings4")
    const consola5 = document.getElementById("consolaStrings5")
    const consola6 = document.getElementById("consolaStrings6")
    const consola7 = document.getElementById("consolaStrings7")
    const consola8 = document.getElementById("consolaStrings8")
    const consola9 = document.getElementById("consolaStrings9")

    if(frase == ""){
        consola.textContent = "⚠️ Por favor, Escriba una frase."
        return
    }
    
    consola.innerHTML = `
    ${frase.length} <br>
    ${frase.padStart(25, " _")} <br>
    ${frase.padEnd(25, " *")}
    `
    consola2.textContent = frase.toUpperCase();
    consola3.textContent = frase.toLowerCase();
    consola4.textContent = frase.substring(0, 10);
    consola5.textContent = frase.charAt(7) + " " + frase[8] ;
    consola6.textContent = frase.charCodeAt(10);
    consola7.textContent = frase.concat(" " + palabra);
    consola8.textContent = frase.match("mejor");
    consola9.textContent = frase.replace("mejor","actual");
}

/////// NUMEROS
let resultado
let tipodeOperacion

function operaciones(tipo){
    const operacion = document.querySelectorAll(".operacion")
    const operador = document.getElementById("operador")
    const consola = document.getElementById("consola3")
    const metodo = document.getElementById("metodo-number")

    let numero1 = parseInt(document.getElementById("numero1").value)
    let numero2 = parseInt(document.getElementById("numero2").value)
    

    if(numero1 == "" && numero2 == ""){
        consola.textContent = "⚠️ Rellena los campos"
        return
    }

    if(tipo == "suma"){
        operacion.forEach(variable =>{variable.textContent = "suma"})
        operador.textContent= "+"
        resultado = numero1 + numero2
        consola.textContent = resultado
    }else if(tipo == "resta"){
        operacion.forEach(variable =>{variable.textContent = "resta"})
        operador.textContent= "-"
        resultado = numero1 - numero2
        consola.textContent = resultado
    }else if(tipo == "multiplicacion"){
        operacion.forEach(variable =>{variable.textContent = "multiplicacion"})
        operador.textContent= "*"
        resultado = numero1 * numero2
        consola.textContent = resultado
    }else if(tipo == "divicion"){
        operacion.forEach(variable =>{variable.textContent = "divicion"})
        operador.textContent= "/"
        resultado = numero1 / numero2
        consola.textContent = resultado
    }else if(tipo == "modulo"){
        operacion.forEach(variable =>{variable.textContent = "modulo"})
        operador.textContent= "%"
        resultado = numero1 % numero2
        consola.textContent = resultado
    }else if(tipo == "exponente"){
        operacion.forEach(variable =>{variable.textContent = "exponente"})
        operador.textContent= "**"
        resultado = numero1 ** numero2
        consola.textContent = resultado
    }else if(tipo == "toFixed"){
        metodo.innerHTML = `.<b class="golden">toFixed(<b class="verde">2</b>)</b>`
        consola.textContent = resultado.toFixed(2)
    }

    tipodeOperacion = tipo
}

function propiedades(tipo){
    const operacion2 = document.querySelector(".operacion2")
    const consola = document.getElementById("consola3")

    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value

    if(numero1 == "" || numero2 == ""){
        consola.textContent = "⚠️ Rellena los campos"
        return
    }
    
    if(tipo == 'Math.sqrt'){
        operacion2.innerHTML = `<span class="sky">Math</span>.<span class="golden">sqrt</span><span class="morado">(<span class="sky">${tipodeOperacion}</span>)</span>`
        consola.textContent = Math.sqrt(resultado)
    }else if(tipo == 'Math.random'){
        operacion2.innerHTML = `<span class="sky">Math</span>.<span class="golden">random</span><span class="morado">()</span>`
        consola.textContent = Math.random()
    }else if(tipo == 'Math.abs'){
        operacion2.innerHTML = `<span class="sky">Math</span>.<span class="golden">abs</span><span class="morado">(<span class="sky">${tipodeOperacion}</span>)</span>`
        consola.textContent = Math.abs(resultado)
    }else if(tipo == 'Math.max'){
        operacion2.innerHTML = `<span class="sky">Math</span>.<span class="golden">max</span><span class="morado">(<span class="sky">${numero1},${numero2}</span>)</span>`
        consola.textContent = Math.max(numero1,numero2)
    }else if(tipo == 'Math.min'){
        operacion2.innerHTML = `<span class="sky">Math</span>.<span class="golden">min</span><span class="morado">(<span class="sky">${numero1},${numero2}</span>)</span>`
        consola.textContent = Math.min(numero1,numero2)
    }else if(tipo == 'Math.round'){
        operacion2.innerHTML = `<span class="sky">Math</span>.<span class="golden">round</span><span class="morado">(<span class="sky">${tipodeOperacion}</span>)</span>`
        consola.textContent = Math.round(resultado)
    }else if(tipo == 'Math.floor'){
        operacion2.innerHTML = `<span class="sky">Math</span>.<span class="golden">floor</span><span class="morado">(<span class="sky">${tipodeOperacion}</span>)</span>`
        consola.textContent = Math.floor(resultado)
    }else if(tipo == 'Math.ceil'){
        operacion2.innerHTML = `<span class="sky">Math</span>.<span class="golden">ceil</span><span class="morado">(<span class="sky">${tipodeOperacion}</span>)</span>`
        consola.textContent = Math.ceil(resultado)
    }else if(tipo == 'Math.pow'){
        operacion2.innerHTML = `<span class="sky">Math</span>.<span class="golden">pow</span><span class="morado">(<span class="sky">${numero1},${numero2}</span>)</span>`
        consola.textContent = Math.pow(numero1,numero2)
    }else if(tipo == 'Math.PI'){
        operacion2.innerHTML = `<span class="sky">Math</span>.<span class="golden">PI</span><span class="morado">()</span>`
        consola.textContent = Math.PI
    }
}

function numeroAleatorio(){
    const consola = document.getElementById("consola3")
    consola.textContent = Math.floor(Math.random() * 10 + 1)
}

function EjecutarparseInt(){
    const consola = document.getElementById("consola-parseInt")
    const consola2 = document.getElementById("consola-parseInt2")
    const consola3 = document.getElementById("consola-parseInt3")

    let string = "12"
    let string2 = "20.5"
    let string3 = "110010"

    let numero = parseInt(string)
    let decimal = parseFloat(string2)
    let binario = parseInt(string3, 2)

    consola.innerHTML = `${numero} <span class="letra-B">${typeof numero}</spam> <br>` 
    consola2.innerHTML = `${decimal} <span class="letra-B">${typeof decimal}</spam> <br>` 
    consola3.innerHTML = `${binario} <span class="letra-B">${typeof binario}</spam> <br>` 
    

}EjecutarparseInt()

//TECLADO
// Detectar qué input está activo 
const inputs = document.querySelectorAll(".inputs")
let inputActivo

inputs.forEach(input =>{
    input.addEventListener("focus", () =>{
        inputActivo = input // guardamos el que recibió el foco
        teclas()
    })
})

function teclas(tecla){
    const consola = document.getElementById("consola3")
    let numero1 = document.getElementById("numero1")
    let numero2 = document.getElementById("numero2")
    
    if(tecla == "uno"){
        inputActivo.value += 1
    }if(tecla == "dos"){
        inputActivo.value += 2
    }if(tecla == "tres"){
        inputActivo.value += 3
    }if(tecla == "cuatro"){
        inputActivo.value += 4
    }if(tecla == "cinco"){
        inputActivo.value += 5
    }if(tecla == "seis"){
        inputActivo.value += 6
    }if(tecla == "siete"){
        inputActivo.value += 7
    }if(tecla == "ocho"){
        inputActivo.value += 8
    }if(tecla == "nueve"){
        inputActivo.value += 9
    }if(tecla == "cero"){
        inputActivo.value += 0
    }if(tecla == "punto"){     
        inputActivo.value += "."  
    }if(tecla == "clear"){
        numero1.value = ""
        numero2.value = ""
        consola.textContent = ""
    }
}

function PropiedadesMath(){
    const tabla = document.getElementById("propiedades-metodos")
    tabla.style.display = (tabla.style.display == 'none') ? 'block' : 'none'
}

//              BIGINT
function ejecutarBigInt(){
    const consola = document.getElementById("consola-bigInt")

    const max = Number.MAX_SAFE_INTEGER
    const min = Number.MIN_SAFE_INTEGER

    const number1 = 45n
    const number2 = BigInt(45)

    // operacion
    const increment = 2
    const operacion = max + increment
    const operacionBig = BigInt(max) + BigInt(increment)

    consola.innerHTML = `
    <p style="margin-top:0">
        <b class="doger">max</b> ${max} <br>
        <b class="doger">min</b> ${min} <br>
    </p>

    <p>
        <b class="azul">typeof</b> <b class="doger">number1</b> ${typeof number1} <br>
        <b class="azul">typeof</b> <b class="doger">number2</b> ${typeof number2} <br>
    </p>

    <p>
        <b class="doger">operacion</b> ${operacion} <br>
        <b class="doger">operacionBig</b> ${operacionBig} <br>
    </p>
    `
}ejecutarBigInt()

//                ARRAYS
function ejecutarArrays(tipo){
    const consola = document.getElementById("consola-array")

    // sintaxis antigua
    let frutas = new Array("manzana", "banano", "uvas")
    let verduras = Array("zanahoria", "papa", "yuca")
    let vacio =  Array(5)

    // sintaxis nueva
    let colores = ['azul','amarillo','rojo','negro']
    let multiple = ["auto", 12 , true , {telefono: "Sansung"}]
    let vacio2 =  []

    if(tipo == "accederElementos"){

        consola.innerHTML = `
        <b class="verde">//obtener elementos</b><br>
        <b class="sky">colores</b>.<b class="azul">[<b class="verde">0</b>]</b> ${colores[0]} <br>
        <b class="sky">colores</b>.<b class="azul">[<b class="verde">1</b>]</b> ${colores[1]} <br>
        <b class="sky">colores</b>.<b class="azul">[<b class="verde">2</b>]</b> ${colores[2]} <br>
        <b class="sky">colores</b>.<b class="azul">[<b class="verde">3</b>]</b> ${colores[3]} <br>
        <b class="sky">colores</b>.<b class="azul">[<b class="verde">4</b>]</b> ${colores[4]} 

        <p>
            <b class="verde">//obtener ultimo elemento</b><br>

            <b class="sky">colores</b>.<b class="azul">[</b> 
            <b class="sky">colores</b>.<b class="sky">length</b> -
            <b class="verde">1</b> <b class="azul">]</b> 
            ${colores[colores.length -1]} <br>

            <b class="sky">colores</b>.<b class="golden">at(</b>-<b class="verde">1</b><b class="golden">)</b> 
            ${colores.at(-1)}
        </p>

        <b class="verde">//obtener valor, modificarlo y mostrarlo</b><br>
        <b class="sky">verduras</b><b class="golden">[<b class="verde">2</b>]</b> ${verduras[2]}<br>
        <b class="sky">verduras</b><b class="golden">[<b class="verde">2</b>]</b> = <b class="naranja">"piña"</b> ${verduras[2]="piña"}<br>
        <b class="sky">verduras</b> ${verduras}<br><br>
        `
    }
    else if(tipo == "longitudYcomprobar") {
        consola.innerHTML = `
        <b class="sky">frutas</b> ${frutas} <br>
        <b class="sky">verduras</b> ${verduras} <br>
        <b class="sky">vacio</b> ${vacio} <br>
        <b class="sky">colores</b> ${colores} <br>
        <b class="sky">multiple</b> ${multiple} <br>
        <b class="sky">vacio</b> ${vacio2} <br><br>

        <b class="verde">//obtener longitud</b><br>
        <b class="sky">colores</b>.<b class="sky">length</b> ${colores.length} <br>
        <b class="sky">verduras</b>.<b class="sky">length</b> ${verduras.length} <br><br>

        <b class="verde">//comprobar si es array</b><br>
        <b class="aqua">Array</b>.<b class="golden">isArray(</b><b class="sky">frutas</b><b class="golden">)</b>
        ${Array.isArray(frutas)}
        `
    }
    
    
}ejecutarArrays("accederElementos")

    //mutables
const paises = ["venezuela","colombia","peru"]
function ejecutarmutables(tipo){
    const consola = document.getElementById("consola-mutable")
    const codigo = document.getElementById("codigo-mutable")


    codigo.innerHTML = `
    <div>
        <b class="azul">const </b> <b class="doger">paises</b> = <b class="golden">[</b><b class="naranja">'venezuela', 'colombia', 'peru'</b><b class="golden">]</b>
        <br><br>
        <b>añadir valores al final</b>
        <button class="btn-consola2" onclick="ejecutarmutables('push')">push</button><br>
        <b class="doger">paises</b>.<b class="golden">push</b><b class="golden">(</b><b class="naranja">'usa', 'canada'</b><b class="golden">)</b>  <br><br>

        <b>eliminar valores del final</b>
        <button class="btn-consola2" onclick="ejecutarmutables('pop')">pop</button><br>
        <b class="doger">paises</b>.<b class="golden">pop</b><b class="golden">()</b>  <br><br>

        <b>añadir valores al comienzo</b>
        <button class="btn-consola2" onclick="ejecutarmutables('unshift')">unshift</button><br>
        <b class="doger">paises</b>.<b class="golden">unshift</b><b class="golden">(<b class="naranja">"mexico"</b>)</b>  <br><br>

        <b>eliminar valores del comienzo</b>
        <button class="btn-consola2" onclick="ejecutarmutables('shift')">shift</button><br>
        <b class="doger">paises</b>.<b class="golden">shift</b><b class="golden">()</b> <br><br>
    </div>
    `
    consola.innerHTML = `
    <b class="doger">paises</b> <br> ${paises}<br>
    `

    if(tipo == "push"){
        let longitud = paises.push("usa","canada")
    
        consola.innerHTML = `
        <b class="doger">paises</b> ${paises}<br><br>
        <b class="doger">paises</b>.<b class="golden">push()</b> ${longitud} <br>
        `
    }
    else if(tipo == "pop"){
        let elemento = paises.pop()

        consola.innerHTML = `
        <b class="doger">paises</b> ${paises}<br><br>
        <b class="doger">paises</b>.<b class="golden">pop()</b> ${elemento} <br>
        `
    }
    else if(tipo == "unshift"){
        let elemento = paises.unshift("mexico")

        consola.innerHTML = `
        <b class="doger">paises</b> ${paises}<br><br>
        <b class="doger">paises</b>.<b class="golden">unshift()</b> ${elemento} <br>
        `
    }
    else if(tipo == "shift"){
        let elemento = paises.shift()
    
        consola.innerHTML = `
        <b class="doger">paises</b> ${paises}<br><br>
        <b class="doger">paises</b>.<b class="golden">unshift()</b> ${elemento} <br>
        `
    }
    else if(tipo == "sort"){
        const letras = ["x","h","a","o","l","p","b","d","z"]
        const nombres = ["xoimara","samuel","adriana","omar"]
        let elemento = letras.sort()
        let elemento2 = nombres.sort()

        codigo.innerHTML = `
        <p style="margin-top: 0">
            <b class="azul">const</b> <b class="doger">letras</b> = 
            <b class="azul">[<b class="naranja">"x","h","a","o","l","p","b","d","z"</b>]</b> <br> <br>

            <b class="azul">const</b> <b class="doger">nombres</b> = 
            <b class="azul">[<b class="naranja">"xiomara","samuel","adriana","omar"</b>]</b> 
        </p>
        `

        consola.innerHTML = `
        <p style="margin-top: 0">
            <b class="doger">letras</b>.<b class="golden">sort()</b><br> ${elemento} <br><br>
            <b class="doger">nombres</b>.<b class="golden">sort()</b><br> ${elemento2} 
        </p>
        `
    }

    //splice
    if(tipo == "splice"){
        const paises = ["venezuela","colombia","peru"]

        codigo.innerHTML = `
        <p style="margin-top: 0">
            <b class="azul">const </b> <b class="doger">paises</b> = <b class="golden">[</b><b class="naranja">'venezuela', 'colombia', 'peru'</b><b class="golden">]</b> <br><br>
            
            <b>Agregar Elemento</b> <br>
            <b class="doger">paises</b>.<b class="golden">splice(</b><b class="letra-B">1, 0,</b> <b class="naranja">"ecuador"</b><b class="golden">)</b> 
            <button class="btn-consola2" onclick="ejecutarmutables('splice1')">splice</button>
        </p>

        <p>
            <b>Reemplazar</b> <br>
            <b class="doger">paises</b>.<b class="golden">splice(</b><b class="letra-B">1, 2,</b> <b class="naranja">"ecuador"</b>, <b class="naranja">"brasil"</b><b class="golden">)</b> 
            <button class="btn-consola2" onclick="ejecutarmutables('splice2')">splice</button>
        </p>

        <p>
            <b>Extraer</b> <br>
            <b class="doger">paises</b>.<b class="golden">splice(</b><b class="letra-B">2, 1<b class="golden">)</b> 
            <button class="btn-consola2" onclick="ejecutarmutables('splice3')">splice</button>
        </p>
        `

        consola.innerHTML = `
        <b class="doger">paises</b> ${paises}
        `
    }
    else if(tipo == "splice1"){
        const paises = ["venezuela","colombia","peru"]
        let elemento = paises.splice(1,0,"ecuador")

        codigo.innerHTML = `
        <p style="margin-top: 0">
            <b class="azul">const </b> <b class="doger">paises</b> = <b class="golden">[</b><b class="naranja">'venezuela', 'colombia', 'peru'</b><b class="golden">]</b> <br><br>
            
            <b>Agregar Elemento</b> <br>
            <b class="doger">paises</b>.<b class="golden">splice(</b><b class="letra-B">1, 0,</b> <b class="naranja">"ecuador"</b><b class="golden">)</b> 
            <button class="btn-consola2" onclick="ejecutarmutables('splice1')">splice</button>
        </p>

        <p>
            <b>Reemplazar</b> <br>
            <b class="doger">paises</b>.<b class="golden">splice(</b><b class="letra-B">1, 2,</b> <b class="naranja">"ecuador"</b>, <b class="naranja">"brasil"</b><b class="golden">)</b> 
            <button class="btn-consola2" onclick="ejecutarmutables('splice2')">splice</button>
        </p>

        <p>
            <b>Extraer</b> <br>
            <b class="doger">paises</b>.<b class="golden">splice(</b><b class="letra-B">2, 1<b class="golden">)</b> 
            <button class="btn-consola2" onclick="ejecutarmutables('splice3')">splice</button>
        </p>
        `
        consola.innerHTML = `
        <b class="doger">paises</b> ${paises}

        <p>
            <b class="verde">//Añadir en indice 1</b> <br>
            <b class="doger">paises</b>.<b class="golden">splice()</b> ${elemento} <br>
            <b class="doger">paises</b>.<b class="golden">[<b class="verde">1</b>]</b> ${paises[1]} <br>
        </p>
        `
    }
    else if(tipo == "splice2"){
        const paises = ["venezuela","colombia","peru"]
        let elemento = paises.splice(1,2,"ecuador","brasil")

        codigo.innerHTML = `
        <p style="margin-top: 0">
            <b class="azul">const </b> <b class="doger">paises</b> = <b class="golden">[</b><b class="naranja">'venezuela', 'colombia', 'peru'</b><b class="golden">]</b> <br><br>
            
            <b>Agregar Elemento</b> <br>
            <b class="doger">paises</b>.<b class="golden">splice(</b><b class="letra-B">1, 0,</b> <b class="naranja">"ecuador"</b><b class="golden">)</b> 
            <button class="btn-consola2" onclick="ejecutarmutables('splice1')">splice</button>
        </p>

        <p>
            <b>Reemplazar</b> <br>
            <b class="doger">paises</b>.<b class="golden">splice(</b><b class="letra-B">1, 2,</b> <b class="naranja">"ecuador"</b>, <b class="naranja">"brasil"</b><b class="golden">)</b> 
            <button class="btn-consola2" onclick="ejecutarmutables('splice2')">splice</button>
        </p>

        <p>
            <b>Extraer</b> <br>
            <b class="doger">paises</b>.<b class="golden">splice(</b><b class="letra-B">2, 1<b class="golden">)</b> 
            <button class="btn-consola2" onclick="ejecutarmutables('splice3')">splice</button>
        </p>
        `
        consola.innerHTML = `
        <b class="doger">paises</b> ${paises}

        <p>
            <b class="verde">//reemplazar a partir del indice 1, dos elementos</b> <br>
            <b class="doger">paises</b>.<b class="golden">splice()</b> ${elemento} <br>
            <b class="doger">paises</b>.<b class="golden">[<b class="verde">2</b>]</b> ${paises[2]} <br>
        </p>
        `
    }
    else if(tipo == "splice3"){
        const paises = ["venezuela","colombia","peru"]
        let elemento = paises.splice(2,1)

        codigo.innerHTML = `
        <p style="margin-top: 0">
            <b class="azul">const </b> <b class="doger">paises</b> = <b class="golden">[</b><b class="naranja">'venezuela', 'colombia', 'peru'</b><b class="golden">]</b> <br><br>
            
            <b>Agregar Elemento</b> <br>
            <b class="doger">paises</b>.<b class="golden">splice(</b><b class="letra-B">1, 0,</b> <b class="naranja">"ecuador"</b><b class="golden">)</b> 
            <button class="btn-consola2" onclick="ejecutarmutables('splice1')">splice</button>
        </p>

        <p>
            <b>Reemplazar</b> <br>
            <b class="doger">paises</b>.<b class="golden">splice(</b><b class="letra-B">1, 2,</b> <b class="naranja">"ecuador"</b>, <b class="naranja">"brasil"</b><b class="golden">)</b> 
            <button class="btn-consola2" onclick="ejecutarmutables('splice2')">splice</button>
        </p>

        <p>
            <b>Extraer</b> <br>
            <b class="doger">paises</b>.<b class="golden">splice(</b><b class="letra-B">2, 1<b class="golden">)</b> 
            <button class="btn-consola2" onclick="ejecutarmutables('splice3')">splice</button>
        </p>
        `
        consola.innerHTML = `
        <b class="doger">paises</b> ${paises}

        <p>
            <b class="verde">//Eliminar indice 2</b> <br>
            <b class="doger">paises</b>.<b class="golden">splice()</b> ${elemento} <br>
            <b class="doger">paises</b>.<b class="golden">[<b class="verde">2</b>]</b> ${paises[2]} <br>
        </p>
        `
    }
    
}ejecutarmutables("sort")

    //inmutables
function ejecutarinmutables(metodo){
    
    const animales = ["Dog","Cat","Duck","Elephant","Mouse","Camell"]
    const palabras = ["Guitarra","Pua","Cuerda","Cable","Guitarra","Cable","Microfono","Guitarra","Pua","Cuerda","Cable","Guitarra"]
    const ciudades = ["Merida","Caracas","Falcon"]
    const multiplos = [1,2,3,4,5,6,7,8,9,10]
    const multiplosDecinco = [5,10,15,20,25]
    const clientes = [
        {name: "Andres", producto: "iphone", precio: 1200 , premium: true},
        {name: "Camilo", producto: "audifonos", precio: 120 , premium: false},
        {name: "Rodrigo", producto: "cargador", precio: 50 , premium: false},
        {name: "David", producto: "funda", precio: 80 , premium: true}
    ]
    
    if(metodo == "concat"){
        const consola = document.getElementById("consola-concat") 
        let nuevo = ciudades.concat("Tachira","Margarita")
        let paisYciudad = ciudades.concat(paises)

        consola.innerHTML = `
        <b class="sky">nuevo</b><br> ${nuevo} <br><br>
        <b class="sky">paisYciudad</b> ${paisYciudad} <br>
        `

    }else if(metodo == "map"){
        const consola = document.getElementById("consola-map") 

        //sintaxis 1
        let elevar1 = multiplos.map(function(numero,index) {
            return `indice:${index}: ${numero * numero}<br>`
        })

        //sintaxis 2
        let elevar2 = multiplos.map(num => num * num)

        consola.innerHTML = `
        <b class="doger">multiplos</b><br>
        [${multiplos}] <br> <br>
        <b class="sky">elevar1</b><br>
        [${elevar1}] <br> 
        <b class="sky">elevar2</b><br>
        [${elevar2}]` 

    }else if(metodo == "forEach"){
        const consola = document.getElementById("consola-forEach") 
        let suma = 0
        let sumados = 0
        let proceso = ""

        multiplos.forEach(num => suma += num)

        multiplos.forEach(function(a,b,c) {
            proceso += `<hr> lista: ${c}; iteracion: ${b}; numero: ${a} + ${sumados} es igual ${sumados + a}`
            sumados += a
        })

        consola.innerHTML = `${suma} ${proceso}`

    }
    //Filter
    else if(metodo == "filtrar-numeros"){
        const consola = document.getElementById("consola-filter") 
        const codigo = document.getElementById("codigo-filter") 

        //filtrar numeros pares
        let filtrarPares = multiplos.filter(num => num % 2 == 0)

        //filtrar numeros impares
        let filtrarImpares = multiplos.filter(function(num){return num % 2 == 1})

        //filtrar mayores a 5
        let filtrarmayoresa5 = []
            for(let i = 0; i < multiplos.length; i++){
            if(multiplos[i] > 5){
                filtrarmayoresa5.push(multiplos[i])
            }
        }
        
        codigo.innerHTML = `
            <b class="azul">const</b> <b class="doger">multiplos</b> = 
            <b class="morado">[</b><b class="verde">1</b>, <b class="verde">2</b>, <b class="verde">3</b>, <b class="verde">4</b>, <b class="verde">5</b>, <b class="verde">6</b>, <b class="verde">7</b>, <b class="verde">8</b>, <b class="verde">9</b>, <b class="verde">10</b><b class="morado">]</b> <br><br>
            
            <b class="letra-B">Filtrar numeros pares</b><br>
            <b class="azul">let</b> <b class="sky">filtrarPares</b> =
            <b class="doger">multiplos</b>.<b class="golden">filter(</b><b class="sky">num</b> 
            <b class="azul">=&gt;</b> <b class="sky">num</b> % <b class="verde">2</b> == <b class="verde">0</b><b class="golden">)</b> <br><br>

            <b class="letra-B">Filtrar numeros impares</b><br>
            <b class="azul">let</b> <b class="sky">filtrarImpares</b> =
            <b class="doger">multiplos</b>.<b class="golden">filter(</b><b class="azul">function</b><b class="morado">(<b class="sky">num</b>) {return</b> 
            <b class="sky">num</b> % <b class="verde">2</b> == <b class="verde">1</b><b class="morado">}</b><b class="golden">)</b> <br><br>

            <b class="letra-B">Filtrar mayores a 5</b><br>
            <b class="azul">let</b> <b class="sky">filtrarmayoresa5</b> = <b class="golden">[]</b><br>
            <b class="morado">for</b><b class="golden">(</b><b class="azul">let</b> <b class="sky">i</b> = <b class="verde">0</b> ; <b class="sky">i</b> &lt; <b class="doger">multiplos</b>.<b class="sky">length</b> ; <b class="sky">i</b> ++ <b class="golden">){</b> <br>
        
            &emsp;&emsp;<b class="morado">if(</b><b class="doger">multiplos</b><b class="azul">[<b class="sky">i</b>]</b> > <b class="sky">5</b><b class="morado">) {</b><br>  
            &emsp; &emsp; <b class="sky">filtrarmayoresa5</b>.<b class="golden">push</b><b class="morado">(</b><b class="doger">multiplos</b><b class="azul">[<span class="sky">i</span>]</b><b class="morado">)</b> <br>
            <b class="golden">}</b>
        `

        consola.innerHTML = `
        <b class="sky">filtrarPares</b> [<b class="verde">${filtrarPares}</b>] <br><br>
        <b class="sky">filtrarImpares</b> [<b class="verde">${filtrarImpares}</b>] <br><br>
        <b class="sky">filtrarmayoresa5</b> [<b class="verde">${filtrarmayoresa5}</b>] <br>
        `


    }else if(metodo == "filtrar-palabras"){
        const consola = document.getElementById("consola-filter") 
        const codigo = document.getElementById("codigo-filter") 

        //filtrar palabras con menos de 5 letras
        let tresletras = animales.filter(palabra => palabra.length < 4)

        let cuatroletras = animales.filter(function(palabra) {return palabra.length == 4})

        let masdecinco = []
        for(let i = 0; i < animales.length; i++){
            if(animales[i].length > 5){
                masdecinco.push(animales[i])
            }
        }

        codigo.innerHTML = `
        <b class="azul">const</b> <b class="doger">animales</b> = 
        <b class="morado">[</b><b class="naranja">"Dog"</b>, <b class="naranja">"Cat"</b>, <b class="naranja">"Duck"</b>, <b class="naranja">"Elephant"</b>, <b class="naranja">"Mouse"</b>, <b class="naranja">"Camell"</b><b class="morado">]</b> <br><br>
        
        <b class="letra-B">Filtrar palabras con tres letras</b><br>
        <b class="azul">let</b> <b class="sky">tresletras</b> =
        <b class="doger">animales</b>.<b class="golden">filter(</b><b class="sky">palabra</b> 
        <b class="azul">=&gt;</b> <b class="sky">palabra</b>.<b class="doger">length</b> < <b class="verde">4</b><b class="golden">)</b> <br><br>

        <b class="letra-B">Filtrar palabras con cuatro letras</b><br>
        <b class="azul">let</b> <b class="sky">cuatroletras</b> =
        <b class="doger">animales</b>.<b class="golden">filter(</b><b class="azul">function</b><b class="morado">(<b class="sky">palabra</b>) {<br> &emsp; return</b>
        <b class="sky">palabra</b>.<b class="doger">length</b> == <b class="verde">4</b> <br> <b class="morado">}</b><b class="golden">)</b> <br><br>

        <b class="letra-B">Filtrar palabras con mas de 5 letras</b><br>
        <b class="azul">let</b> <b class="sky">masdecinco</b> = <b class="golden">[]</b><br>
        <b class="morado">for</b><b class="golden">(</b><b class="azul">let</b> <b class="sky">i</b> = <b class="verde">0</b> ; <b class="sky">i</b> &lt; <b class="doger">animales</b>.<b class="sky">length</b> ; <b class="sky">i</b> ++ <b class="golden">){</b> <br>
    
        &emsp;&emsp;<b class="morado">if(</b><b class="doger">animales</b><b class="azul">[<b class="sky">i</b>]</b>.<b class="doger">length</b> > <b class="verde">5</b><b class="morado">) {</b><br>  
        &emsp; &emsp; <b class="sky">masdecinco</b>.<b class="golden">push</b><b class="morado">(</b><b class="doger">animales</b><b class="azul">[<span class="sky">i</span>]</b><b class="morado">)</b> <br>
        &emsp;  <b class="morado">}</b> <br>
        <b class="golden">}</b>
        `

        consola.innerHTML = `
        <b class="sky">tresletras</b> [<b class="naranja">${tresletras}</b>] <br><br>
        <b class="sky">cuatroletras</b> [<b class="naranja">${cuatroletras}</b>] <br><br>
        <b class="sky">masdecinco</b> [<b class="naranja">${masdecinco}</b>] <br>
        `

    }else if(metodo == "filtrar-objetos"){
        const consola = document.getElementById("consola-filter") 
        const codigo = document.getElementById("codigo-filter") 

        //filtrar palabras con menos de 5 letras
        let menorPrecio = clientes.filter(item => item.precio < 100)

        let mayorPrecio = clientes.filter(function(item) {return item.precio > 100})

        let clientesPremium = []
        for(let i = 0; i < clientes.length; i++){
            if(clientes[i].premium){
                clientesPremium.push(clientes[i])
            }
        }

        codigo.innerHTML = `
        <div style="font-size: 1.2rem">
            <b class="azul">const</b> <b class="doger">clientes</b> = <b class="morado">[</b><br>
            &emsp; <b class="golden">{</b><b class="sky">name:</b> <b class="naranja">"Andres"</b>, <b class="sky">producto:</b> <b class="naranja">"iphone"</b>, <b class="sky">precio</b> <b class="verde">"1200"</b>, <b class="sky">premium</b> <b class="azul">"true"</b><b class="golden">}</b>, <br>
            &emsp; <b class="golden">{</b><b class="sky">name:</b> <b class="naranja">"Camilo"</b>, <b class="sky">producto:</b> <b class="naranja">"audifonos"</b>, <b class="sky">precio</b> <b class="verde">"120"</b>, <b class="sky">premium</b> <b class="azul">"false"</b><b class="golden">}</b>, <br>
            &emsp; <b class="golden">{</b><b class="sky">name:</b> <b class="naranja">"Rodrigo"</b>, <b class="sky">producto:</b> <b class="naranja">"cargador"</b>, <b class="sky">precio</b> <b class="verde">"50"</b>, <b class="sky">premium</b> <b class="azul">"false"</b><b class="golden">}</b>, <br>
            &emsp; <b class="golden">{</b><b class="sky">name:</b> <b class="naranja">"David"</b>, <b class="sky">producto:</b> <b class="naranja">"funda"</b>, <b class="sky">precio</b> <b class="verde">"80"</b>, <b class="sky">premium</b> <b class="azul">"true"</b><b class="golden">}</b> <br>
            <b class="morado">]</b> <br><br>
        </div>
        
        <b class="letra-B">Filtrar compras menores a 100 </b><br>
        <b class="azul">let</b> <b class="sky">menorPrecio</b> =
        <b class="doger">animales</b>.<b class="golden">filter(</b><b class="sky">item</b> 
        <b class="azul">=&gt;</b> <b class="sky">item</b>.<b class="sky">precio</b> < <b class="verde">100</b><b class="golden">)</b> <br><br>

        <b class="letra-B">Filtrar compras mayores a 100</b><br>
        <b class="azul">let</b> <b class="sky">mayorPrecio</b> =
        <b class="doger">animales</b>.<b class="golden">filter(</b><b class="azul">function</b><b class="morado">(<b class="sky">item</b>) {<br> &emsp; return</b>
        <b class="sky">item</b>.<b class="sky">precio</b> > <b class="verde">100</b> <br> <b class="morado">}</b><b class="golden">)</b> <br><br>

        <b class="letra-B">Filtrar clientes premium</b><br>
        <b class="azul">let</b> <b class="sky">clientesPremium</b> = <b class="golden">[]</b><br>
        <b class="morado">for</b><b class="golden">(</b><b class="azul">let</b> <b class="sky">i</b> = <b class="verde">0</b> ; <b class="sky">i</b> &lt; <b class="doger">clientes</b>.<b class="sky">length</b> ; <b class="sky">i</b> ++ <b class="golden">){</b> <br>
    
        &emsp;&emsp;<b class="morado">if(</b><b class="doger">clientes</b><b class="azul">[<b class="sky">i</b>]</b>.<b class="sky">premium</b><b class="morado">) {</b><br>  
        &emsp; &emsp; <b class="sky">clientesPremium</b>.<b class="golden">push</b><b class="morado">(</b><b class="doger">clientes</b><b class="azul">[<span class="sky">i</span>]</b><b class="morado">)</b> <br>
        &emsp;  <b class="morado">}</b> <br>
        <b class="golden">}</b>
        `

        consola.innerHTML = `
        <b class="sky">menorPrecio</b><br> <b class="naranja" style="font-size: 0.9rem">${JSON.stringify(menorPrecio)}</b><br><br>
        <b class="sky">mayorPrecio</b><BR> <b class="naranja" style="font-size: 0.9rem">${JSON.stringify(mayorPrecio)}</b> <br><br>
        <b class="sky">clientesPremium</b> <b class="naranja" style="font-size: 0.9rem">${JSON.stringify(clientesPremium)}</b> <br>
        `

    }
    
    //reduce
    else if(metodo == "reducir-numeros"){
        const consola = document.getElementById("consola-reduce")
        const codigo = document.getElementById("codigo-reduce")

        //metodo reduce
        let reducir = multiplos.reduce((acumulador, valoractual) => acumulador + valoractual, 0)
        
        //funcion tradicional
        let suma = 0
        for(let i = 0; i < multiplos.length; i++){
            suma += multiplos[i]
        }

        codigo.innerHTML = `
        <code>
            <b class="azul">let</b> <b class="doger">multiplos</b> = 
            <b class="morado">[</b><b class="verde">1</b>, <b class="verde">2</b>, <b class="verde">3</b>, <b class="verde">4</b>, <b class="verde">5</b>,
            <b class="verde">6</b>, <b class="verde">7</b>, <b class="verde">8</b>, <b class="verde">9</b>, <b class="verde">10</b><b class="morado">]</b>  <br><br>
                                                                
            <b class="azul">let</b> <b class="sky">reducir</b> =
            <b class="doger">multiplos</b>.<b class="golden">reduce(</b><b class="morado">(</b><b class="sky">acumulador</b>, <b class="sky">valorActual</b><b class="morado">)</b>
            <b class="azul">=&gt;</b> <br> <b class="sky">acumulador</b> + <b class="sky">valorActual</b>, <b class="verde">0</b><b class="golden">)</b> <br><br>
        </code>

        <code>
            <b>funcion tradicional</b><br>
            <b class="azul">let</b> <b class="sky">suma</b> = <b class="verde">0</b> <br><br>
        
            <b class="morado">for</b><b class="golden">(</b>
            <b class="azul">let</b> <b class="sky">i</b> = <b class="verde">0</b> ;
            <b class="sky">i</b> &lt; <b class="doger">multiplos</b>.<b class="sky">length</b> ;
            <b class="sky">i</b> ++ <b class="golden">){</b> <br> 
        
            &emsp;&emsp;<b class="sky">suma</b> += <b class="doger">multiplos</b><b class="azul">[<span class="sky">i</span>]</b> <br>
            <b class="golden">}</b>
        </code>
        `
        
        consola.innerHTML = `
        <b class="sky">reducir</b>  ${reducir}<br>
        <b class="sky">suma</b>  ${suma}<br>
       
        `
    }else if(metodo == "reducir-palabras"){
        const consola = document.getElementById("consola-reduce")
        const codigo = document.getElementById("codigo-reduce")

        let frecuencia = palabras.reduce((acumulador, valorActual) => {
            if(acumulador[valorActual]){
                acumulador[valorActual]++
            }else{
                acumulador[valorActual] = 1
            }
            return acumulador
        }, {} )

        codigo.innerHTML = `
        <code>
            <b class="azul">const</b> <b class="doger">palabras</b> = 
            <b class="morado">[</b><b class="naranja">"Guitarra"</b>, <b class="naranja">"Pua"</b>, <b class="naranja">"Cuerda"</b>, <b class="naranja">"Cable"</b>, <b class="naranja">"Guitarra"</b>, <b class="naranja">"Cable"</b>, <b class="naranja">"microfono"</b>,
            <b class="naranja">"Guitarra"</b>, <b class="naranja">"Pua"</b>, <b class="naranja">"Cuerda"</b>, <b class="naranja">"Cable"</b>, <b class="naranja">"Guitarra"</b><b class="morado">]</b> <br><br>
                                                                
            <b class="azul">let</b> <b class="sky">frecuencia</b> =
            <b class="doger">palabras</b>.<b class="golden">reduce(</b><b class="morado">(</b><b class="sky">acumulador</b>, <b class="sky">valorActual</b><b class="morado">)</b> <b class="azul">=&gt;</b> <b class="morado">{</b> <br> 
            
            &emsp;&emsp;<b class="morado">if</b><b class="azul">(</b><b class="sky">acumulador</b><b class="golden">[<b class="sky">valorActual</b>]</b><b class="azul">) {</b> <br>
            &emsp;&emsp;&emsp;&emsp;<b class="sky">acumulador</b><b class="golden">[<b class="sky">valorActual</b>]</b> <b class="letra-B">++</b> <br>
            &emsp;&emsp;<b class="azul">}</b><b class="morado">else</b><b class="azul">{</b> <br>
            &emsp;&emsp;&emsp;&emsp;<b class="sky">acumulador</b><b class="golden">[<b class="sky">valorActual</b>]</b> = <b class="verde">1</b> <br>
            &emsp;&emsp;<b class="azul">}</b> <br>
            &emsp;&emsp;<b class="morado">return</b> <b class="sky">acumulador</b><br>
            <b class="morado">}</b>, <b class="morado">{}</b> <b class="golden">)</b> <br>
            <br>
        </code>
        `

        consola.innerHTML = `
        <b class="sky">frecuencia</b>
        ${JSON.stringify(frecuencia,null,2)}
        `
    }else if(metodo == "Transformar-Reducir"){
        const consola = document.getElementById("consola-reduce")
        const codigo = document.getElementById("codigo-reduce")

        let transformar = clientes.map(item => item.premium)
        let frecuencia = transformar.reduce((acumulador, valorActual) => {
            if(acumulador[valorActual]){
                acumulador[valorActual]++
            }else{
                acumulador[valorActual] = 1
            }
            return acumulador
        }, {} )

        codigo.innerHTML = `
        <code>
            <div>
                <b class="azul">const</b> <b class="doger">clientes</b> = <b class="morado">[</b><br>
                &emsp; <b class="golden">{</b><b class="sky">name:</b> <b class="naranja">"Andres"</b>, <b class="sky">producto:</b> <b class="naranja">"iphone"</b>, <b class="sky">precio</b> <b class="verde">"1200"</b>, <b class="sky">premium</b> <b class="azul">"true"</b><b class="golden">}</b>, <br>
                &emsp; <b class="golden">{</b><b class="sky">name:</b> <b class="naranja">"Camilo"</b>, <b class="sky">producto:</b> <b class="naranja">"audifonos"</b>, <b class="sky">precio</b> <b class="verde">"120"</b>, <b class="sky">premium</b> <b class="azul">"false"</b><b class="golden">}</b>, <br>
                &emsp; <b class="golden">{</b><b class="sky">name:</b> <b class="naranja">"Rodrigo"</b>, <b class="sky">producto:</b> <b class="naranja">"cargador"</b>, <b class="sky">precio</b> <b class="verde">"50"</b>, <b class="sky">premium</b> <b class="azul">"false"</b><b class="golden">}</b>, <br>
                &emsp; <b class="golden">{</b><b class="sky">name:</b> <b class="naranja">"David"</b>, <b class="sky">producto:</b> <b class="naranja">"funda"</b>, <b class="sky">precio</b> <b class="verde">"80"</b>, <b class="sky">premium</b> <b class="azul">"true"</b><b class="golden">}</b> <br>
                <b class="morado">]</b> <br><br>
            </div>

            <div>   
                <b>crear array con elementos del objeto</b><br>               
                <b class="azul">const</b> <b class="doger">transformar</b> =
                <b class="doger">clientes</b>.<b class="golden">map(</b><b class="sky">item</b> 
                <b class="azul">=&gt;</b> <b class="sky">item</b>.<b class="sky">premium</b><b class="golden">)</b> <br><br>
            </div>
            
            <div>
                <b>reducir frecuencias de elementos</b><br>  
                <b class="azul">let</b> <b class="sky">frecuencia</b> =
                <b class="doger">transformar</b>.<b class="golden">reduce(</b><b class="morado">(</b><b class="sky">acumulador</b>, <b class="sky">valorActual</b><b class="morado">)</b> <b class="azul">=&gt;</b> <b class="morado">{</b> <br> 
                
                &emsp;&emsp;<b class="morado">if</b><b class="azul">(</b><b class="sky">acumulador</b><b class="golden">[<b class="sky">valorActual</b>]</b><b class="azul">) {</b> <br>
                &emsp;&emsp;&emsp;&emsp;<b class="sky">acumulador</b><b class="golden">[<b class="sky">valorActual</b>]</b> <b class="letra-B">++</b> <br>
                &emsp;&emsp;<b class="azul">}</b><b class="morado">else</b><b class="azul">{</b> <br>
                &emsp;&emsp;&emsp;&emsp;<b class="sky">acumulador</b><b class="golden">[<b class="sky">valorActual</b>]</b> = <b class="verde">1</b> <br>
                &emsp;&emsp;<b class="azul">}</b> <br>
                &emsp;&emsp;<b class="morado">return</b> <b class="sky">acumulador</b><br>
                <b class="morado">}</b>, <b class="morado">{}</b> <b class="golden">)</b> <br>
            </div>
        </code>
        `

        consola.innerHTML = `
        <b class="doger">transformar</b>
        ${transformar}<br><br>
        <b class="sky">frecuencia</b>
        ${JSON.stringify(frecuencia,null,2)}
        `
    }else if(metodo == "Reducir-rangos"){
        const consola = document.getElementById("consola-reduce")
        const codigo = document.getElementById("codigo-reduce")

        let frecuencia = multiplos.reduce((acumulador, valorActual) => {
            if(valorActual < 6){
                acumulador["1-5"] += 1
            }else if(valorActual > 5 && valorActual < 9){
                acumulador["6-8"] += 1
            }else{
                acumulador["9-10"] += 1
            }
            return acumulador
        }, {"1-5":0, "6-8":0, "9-10":0} )

        codigo.innerHTML = `
        <code>
            <b class="azul">let</b> <b class="doger">multiplos</b> = 
            <b class="morado">[</b><b class="verde">1</b>, <b class="verde">2</b>, <b class="verde">3</b>, <b class="verde">4</b>, <b class="verde">5</b>,
            <b class="verde">6</b>, <b class="verde">7</b>, <b class="verde">8</b>, <b class="verde">9</b>, <b class="verde">10</b><b class="morado">]</b>  <br><br>
                                                                
            <b class="azul">let</b> <b class="sky">frecuencia</b> =
            <b class="doger">multiplos</b>.<b class="golden">reduce(</b><b class="morado">(</b><b class="sky">acumulador</b>, <b class="sky">valorActual</b><b class="morado">)</b> <b class="azul">=&gt;</b> <b class="morado">{</b> <br> 
            
            &emsp;&emsp;<b class="morado">if</b><b class="azul">(</b><b class="sky">valorActual</b> &lt; <b class="verde">6</b><b class="azul">) {</b> <br>
            &emsp;&emsp;&emsp;&emsp;<b class="sky">acumulador</b><b class="golden">[<b class="naranja">"1-5"</b>]</b> <b class="letra-B">+=</b> <b class="verde">1</b><br>
            &emsp;&emsp;<b class="azul">}</b><br>
           
            &emsp;&emsp;<b class="morado">else if</b><b class="azul">(</b><b class="sky">valorActual</b> &gt; <b class="verde">5</b> && <b class="sky">valorActual</b> &lt; <b class="verde">9</b><b class="azul">) {</b> <br>  
            &emsp;&emsp;&emsp;&emsp;<b class="sky">acumulador</b><b class="golden">[<b class="naranja">"6-8"</b>]</b> <b class="letra-B">+=</b> <b class="verde">1</b><br>
            &emsp;&emsp;<b class="azul">}</b> <br>

            &emsp;&emsp;<b class="morado">else</b><b class="azul">{</b> <br>
            &emsp;&emsp;&emsp;&emsp;<b class="sky">acumulador</b><b class="golden">[<b class="naranja">"9-10"</b>]</b> <b class="letra-B">+=</b> <b class="verde">1</b><br>
            &emsp;&emsp;<b class="azul">}</b> <br>

            &emsp;&emsp;<b class="morado">return</b> <b class="sky">acumulador</b><br>
            <b class="morado">}</b>, <b class="morado">{}</b> <b class="golden">)</b> <br>
            <br>
        </code>
        `

        consola.innerHTML = `
        <b class="sky">frecuencia</b>
        ${JSON.stringify(frecuencia)}
        `
    }
    
    //find and findIndex
    else if(metodo == "find"){
        const consola = document.getElementById("consola-find")

        let encontrar = multiplosDecinco.find(num => num > 10)
        let encontrarIndice = multiplosDecinco.findIndex(num => num == 20)

        let respuesta
        for(let i=0; i < multiplosDecinco.length; i++){
            if(multiplosDecinco[i] > 12){
                respuesta = multiplosDecinco[i]
                break
            }
        }

        consola.innerHTML = `
        <b class="verde">//Encontrar numero mayor a 10</b><br>
        <b class="sky">encontrar</b> ${encontrar}<br><br>

        <b class="verde">//Encontrar numero 20</b><br>
        <b class="sky">encontrarIndice</b> ${encontrarIndice}<br><br>

        <b class="verde">//Encontrar numero mayor a 12</b><br>
        <b class="sky">respuesta</b> ${respuesta}<br>
        ` 
        
    }
    
    else if(metodo == "slice"){
        const consola = document.getElementById("consola-slice")
        const consola2 = document.getElementById("consola-slice2")
        let extraer = animales.slice(1,4)
        let ultimostres = animales.slice(-3)
        consola.textContent = extraer
        consola2.textContent = ultimostres
    }

    //join
    else if(metodo == "join"){
        const codigo = document.getElementById("codigo-join")
        const consola = document.getElementById("consola-join")

        let separar = animales.join()
        let juntar = animales.join("")
        let espacios = animales.join(" ")
        let rayas = animales.join("-")
        let letras = animales.join(" x ")

        let resultado = ""
        for(let i=0; i < animales.length; i++){
            if(i == animales.length -1){
                resultado += animales[i] 
            }else{
                resultado += animales[i] + "-"
            }
        }

        let Revertir = espacios.split(" ")

        consola.innerHTML = `
        <code>
        <b class="verde">//usando el metodo join</b><br>
            <b class="sky">separar</b> ${separar}<br>
            <b class="sky">juntar</b> ${juntar}<br>
            <b class="sky">espacios</b> ${espacios}<br>
            <b class="sky">rayas</b> ${rayas}<br>
            <b class="sky">letras</b><br> ${letras}<br><br>

            <b class="azul">typeof</b> <b class="sky">separar</b> ${typeof separar}<br><br>
        </code>

        <code>
        <b class="verde">//usando funcion tradicional</b><br>
            <b class="sky">resultado</b> ${resultado}<br><br>
        </code>

        <code>
        <b class="verde">//revertir con split</b><br>
            <b class="sky">Revertir</b> ${Revertir}<br>
            <b class="azul">typeof</b> <b class="sky">Revertir</b> ${typeof Revertir}
        </code>
        `
    }

    //flat
    else if(metodo == "flat"){
        const codigo = document.getElementById("consola-flat")
        const consola = document.getElementById("consola-flat")

        const matriz = [[1,2,3],[4,5,6],[7,8,9]]
        const matriz2 = [[1,2,3],[4,[5,6]],[7,[8,9]]]
        const matriz3 = [[1,2,3],[4,[5,6]],[7,[8,[9]]]]

        const dimension = matriz.flat()
        const dimension2 = matriz2.flat(2)
        const dimension3 = matriz3.flat(3)

        const arrayfor = []
        for(let i=0; i<matriz3.length; i++){
            let array = matriz3[i]
            for(let j=0; j<array.length; j++){
                let element = array[j]
                arrayfor.push(element)  
            }
        }

        function aplanar(lista){
            let newlist = []
            if(typeof lista != "object") {
                return [lista]
            } 

            lista.forEach(element => {
                newlist = newlist.concat(aplanar(element))
            })
            return newlist
        }

        consola.innerHTML = `
        <code>
        <b class="verde">//metodo flat</b> <br>
        <b class="doger">dimension</b> ${JSON.stringify(dimension)} <br>
        <b class="doger">dimension2</b> ${JSON.stringify(dimension2)} <br>
        <b class="doger">dimension3</b> ${JSON.stringify(dimension3)} <br><br>

        <b class="verde">//metodo for</b> <br>
        <b class="doger">arrayfor</b> ${JSON.stringify(arrayfor)} <br><br>

        <b class="verde">//funcion aplanar</b> <br>
        <b class="golden">aplanar(<b class="doger">matriz3</b>)</b> ${JSON.stringify(aplanar(matriz3))} <br>
        </code>
        `
    }

    //Map en objetos
    else if(metodo == "map-enObjetos"){
        const consola = document.getElementById("consola-mapEnObjetos")

        let precios = clientes.map(item => item.precio)
        let impuestos = clientes.map(item => item.precio * .20)

        consola.innerHTML = `
        <b class="doger">clientes</b><br>
        ${JSON.stringify(clientes)} <br> <br>
        <b class="sky">precios</b><br>
        ${JSON.stringify(precios)} <br> <br>
        <b class="sky">impuestos</b><br>
        ${JSON.stringify(impuestos)} <br> <br>
        `
    }else if(metodo == "map-modificar"){
        const consola = document.getElementById("consola-mapEnObjetos")

        let modificarPrecio = clientes.map(item => item.precio = 500)
        let impuestos = clientes.map(item => item.precio * .20)

        consola.innerHTML = `
        <b class="doger">clientes</b><br>
        ${JSON.stringify(clientes)} <br> <br>
        <b class="sky">modificarPrecio</b><br>
        ${JSON.stringify(modificarPrecio)} <br> <br>
        <b class="sky">impuestos</b><br>
        ${JSON.stringify(impuestos)} <br> <br>
        `
    }else if(metodo == "map-agregar"){
        const consola = document.getElementById("consola-mapEnObjetos")

        let agregarTax = clientes.map(item => item.tax = item.precio * .20)
        let impuestos = clientes.map(item => item.precio * .20)
        
        consola.innerHTML = `
        <b class="doger">clientes</b><br>
        ${JSON.stringify(clientes)} <br> <br>
        <b class="sky">impuestos</b><br>
        ${JSON.stringify(impuestos)} <br> <br>
        <b class="sky">agregarTax</b><br>
        ${JSON.stringify(agregarTax)} <br> <br>
        `
    }else if(metodo == "map-crear"){
        const consola = document.getElementById("consola-mapEnObjetos")

        let copiarYextender = clientes.map(item => {
            return {...item, tax: item.precio * .20}
        })
        
        consola.innerHTML = `
        <b class="doger">clientes</b><br>
        ${JSON.stringify(clientes)} <br> <br>
        <b class="sky">copiarYextender</b><br>
        ${JSON.stringify(copiarYextender)} <br> <br>
        `
    }

    //some , every , includes
    if(metodo == "some"){
        const consola = document.getElementById("consola-some") 
        const codigo = document.getElementById("codigo-some") 

        //saber si hay numero par
        let respuesta1 = multiplos.some(num => num % 2 == 0)

        //saber si hay numero impar
        let respuesta2 = multiplos.some(function(num){return num % 2 == 1})

        //saber si hay numero mayor a 5
        let respuesta3 
            for(let i = 0; i < multiplos.length; i++){
            if(multiplos[i] > 5){
                respuesta3 = true
            }
        }
        
        codigo.innerHTML = `
            <b class="azul">const</b> <b class="doger">multiplos</b> = 
            <b class="morado">[</b><b class="verde">1</b>, <b class="verde">2</b>, <b class="verde">3</b>, <b class="verde">4</b>, <b class="verde">5</b>, <b class="verde">6</b>, <b class="verde">7</b>, <b class="verde">8</b>, <b class="verde">9</b>, <b class="verde">10</b><b class="morado">]</b> <br><br>
            
            <b>saber si hay numero par</b><br>
            <b class="azul">let</b> <b class="sky">respuesta1</b> =
            <b class="doger">multiplos</b>.<b class="golden">some(</b><b class="sky">num</b> 
            <b class="azul">=&gt;</b> <b class="sky">num</b> % <b class="verde">2</b> == <b class="verde">0</b><b class="golden">)</b> <br><br>

            <b>//saber si hay numero impar</b><br>
            <b class="azul">let</b> <b class="sky">respuesta2</b> =
            <b class="doger">multiplos</b>.<b class="golden">some(</b><b class="azul">function</b><b class="morado">(<b class="sky">num</b>) {return</b> 
            <b class="sky">num</b> % <b class="verde">2</b> == <b class="verde">1</b><b class="morado">}</b><b class="golden">)</b> <br><br>

            <b>//saber si hay numero mayor a 5</b><br>
            <b class="azul">let</b> <b class="sky">respuesta3</b> <br>
            <b class="morado">for</b><b class="golden">(</b><b class="azul">let</b> <b class="sky">i</b> = <b class="verde">0</b> ; <b class="sky">i</b> &lt; <b class="doger">multiplos</b>.<b class="sky">length</b> ; <b class="sky">i</b> ++ <b class="golden">){</b> <br>
        
            &emsp;&emsp;<b class="morado">if(</b><b class="doger">multiplos</b><b class="azul">[<b class="sky">i</b>]</b> > <b class="verde">5</b><b class="morado">) {</b><br>  
            &emsp; &emsp; <b class="sky">respuesta3</b> = <b class="azul">true</b> <br>
            <b class="golden">}</b>
        `

        consola.innerHTML = `
        <b class="sky">respuesta1</b> <b class="verde">${respuesta1}</b> <br><br>
        <b class="sky">respuesta2</b> <b class="verde">${respuesta2}</b> <br><br>
        <b class="sky">respuesta3</b> <b class="verde">${respuesta3}</b> <br>
        `


    }else if(metodo == "every"){
        const consola = document.getElementById("consola-some") 
        const codigo = document.getElementById("codigo-some") 
        const multiplos = [1,2,3,4,5,6,7,8]

        //saber si los numeros son pares
        let respuesta1 = multiplos.every(num => num % 2 == 0)

        //saber si los numeros son menores a 20
        let respuesta2 = multiplos.every(function(num){return num < 20})

        //saber si los numeros son mayores a 5
        let respuesta3 = []
        let final 

        for(let i = 0; i < multiplos.length; i++){
            if(multiplos[i] > 5) respuesta3.push(true) 
            else respuesta3.push(false)   
        }

        for(let i = 0; i < respuesta3.length; i++){
            if(respuesta3[i] == false){
                final = false
            }
        }
            
        
        codigo.innerHTML = `
            <b class="azul">const</b> <b class="doger">multiplos</b> = 
            <b class="morado">[</b><b class="verde">1</b>, <b class="verde">2</b>, <b class="verde">3</b>, <b class="verde">4</b>, <b class="verde">5</b>, <b class="verde">6</b>, <b class="verde">7</b>, <b class="verde">8</b><b class="morado">]</b> <br><br>
            
            <b>saber si los numeros son pares</b><br>
            <b class="azul">let</b> <b class="sky">respuesta1</b> =
            <b class="doger">multiplos</b>.<b class="golden">every(</b><b class="sky">num</b> 
            <b class="azul">=&gt;</b> <b class="sky">num</b> % <b class="verde">2</b> == <b class="verde">0</b><b class="golden">)</b> <br><br>

            <b>saber si los numeros son menores a 20</b><br>
            <b class="azul">let</b> <b class="sky">respuesta2</b> =
            <b class="doger">multiplos</b>.<b class="golden">every(</b><b class="azul">function</b><b class="morado">(<b class="sky">num</b>) {return</b> 
            <b class="sky">num</b> &lt; <b class="verde">20</b><b class="morado">}</b><b class="golden">)</b> <br><br>

            <code>
                <b>saber si los numeros son mayores a 5</b><br>
                <b class="azul">let</b> <b class="sky">respuesta3</b> = <b class="golden">[]</b> <br>
                <b class="azul">let</b> <b class="sky">final</b>  <br><br>

                <b class="morado">for</b><b class="golden">(</b><b class="azul">let</b> <b class="sky">i</b> = <b class="verde">0</b> ; <b class="sky">i</b> &lt; <b class="doger">multiplos</b>.<b class="sky">length</b> ; <b class="sky">i</b> ++ <b class="golden">){</b> <br>
            
                &emsp;&emsp;<b class="morado">if(</b><b class="doger">multiplos</b><b class="azul">[<b class="sky">i</b>]</b> > <b class="verde">5</b><b class="morado">) </b>
                <b class="sky">respuesta3</b>.<b class="golden">push(<b class="azul">true</b>)</b> <br>

                &emsp;&emsp;<b class="morado">else</b>
                <b class="sky">respuesta3</b>.<b class="golden">push(<b class="azul">false</b>)</b> <br>
                <b class="golden">}</b><br>
                
                <b class="morado">for</b><b class="golden">(</b><b class="azul">let</b> <b class="sky">i</b> = <b class="verde">0</b> ; <b class="sky">i</b> &lt; <b class="sky">respuesta3</b>.<b class="sky">length</b> ; <b class="sky">i</b> ++ <b class="golden">){</b> <br>
            
                &emsp;&emsp;<b class="morado">if(</b><b class="sky">respuesta3</b><b class="azul">[<b class="sky">i</b>]</b> == <b class="azul">false</b><b class="morado">) </b>
                <b class="sky">final</b> = <b class="azul">false</b> <br>
                <b class="golden">}</b>
            </code>
        `

        consola.innerHTML = `
        <b class="sky">respuesta1</b> <b class="azul">${respuesta1}</b> <br><br>
        <b class="sky">respuesta2</b> <b class="azul">${respuesta2}</b> <br><br>
        <b class="sky">respuesta3</b> <b class="azul">${respuesta3}</b> <br>
        <b class="sky">final</b> <b class="azul">${final}</b> <br>
        `
    }else if(metodo == "includes"){
        const consola = document.getElementById("consola-some") 
        const codigo = document.getElementById("codigo-some") 

        const palabra = "Computadora"

        //saber si los numeros son pares
        let respuesta1 = ciudades.includes("Falcon")
        let respuestaIndice = ciudades.includes("Caracas",2)

        //saber si los numeros son menores a 20
        let respuesta2 = palabra.includes("x")
            
        codigo.innerHTML = `
            <b class="azul">const</b> <b class="doger">palabra</b> = <b class="naranja">"Computadora"</b> <br>
            <b class="azul">const</b> <b class="doger">ciudades</b> = <b class="golden">[</b><b class="naranja">"Merida"</b>,<b class="naranja">"Caracas"</b>,<b class="naranja">"Falcon"</b><b class="golden">]</b> <br><br>
            
            <b>Encontrar palabra en array</b><br>
            <b class="azul">let</b> <b class="sky">respuesta1</b> =
            <b class="doger">ciudades</b>.<b class="golden">includes(<b class="naranja">"Falcon"</b>)</b> <br>
            <b class="azul">let</b> <b class="sky">respuestaIndice</b> =
            <b class="doger">ciudades</b>.<b class="golden">includes(</b><b class="naranja">"Caracas"</b>, <b class="verde">2</b><b class="golden">)</b> <br><br>

            <b>Encontrar letra en string</b><br>
            <b class="azul">let</b> <b class="sky">respuesta2</b> =
            <b class="doger">palabra</b>.<b class="golden">includes(</b><b class="naranja">"x"</b><b class="golden">)</b> <br><br>
        `

        consola.innerHTML = `
        <b class="verde">//buscar palabra</b><br>
        <b class="sky">respuesta1</b> <b class="azul">${respuesta1}</b> <br><br>
        
        <b class="verde">//buscar palabra desde el indice 2</b><br>
        <b class="sky">respuestaIndice</b> <b class="azul">${respuestaIndice}</b> <br><br>
        
        <b class="verde">//buscar letra</b><br>
        <b class="sky">respuesta2</b> <b class="azul">${respuesta2}</b> <br>
        `
    }

}ejecutarinmutables("flat")

   //iteracion de array
function ejecutarIterarArray(){
    const consola = document.getElementById("consola-iterarArray")
    const consola2 = document.getElementById("consola-iterarArray2")

    let numero = new Array(1,2,3,4,5,6,7,8,9,10)
    let suma = 0

    for(let i = 0; i < numero.length; i++){

        suma += numero[i]
        consola.textContent += suma + " "
        console.log(suma)
    }

    const multiplos = new Array(2,4,6,8,10,12,14,16,18,20)
    let sumas = 0

    for(num of multiplos){
        sumas += num
        consola2.textContent += sumas + " "
    }
}

    //desestructuraciom y spread operator
function ejecutarSpread(tipo){
    const consola = document.getElementById("consola-spread")
    const codigo = document.getElementById("codigo-desestructurar")

    if(tipo == "desestructurar"){
        const array = [45, "Script", 80 , "Java"]

        //desestructurando
        const [primero, segundo, tercero] = array

        //desestructurando valor especifico y valor extra
        const [,,,cuarto, quinto= "nuevo"] = array //valor extra
        const {1: uno} = array

        codigo.innerHTML = `
        <b class="azul">const</b> <b class="doger">array</b> = <b class="golden">[</b>
        <b class="verde">45</b>,<b class="naranja">"Script"</b>,<b class="verde">80</b>,<b class="naranja">"Java"</b> <b class="golden">]</b><br><br>

        <b>//desestructuracion</b><br>
        <b class="azul">const</b> <b class="golden">[</b><b class="doger">primero</b>,<b class="doger">segundo</b>,<b class="doger">tercero</b><b class="golden">]</b> = <b class="doger">array</b> <br><br>
        
        <b>//valor especifico</b><br>
        <b class="azul">const</b> <b class="golden">[</b>,,,<b class="doger">cuarto</b><b class="golden">]</b> = <b class="doger">array</b> <br>
        <b class="azul">const</b> <b class="golden">{</b><b class="verde">1</b>: <b class="doger">uno</b><b class="golden">}</b> = <b class="doger">array</b> <br><br>

        <b>//añadir valor extra al final</b><br>
        <b class="azul">const</b> <b class="golden">[</b>,,,<b class="doger">cuarto</b>,<b class="doger">quinto</b>=<b class="naranja">"nuevo"</b><b class="golden">]</b> = <b class="doger">array</b> <br>

        `

        consola.innerHTML = `
        <b class="verde">//agrupados en array</b><br>
        <b class="golden">[</b><b class="doger">primero</b>,<b class="doger">segundo</b><b class="golden">]</b> ${[primero, segundo]}<br>
        <b class="golden">[</b><b class="doger">cuarto</b>,<b class="doger">segundo</b><b class="golden">]</b> ${[cuarto, segundo]}<br><br>
        
        <b class="verde">//individual</b><br>
        <b class="doger">cuarto</b> ${cuarto}<br>
        <b class="doger">tercero</b> ${tercero}<br>
        <b class="doger">uno</b> ${uno}<br><br>

        <b class="verde">//valor extra</b><br>
        <b class="doger">quinto</b> ${quinto}<br>
        
        `
    }
    else if(tipo == "spread-operator"){
        //Arrays y Objetos
        const array = [1,2,3]
        const array2 = [4,5,6]
        const objeto = { nombre: "Luis", edad: 30 };
        const string = "Javascript"
        function suma(a,b,c){return [a,b,c]}

        //copiar 
        const copiaArray = [...array]
        const copiaObjeto = {...objeto}
        const copiarString = [...string]
        //combinar
        const combinar = [...array,...array2]
        const combinar2 = [...array2,...string]
        //extender
        const extencion = [...array2,7,8,9]
        //parametros
        const parametros = suma(...array)

        codigo.innerHTML = `
            <!-- arrays y objetos -->
            <b class="azul">const</b> <b class="doger">array</b> = <b class="golden">[</b>
            <b class="verde">1</b>,<b class="verde">2</b>,<b class="verde">3</b> <b class="golden">]</b><br>

            <b class="azul">const</b> <b class="doger">array2</b> = <b class="golden">[</b>
            <b class="verde">4</b>,<b class="verde">5</b>,<b class="verde">6</b> <b class="golden">]</b><br>

            <b class="azul">const</b> <b class="doger">objeto</b> = <b class="morado">{</b>
            <b class="sky">nombre:</b> <b class="naranja">"luis"</b>, <b class="sky">edad:</b> <b class="verde">30</b> <b class="morado">}</b><br>

            <b class="azul">const</b> <b class="doger">string</b> = <b class="naranja">"Javascript"</b> <br><br>
        
            <!-- copia -->
            <b>copiar array:</b><br>
            <b class="azul">const</b> <b class="doger">copiaArray</b> = <b class="golden">[</b>...<b class="doger">array</b><b class="golden">]</b><br>
            <b class="azul">const</b> <b class="doger">copiaObjeto</b> = <b class="golden">[</b>...<b class="doger">objeto</b><b class="golden">]</b><br>
            <b class="azul">const</b> <b class="doger">copiarString</b> = <b class="golden">[</b>...<b class="doger">string</b><b class="golden">]</b><br><br>
            
            <!-- combinar -->
            <b>combinar arrays, strings y objetos:</b><br>
            <b class="azul">const</b> <b class="doger">combinar</b> = <b class="golden">[</b>...<b class="doger">array</b>, ...<b class="doger">array2</b>, ...<b class="doger">string</b><b class="golden">]</b><br>
            <b class="azul">const</b> <b class="doger">combinar2</b> = <b class="golden">[</b>...<b class="doger">array2</b>, ...<b class="doger">string</b><b class="golden">]</b><br><br>
            
            <!-- extender -->
            <b>extender array:</b><br>
            <b class="azul">const</b> <b class="doger">extencion</b> = <b class="golden">[</b>...<b class="doger">array2</b>, 
            <b class="verde">7</b>, <b class="verde">8</b>, <b class="verde">9</b><b class="golden">]</b><br><br>

            <b>Pasar parametros:</b><br>
            <b class="azul">function</b> <b class="golden">suma(</b><b class="sky">a</b>,<b class="sky">b</b>,<b class="sky">c</b><b class="golden">){</b> <br>
            &emsp;&emsp;<b class="morado">return</b> <b class="golden">[</b><b class="sky">a</b>,<b class="sky">b</b>,<b class="sky">c</b><b class="golden">]</b> <br>
            <b class="golden">}</b><br>
            <b class="azul">const</b> <b class="doger">parametros</b> = <b class="golden">suma(</b>...<b class="doger">array</b><b class="golden">)</b>
        `

        consola.innerHTML = `
        <b class="verde">//copias</b><br>
        <b class="doger">copiaArray</b> ${copiaArray}<br>
        <b class="doger">copiaObjeto</b> ${JSON.stringify(copiaObjeto)}<br>
        <b class="doger">copiarString</b> ${copiarString}<br><br>

        <b class="verde">//comparar</b><br>
        <b class="doger">copiaArray</b> === <b class="doger">array</b> ${copiaArray === array}<br><br>

        <b class="verde">//cambiar valor en copia</b><br>
        <b class="doger">copiaArray</b><b class="golden">[<b class="verde">1</b>]</b> = <b class="verde">20</b> ${copiaArray[1]=20}<br>
        <b class="doger">copiaArray</b> ${copiaArray}<br>
        <b class="doger">array</b> ${array}<br><br>

        <b class="verde">//combinar</b><br>
        <b class="doger">combinar</b> ${combinar}<br>
        <b class="doger">combinar2</b> ${combinar2}<br><br>

        <b class="verde">//extender</b><br>
        <b class="doger">extencion</b> ${extencion}<br><br>

        <b class="verde">//funcion</b><br>
        <b class="doger">parametros</b> ${parametros}<br>
        `
    }
    else if(tipo == "parametro-rest"){
        //con desestructuracion
        const elementos = [5,4,9,8,3]
        const [first,...resto] = elementos
        //en funciones
        function suma(first, ...resto){
            return `pimero: ${first}, resto: ${resto}`
        }

        consola.innerHTML = `
        <b class="doger">first</b> ${first}<br>
        <b class="doger">resto</b> ${resto}<br><br>
        <b class="golden">suma(</b><b class="verde">12</b>,<b class="verde">24</b>,<b class="verde">36</b><b class="golden">)</b> ${suma(12,24,36)}
        
        `

        codigo.innerHTML = `
        <b class="azul">const</b> <b class="doger">array</b> = <b class="golden">[</b>
        <b class="verde">5</b>,<b class="verde">4</b>,<b class="verde">9</b>,<b class="verde">8</b>,<b class="verde">3</b> <b class="golden">]</b><br><br>
        
        <b>desestructurar y guardar resto</b><br>
        <b class="azul">const</b> <b class="golden">[</b>
        <b class="doger">first</b>, ...<b class="doger">resto</b> <b class="golden">]</b> = <b class="doger">array</b> <br><br>

        <b class="letra-B">En Funciones</b><br>
            <b class="azul">function</b> <b class="golden">suma(</b><b class="sky">first</b>,...<b class="sky">resto</b><b class="golden">){</b> <br>
            &emsp;&emsp;<b class="morado">return</b> <b class="naranja">'primero:</b> <b class="golden">$ {</b><b class="sky">first</b><b class="golden">}</b>
            <b class="naranja">resto:</b> <b class="golden">$ {</b><b class="sky">resto</b><b class="golden">}</b><b class="naranja">'</b> <br>
            <b class="golden">}</b><br>
            
        `
    }
    else if(tipo == "estructuredCloned"){

        const array = [1,2, [3,4] ,5]
        const copia = array
        const clon = structuredClone(array)

        codigo.innerHTML = `
        <b class="azul">const</b> <b class="doger">array</b> = <b class="golden">[</b>
        <b class="verde">1</b>,<b class="verde">2</b>, 
        <b class="morado">[</b><b class="verde">3</b>,<b class="verde">4</b><b class="morado">]</b>,
        <b class="verde">5</b> <b class="golden">]</b><br><br>

        <b>copia normal</b><br>
        <b class="azul">const</b> <b class="doger">copia</b> = <b class="doger">array</b><br><br>
        
        <b>copia con estructuredCloned</b><br>
        <b class="azul">const</b> <b class="doger">clon</b> = <b class="golden">estructuredCloned(<b class="doger">array</b>)</b> <br><br>
        `

        consola.innerHTML = `
        <b class="doger">array</b> ${array}<br>
        <b class="doger">copia</b><b class="golden">[<b class="verde">2</b>]</b> ${copia[2]}<br><br>

        <b class="verde">//cambiar valor en sub-elemento de copia</b><br>
        <b class="doger">copia</b><b class="golden">[<b class="verde">2</b>]</b> = <b class="verde">30</b> ${copia[2]=30}<br>
        <b class="doger">copia</b> ${copia}<br>
        <b class="doger">array</b> ${array}<br><br>

        <b class="verde">//cambiar valor en clon</b><br>
        <b class="doger">clon</b><b class="golden">[<b class="verde">1</b>]</b> = <b class="verde">50</b> ${clon[1]=50}<br>
        <b class="doger">clon</b> ${clon}<br>
        <b class="doger">array</b> ${array}<br><br>
        `
    }
    
}ejecutarSpread("estructuredCloned")


//               OBJETOS
function ejecutarObjeto(tipo){
    const consola = document.getElementById("consola-objeto")
    const codigo = document.getElementById("codigo-objetos")

    const automovil = {
    marca: "Toyota",
    modelo: "Corolla",
    direccion: {calle: 200, carrera: 22},
    vender: function(){
        return `El automovil ${automovil.marca} se vende por 2000$.`
        }
    }

    //desestructuracion
    if(tipo == "desestructurar"){
        let {marca,modelo, direccion:{calle,carrera}} = automovil
        let {marca: brand} = automovil

        function auto ({marca,modelo,direccion}){
            return `${marca} ${modelo} ${direccion.calle}`
        }

        codigo.innerHTML = `
            <b class="azul">const</b> <b class="doger">automovil</b> = <b class="golden">{</b> <br>
            &emsp;&emsp;<b class="sky">marca:</b> <b class="naranja">"Toyota"</b>, <br>
            &emsp;&emsp;<b class="sky">modelo:</b> <b class="naranja">"Corolla"</b>, <br>
            &emsp;&emsp;<b class="sky">direccion:</b>                     
            <b class="morado">{</b><b class="sky">calle:</b> <b class="verde">200</b>, <b class="sky">carrera:</b> <b class="verde">22</b><b class="morado">}</b>, <br>
            <b class="golden">}</b><br><br>

            <b>Desestrucrurar</b><br>
            <b class="azul">const</b> <b class="golden">{</b><b class="sky">marca</b>,
            <b class="sky">modelo</b>, <b class="sky">direccion</b>:<b class="morado">{</b><b class="sky">calle</b>,
            <b class="sky">carrera</b><b class="morado">}</b><b class="golden">}</b> = <b class="doger">automovil</b> <br><br>       
             
            <b>cambiar nombres</b><br>
            <b class="azul">const</b> <b class="golden">{</b><b class="sky">marca</b>:
            <b class="sky">brand</b><b class="golden">}</b> = <b class="doger">automovil</b> <br><br>
             
            <b>enviar a funcion</b><br>
            <b class="azul">function</b> <b class="golden">auto(</b><b class="morado">{</b><b class="sky">marca</b>,
            <b class="sky">modelo</b>, <b class="sky">direccion</b><b class="morado">}</b><b class="golden">) {</b>
            
            <br>&emsp;&emsp;<b class="morado">return</b> <b class="naranja">'</b> 
            <b class="golden">$(</b><b class="sky">marca</b><b class="golden">)</b>
            <b class="golden">$(</b><b class="sky">modelo</b><b class="golden">)</b>
            <b class="golden">$(</b><b class="sky">direccion</b>.<b class="sky">calle</b><b class="golden">)</b>
            <b class="naranja">'</b> 
            <br><b class="golden">}</b>
        `

        consola.innerHTML = `
        <b class="verde">//traer objeto</b><br>
        <b class="morado">{</b><b class="sky">marca</b><b class="morado">}</b> ${JSON.stringify({marca})}<br><br>
        
        <b class="verde">//traer propiedad</b><br>
        <b class="sky">marca</b> ${marca}<br>
        <b class="sky">modelo</b> ${modelo}<br>
        <b class="sky">calle</b> ${calle}<br>
        <b class="sky">carrera</b> ${carrera}<br><br>

        <b class="verde">//propiedad cambiada</b><br>
        <b class="sky">brand</b> ${brand}<br><br>

        <b class="verde">//llamar funcion</b><br>
        <b class="golden">auto(<b class="doger">automovil</b>)</b> ${auto(automovil)}<br>
        
        `
    }
    //añadir y borrar propiedades
    else if(tipo == "objeto"){

        codigo.innerHTML = `
            <b class="azul">const</b> <b class="doger">automovil</b> = <b class="golden">{</b> <br>
            &emsp;&emsp;<b class="sky">marca:</b> <b class="naranja">"Toyota"</b>, <br>
            &emsp;&emsp;<b class="sky">modelo:</b> <b class="naranja">"Corolla"</b>, <br>
            &emsp;&emsp;<b class="sky">direccion:</b>                     
            <b class="morado">{</b><b class="sky">calle:</b> <b class="verde">200</b>, <b class="sky">carrera:</b> <b class="verde">22</b><b class="morado">}</b>, <br>
            
            &emsp;&emsp;<b class="golden">venta:</b> <b class="azul">function</b><b class="morado">() {</b> <br>
            &emsp;&emsp;&emsp;&emsp;<b class="morado">return</b>
            <b class="naranja">'El automovil</b> <b class="azul">$ {</b><b class="doger">automovil</b>.<b class="sky">marca</b><b class="azul">}</b> <b class="naranja">se vende por 2000$.'</b>  <br>
            &emsp;&emsp;<b class="morado">}</b><br>
            <b class="golden">}</b><br><br>

            <b>Añadir nueva propiedad</b> 
            <button class="btn-consola2" onclick="ejecutarObjeto('nueva-propiedad')">añadir</button><br>
            <b class="doger">automovil</b>.<b class="sky">año</b> = <b class="verde">2022</b> <br>

            <b>borrar propiedad:</b>
            <button class="btn-consola2" onclick="ejecutarObjeto('borrar-propiedad')">borrar</button><br>
            <b class="azul">delete</b> <b class="doger">automovil</b>.<b class="sky">año</b>
        `

        consola.innerHTML = `
        <b class="doger">automovil</b> <br> ${JSON.stringify(automovil)} <br><br>
        <b class="aqua">Object</b>.<b class="golden">keys(<b class="doger">automovil</b>)</b> ${Object.keys(automovil)} <br>
        <b class="aqua">Object</b>.<b class="golden">values(</b><b class="doger">automovil</b>.<b class="sky">direccion</b><b class="golden">)</b> ${Object.values(automovil.direccion)} <br>
        <b class="aqua">Object</b>.<b class="golden">entries(</b><b class="doger">automovil</b>.<b class="sky">direccion</b><b class="golden">)</b> ${Object.entries(automovil.direccion)} <br><br>

        <b class="verde">//ver propiedades</b><br>
        <b class="doger">automovil</b>.<b class="sky">marca</b> ${automovil.marca} <br>
        <b class="doger">automovil</b><b class="golden">[<b class="naranja">"modelo"</b>]</b> ${automovil["modelo"]} <br>
        <b class="doger">automovil</b>.<b class="sky">direccion</b>.<b class="sky">calle</b> ${automovil.direccion.calle} <br><br>

        <b class="verde">//ver metodos</b><br>
        <b class="doger">automovil</b>.<b class="golden">vender</b><br> ${automovil.vender} <br>
        <b class="doger">automovil</b>.<b class="golden">vender()</b><br> ${automovil.vender()} <br>
    
    
        `
    }
    //objetos literales
    else if(tipo == "objetos-literales"){

        const nombre = "David"
        const lastname = "Puente"
        const edad = 30

        const usuario = {nombre,edad,apellido:lastname}

        codigo.innerHTML = `
        <code>
            <b class="azul">const</b> <b class="doger">nombre</b> = <b class="naranja">"David"</b> <br>
            <b class="azul">const</b> <b class="doger">lastname</b> = <b class="naranja">"Puente"</b> <br>
            <b class="azul">const</b> <b class="doger">edad</b> = <b class="verde">30</b> <br><br>
        </code> 

        <code>
            <b class="azul">const</b> <b class="doger">usuario</b> = <b class="golden">{</b> <br>
            &emsp;&emsp;<b class="sky">nombre</b>,<br> 
            &emsp;&emsp;<b class="sky">edad</b>,<br>
            &emsp;&emsp;<b class="verde">//cambiar nombre</b><br>
            &emsp;&emsp;<b class="sky">apellido:</b> <b class="doger">lastname</b><br>
            <b class="golden">}</b> <br><br>
        </code> 
        `

        consola.innerHTML = `
        <b class="doger">usuario</b> ${JSON.stringify(usuario)} <br><br>   
        `
    }


    if(tipo == "nueva-propiedad"){
        automovil.año = 2022
    
        consola.innerHTML = `
        <b class="doger">automovil</b> <br> ${JSON.stringify(automovil)} <br><br>

        <b class="verde">//ver propiedades</b><br>
        <b class="doger">automovil</b>.<b class="sky">marca</b> ${automovil.marca} <br>
        <b class="doger">automovil</b>.<b class="sky">modelo</b> ${automovil.modelo} <br>
        <b class="doger">automovil</b>.<b class="sky">direccion</b>.<b class="sky">calle</b> ${automovil.direccion.calle} <br>
        <b class="doger">automovil</b>.<b class="sky">año</b> ${automovil.año} 
        `
    }
    else if(tipo == "borrar-propiedad"){
        delete automovil.año
    
        consola.innerHTML = `
        <b class="doger">automovil</b> <br> ${JSON.stringify(automovil)} <br><br>

        <b class="verde">//ver propiedades</b><br>
        <b class="doger">automovil</b>.<b class="sky">marca</b> ${automovil.marca} <br>
        <b class="doger">automovil</b>.<b class="sky">modelo</b> ${automovil.modelo} <br>
        <b class="doger">automovil</b>.<b class="sky">direccion</b>.<b class="sky">calle</b> ${automovil.direccion.calle} <br>
        <b class="doger">automovil</b>.<b class="sky">año</b> ${automovil.año} 
        `
    }
    
    
}ejecutarObjeto("objeto")

    //Funcion constructora
function ejecutarFuncionConstructora(){
    const consola = document.getElementById("consola-funcionConstructora")
    const consola2 = document.getElementById("consola-funcionConstructora2")
    const consola3 = document.getElementById("consola-funcionConstructora3")

    function Personas(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    const persona1 = new Personas("Luis",30)
    const persona2 = new Personas("Sharon",31)
    const persona3 = new Personas("Adriana",28)
    
    //añadir propiedad individual
    persona1.ciudad = "Merida"
    //añadir propiedad al prototipo
    Personas.prototype.pais = "Venezuela"
    Personas.prototype.saludar = function() {return `Soy ${this.nombre} tengo ${this.edad} y soy de ${this.pais}`}

    consola.innerHTML = JSON.stringify(persona1) + "<br>" + persona1.saludar()
    consola2.innerHTML = JSON.stringify(persona2) + "<br>" + persona2.saludar()
    consola3.innerHTML = JSON.stringify(persona3) + `<br>` + persona3.saludar()
}
    //Clases
function ejecutarClases(tipo){
    const consola = document.getElementById("consola-class")
    const codigo = document.getElementById('codigo-clases')
    const notas = document.getElementById('notas-clases')

    class Animal {
        constructor(tipo, nombre){
            this.tipo = tipo
            this.nombre = nombre
        }
        mensaje(){
            return `Mi mascota es un ${this.tipo} llamado ${this.nombre}`
        }
    }

    class Perro extends Animal{
        constructor(nombre, raza){
            super(undefined, nombre)
            this.raza = raza
        }
        mensaje(){
            return `Mi perro se llama ${this.nombre}, es un ${this.raza} ${this.tamaño}`
        }
    }

    const animal1 = new Animal("perro","Apolo")
    const animal2 = new Animal("gato","Michi")
    const perro1 = new Perro("Firulais","Golden")
    
    //añadir propiedad al objeto y al prototipo de Animal
    if(tipo == "añadir-propiedadYmetodo"){
        animal1.color = "negro"
        animal1.mensaje2 = function(){return `es de color ${this.color}`}

        consola.innerHTML =`
        <b class="verde">//primera instancia</b><br>
        <code>
            <b class="doger">animal1</b> <br> ${JSON.stringify(animal1,null,2)} <br> <br>

            <b class="doger">animal1</b>.<b class="golden">mensaje</b><b class="morado">()</b> <br> <b class="naranja">${animal1.mensaje()}</b> <br>
            <b class="doger">animal1</b>.<b class="golden">mensaje2</b><b class="morado">()</b> <br> <b class="naranja">${animal1.mensaje2()}</br> <br><br> <br>
        </code>
        `
    }
    else if(tipo == "añadir-propiedadYmetodo-prototipo"){
        Animal.prototype.tamaño = "pequeño"
        Animal.prototype.mensaje3 = function(){return `es un ${this.tipo} ${this.tamaño}`}

        consola.innerHTML =`
        <b class="verde">//primera instancia</b><br>
        <code>
            <b class="doger">animal1</b> <br> ${JSON.stringify(animal1,null,2)} <br> <br>

            <b class="doger">animal1</b>.<b class="golden">mensaje</b><b class="morado">()</b> <br> <b class="naranja">${animal1.mensaje()}</b> <br>
            <b class="doger">animal1</b>.<b class="golden">mensaje3</b><b class="morado">()</b> <br> <b class="naranja">${animal1.mensaje3()}</br> <br><br> <br>
        </code>
        `
    }
    
    //añadir propiedad al objeto y al prototipo de Perro
    perro1.color = "marron"
    Perro.prototype.tamaño = "grande"
    Perro.prototype.personalidad = function(){return `${this.nombre} es muy alegre y le gusta correr y jugar con ${animal1.nombre}`}


    if(tipo == "Declaracion-instancias"){

        codigo.innerHTML = `
        <b class="azul">class</b> <b class="aqua">Animal</b><b class="golden">{</b> <br>

        &emsp;&emsp;<b class="azul">constructor</b><b class="morado">(</b><b class="sky">tipo</b>,
        <b class="sky">nombre</b><b class="morado">) {</b> <br>
        &emsp;&emsp;&emsp;&emsp;<b class="azul">this</b>.<b class="sky">tipo</b> = <b class="sky">tipo</b><br>
        &emsp;&emsp;&emsp;&emsp;<b class="azul">this</b>.<b class="sky">nombre</b> = <b class="sky">nombre</b><br>
        &emsp;&emsp;<b class="morado">}</b><br>

        &emsp;&emsp;<b class="golden">mensaje</b><b class="morado">() {</b> <br>
        
        &emsp;&emsp;&emsp;&emsp;<b class="morado">return</b> 
        <b class="naranja">'Mi mascota es un</b> <b class="azul">$ {this</b>.<b class="sky">tipo</b><b class="azul">}</b> 
        <b class="azul">$ {this</b>.<b class="sky">tamaño</b><b class="azul">}</b> 
        <b class="naranja">llamado</b> <b class="azul">$ {this</b>.<b class="sky">nombre</b><b class="azul">}</b><b class="naranja">'</b> <br>
        
        &emsp;&emsp;<b class="morado">}</b><br>
        <b class="golden">}</b><br><br>

        <b class="azul">const</b> <b class="doger">animal1</b> =
        <b class="azul">new</b> <b class="aqua">Animal</b><b class="golden">(</b><b class="naranja">"perro"</b>,<b class="naranja">"Apolo"</b><b class="golden">)</b><br>

        <b class="azul">const</b> <b class="doger">animal2</b> =
        <b class="azul">new</b> <b class="aqua">Animal</b><b class="golden">(</b><b class="naranja">"gato"</b>,<b class="naranja">"Michi"</b><b class="golden">)</b><br><br>

        <code>
            <b>añadir propiedad y metodo al objeto</b>
            <button onclick="ejecutarClases('añadir-propiedadYmetodo')" class="btn-consola2">añadir</button><br>

            <b class="doger">animal1</b>.<b class="sky">color</b> = <b class="naranja">"negro"</b><br>
            <b class="doger">animal1</b>.<b class="golden">mensaje2</b> = <b class="azul">"function"</b><b class="morado">(){ return</b> 
            <b class="naranja">'es de color</b> <b class="azul">$ {this</b>.<b class="sky">color</b><b class="azul">}</b><b class="naranja">'</b><b class="morado">}</b> <br><br>
        </code>

        <code>
            <b>añadir propiedad y metodo al prototipo</b>
            <button onclick="ejecutarClases('añadir-propiedadYmetodo-prototipo')" class="btn-consola2">añadir</button><br>

            <b class="aqua">Animal</b>.<b class="sky">prototype</b>.<b class="sky">tamaño</b> = <b class="naranja">"pequeño"</b><br>
            <b class="aqua">Animal</b>.<b class="sky">prototype</b>.<b class="golden">mensajedos</b> = <b class="azul">"function"</b><b class="morado">(){ return</b> 
            <b class="naranja">'es un </b>  <b class="azul">$ {this</b>.<b class="sky">tipo</b><b class="azul">}</b>
            <b class="azul">$ {this</b>.<b class="sky">tamaño</b><b class="azul">}</b><b class="naranja">'</b>
            <b class="morado">}</b> 
        </code>
        `

        notas.style.display = "block"
        notas.innerHTML = `
         <div>
            <b>Explicacion:</b><br>
            <b class="doger">animal1</b> crea una instacia de la plantilla "Animal" y le pasa dos argumentos, luego recibe dos propiedades mas y un metodo:
            <ul style="margin-top: 15px;">
                <li><span class="sky">color</span> fue añadido al propio objeto por lo tanto es visible cuando se imprime.</li>
                <li><span class="sky">tamaño</span> fue añadido al prototipo de la clase, no es visible en el objeto, pero existe en el prototipo y sera usado por el metodo <span class="golden">mensaje</span>.</li>
                <li><span class="golden">mensajedos</span> es añadido al prototipo tambien y usara <span class="sky">color</span> en su mensaje</li>
            </ul> 
        </div>
        
        <div>
            <b>Explicacion:</b><br>
            <b class="doger">animal2</b> es una instacia que solo trabaja con los valores "gato y michi" en su mensaje.
        </div> 
        
        `

        consola.innerHTML =`
        <b class="verde">//primera instancia</b><br>
        <code>
            <b class="doger">animal1</b> <br> ${JSON.stringify(animal1,null,2)} <br> <br>

            <b class="doger">animal1</b>.<b class="golden">mensaje</b><b class="morado">()</b> <br> <b class="naranja">${animal1.mensaje()}</b> <br><br>
        </code>

        <b class="verde">//segunda instancia</b><br>
        <b class="doger">animal2</b> <b>${JSON.stringify(animal2)}</b><br> <br>
        <b class="doger">animal2</b>.<b class="golden">mensaje</b><b class="morado">()</b> <br>
        
        <b class="naranja">${animal2.mensaje()}</b>
        `

    }
    else if(tipo == "herencia"){
        codigo.innerHTML = `
        <b class="azul">class</b> <b class="aqua">Perro</b> <b class="azul">extends</b> <b class="aqua">Animal</b><b class="golden">{</b> <br>

        &emsp;&emsp;<b class="azul">constructor</b><b class="morado">(</b><b class="sky">tipo</b>, 
        <b class="sky">nombre</b>, <b class="sky">raza</b><b class="morado">) {</b> <br>
        &emsp;&emsp;&emsp;&emsp;<b class="azul">super</b><b class="golden">(</b><b class="sky">tipo</b>, <b class="sky">nombre</b><b class="golden">)</b><br>
        &emsp;&emsp;&emsp;&emsp;<b class="azul">this</b>.<b class="sky">raza</b> = <b class="sky">raza</b><br>
        &emsp;&emsp;<b class="morado">}</b><br>

        &emsp;&emsp;<b class="golden">mensaje</b><b class="morado">() {</b> <br>
        
        &emsp;&emsp;&emsp;&emsp;<b class="morado">return</b> 
        <b class="naranja">'Mi perro se llama</b> <b class="azul">$ {this</b>.<b class="sky">nombre</b><b class="azul">}</b> 
        <b class="naranja">, es un</b> <b class="azul">$ {this</b>.<b class="sky">raza</b><b class="azul">}</b> 
        <b class="azul">$ {this</b>.<b class="sky">tamaño</b><b class="azul">}</b><b class="naranja">'</b> <br>
        
        &emsp;&emsp;<b class="morado">}</b><br>
        <b class="golden">}</b><br><br>

        <b class="azul">const</b> <b class="doger">perro1</b> =
        <b class="azul">new</b> <b class="aqua">Perro</b><b class="golden">(</b><b class="naranja">"perro"</b>,<b class="naranja">"Firulais"</b>,<b class="naranja">"Golden"</b><b class="golden">)</b><br><br>

        <b>añadir propiedad al objeto:</b><br>
        <b class="doger">perro1</b>.<b class="sky">color</b> = <b class="naranja">"marron"</b><br><br>

        <b>añadir propiedad al prototipo:</b><br>
        <b class="aqua">Perro</b>.<b class="sky">prototype</b>.<b class="sky">tamaño</b> = <b class="naranja">"grande"</b><br>
        <b class="aqua">Perro</b>.<b class="sky">prototype</b>.<b class="golden">personalidad</b> = <b class="azul">"function"</b><b class="morado">(){<br> return</b> 
        <b class="azul">$ {this</b>.<b class="sky">nombre</b><b class="azul">}</b><b class="naranja">'</b>  <b class="naranja">es muy alegre y le gusta correr y jugar con</b>
        <b class="azul">$ {</b><b class="doger">animal1</b>.<b class="sky">nombre</b><b class="azul">}</b><b class="naranja">'</b><b class="morado">}</b> 
        `

        notas.style.display = "block"
        notas.innerHTML = `
        
        <b>Explicacion:</b><br>
        <b class="doger">perro1</b> crea una instacia de la plantilla <span class="aqua">Perro</span> que asu vez extendera propiedades de la plantilla <span class="aqua">Animal</span> por medio de <span class="azul">super</span> que accede a su constructor y trae las propiedades: <span class="sky">tipo</span> y <span class="sky">nombre</span>, despues tiene su propia propiedad: <span class="sky">raza</span> y metodo, y recibe dos propiedades adicionales y otro metodo. 
        <ul>
            <li><span class="sky">color</span> esta instacia añade su propia propiedad de color para usar en su mensaje. Va directo al objeto.</li>
            <li><span class="sky">tamaño</span> al prototipo mandamos la propiedad tamaño especifica para esta clase tambien.</li>
            <li><span class="golden">personalidad</span> un metodo que agregamos al prototipo de nuestra clase y toma la propiedad nombre de su extencion y toma otra de un objeto ya creado <span class="doger">animal1</span>.</li>
        </ul>
        
        `
        consola.innerHTML = `
        <b class="doger">perro1</b> + <b class="golden">mensaje</b><b class="morado">()</b> + <b class="golden">personalidad</b><b class="morado">()</b> <br>
        <b>${JSON.stringify(perro1,null,2)}</b><br> 
        <b class="naranja">${perro1.mensaje()} <br><br>${perro1.personalidad()}</b> 
        `
    }
    else if(tipo == "getYset"){

        class User {
            constructor(name, age){
                this.name = name
                this.age = age
            }
            get userAge(){
                return `${this.age}`
            }
            set userAge(age){
                return `${this.age = age}`
            }
        }
        const David = new User("David",15)

        notas.style.display = "none"

        codigo.innerHTML = `
        <code>
            <b class="azul">class</b> <b class="aqua">User</b><b class="golden">{</b> <br>

            &emsp;&emsp;<b class="azul">constructor</b><b class="morado">(</b><b class="sky">name</b>, <b class="sky">age</b><b class="morado">) {</b> <br>
            &emsp;&emsp;&emsp;&emsp;<b class="azul">this</b>.<b class="sky">name</b> = <b class="sky">name</b><br>
            &emsp;&emsp;&emsp;&emsp;<b class="azul">this</b>.<b class="sky">age</b> = <b class="sky">age</b><br>
            &emsp;&emsp;<b class="morado">}</b><br>

            &emsp;&emsp;<b class="azul">get</b> <b class="sky">userAge</b><b class="morado">() {</b> <br>
            &emsp;&emsp;&emsp;&emsp;<b class="morado">return</b> 
            <b class="naranja">'</b><b class="azul">$ {this</b>.<b class="sky">age</b><b class="azul">}</b><b class="naranja">'</b> <br>
            &emsp;&emsp;<b class="morado">}</b><br>

            &emsp;&emsp;<b class="azul">set</b> <b class="sky">userAge</b><b class="morado">(<b class="sky">age</b>) {</b> <br>
            &emsp;&emsp;&emsp;&emsp;<b class="morado">return</b> 
            <b class="naranja">'</b><b class="azul">$ {this</b>.<b class="sky">age</b><b class="azul">}</b> = <b class="sky">age</b><b class="naranja">'</b> <br>
            &emsp;&emsp;<b class="morado">}</b><br>

            <b class="golden">}</b><br><br>
        </code>

        <b class="azul">const</b> <b class="doger">David</b> =
        <b class="azul">new</b> <b class="aqua">User</b><b class="golden">(</b><b class="naranja">"David"</b>,<b class="verde">15</b><b class="golden">)</b><br>
        `

        consola.innerHTML =`
        <code>
            <b class="doger">David</b>  ${JSON.stringify(David)} <br><br>

            <b class="verde">//obtener elemento</b><br>
            <b class="doger">David</b>.<b class="sky">userAge</b> ${David.userAge} <br><br>

            <b class="verde">//añadir elemento</b><br>
            <b class="doger">David</b>.<b class="sky">userAge</b> = <b class="verde">50</b> ${David.userAge=50} <br><br>

            <b class="doger">David</b>  ${JSON.stringify(David)} <br><br>
        </code>
        `

    }
    else if(tipo == "ConstruirArray"){

        class Myarray{
            constructor(){
                this.length = 0
                this.data = {}
            }
            get(index){
                return this.data[index]
            }
            push(item){
                this.data[this.length] = item
                this.length ++
                return this.data
            }
            pop(){
                const ultimoItem = this.data[this.length-1]
                delete this.data[this.length-1]
                this.length --
                return ultimoItem
            }
            delete(index){
                const item = this.data[index]
                for(let i = index; i < this.length-1; i++){
                    this.data[i] = this.data[i + 1]
                }
                delete this.data[this.length-1]
                this.length --
                return item
            }
        }
        const myarreglo = new Myarray()
        //añadir mas valores al array
        myarreglo.push("David") 
        myarreglo.push("Sharom")
        myarreglo.push("Adriana")

        notas.style.display = "none"

        codigo.innerHTML = `
        <code>
            <b class="azul">class</b> <b class="aqua">Myarray</b><b class="golden">{</b> <br>

            &emsp;&emsp;<b class="azul">constructor</b><b class="morado">(</b><b class="morado">) {</b> <br>
            &emsp;&emsp;&emsp;&emsp;<b class="azul">this</b>.<b class="sky">length</b> = <b class="verde">0</b><br>
            &emsp;&emsp;&emsp;&emsp;<b class="azul">this</b>.<b class="sky">data</b> = <b class="azul">{}</b><br>
            &emsp;&emsp;<b class="morado">}</b><br>

            &emsp;&emsp;<b class="golden">get</b><b class="morado">(<b class="sky">index</b>){</b> <br>
            &emsp;&emsp;&emsp;&emsp;<b class="morado">return</b> 
            <b class="azul">this</b>.<b class="sky">data</b><b class="azul">[<b class="sky">index</b>]</b> <br>
            &emsp;&emsp;<b class="morado">}</b><br>

            &emsp;&emsp;<b class="golden">push</b><b class="morado">(<b class="sky">item</b>){</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">data</b><b class="azul">[</b><b class="azul">this</b>.<b class="sky">length</b><b class="azul">]</b> = <b class="sky">item</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> ++ <br>
            &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b>.<b class="sky">data</b> <br>
            &emsp;&emsp;<b class="morado">}</b><br>

            &emsp;&emsp;<b class="golden">pop</b><b class="morado">(){</b> <br>
            &emsp; &emsp; <b class="azul">const</b> <b class="doger">ultimoItem</b> = <b class="azul">this</b>.<b class="sky">data</b><b class="azul">[</b><b class="azul">this</b>.<b class="sky">length</b> - <b class="verde">1</b><b class="azul">]</b> <br>
            &emsp; &emsp; <b class="azul">delete</b> <b class="azul">this</b>.<b class="sky">data</b><b class="azul">[</b><b class="azul">this</b>.<b class="sky">length</b> - <b class="verde">1</b><b class="azul">]</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> -- <br>
            &emsp; &emsp; <b class="morado">return</b> <b class="doger">ultimoItem</b> <br>
            &emsp;&emsp;<b class="morado">}</b><br>

            <code>
                &emsp;&emsp;<b class="golden">delete</b><b class="morado">(<b class="sky">index</b>){</b> <br>
                &emsp; &emsp; <b class="azul">const</b> <b class="doger">item</b> = <b class="azul">this</b>.<b class="sky">data</b><b class="azul">[</b><b class="sky">index</b><b class="azul">]</b> <br>

                &emsp; &emsp; <b class="morado">for</b><b class="azul">(let</b> <b class="sky">i</b> = <b class="sky">index</b>;
                <b class="sky">i</b> &lt; <b class="azul">this</b>.<b class="sky">length</b> - <b class="verde">1</b>; <b class="sky">i</b> ++<b class="azul">){</b> <br>
                &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">data</b><b class="azul">[</b><b class="sky">i</b><b class="azul">]</b> = <b class="azul">this</b>.<b class="sky">data</b><b class="azul">[</b><b class="sky">i</b> + <b class="verde">1</b><b class="azul">]</b> <br>
                &emsp; &emsp; <b class="azul">}</b> <br>

                &emsp; &emsp; <b class="azul">delete</b> <b class="azul">this</b>.<b class="sky">data</b><b class="azul">[</b><b class="azul">this</b>.<b class="sky">length</b> - <b class="verde">1</b><b class="azul">]</b> <br>
                &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> -- <br>
                &emsp; &emsp; <b class="morado">return</b> <b class="doger">item</b> <br>
                &emsp;&emsp;<b class="morado">}</b><br>
            </code>

            <b class="golden">}</b><br><br>
        </code>

        <code>
            <b class="azul">const</b> <b class="doger">miarreglo</b> =
            <b class="azul">new</b> <b class="aqua">Myarray</b><b class="golden">()</b><br>

            <b class="doger">myarreglo</b>.<b class="golden">push(<b class="naranja">"David"</b>)</b> <br>
            <b class="doger">myarreglo</b>.<b class="golden">push(<b class="naranja">"Sharom"</b>)</b> <br>
            <b class="doger">myarreglo</b>.<b class="golden">push(<b class="naranja">"Adriana"</b>)</b> <br>
        </code>
        `

        consola.innerHTML = `
        <code>
            <b class="doger">myarreglo</b>  ${JSON.stringify(myarreglo)} <br><br>

            <b class="verde">//añadir elemento</b><br>
            <b class="doger">myarreglo</b>.<b class="golden">push(<b class="naranja">"Jose"</b>)</b> ${JSON.stringify(myarreglo.push("Jose"))} <br><br>

            <b class="verde">//obtener elemento</b><br>
            <b class="doger">myarreglo</b>.<b class="golden">get(<b class="verde">0</b>)</b> ${myarreglo.get(0)} <br>
            <b class="doger">myarreglo</b>.<b class="golden">get(<b class="verde">1</b>)</b> ${myarreglo.get(1)} <br><br>
        
            <b class="verde">//eliminar ultimo elemento</b><br>
            <b class="doger">myarreglo</b>.<b class="golden">pop()</b> ${myarreglo.pop()} <br>
            <b class="doger">myarreglo</b> ${JSON.stringify(myarreglo)} <br><br>

            <b class="verde">//eliminar elemento por indice</b><br>
            <b class="doger">myarreglo</b>.<b class="golden">delete(<b class="verde">0</b>)</b> ${myarreglo.delete(0)} <br>
            <b class="doger">myarreglo</b><br> ${JSON.stringify(myarreglo)} 
        </code>
        `
        
    }
    else if(tipo == "ConstruirArray2"){

        class Myarray{
            constructor(){
                this.length = 0
                this.data = {}
            }
            unshift(item){
                //valida si se paso argumento item
                if(!item){
                    return this.data
                }
                //si no hay valores en el arreglo, asigna item como el primero y aumenta la longitud
                if(this.length == 0){
                    this.data[0] = item
                    this.length++
                    return this.data
                }
                //si hay mas valores en el arreglo entonces los mueve todos a la derecha 
                for(let i = this.length; i > 0; i--){
                    this.data[i] = this.data[i - 1]
                }

                this.data[0] = item
                this.length ++
                return this.data
            }
            shift(){
                if(this.length == 0){
                    return undefined
                }
                const firstItem = this.data[0]

                for(let i = 0; i < this.length; i ++){
                    this.data[i] = this.data[i + 1]
                }
                delete this.data[this.length - 1]
                this.length--
                return firstItem
            }
        }
        const myarreglo = new Myarray()

        notas.style.display = "none"

        codigo.innerHTML = `
        <code>
            <b class="azul">class</b> <b class="aqua">Myarray</b><b class="golden">{</b> <br>

            &emsp;&emsp;<b class="azul">constructor</b><b class="morado">(</b><b class="morado">) {</b> <br>
            &emsp;&emsp;&emsp;&emsp;<b class="azul">this</b>.<b class="sky">length</b> = <b class="verde">0</b><br>
            &emsp;&emsp;&emsp;&emsp;<b class="azul">this</b>.<b class="sky">data</b> = <b class="azul">{}</b><br>
            &emsp;&emsp;<b class="morado">}</b><br>
        </code>

        <code>
            &emsp;&emsp;<b class="golden">unshift</b><b class="morado">(<b class="sky">item</b>){</b> <br>
            &emsp; &emsp; <b class="morado">if</b><b class="azul">(<b class="sky">!item</b>) {</b>  <br>
            &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b>.<b class="sky">data</b> <br>
            &emsp; &emsp; <b class="azul">}</b><br>

            &emsp; &emsp; <b class="morado">if</b><b class="azul">(</b><b class="azul">this</b>.<b class="sky">length</b> == <b class="verde">0</b><b class="azul">) {</b>  <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">data</b><b class="azul">[</b><b class="verde">0</b><b class="azul">]</b> = <b class="sky">item</b> <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> ++ <br>
            &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b>.<b class="sky">data</b> <br>
            &emsp; &emsp; <b class="azul">}</b><br>

            &emsp; &emsp; <b class="morado">for</b><b class="azul">(let</b> <b class="sky">i</b> = <b class="azul">this</b>.<b class="sky">length</b>;
            <b class="sky">i</b> &gt; <b class="verde">0</b>; <b class="sky">i</b> --<b class="azul">){</b> <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">data</b><b class="azul">[</b><b class="sky">i</b><b class="azul">]</b> = <b class="azul">this</b>.<b class="sky">data</b><b class="azul">[</b><b class="sky">i</b> - <b class="verde">1</b><b class="azul">]</b> <br>
            &emsp; &emsp; <b class="azul">}</b> <br>

            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">data</b><b class="azul">[<b class="verde">0</b>]</b> = <b class="sky">item</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> ++ <br>
            &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b>.<b class="sky">data</b> <br>
            &emsp;&emsp;<b class="morado">}</b><br>
        </code>

        <code>
            &emsp;&emsp;<b class="golden">shift</b><b class="morado">(<b class="sky">item</b>){</b> <br>

            &emsp; &emsp; <b class="morado">if</b><b class="azul">(</b><b class="azul">this</b>.<b class="sky">length</b> == <b class="verde">0</b><b class="azul">) {</b>  <br>
            &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="azul">undefined</b> <br>
            &emsp; &emsp; <b class="azul">}</b><br>

            &emsp; &emsp; <b class="azul">const</b> <b class="doger">firstItem</b> = <b class="azul">this</b>.<b class="sky">data</b><b class="azul">[<b class="verde">0</b>]</b>  <br><br>

            &emsp; &emsp; <b class="morado">for</b><b class="azul">(let</b> <b class="sky">i</b> = <b class="verde">0</b>;
            <b class="sky">i</b> &lt; <b class="azul">this</b>.<b class="sky">length</b>; <b class="sky">i</b> ++<b class="azul">){</b> <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">data</b><b class="azul">[</b><b class="sky">i</b><b class="azul">]</b> = <b class="azul">this</b>.<b class="sky">data</b><b class="azul">[</b><b class="sky">i</b> + <b class="verde">1</b><b class="azul">]</b> <br>
            &emsp; &emsp; <b class="azul">}</b> <br>

            &emsp; &emsp; <b class="azul">delete</b> <b class="azul">this</b>.<b class="sky">data</b><b class="azul">[</b><b class="azul">this</b>.<b class="sky">length</b> - <b class="verde">1</b><b class="azul">]</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> -- <br>
            &emsp; &emsp; <b class="morado">return</b> <b class="doger">firstItem</b> <br>
            &emsp;&emsp;<b class="morado">}</b><br>
            <b class="golden">}</b><br><br>
        </code>
            
        <code>
            <b class="azul">const</b> <b class="doger">miarreglo</b> =
            <b class="azul">new</b> <b class="aqua">Myarray</b><b class="golden">()</b><br>
        </code>
        `

        consola.innerHTML = `
        <code>
            <b class="verde">//añadir elemento al inicio</b><br>
            <b class="doger">myarreglo</b>.<b class="golden">unshift(<b class="naranja">"Jorge"</b>)</b> ${JSON.stringify(myarreglo.unshift("Jorge"))} <br>
            <b class="doger">myarreglo</b>.<b class="golden">unshift(<b class="naranja">"Maria"</b>)</b> ${JSON.stringify(myarreglo.unshift("Maria"))} <br>
            <b class="doger">myarreglo</b>.<b class="golden">unshift(<b class="naranja">"Adrian"</b>)</b> ${JSON.stringify(myarreglo.unshift("Adrian"))} <br>
            <b class="doger">myarreglo</b>.<b class="golden">unshift(<b class="naranja">"Carmen"</b>)</b> ${JSON.stringify(myarreglo.unshift("Carmen"))} <br><br>
            <b class="doger">myarreglo</b><br> ${JSON.stringify(myarreglo)} <br><br>

            <b class="verde">//Eliminar elemento al inicio</b><br>
            <b class="doger">myarreglo</b>.<b class="golden">shift()</b> ${myarreglo.shift()} <br>
            <b class="doger">myarreglo</b>.<b class="golden">shift()</b> ${myarreglo.shift()} <br><br>
            <b class="doger">myarreglo</b><br> ${JSON.stringify(myarreglo)} <br><br>
        </code>
        `
        
    }

}ejecutarClases("ConstruirArray2")

    //formatoJSON
function ejecutarformatoJSON(){
    const consola = document.getElementById("consola-formatoJSON")

    const json = '{"nombre": "luis", "apellido": "Puente" , "edad": 32}'
    const parsear = JSON.parse(json)

    consola.innerHTML = `
    ${parsear}<br><br>

    ${JSON.stringify(parsear)}<br>
    ${JSON.stringify(parsear,["nombre","edad"])}<br>
    ${JSON.stringify(parsear, null, 1)}<br><br>
    
    ${JSON.stringify(json)}<br>
    `
    
}ejecutarformatoJSON()

    //SET
function ejecutarSet(tipo){
    const consola = document.getElementById("consola-set")

    const set = new Set([1,2,3,4,1])
    set.add(5)
    // encadenar
    set.add(2).add(6)


    if(tipo == "delete"){set.delete(3)}
    if(tipo == "clear"){set.clear()}

    consola.innerHTML = `
    <p style="margin-top:0">
        <b class="doger">set</b> ${set} <br><br>

        <b>//Convertir set a array</b> <br>
        <b class="aqua">Array</b>.<b class="golden">from</b>(<b class="doger">set</b>)
        ${Array.from(set)} <br><br>

        <b>//longitud</b> <br>
        <b class="doger">set</b>.<b class="doger">size</b>
        ${set.size} <br>
    </p>
    `

}ejecutarSet()

//                  CONDICIONALES
function condicionIF(){
    const input = document.getElementById("input-nota").value
    const consola = document.getElementById("consola-if")

    if(input == ""){
        consola.textContent = "⚠️ ingresa una nota"
    }else if (input == 20) {
        consola.textContent = "sobresaliente" 
    }
    else if (input >= 15 && input < 20) {
        consola.textContent = "Buen Trabajo"
    }
    else if (input >= 10 && input < 15) {
        consola.textContent = "Puede Mejorar"
    }
    else {
        consola.textContent = "Reprobado"
    }
}

function condicionSwitch(){
    const input = document.getElementById("input-fruta").value
    const consola = document.getElementById("consola-switch")

    switch (input) {
    case 'naranjas':
        consola.textContent = 'cuesta 2.000 pesos la libra'
        break
    case 'manzanas':
        consola.textContent = 'cuesta 4.000 pesos la libra'
        break
    case 'cambures':
        consola.textContent = 'cuesta 3.000 pesos la libra'
        break
    case 'mangos':
    case 'papayas':
        consola.textContent = 'cuesta 5.000 pesos la libra'
        break
    case "":
        consola.textContent = "⚠️ ingresa una fruta"
        break
    default:
        consola.textContent = 'Lo siento, no contamos con: ' + input
    }
}

function ejecutarOperadorTernario(){
    const consola = document.getElementById("consola-operador-termarioYnullish")
    const codigo = document.getElementById("codigo-operador-termarioYnullish")

    let edad = 30
    let mensaje = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad"

    codigo.innerHTML = `
    <p class="margenTop0">
        <b class="azul">let </b> <b class="sky">edad</b> = <b class="verde">30</b> <br>
        <b class="azul">let </b> <b class="sky">mensaje</b> = (<b class="sky">edad</b> >= <b class="verde">18</b>) ?
        <b class="naranja">"Es mayor de edad"</b> : <b class="naranja">"Es menor de edad"</b> 
    </p>
    `
    consola.innerHTML = `
    <p class="margenTop0">
        <b class="sky">mensaje</b> ${mensaje}
    </p>
    `
}

function ejecutarOperadorNullish(){
    const consola = document.getElementById("consola-operador-termarioYnullish")
    const codigo = document.getElementById("codigo-operador-termarioYnullish")

    const nombre = null ?? "Invitado"
    const edad = undefined ?? 18
    const cantidad = 0 ?? 12

    const usuarios = {}
    const nombre1 = usuarios.name ?? "Andres"

    codigo.innerHTML = `
    <p  class="margenTop0">
        <b class="azul">const</b> <b class="doger">nombre</b> = <b class="azul">null</b> ?? "Invitado" <br>
        
        <b class="azul">const</b> <b class="doger">edad</b> = 
        <b class="azul">undefined</b> ?? <b class="verde">18</b> <br>
        
        <b class="azul">const</b> <b class="doger">cantidad</b> = 
        <b class="verde">0</b> ?? <b class="verde">12</b> <br><br>

        <b class="azul">const</b> <b class="doger">usuarios</b> = {} <br>
        
        <b class="azul">const</b> <b class="doger">nombre1</b> = 
        <b class="doger">usuarios</b>.<b class="sky">name</b> ?? "Andres"
    </p>
    `
    consola.innerHTML = `
    <p class="margenTop0">
        <b class="doger">nombre</b> ${nombre} <br>
        <b class="doger">edad</b> ${edad} <br>
        <b class="doger">cantidad</b> ${cantidad} <b class="verde">cero NO es null ni undefined</b>
    </p>

    <p>
        <b class="doger">nombre</b> ${nombre1} <br>
    </p>
    `

}

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

//                  FUNCIONES
function ejecutarFunciones(tipo){ 
    const consola = document.getElementById("consola-function") 
    const codigo = document.getElementById("codigo-function")
    
    if(tipo == 'funcion-tradicional'){
        //un parametro
        function saludar(nombre) {
            return "Hola " + nombre + "👋 Bienvenido/a"
        }

        //dos parametro
        function saludar2(nombre,apellido) {
            return `Hola ${nombre} ${apellido} 👋 Bienvenido/a`
        }

        codigo.innerHTML = `
        <b>Un parametro</b><br>
            <b class="azul">function</b> <b class="golden">saludar(</b><b class="sky">nombre</b><b class="golden">) {</b>
            <br>&emsp;&emsp;<b class="morado">return</b> <b class="naranja">'Hola'</b> + <b class="sky">nombre</b> + <b class="naranja">"👋 Bienvenido"</b>
            <br><b class="golden">}</b>
            <br><br>

        <b>Dos parametros</b><br>
            <b class="azul">function</b> <b class="golden">saludar2(</b><b class="sky">nombre</b> , 
            <b class="sky">apellido</b><b class="golden">) {</b>
            <br>&emsp;&emsp;<b class="morado">return</b> 
            <b class="naranja">'Hola</b> 
            <b class="golden">$(</b><b class="sky">nombre</b><b class="golden">)</b>
            <b class="golden">$(</b><b class="sky">apellido</b><b class="golden">)</b>
            <b class="naranja">👋 Bienvenido'</b> 
            <br><b class="golden">}</b>
        `

        consola.innerHTML = `
        <b class="verde">//Un parametro</b><br>
        <b class="golden">saludar</b><b class="morado">(</b><b class="naranja">"David"</b><b class="morado">)</b>  
        ${saludar("David")}<br>
        <b class="golden">saludar</b><b class="morado">(</b><b class="naranja">"Sharom"</b><b class="morado">)</b>  
        ${saludar("Sharom")}<br>
        <b class="golden">saludar</b><b class="morado">()</b>  
        ${saludar()}<br><br>

        <b class="verde">//Dos parametros</b><br>
        <b class="golden">saludar2</b><b class="morado">(</b><b class="naranja">"David"</b>, 
        <b class="naranja">"Puente"</b><b class="morado">)</b> <br>
        ${saludar2("David", "Puente")}<br>
        <b class="golden">saludar2</b><b class="morado">(</b><b class="naranja">"Sharom"</b><b class="morado">)</b> <br>
        ${saludar2("Sharom")}<br><br>

        <b class="verde">//Pasar un parametro especifico</b><br>
        <b class="golden">saludar2</b><b class="morado">(</b><b class="azul">undefined</b>, <b class="naranja">"Gamez"</b><b class="morado">)</b> <br>
        ${saludar2(undefined,"Gamez")}<br>
        ` 
    }

    else if(tipo == 'expresionDeFuncion'){
        const saludo = function (nombre){
            return "Hola " + nombre
        }

        codigo.innerHTML = `
        <p style="margin-top:0">
            <b class="azul">const</b> <b class="golden">saludo</b> = <b class="azul">function</b> <b class="golden">(</b><b class="sky">nombre</b><b class="golden">) {</b>
            <br>&emsp;&emsp;<b class="morado">return</b> <b class="naranja">'Hola'</b> + <b class="sky">nombre</b> 
            <br><b class="golden">}</b>
            <br><br>
        </p>
        `
        consola.innerHTML = `
        <b class="golden">saludar(<b class="naranja">"Luis"</b>)</b>
        ${saludo("Luis")}<br>
        `
    }

    else if(tipo == 'parametros-pordefecto'){
        function newuser(name,age,country){
            let nombre = name || "Luis"
            let edad = age || 30
            let pais = country || "Venezuela"
            return `${nombre} ${edad} ${pais}` 
        }

        function newAdmin(name= "Santiago", age= 50, country= "Londres"){
            return `${name} ${age} ${country}` 
        }

        codigo.innerHTML = `
        <b class="verde">//opcion 1</b><br>
            <b class="azul">function</b> <b class="golden">newuser(</b><b class="sky">name</b> ,
            <b class="sky">age</b> ,
            <b class="sky">country</b><b class="golden">) {</b>

            <br>&emsp;&emsp;<b class="azul">let</b> <b class="sky">nombre</b> = <b class="sky">name</b> || <b class="naranja">"Luis"</b>
            <br>&emsp;&emsp;<b class="azul">let</b> <b class="sky">edad</b> = <b class="sky">age</b> || <b class="verde">30</b>
            <br>&emsp;&emsp;<b class="azul">let</b> <b class="sky">pais</b> = <b class="sky">country</b> || <b class="naranja">"Venezuela"</b>

            <br>&emsp;&emsp;<b class="morado">return</b> <b class="naranja">'</b> 
            <b class="golden">$(</b><b class="sky">nombre</b><b class="golden">)</b>
            <b class="golden">$(</b><b class="sky">edad</b><b class="golden">)</b>
            <b class="golden">$(</b><b class="sky">pais</b><b class="golden">)</b>
            <b class="naranja">'</b> 
            <br><b class="golden">}</b><br><br>

        <b class="verde">//opcion 2 ES6</b><br>
            <b class="azul">function</b> <b class="golden">newAdmin(</b><b class="sky">name</b> = <b class="naranja">Santiago</b> ,
            <b class="sky">age</b> = <b class="verde">50</b> ,
            <b class="sky">country</b> = <b class="naranja">Londres</b><b class="golden">) {</b>

            <br>&emsp;&emsp;<b class="morado">return</b> <b class="naranja">'</b> 
            <b class="golden">$(</b><b class="sky">name</b><b class="golden">)</b>
            <b class="golden">$(</b><b class="sky">age</b><b class="golden">)</b>
            <b class="golden">$(</b><b class="sky">country</b><b class="golden">)</b>
            <b class="naranja">'</b> 
            <br><b class="golden">}</b>
        `
        
        consola.innerHTML = `
        <b class="verde">//Ninguno por defecto</b><br>
            <b class="golden">newuser</b><b class="morado">(</b><b class="naranja">"David"</b>,
            <b class="verde">32</b>, <b class="naranja">"Colombia"</b><b class="morado">)</b>  
            ${newuser("David",32,"Colombia")}<br>

            <b class="golden">newAdmin</b><b class="morado">(</b><b class="naranja">"Jorge"</b> ,
            <b class="verde">42</b> , <b class="naranja">"Chile"</b><b class="morado">)</b>  
            ${newAdmin("Jorge",42,"Chile")}<br><br>


        <b class="verde">//Dos por defecto</b><br>
            <b class="golden">newuser</b><b class="morado">(</b><b class="azul">undefined</b>,
            <b class="verde">55</b><b class="morado">)</b>  
            ${newuser(undefined,55)}<br>

            <b class="golden">newAdmin</b><b class="morado">(</b><b class="naranja">"Carlos"</b><b class="morado">)</b>  
            ${newAdmin("Carlos")}<br><br>


        <b class="verde">//Todos por defecto</b><br>
            <b class="golden">newuser</b><b class="morado">()</b>  
            ${newuser()}<br>

            <b class="golden">newAdmin</b><b class="morado">()</b> 
            ${newAdmin()}<br>
        `    
    }

}ejecutarFunciones('expresionDeFuncion')

//Callback
function ejecutarCallback(tipo) {
    const consola = document.getElementById("consola-callback")
    const codigo = document.getElementById("codigo-callback")

    // callback
    if(tipo == "callback"){
        codigo.innerHTML = `
        <p class="margen0">
            <b>funcion que se pasa como callback</b><br>
            <b class="azul">function</b> <b class="golden">saludar(</b><b class="sky">nombre</b><b class="golden">) {</b>  <br>
            &emsp;&emsp;<b class="sky">console</b>.<b class="golden">log</b><b class="morado">(</b><b class="naranja">"hola"</b>  +
            <b class="sky">nombre</b><b class="morado">)</b><br>
            <b class="golden">}</b>
        </p>
            
        <p>
            <b>funcion de orden superior</b><br>
            <b class="azul">function</b> <b class="golden">procesarUsuario(</b><b class="sky">callback</b><b class="golden">) {</b> <br>
            &emsp;&emsp;<b class="azul">const</b> <b class="doger">nombre</b> = <b class="naranja">"Luis"</b>  <br>
            &emsp;&emsp;<b class="golden">callback</b><b class="morado">(</b><b class="doger">nombre</b><b class="morado">)</b>
            <b class="verde">//aqui se llama el callback</b><br>
            <b class="golden">}</b>
        </p>
        `

        function procesarUsuario(callback) {
            const nombre = "Luis";
            callback(nombre); 
        }

        function saludar(nombre) {
            consola.innerHTML = `
            <b class="golden">procesarUsuario</b><b class="morado">(<b class="golden">saludar</b>)</b> <br>
            Hola ${nombre}
            `
        }
        
        procesarUsuario(saludar)
    }
    
    // callback hell
    if(tipo == "CallbackHell"){
        consola.innerHTML = ""

        function saludar(nombre,callback){
            consola.innerHTML += `<p>Hola ${nombre}</p>`
            callback()
        }
        function instruccionUno(callback){
            consola.innerHTML += `<p>Ve a la app store</p>`
            callback()
        }
        function instruccionDos(callback){
            consola.innerHTML += "<p>Compra unos airpods</p>"
            callback()
        }
        function instruccionTres(callback){
            consola.innerHTML += "<p>Traelos a mi casa</p>"
            callback()
        }
        function despedir(nombre){
            consola.innerHTML += `<p>Adios ${nombre}</p>`
        }

        saludar("David",function(){
            instruccionUno(function(){
                instruccionDos(function(){
                    instruccionTres(function(){
                        despedir("david")
                    })
                })
            })
        })

        // codigo
        codigo.innerHTML = `
        <div class="margen0">
            <b class="azul">function</b> <b class="golden">saludar</b>
            (<b class="sky">nombre</b>,<b class="sky">callback</b>){ 
            <div class="margenIz">
                consola.<b class="sky">innerHTML</b> += 'Hola $ {<b class="sky">nombre</b>}' <br>
                <b class="golden">callback()</b> <br>
            </div>
            } <br>

            <b class="azul">function</b> <b class="golden">instruccionUno</b>
            (<b class="sky">callback</b>){ <br>
            <div class="margenIz">
                consola.<b class="sky">innerHTML</b> += 'Ve a la app store' <br>
                <b class="golden">callback()</b> <br>
            </div>
            } <br>

            <b class="azul">function</b> <b class="golden">instruccionDos</b>
            (<b class="sky">callback</b>){ <br>
            <div class="margenIz">
                consola.<b class="sky">innerHTML</b> += "Compra unos airpods" <br>
                <b class="golden">callback()</b> <br>
            </div>
            } <br>

            <b class="azul">function</b> <b class="golden">instruccionTres</b>
            (<b class="sky">callback</b>){ <br>
            <div class="margenIz">
                consola.<b class="sky">innerHTML</b> += "Traelos a mi casa" <br>
                <b class="golden">callback()</b> <br>
            </div>
            } <br>

            <b class="azul">function</b> <b class="golden">despedir</b>
            (<b class="sky">nombre</b>){ <br>
            <div class="margenIz">
                consola.<b class="sky">innerHTML</b> += 'Adios $ {<b class="sky">nombre</b>}' <br>
            </div>
            } <br>

            <b class="golden">saludar</b>("David",<b class="azul">function</b>(){ 
            <div class="margenIz">
            <b class="golden">instruccionUno</b>(<b class="azul">function</b>(){
                <div class="margenIz">
                <b class="golden">instruccionDos</b>(<b class="azul">function</b>(){
                    <div class="margenIz">
                    <b class="golden">instruccionTres</b>(<b class="azul">function</b>(){
                        <div class="margenIz"><b class="golden">despedir</b>("david")</div>
                    })
                    </div>
                })
                </div>
            })
            </div> 
            
                        
            
            
            
            
            })
        </div>
        `
    }

    //Callback Hell Recursivo
    if(tipo == "CallbackHellRecursivo"){
        codigo.innerHTML = `
        <div>
            <b class="azul">function</b> <b class="golden">saludar</b>
            (<b class="sky">nombre</b>,<b class="sky">callback</b>){ 
            <div class="margenIz">
                consola.innerHTML = 'Hola $ {<b class="sky">nombre</b>}' <br>
                <b class="golden">callback</b>(<b class="sky">nombre</b>)
            </div>
            } <br>

            <b class="azul">function</b> <b class="golden">hablar</b>(<b class="sky">callback</b>){
            <div class="margenIz">
                consola.innerHTML += 'bla bla bla' <br>
                <b class="golden">callback</b>()
            </div>
            } <br> 

            <b class="azul">function</b> <b class="golden">adios</b>(<b class="sky">nombre</b>){
            <div class="margenIz">
                consola.innerHTML += 'Adios $ {<b class="sky">nombre</b>}'
            </div>
            } <br><br>

            <b class="verde">//Recursividad</b> <br>
            <b class="azul">function</b> <b class="golden">conversacion</b>
            (<b class="sky">veces</b>,<b class="sky">nombre</b>){
            <div class="margenIz">
                <b class="morado">if</b>(<b class="sky">veces</b> > 0){
                <div class="margenIz">
                    <b class="golden">hablar</b>(<b class="azul">function</b>(){
                    <div class="margenIz">
                        <b class="golden">conversacion</b>(--<b class="sky">veces</b>,<b class="sky">nombre</b>)
                    </div>
                    })
                </div>
                }<b class="morado">else</b>{
                <div class="margenIz">
                    <b class="golden">adios</b>(<b class="sky">nombre</b>)
                </div>
                }
            </div>
            } <br><br>

            <b class="verde">//Invocacion</b> <br>
            <b class="golden">saludar</b>("David",<b class="azul">function</b>
            (<b class="sky">nombre</b>){
            <div class="margenIz">
                <b class="golden">conversacion</b>(3,<b class="sky">nombre</b>)
            </div>
            })
        </div>
        `

        function saludar(nombre,callback){
            consola.innerHTML = `<p>Hola ${nombre}</p>`
            callback(nombre)
        }
        function hablar(callback){
            consola.innerHTML += `<p>bla bla bla</p>`
            callback()
        }
        function adios(nombre){
            consola.innerHTML += `<p>Adios ${nombre}</p>`
        }
        //recursividad
        function conversacion(veces,nombre){
            if(veces > 0){
                hablar(function(){
                    conversacion(--veces,nombre)
                })
            }else{
                adios(nombre)
            }
        }

        saludar("David",function(nombre){
            conversacion(3,nombre)
        })

    }
}

//Metodo en objetos
function ejecutarMetodo(){

    const persona = {
        nombre: "Sharon",
        apellido: "Gamez",
        edad: 31,
        saludar: function () {
            return `Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
        }
    };

    const consola = document.getElementById("consola-metodo")
    consola.innerHTML = `
    <b class="doger">persona</b>.<b class="golden">saludar</b><b class="morado">()</b> <br>
    ${persona.saludar()}
    `
}ejecutarMetodo()

//Metodos en Clases
function ejecutarMetodoDeClase(){

    class Persona {
        constructor(nombre,hobbie) {
            this.nombre = nombre;
            this.hobbie = hobbie
        }

        saludar() {
            return `Hola, soy ${this.nombre}`
        }

        instrumento() {
            return `y toco la ${this.hobbie}`
        }
    }

    const ana = new Persona("David","guitarra");

    const consola = document.getElementById("consola-metodo-clase")
    consola.textContent = ana.saludar() + " " + ana.instrumento()
}

//Generadores
function ejecutarGeneradores(tipo){
    const consola = document.getElementById("consola-generadores")
    //bloques
    const bloque1 = document.getElementById("codigo-generador1")
    const bloque2 = document.getElementById("codigo-generador2")
    const bloque3 = document.getElementById("codigo-generador3")

    if(tipo == "Declaracion"){
        bloque1.style.display = "block"
        bloque2.style.display = "none"
        bloque3.style.display = "none"


        function* generador(){
            yield 10  
            yield 20  
            yield 30 
        }

        //crear el generador
        const valores = generador()
        const valoresiterados = [...generador()]

        consola.innerHTML = `
        <b class="doger">valores</b> ${valores} = ${JSON.stringify(valores)} <br>
            <b class="doger">valoresiterados</b> ${JSON.stringify(valoresiterados)} <br><br>

        <b class="verde">//llamar Generador</b><br>
        <b class="doger">valores</b>.<b class="golden">next()</b> ${JSON.stringify(valores.next())} <br>
        <b class="doger">valores</b>.<b class="golden">next()</b> ${JSON.stringify(valores.next())} <br><br>

        <b class="verde">//ver propiedades</b><br>
        <b class="doger">valores</b>.<b class="golden">next()</b>.<b class="sky">value</b> ${valores.next().value} <br>
        <b class="doger">valores</b>.<b class="golden">next()</b>.<b class="sky">done</b> ${valores.next().done} <br>
        `
    }
    else if(tipo == "iterar-valores"){
        bloque1.style.display = "none"
        bloque2.style.display = "block"
        bloque3.style.display = "none"


        function* generador(array){
            for(let value of array){
                yield value
            }
        }

        //crear el generador
        const valores = generador(["Luis","David","Sharon","Carmen","Jireh","Adriana"])

        consola.innerHTML = `
        <b class="verde">//ver propiedades</b><br>
        <b class="doger">valores</b>.<b class="golden">next()</b>.<b class="sky">value</b> ${valores.next().value} <br>
        <b class="doger">valores</b>.<b class="golden">next()</b>.<b class="sky">value</b> ${valores.next().value} <br>
        <b class="doger">valores</b>.<b class="golden">next()</b>.<b class="sky">value</b> ${valores.next().value} <br>
        <b class="doger">valores</b>.<b class="golden">next()</b>.<b class="sky">value</b> ${valores.next().value} <br>
        <b class="doger">valores</b>.<b class="golden">next()</b>.<b class="sky">value</b> ${valores.next().value} <br>
        <b class="doger">valores</b>.<b class="golden">next()</b>.<b class="sky">value</b> ${valores.next().value} <br>
        <b class="doger">valores</b>.<b class="golden">next()</b>.<b class="sky">value</b> ${valores.next().value} <br>
        `
    }
    else if(tipo == "Generar-valores"){
        bloque1.style.display = "none"
        bloque2.style.display = "none"
        bloque3.style.display = "block"

        function* obtenerId(){
            while(true){
                yield Math.random().toString(36).substring(5).toUpperCase()
            }
        }
        const codigos = obtenerId()
        
        consola.innerHTML = `
        <b class="doger">codigos</b>.<b class="golden">next()</b>.<b class="sky">value</b> <br>
        ${codigos.next().value}<br>
        <b class="doger">codigos</b>.<b class="golden">next()</b>.<b class="sky">value</b> <br>
        ${codigos.next().value}<br>
        <b class="doger">codigos</b>.<b class="golden">next()</b>.<b class="sky">value</b> <br>
        ${codigos.next().value}<br>
        `
    }
    
}ejecutarGeneradores()

//Arrow Function
function ejecutarArrowFunction(){
    const consola = document.getElementById("consola-Arrowfunction")

    // funcion tradicional
    const saludar = function(nombre){
        return "Hola " + nombre
    }
    // arrow function
    const suma = (num1,num2) => {
        return num1 + num2
    }
    // arrow function con retorno implicito
    const resta = (num1,num2) => num1 - num2
    const multiplicar = numero => numero * 5
    const numero = () => 45
    // multilinea implicito
    const multilinea = (num1,num2) => (
        num1 * num2 + 45
    )

    consola.innerHTML = `
    <b class="verde">//funcion tradicional</b><br>
    <b class="golden">saludar</b><b class="morado">(</b><b class="naranja">"David"</b><b class="morado">)</b> <br>
    ${saludar("David")}<br><br>

    <b class="verde">//Arrow Function</b><br>
    <b class="golden">suma</b><b class="morado">(</b><b class="verde">5,7</b><b class="morado">)</b> 
    ${suma(5,7)}<br><br>

    <b class="verde">//Arrow Function(retorno implicito)</b><br>
    <b class="golden">resta</b><b class="morado">(</b><b class="verde">12,4</b><b class="morado">)</b> 
    ${resta(12,4)}<br>

    <b class="golden">multiplicar</b><b class="morado">(</b><b class="verde">5</b><b class="morado">)</b> 
    ${multiplicar(5)}<br>

    <b class="golden">numero</b><b class="morado">()</b> 
    ${numero()}<br>

    <b class="golden">multilinea</b><b class="morado">(</b><b class="verde">5</b><b class="morado">)</b> 
    ${multilinea(5,3)}<br>
    `

}ejecutarArrowFunction()
    
//PROYECTO RED SOCIAL   
const datosUsuarios = [
    {username: "David", password: 1212},
    {username: "Sharon", password: 777},
    {username: "Adriana", password: 123},
    {username: "Jireh", password: 456}, 
]

const estado = [
    {frase: "Me encanta Javascript", emoji: "😎"},
    {frase: "Amo el cafe", emoji: "😋"},
    {frase: "Quiero ir a la piscina", emoji: "😭"},
    {frase: "Me fui para España", emoji: "😄"},
]

function verificar(tipo){
    const verificarUsuario = document.getElementById("verificarUsuario")
    const crearUsuario = document.getElementById("crearUsuario")
    const bienvenida = document.getElementById("Bienvenida")

    class Persona{
        constructor(username,password){
            this.username = username
            this.password = password
        }
    }

    class Frase{
        constructor(frase,emoji){
            this.frase = frase
            this.emoji = emoji
        }
    }

    if(tipo == "verificar"){

        const usuario = document.getElementById("name").value
        const contraseña = document.getElementById("contraseña").value
        const mensaje = document.getElementById("mensaje")

        let encontrado = false
        
        for(let i = 0 ; i < datosUsuarios.length ; i++){

            if(usuario == datosUsuarios[i].username && contraseña == datosUsuarios[i].password){
                verificarUsuario.style.display = "none"
                bienvenida.style.display = "flex"
                
                mensaje.innerHTML = `<b style="color: white"> Bienvenido/a ${datosUsuarios[i].username} <br> "${estado[i].frase}${estado[i].emoji}"</b>` 
                encontrado = true
                break
            }
        }

        if(!encontrado){
            verificarUsuario.style.display = "none"
            bienvenida.style.display = "flex"

            mensaje.innerHTML = `<b style="color: black"> Usuario y contraseña incorrectos! </b>` 
        }
    }

    else if(tipo == "registrar"){
        verificarUsuario.style.display = "none"    
        crearUsuario.style.display = "flex"    
    }else if(tipo == "atras"){
        bienvenida.style.display = "none"
        verificarUsuario.style.display = "flex"
    }
    else if(tipo == "crear"){
        const nuevoUsuario = document.getElementById("nuevoUsuario").value
        const nuevaContraseña = document.getElementById("nuevaContraseña").value
        const frase = document.getElementById("frase").value
        const emoji = document.getElementById("emoji").value

        const objetoNuevo = document.getElementById("añadirNuevoUsuario")
        const fraseNueva = document.getElementById("añadirFrase")
        const consola = document.getElementById("consola-redsocial")

        //crear objetos
        const persona1 = new Persona(nuevoUsuario,nuevaContraseña)
        const frase1 = new Frase(frase,emoji)
        //pasarlos al arreglo
        datosUsuarios.push(persona1)
        estado.push(frase1)

        //imprimir
        consola.innerHTML = `${JSON.stringify(datosUsuarios)} <br><br> ${JSON.stringify(estado)} `

        objetoNuevo.innerHTML += `<br>&emsp;
        <b class="morado">{</b><b class="sky">username</b>: <b class="naranja">"${nuevoUsuario}"</b>,
        <b class="sky">password</b>: <b class="verde">${nuevaContraseña}</b><b class="morado">}</b>,`

        fraseNueva.innerHTML += `<br>&emsp;
        <b class="morado">{</b><b class="sky">frase</b>: <b class="naranja">"${frase}"</b>,
        <b class="sky">emoji</b>: <b class="naranja">"${emoji}"</b><b class="morado">}</b>,`

        verificarUsuario.style.display = "flex"    
        crearUsuario.style.display = "none" 
    }
}








