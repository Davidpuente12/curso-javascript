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
    //PROMESAS
    'explicacion-promise',
    'explicacion-async',
    'explicacion-for-async',
    'explicacion-fetch',
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

////// BIGINT
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

//ARRAYS
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


//OBJETOS
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

////////////////////CONDICIONALES
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

///////////////////////CICLOS
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

    //FUNCIONES
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


    //PROMESAS 
function ejecutarPromise(tipo){
    const consola = document.getElementById("consola-promise")
    const codigo = document.getElementById("codigo-promise")
    codigo.innerHTML = `
    <p>
        <b class="azul">const</b> <b class="doger">obtenerDatos</b> = <b class="azul">new</b>
        <b class="aqua">Promise</b><b class="golden">(</b><b class="morado">(</b><b class="golden">resolver</b>, <b class="golden">rechazar</b><b class="morado">)</b>
        <b class="azul">=></b> <b class="morado">{</b><br>

        &emsp;&emsp;<b class="azul">let</b> <b class="sky">operacion</b> <br><br>

        &emsp; &emsp;<b class="golden">setTimeout</b><b class="azul">(</b><b class="golden">()</b> <b class="azul">=></b> <b class="golden">{</b> <br>

        &emsp; &emsp; &emsp;<b class="morado">if(</b><b class="sky">operacion</b><b class="morado">) {</b><br>
        &emsp; &emsp; &emsp; <b class="golden">resolver(<b class="naranja">"La operacion fue exitosa"</b>)</b><br>

        &emsp; &emsp; &emsp;<b class="morado">} else {</b>   <br>
        &emsp; &emsp; &emsp; <b class="golden">rechazar(<b class="naranja">"La operacion fallo"</b>)</b><br>
        &emsp; &emsp; &emsp;<b class="morado">}</b><br>
        &emsp; &emsp;<b class="golden">}</b>, <b class="verde">1000</b><b class="azul">)</b><br>
        <b class="morado">}</b><b class="golden">)</b><br><br>
    </p>

    <p>
        <b>obtener estado de la promesa:</b><br>
        <b class="doger">obtenerDatos</b><br>

        &emsp; .<b class="golden">then(</b><b class="azul">function</b> <b class="morado">(<b class="sky">resolver</b>) {</b><br>
        &emsp; &emsp; &emsp;<b class="sky">console</b>.<b class="golden">log</b><b class="azul">(</b><b class="naranja">'Estado: resuelto; <b class="golden">$ {<b class="sky">resolver</b>}</b>'</b><b class="azul">)</b><br>
        &emsp; <b class="morado">}</b><b class="golden">)</b><br>

        &emsp; .<b class="golden">catch(</b><b class="azul">function</b> <b class="morado">(<b class="sky">rechazar</b>) {</b><br>
        &emsp; &emsp; &emsp;<b class="sky">console</b>.<b class="golden">log</b><b class="azul">(</b><b class="naranja">'Estado: rechazado; <b class="golden">$ {<b class="sky">rechazar</b>}</b>'</b><b class="azul">)</b><br>
        &emsp; <b class="morado">}</b><b class="golden">)</b><br><br>
    </p>

    <button 
        onclick="ejecutarPromise(true)" 
        class="btn-simple2">
        <b class="sky">operacion</b>=
        <b class="azul">true</b>
    </button>

    <button 
        onclick="ejecutarPromise(false)" 
        class="btn-simple2">
        <b class="sky">operacion</b>=
        <b class="azul">false</b>
    </button>
    `

    const promesa = new Promise(function(resolver, rechazar) {
        let operationSuccessFull = tipo;

        setTimeout(() =>{
            if (operationSuccessFull) {
            resolver('La operación fue exitosa');
            } else {
            rechazar('La operación falló');
            }
        },1000)
        
    });

    promesa
        .then(function (resolver) {
            consola.textContent = `Estado: resuelto; ${resolver}`;
        })
        .catch(function (rechazar) {
            consola.textContent = `Estado: rechazado; ${rechazar}`;
        });

}
function ejecutarPromise2(tipo){
    const consola = document.getElementById("consola-promise")
    const codigo = document.getElementById("codigo-promise")
    consola.innerHTML = ""
    codigo.innerHTML = `
    <p class="margen0">
        <b class="azul">function</b>
        <b class="golden">saludar</b>(<b class="sky">nombre</b>){
        <div class="margenIz">
            <b class="morado">return</b> <b class="azul">new</b>
            <b class="aqua">Promise</b>((<b class="golden">resolver</b>,
            <b class="golden">reject</b>) => {
            <div class="margenIz">
                <b class="golden">setTimeout</b>(() => {
                    <div class="margenIz">
                        <b class="morado">if</b>(<b class="sky">nombre</b>){ <br>
                        &emsp; <b class="golden">resolver</b>('Hola $ {<b class="sky">nombre</b>}') <br>
                        } <b class="morado">else</b> { <br>
                        &emsp; <b class="golden">reject</b>("no se proporciono un nombre")
                        }
                    </div>
                },1000);
            </div>
            });
        </div>
        } <br>

        <b class="azul">function</b> <b class="golden">hablar</b>(){
        <div class="margenIz">
            <b class="morado">return</b> <b class="azul">new</b>
            <b class="aqua">Promise</b>(<b class="golden">resolver</b> => {
            <div class="margenIz">
                <b class="golden">setTimeout</b>(() => { <br>
                &emsp; <b class="golden">resolver</b>('bla bla bla') <br>
                },1200)
            </div>
            }
        </div>
        )} <br>

        <b class="azul">function</b> 
        <b class="golden">adios</b>(<b class="sky">nombre</b>){
        <div class="margenIz">
            <b class="morado">return</b> <b class="azul">new</b>
            <b class="aqua">Promise</b>(<b class="golden">resolver</b> => {
            <div class="margenIz">
                <b class="golden">setTimeout</b>(() => { <br>
                &emsp; <b class="golden">resolver</b>('Adios $ {<b class="sky">nombre</b>}'); <br>
                },1300);
            </div>
            });
        </div>
        } <br><br>

        <b class="verde">// llamado de funcion</b> <br>
        <b class="golden">saludar</b>("...")

        &emsp; &emsp; &emsp; &emsp; &emsp;
        <button 
            onclick="ejecutarPromise2('David')" 
            class="btn-simple2">
            <b class="naranja">"David"</b>
        </button>

        <div class="margenIz">
            .<b class="golden">then</b>(<b class="sky">respuesta</b> => { <br>
            &emsp;  consola.innerHTML += <b class="sky">respuesta</b> <br>
            &emsp;  <b class="morado">return</b> <b class="golden">hablar</b>() <br>
            }) <br>
            .<b class="golden">then</b>(<b class="sky">respuesta</b> => { <br>
            &emsp;  consola.innerHTML += <b class="sky">respuesta</b> <br>
            &emsp;  <b class="morado">return</b> <b class="golden">adios</b>("David") <br>
            }) <br>
            .<b class="golden">then</b>(<b class="sky">respuesta</b> => { <br>
            &emsp;  consola.innerHTML += <b class="sky">respuesta</b> <br>
            }) <br>
            .<b class="golden">catch</b>(error => consola.innerHTML = '$ {error}')
        </div>
    </p>
    `

    function saludar(nombre){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(nombre){
                    resolve(`<p>Hola ${nombre}</p>`)
                } else {
                    reject("no se proporciono un nombre")
                }
            },1000);
        });
    }

    function hablar(){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`<p>bla bla bla</p>`)
            },1200)
        }
    )}

    function adios(nombre){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`<p>Adios ${nombre}</p>`);
            },1300);
        });
    }

    // llamado de funcion
    saludar(tipo)
        .then(respuesta => {
            consola.innerHTML += respuesta 
            return hablar()
        })
        .then(respuesta => {
            consola.innerHTML += respuesta
            return adios("David")
        })
        .then(respuesta => {
            consola.innerHTML += respuesta
        })
        .catch(error => consola.innerHTML = `${error}`)
}

//Asynd and await
function ejecutarAsyncYawait() {
    const consola = document.getElementById("consola-async")

    async function fetchData(){
        try {
            const response = await fetch('https://swapi.dev/api/planets/3/');
            const data = await response.json();

            consola.innerHTML = `
            <b class="golden">fetchData()</b> <br>
            ${JSON.stringify(data,true,2)}
            `
        } catch (error) {
            consola.innerHTML = `${'Error:', error}`
        }
    }
    fetchData() 
}
function ejecutarAsyncYawait2(nombre){
    const consola = document.getElementById("consola-async")
    const codigo = document.getElementById("codigo-async")
    consola.innerHTML = ''
    codigo.innerHTML = `
    <p class="margen0">
        <b class="azul">function</b> 
        <b class="golden">saludar</b>(<b class="sky">nombre</b>){
            <div class="margenIz">
            <b class="morado">return</b> <b class="azul">new</b>
            <b class="aqua">Promise</b>((<b class="golden">resolve</b>,
            <b class="golden">reject</b>) => {
                <div class="margenIz">
                <b class="golden">setTimeout</b>(() => { 
                    <div class="margenIz">
                    <b class="morado">if</b>(<b class="sky">nombre</b>){ <br>
                    &emsp; consola.innerHTML = 'Hola $ {<b class="sky">nombre</b>}' <br>
                    &emsp; <b class="golden">resolve</b>() <br>
                    } <b class="morado">else</b> 
                        <b class="golden">reject</b>("no se proporciono un nombre") <br>
                    </div>
                },<b class="verde">1000</b>);
                </div>
            });
            </div>
        } <br>

        <b class="azul">function</b> <b class="golden">hablar</b>(){
            <div class="margenIz">
            <b class="morado">return</b> <b class="azul">new</b> 
            <b class="aqua">Promise</b>(<b class="golden">resolve</b> => {
                <div class="margenIz">
                <b class="golden">setTimeout</b>(() => { <br>
                &emsp; consola.innerHTML = 'bla bla bla' <br>
                &emsp; <b class="golden">resolve</b>() <br>
                },<b class="verde">1200</b>)
                </div>
            }
            </div>
        )} <br>

        <b class="azul">function</b> 
        <b class="golden">adios</b>(<b class="sky">nombre</b>){
            <div class="margenIz">
            <b class="morado">return</b> <b class="azul">new</b> 
            <b class="aqua">Promise</b>(<b class="golden">resolve</b> => {
                <div class="margenIz">
                <b class="golden">setTimeout</b>(() => { <br>
                &emsp; consola.innerHTML = 'Adios $ {<b class="sky">nombre</b>}' <br>
                &emsp; <b class="golden">resolve</b>(); <br>
                },<b class="verde">1300</b>);
                </div>
            });
            </div>
        } <br><br>

        <b class="azul">async function</b> 
        <b class="golden">main</b>(<b class="sky">nombre</b>){
            <div class="margenIz">
            <b class="morado">try</b>{ <br>
            &emsp; <b class="morado">await</b> <b class="golden">saludar</b>(<b class="sky">nombre</b>); <br>
            &emsp; <b class="morado">await</b> <b class="golden">hablar</b>(); <br>
            &emsp; <b class="morado">await</b> <b class="golden">hablar</b>(); <br>
            &emsp; <b class="morado">await</b> <b class="golden">hablar</b>(); <br> 
            &emsp; <b class="morado">await</b> <b class="golden">adios</b>(<b class="sky">nombre</b>); <br>
            } <br>
            <b class="morado">catch</b> (<b class="sky">error</b>) {consola.innerHTML = <b class="sky">error</b>}
            </div>
        } <br><br>

        consola.innerHTML = 'Primer Proceso' <br>
        <b class="golden">main</b>(<b class="naranja">"..."</b>) 
        <button
            onclick="ejecutarAsyncYawait2('David')"
            class="btn-simple2">
            <b class="naranja">"David"</b>
        </button>
        <br>
        consola.innerHTML = 'Segundo Proceso'
    </p>
    `

    function saludar(nombre){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(nombre){
                    consola.innerHTML += `<p>Hola ${nombre}</p>`
                    resolve()
                } else {
                    reject("no se proporciono un nombre")
                }
            },1000);
        });
    }

    function hablar(){
        return new Promise(resolve => {
            setTimeout(() => {
                consola.innerHTML += `<p>bla bla bla</p>`
                resolve()
            },1200)
        }
    )}

    function adios(nombre){
        return new Promise(resolve => {
            setTimeout(() => {
                consola.innerHTML += `<p>Adios ${nombre}</p>`
                resolve();
            },1300);
        });
    }

    async function main(nombre){
        try{
            await saludar(nombre);
            await hablar();
            await hablar();
            await hablar();
            await adios(nombre);
        }
        catch (error) {consola.innerHTML += error}
    }

    consola.innerHTML += `<p>Primer Proceso</p>`
    main(nombre)
    consola.innerHTML += `<p>Segundo Proceso</p>`
}

//For await...of
async function fetchDatalist() {
    const consola = document.getElementById("consola-for-async")

  const URLs = [
    'https://rickandmortyapi.com/api/character',  
    'https://rickandmortyapi.com/api/location',
    'https://rickandmortyapi.com/api/episode'
  ];

  try {
    for await (let URL of URLs) {
      let response = await fetch(URL);
      let data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
//fetch
let datos
let actual = 0
function ejecutarFetch(tipo){
    const consola = document.getElementById("consola-fetch")
    
    if(tipo == "fetch-uno"){
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => response.json())
            .then(data => consola.innerHTML = 
                `Ver <b class="sky">response</b> y <b class="sky">response</b>.<b class="golden">json</b> en consola <br><br> 
                <b class="sky">datos</b>: <br> <span class="naranja">${JSON.stringify(data)}</span><br>`)

        //por consola:
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            console.log(response)
            console.log(response.json())
        })
    }
    else if(tipo == "fetch-dos"){

        fetch("https://jsonplaceholder.typicode.com/posts/",{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
        })
        .then(response => response.json())
        .then(data => {
            consola.innerHTML =
            `Datos obtenidos con exito. Total de post: <span class="verde">${data.length}</span>, 
            post 1: <span class="naranja">${JSON.stringify(data[actual])}</span><br>
            `
        });  
    }
    else if(tipo == "fetch-tres"){

        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => consola.innerHTML =
                `${response.status}<br> ${response.ok}<br> ${response.url}<br> ${response.body}<br> ${response.headers} `
        )
    }

}
    //llamar otro post
function nextpost(){
    if(actual > 99){return}
    actual ++
    const cambiarNumero = document.getElementById("actual")
    cambiarNumero.textContent = actual
    ejecutarFetch("fetch-dos")
}
    //ejemplos fetch
function siguienteEjemplo(tipo){
    
    const codigo = document.getElementById("code-fetch")
    const consola = document.getElementById("consola-fetch")
    const btnConsola = document.getElementById("btn-nextpost")
    
    if(tipo == "fetch-dos"){ 
        consola.textContent = " "
        codigo.innerHTML = 
        `<div">
            <code style="display: block; height: 300px;">
                <b class="golden">fetch(</b><b class="naranja">"https://jsonplaceholder.typicode.com/posts/"</b>, <b class="morado">{</b><br>
                &emsp; <b class="sky">method:</b> <b class="naranja">"GET"</b>,<br>
                &emsp; <b class="sky">headers:</b> <b class="azul">{</b><br>
                &emsp; &emsp; <b class="naranja">"Content-Type"</b> : <b class="naranja">"application/json"</b><br>
                &emsp; <b class="azul">}</b><br>
                <b class="morado">}</b><b class="golden">)</b><br>
                
                .<b class="golden">then(</b><b class="sky">response</b> <b class="azul">=></b> <b class="sky">response</b>.<b class="golden">json<b class="morado">()</b>)</b><br>
                .<b class="golden">then(</b><b class="sky">datos</b> <b class="azul">=></b> <b class="sky">console</b>.<b class="golden">log</b><b class="morado">(</b><br>
                <b class="naranja">Datos obtenidos con exito. Total de post: <b class="azul">$ {<b class="sky">datos.length</b>}</b>, post actual: <b class="azul">$ {<b class="sky">datos<b class="golden">[<b class="verde">0</b>]</b></b>}</b></b> 
                <b class="morado">)</b><b class="golden">)</b>
            </code>
            <button onclick="ejecutarFetch('fetch-dos')"><b>Ejecutar</b></button>
            <button onclick="siguienteEjemplo('fetch-tres')" class="btn-flechas">➡️</button>  
        </div>`
        btnConsola.innerHTML =
        `<button onclick="nextpost()" style="background-color: transparent; color: white;font-size: 1.3rem;border: orange solid 1px; width: 210px">
            next post 
            <span class="sky">datos<span class="golden">[<b class="verde" id="actual">0</b>]</span></span>
        </button>`
    
    }else if(tipo == "fetch-tres"){
        consola.innerHTML = " "
        codigo.innerHTML =
        `<div>    
            <code style="display: block; height: 300px;">
                <b class="golden">fetch(</b><b class="naranja">"https://jsonplaceholder.typicode.com/posts/1"</b><b class="golden">)</b><br>
                &emsp; &emsp;.<b class="golden">then(</b><b class="sky">response</b> <b class="azul">=></b> <b class="sky">console</b>.<b class="golden">log</b><b class="morado">(</b> <br>
                &emsp; &emsp; &emsp; <b class="sky">response</b>.<b class="doger">status</b>, <br>
                &emsp; &emsp; &emsp; <b class="sky">response</b>.<b class="doger">ok</b>, <br>
                &emsp; &emsp; &emsp; <b class="sky">response</b>.<b class="doger">url</b>, <br>
                &emsp; &emsp; &emsp; <b class="sky">response</b>.<b class="doger">body</b>, <br>
                &emsp; &emsp; &emsp; <b class="sky">response</b>.<b class="doger">headers</b> <br>
                &emsp; &emsp;<b class="morado">)</b><b class="golden">)</br><br>
            </code>
            <button onclick="ejecutarFetch('fetch-tres')"><b>Ejecutar</b></button> 
            <button onclick="siguienteEjemplo('fetch-uno')" class="btn-flechas">➡️</button>  
        </div>`
        btnConsola.textContent = "" 
    }else if(tipo == "fetch-uno"){
        consola.innerHTML = " "
        codigo.innerHTML =
        `<div>    
            <code style="display: block; height: 300px;">
                <b class="golden">fetch(</b><b class="naranja">"https://jsonplaceholder.typicode.com/posts/1"</b><b class="golden">)</b><br>
                &emsp; &emsp;.<b class="golden">then(</b><b class="sky">response</b> <b class="azul">=></b> <b class="sky">response</b>.<b class="golden">json<b class="morado">()</b>)</b><br>
                &emsp; &emsp;.<b class="golden">then(</b><b class="sky">datos</b> <b class="azul">=></b> <b class="sky">console</b>.<b class="golden">log<b class="morado">(<b class="sky">datos</b>)</b>)</b>
            </code>
            <button onclick="ejecutarFetch('fetch-uno')"><b>Ejecutar</b></button> 
            <button onclick="siguienteEjemplo('fetch-dos')" class="btn-flechas">➡️</button>  
        </div>`
        btnConsola.textContent = "" 
    }

}

    //DOM
function ejecutarPropiedadesDom(tipo){

    const consola = document.getElementById("consola-propiedades")

    let nodo = document.getElementById("elemento")
    let nodoLista = document.getElementById("lista")
    let estilos = JSON.stringify(nodo.style,null,2)
    let texto = nodo.firstChild

    consola.innerHTML = `
        <b class="sky">nodo</b>.<b class="doger">nodeType</b> ${nodo.nodeType} <br> 
        <b class="sky">nodo</b>.<b class="doger">nodeName</b> ${nodo.nodeName}  <br> 
        <b class="sky">texto</b>.<b class="sky">nodeValue</b> ${texto.nodeValue}  <br>
        <b class="sky">nodo</b>.<b class="sky">id</b> ${nodo.id} <br>
        <b class="sky">nodo</b>.<b class="sky">className</b> ${nodo.className} <br>
        
        <b class="sky">nodo</b>.<b class="sky">attributes</b>  <br>
        ${nodo.attributes}: ${Array.from(nodo.attributes).map(n => n.nodeName)} <br>
       
    `

    if(tipo == "buscar-nodos"){
        consola.innerHTML = `
        <p style="border-bottom: rgb(254, 210, 99) 3px solid; width: 175px" >Buscar nodos:</p>

        <ul style="padding: 0;">    
            <li>
                <b class="sky">nodoLista</b>.<b class="doger">parentNode</b> ${nodoLista.parentNode}  <br>
                <b class="sky">nodoLista</b>.<b class="doger">parentNode</b>.<b class="doger">nodeName</b> ${nodoLista.parentNode.nodeName} 
                <b class="sky">nodoLista</b>.<b class="doger">parentNode</b>.<b class="sky">outerHTML</b><br><br> ${nodoLista.parentNode.outerHTML}<br>
            </li>
            
            <li>
                <b class="sky">nodo</b>.<b class="doger">childNodes</b> ${nodo.childNodes}  <br>
                <b class="aqua">arrayNodelist</b>.<b class="doger">nodeName</b> ${Array.from(nodo.childNodes).map(n => n.nodeName)}
                <b class="aqua">arrayNodelist</b>.<b class="sky">outerHTML</b> <br><br> ${Array.from(nodo.childNodes).map(n => n.outerHTML).join(",")}<br><br>
            </li> 

            <li>
                <b class="sky">nodo</b>.<b class="doger">firstChild</b> ${nodo.firstChild} <br>
                <b class="sky">nodo</b>.<b class="doger">firstChild</b>.<b class="doger">nodeName</b> ${nodo.firstChild.nodeName} <br>  
                <b class="sky">nodo</b>.<b class="doger">firstChild</b>.<b class="sky">nodeValue</b> ${nodo.firstChild.nodeValue}<br><br>
            </li> 

            <li>
                <b class="sky">nodo</b>.<b class="doger">lastChild</b> ${nodo.lastChild} <br>
                <b class="sky">nodo</b>.<b class="doger">firstChild</b>.<b class="doger">nodeName</b> ${nodo.lastChild.nodeName} <br>  
                <b class="sky">nodo</b>.<b class="doger">firstChild</b>.<b class="sky">nodeValue</b> ${nodo.lastChild.nodeValue} <br><br>
            </li> 

            <li>
                <b class="sky">nodo</b>.<b class="doger">nextSibling</b> ${nodo.nextSibling} <br>
                <b class="sky">nodo</b>.<b class="doger">firstChild</b>.<b class="doger">nodeName</b> ${nodo.nextSibling.nodeName} <br>  
                <b class="sky">nodo</b>.<b class="doger">firstChild</b>.<b class="sky">nodeValue</b><br> ${nodo.nextSibling.nodeValue} <br><br>        
            </li>

            <li>
                <b class="sky">nodo</b>.<b class="doger">previousSibling</b> ${nodo.previousSibling} <br>
                <b class="sky">nodo</b>.<b class="doger">firstChild</b>.<b class="doger">nodeName</b> ${nodo.previousSibling.nodeName} <br> 
                <b class="sky">nodo</b>.<b class="doger">firstChild</b>.<b class="sky">nodeValue</b><br> ${nodo.previousSibling.nodeValue}
            </li>
        </ul>
        `
    }
    else if(tipo == "buscar-elementos"){
        consola.innerHTML = `
        <p style="border-bottom: rgb(254, 210, 99) 3px solid; width: 230px" >Buscar elementos:</p>

        <ul style="padding: 0">
            <li>
                <b class="sky">nodo</b>.<b class="doger">children</b> ${nodo.children} <br>
                <b class="aqua">arrayHTMLCollection</b>.<b class="doger">nodeName</b> ${Array.from(nodo.children).map(n => n.nodeName)} 
                <b class="aqua">arrayHTMLCollection</b>.<b class="sky">outerHTML</b><br><br> ${Array.from(nodo.children).map(n => n.outerHTML).join("")} <br>
            </li> 

            <li>
                <b class="sky">nodoLista</b>.<b class="doger">parentElement</b> ${nodoLista.parentElement} <br>
                <b class="sky">nodoLista</b>.<b class="doger">parentElement</b>.<b class="doger">nodeName</b> ${nodoLista.parentElement.nodeName}<br>
                <b class="sky">nodoLista</b>.<b class="doger">parentElement</b>.<b class="sky">outerHTML</b><br><br> ${nodoLista.parentElement.outerHTML} <br>
            </li>

            <li>
                <b class="sky">nodo</b>.<b class="doger">firstElementChild</b> ${nodo.firstElementChild} <br>
                <b class="sky">nodo</b>.<b class="doger">firstElementChild</b>.<b class="doger">nodeName</b> ${nodo.firstElementChild.nodeName} 
                <b class="sky">nodo</b>.<b class="doger">firstElementChild</b>.<b class="sky">outerHTML</b><br><br> ${nodo.firstElementChild.outerHTML} <br>
            </li> 

            <li>
                <b class="sky">nodo</b>.<b class="doger">lastElementChild</b> ${nodo.lastElementChild} <br>
                <b class="sky">nodo</b>.<b class="doger">lastElementChild</b>.<b class="doger">nodeName</b> ${nodo.lastElementChild.nodeName}
                <b class="sky">nodo</b>.<b class="doger">lastElementChild</b>.<b class="sky">outerHTML</b><br><br> ${nodo.lastElementChild.outerHTML} <br>
            </li> 

            <li>
                <b class="sky">nodo</b>.<b class="doger">nextElementSibling</b> ${nodo.nextElementSibling} <br>
                <b class="sky">nodo</b>.<b class="doger">nextElementSibling</b>.<b class="doger">nodeName</b> ${nodo.nextElementSibling.nodeName} <br>
                <b class="sky">nodo</b>.<b class="doger">lastElementChild</b>.<b class="sky">outerHTML</b><br><br> ${nodo.nextElementSibling.outerHTML}<br>
            </li>

            <li>
                <b class="sky">nodo</b>.<b class="doger">previousElementSibling</b> ${nodo.previousElementSibling} <br>
                <b class="sky">nodo</b>.<b class="doger">previousElementSibling</b>.<b class="doger">nodeName</b> ${nodo.previousElementSibling.nodeName} <br>
                <b class="sky">nodo</b>.<b class="doger">previousElementSibling</b>.<b class="sky">outerHTML</b><br><br> ${nodo.previousElementSibling.outerHTML}
            </li>
        </ul>

    
    
        `
    }
    
}ejecutarPropiedadesDom()

//metodos de busqueda
function ejecutarMetodosDeBusqueda(tipo){
    const consola = document.getElementById("consola-MetodosDeBusqueda")
    const codigo = document.getElementById("codigo-MetodosDeBusqueda")

    //metodos tradicionales de busqueda
    if(tipo == "metodos-tradicionales"){
        codigo.innerHTML = `
        <b class="letra-B" style="border-bottom: rgb(254, 210, 99) 3px solid;">metodos tradicionales de busqueda</b> <br><br>
            
        <b class="letra-B">Elementos por ID</b><br>
        <b class="azul">const</b> <b class="doger">ElementoPorId</b> = <b class="sky">document</b>.<b class="golden">getElementById(<b class="naranja">"container"</b>)</b> <br><br>

        <b class="letra-B">Elementos por clases</b><br>
        <b class="azul">const</b> <b class="doger">ElementosPorClases</b> = <b class="sky">document</b>.<b class="golden">getElementsByClassName(<b class="naranja">"items"</b>)</b> <br><br>

        <b class="letra-B">Elementos por atributo name</b><br>
        <b class="azul">const</b> <b class="doger">ElementosporName</b> = <b class="sky">document</b>.<b class="golden">getElementsByName(<b class="naranja">"nombre"</b>)</b> <br><br>

        <b class="letra-B">Elementos por Etiqueta</b><br>
        <b class="azul">const</b> <b class="doger">ElementosporEtiqueta</b> = <b class="sky">document</b>.<b class="golden">getElementsByTagName(<b class="naranja">"article"</b>)</b> <br><br>

        <button class="btn-consola" onclick="ejecutarMetodosDeBusqueda('ejecutar-metodos-tradicionales')">Ejecutar</button>
        `
    }
    //botones 
    if(tipo == "ejecutar-metodos-tradicionales"){
        consola.innerHTML = " "

        // metodos tradicionales de busqueda
        const ElementoPorId = document.getElementById("container")
        const ElementosPorClases = document.getElementsByClassName("items")
        const ElementosporName = document.getElementsByName("nombre")
        const ElementosporEtiqueta = document.getElementsByTagName("article")

        consola.innerHTML = `
        <b class="doger">ElementoPorId</b> ${ElementoPorId} <br><br>
        ${ElementoPorId.outerHTML}<br>

        <b class="doger">ElementosPorClases</b> ${ElementosPorClases} <br>
        ${Array.from(ElementosPorClases).map(n => n.outerHTML).join("")} <br>

        <b class="doger">ElementosporName</b> ${ElementosporName} <br><br>
        ${Array.from(ElementosporName).map(n => n.outerHTML)}<br><br>
        
        <b class="doger">ElementosporEtiqueta</b> ${ElementosporEtiqueta}<br>
        ${Array.from(ElementosporEtiqueta).map(n => n.outerHTML)}
        `
    }


    //metodos modernos de busqueda
    if(tipo == "metodos-modernos"){
        consola.innerHTML = " "

        codigo.innerHTML = `
        <b class="letra-B">Consular por Selector</b> <br>
        <b class="azul">const</b> <b class="doger">consultaPorId</b> = <b class="sky">document</b>.<b class="golden">querySelector(<b class="naranja">"#container"</b>)</b> <br>
        <b class="azul">const</b> <b class="doger">consultaPorClase</b> = <b class="sky">document</b>.<b class="golden">querySelector(<b class="naranja">".items"</b>)</b> <br>
        <b class="azul">const</b> <b class="doger">consultaPorDosClases</b> = <b class="sky">document</b>.<b class="golden">querySelector(<b class="naranja">".items.tres"</b>)</b> <br>
        <b class="azul">const</b> <b class="doger">consultaPorname</b> = <b class="sky">document</b>.<b class="golden">querySelector(<b class="naranja">"[name='nombre']"</b>)</b> <br><br>
        
        <b class="letra-B">Consular todos los Selectores</b> <br>
        <b class="azul">const</b> <b class="doger">consultasPorId</b> = <b class="sky">document</b>.<b class="golden">querySelectorAll(<b class="naranja">"#container"</b>)</b> <br>
        <b class="azul">const</b> <b class="doger">consultasPorClase</b> = <b class="sky">document</b>.<b class="golden">querySelectorAll(<b class="naranja">".items"</b>)</b> <br>
        <b class="azul">const</b> <b class="doger">consultasPorDosClases</b> = <b class="sky">document</b>.<b class="golden">querySelectorAll(<b class="naranja">".items.tres"</b>)</b> <br>
        <b class="azul">const</b> <b class="doger">consultasPorname</b> = <b class="sky">document</b>.<b class="golden">querySelectorAll(<b class="naranja">"[name='nombre']"</b>)</b> <br><br>

        <b class="letra-B">Mas cercano</b> <br>
        <b class="azul">const</b> <b class="doger">closest</b> = <b class="doger">consultaPorClase</b>.<b class="golden">closest(<b class="naranja">"article"</b>)</b> <br><br>

        <b class="letra-B">matches()</b> <br>
        <b class="azul">const</b> <b class="doger">matches</b> = <b class="doger">consultaPorClase</b>.<b class="golden">matches(<b class="naranja">"li"</b>)</b> <br>
        <b class="azul">const</b> <b class="doger">matches2</b> = <b class="doger">consultaPorClase</b>.<b class="golden">matches(<b class="naranja">".items"</b>)</b> <br><br>

        <button class="btn-consola2" onclick="ejecutarMetodosDeBusqueda('ejecutar-querySelector')">Ejecutar querySelector</button>
        <button class="btn-consola2" onclick="ejecutarMetodosDeBusqueda('ejecutar-querySelectorAll')">Ejecutar querySelectorAll</button>
        <button class="btn-consola2" onclick="ejecutarMetodosDeBusqueda('closestYmatches')">Ejecutar closest y matches</button>
        `
    }

    //botones
    if(tipo == "ejecutar-querySelector"){
        const consultaPorId = document.querySelector("#container")
        const consultaPorClase = document.querySelector(".items")
        const consultaPorDosClases = document.querySelector(".items.tres")
        const consultaPorname = document.querySelector("[name='nombre']")

        consola.innerHTML = `
        <b class="doger">consultaPorId</b> ${consultaPorId} <br><br>
        ${consultaPorId.outerHTML}<br>

        <b class="doger">consultaPorClase</b> ${consultaPorClase} <br><br>
        ${consultaPorClase.outerHTML} <br>

        <b class="doger">consultaPorDosClases</b> ${consultaPorDosClases} <br><br>
        ${consultaPorDosClases.outerHTML}<br>

        <b class="doger">consultaPorname</b> ${consultaPorname} <br><br>
        ${consultaPorname.outerHTML}<br>
        `
    }
    else if(tipo == "ejecutar-querySelectorAll"){
        consola.innerHTML = " "

        const consultasPorId = document.querySelectorAll("#container")
        const consultasPorClase = document.querySelectorAll(".items")
        const consultasPorDosClases = document.querySelectorAll(".items.tres")
        const consultasPorname = document.querySelectorAll("[name='nombre']")

        consola.innerHTML = `
        <b class="doger">consultasPorId</b> ${consultasPorId} <br><br>
        ${Array.from(consultasPorId).map(item => item.outerHTML)}<br>

        <b class="doger">consultasPorClase</b> ${consultasPorClase} <br><br>
        ${Array.from(consultasPorClase).map(item => item.outerHTML).join("")} <br>

        <b class="doger">consultasPorDosClases</b> ${consultasPorDosClases} <br><br>
        ${Array.from(consultasPorDosClases).map(item => item.outerHTML)}<br>

        <b class="doger">consultasPorname</b> ${consultasPorname} <br><br>
        ${Array.from(consultasPorname).map(item => item.outerHTML)}<br>
        `
    }
    else if(tipo == "closestYmatches"){
        const consultaPorClase = document.querySelector(".items")
        const closest = consultaPorClase.closest("article")
        const matches = consultaPorClase.matches("li")
        const matches2 = consultaPorClase.matches(".items")

        consola.innerHTML = `
        <b class="doger">closest</b> ${closest} <br>
        <b class="doger">closest</b>.<b class="doger">nodeName</b> ${closest.nodeName} <br>
        <b class="doger">closest</b>.<b class="doger">nodeName</b>.<b class="sky">outerHTML</b> ${closest.outerHTML} <br>

        <b class="doger">matches</b> ${matches} <br>
        <b class="doger">matches2</b> ${matches2} <br>
        `
    }   
}ejecutarMetodosDeBusqueda("metodos-modernos")

//metodos y propiedades de manipulacion de elementos
function ejecutarMetodosDeManipulacion(tipo){
    const consola = document.getElementById("consola-manipulaciondelDom")
    const consolaJavascript = document.getElementById("javascript-manipulaciondelDom")
    const notas = document.getElementById("notas-manipulaciondelDom")

    const elemento = document.querySelector(".ElementoDeManipulacion")
    const parrafo = document.querySelector(".parrafo")

    //Codigo
    if(tipo == "ver-contenidoDeTexto"){
        consolaJavascript.innerHTML = `
        <b class="doger">parrafo</b>.<b class="sky">textContent</b> = <b class="naranja">"Texto Manipulado con textConten"</b>
        <button class="btn-consola2" onclick="ejecutarMetodosDeManipulacion('textContent')">cambiar</button><br><br>

        <b class="doger">parrafo</b>.<b class="sky">innerText</b> = <b class="naranja">"Texto Manipulado con innerText"</b>
        <button class="btn-consola2" onclick="ejecutarMetodosDeManipulacion('innerText')">cambiar</button><br><br>

        <b class="doger">parrafo</b>.<b class="sky">outerText</b> = <b class="naranja">"Texto Manipulado con outerText"</b>
        <button class="btn-consola2" onclick="ejecutarMetodosDeManipulacion('outerText')">cambiar</button>
        `

        notas.style.display = "block"
        notas.innerHTML = `
        <li><code class="sky">textContent</code>, <code class="sky">innertext</code>  reemplazan todo el contenido de texto incluso etiquetas internas, por el texto insertado.</li>
        <li><code class="sky">outerText</code> igual que innertext, elimina todo lo que que contiene el elemento, pero adicional la propia etiqueta que lo contiene.</li>
        `

        consola.innerHTML = `
        <b class="doger">parrafo</b>.<b class="sky">textContent</b><br> ${parrafo.textContent} <br><br>
        <b class="doger">parrafo</b>.<b class="sky">innerText</b><br> ${parrafo.innerText} <br><br>
        <b class="doger">parrafo</b>.<b class="sky">outerText</b><br> ${parrafo.outerText} <br><br>
        `
    }
    else if(tipo == "ver-contenido-HTML"){
        consolaJavascript.innerHTML = `
        <b class="letra-B">Reemplazar contenido HTML</b><br>
            <b class="doger">parrafo</b>.<b class="sky">innerHTML</b> = <b class="naranja">"Manipulado con &lt;b class="aqua">innerHTML&lt;/b>"</b>
            <button class="btn-consola2" onclick="ejecutarMetodosDeManipulacion('innerHTML')">cambiar</button>

            <b class="doger">parrafo</b>.<b class="sky">outerHTML</b> = <b class="naranja">"Manipulado con &lt;b class="aqua">outerHTML&lt;/b>"</b>
            <button class="btn-consola2" onclick="ejecutarMetodosDeManipulacion('outerHTML')">cambiar</button><br><br>

        <b class="letra-B">Añadir contenido HTML</b><br>
            <b class="doger">parrafo</b>.<b class="golden">insertAdjacentHTML(</b><b class="naranja">"beforebegin"</b>,<b class="naranja">"&lt;b>fuera al comienzo&lt;/b>"</b><b class="golden">)</b>
            <button class="btn-consola2" onclick="ejecutarMetodosDeManipulacion('insertAdjacentHTML-beforebegin')">añadir</button>

            <b class="doger">parrafo</b>.<b class="golden">insertAdjacentHTML(</b><b class="naranja">"afterbegin"</b>,<b class="naranja">"&lt;b>dentro al comienzo&lt;/b>"</b><b class="golden">)</b>
            <button class="btn-consola2" onclick="ejecutarMetodosDeManipulacion('insertAdjacentHTML-afterbegin')">añadir</button>

            <b class="doger">parrafo</b>.<b class="golden">insertAdjacentHTML(</b><b class="naranja">"beforeend"</b>,<b class="naranja">"&lt;b>dentro al final&lt;/b>"</b><b class="golden">)</b>
            <button class="btn-consola2" onclick="ejecutarMetodosDeManipulacion('insertAdjacentHTML-beforeend')">añadir</button>

            <b class="doger">parrafo</b>.<b class="golden">insertAdjacentHTML(</b><b class="naranja">"afterend"</b>,<b class="naranja">"&lt;b>fuera al final&lt;/b>"</b><b class="golden">)</b>
            <button class="btn-consola2" onclick="ejecutarMetodosDeManipulacion('insertAdjacentHTML-afterend')">añadir</button><br><br>
        `

        notas.style.display = "block"
        notas.innerHTML = `
        <li><code class="sky">innerHTML</code> parecido a innertext, reemplaza el contenido por otro, pero permite añadir estructuta HTML y atributos que modifiquen el elemento.</li>
        <li><code class="sky">outerHTML</code> parecido a innerHTML, reemplaza el contenido por otro, pero incluye el elemento que lo contiene, esto elimina todos los atributos, debe usarse con precaucion, si queremos mantener los atributos, debemos definirlos en la asignacion.</li>
        `
        consola.innerHTML = `
        <b class="doger">elemento</b>.<b class="sky">outerText</b><br> ${elemento.outerHTML} 
        <b class="doger">elemento</b>.<b class="sky">innerHTML</b><br> ${elemento.innerHTML} <br>
        <b class="doger">elemento</b>.<b class="golden">getHTML()</b><br> ${elemento.getHTML()} <br>
        `
    }
    else if(tipo == "crear-insertar"){
        consolaJavascript.innerHTML = `
        <b class="letra-B">Crear elementos HTML y manipularlos</b><br>
            <b class="azul">const</b> <b class="doger">paragraph</b> = <b class="sky">document</b>.<b class="golden">createElement(</b><b class="naranja">"p"</b><b class="golden">)</b> <br>
            <b class="doger">paragraph</b>.<b class="sky">textContent</b> = <b class="naranja">"nuevo parrafo creado"</b>  <br><br>

            <b class="azul">const</b> <b class="doger">div</b> = <b class="sky">document</b>.<b class="golden">createElement(</b><b class="naranja">"div"</b><b class="golden">)</b> <br>
            <b class="doger">div</b>.<b class="sky">textContent</b> = <b class="naranja">"nuevo div creado"</b>  <br><br>

        <b class="letra-B">Añadirlos al DOM</b><br>
            <b class="doger">parrafo</b>.<b class="golden">append(</b><b class="doger">paragraph</b>, <b class="doger">div</b>, <b class="naranja">"string"</b><b class="golden">)</b>
            <button class="btn-consola2" onclick="ejecutarMetodosDeManipulacion('append')">añadir</button><br>

            <b class="doger">parrafo</b>.<b class="golden">appendChild(<b class="doger">paragraph</b>)</b>
            <button class="btn-consola2" onclick="ejecutarMetodosDeManipulacion('appendChild')">añadir</button><br>

            <b class="doger">parrafo</b>.<b class="golden">prepend(<b class="doger">paragraph</b>)</b>
            <button class="btn-consola2" onclick="ejecutarMetodosDeManipulacion('prepend')">añadir</button><br>

            <b class="doger">parrafo</b>.<b class="golden">before(<b class="doger">paragraph</b>)</b>
            <button class="btn-consola2" onclick="ejecutarMetodosDeManipulacion('before')">añadir</button><br>

            <b class="doger">parrafo</b>.<b class="golden">after(<b class="doger">paragraph</b>)</b>
            <button class="btn-consola2" onclick="ejecutarMetodosDeManipulacion('after')">añadir</button><br><br>
        
        <b class="letra-B">Eliminar elementos</b><br>
            <b class="doger">parrafo</b>.<b class="golden">remove()</b>
            <button class="btn-consola2" onclick="ejecutarMetodosDeManipulacion('remove')">eliminar</button><br>

            <b class="doger">parrafo</b>.<b class="golden">removeChild(</b><b class="doger">parrafo</b>.<b class="doger">firstElementChild</b><b class="golden">)</b>
            <button class="btn-consola2" onclick="ejecutarMetodosDeManipulacion('removeChild')">eliminar</button><br>
        `
        notas.style.display = "none"

        consola.innerHTML = `${Array.from(parrafo.children).map(item => item.nodeName)}`
    }
    else if(tipo == "clonar-reemplazar"){
        consolaJavascript.innerHTML = `
        <b class="letra-B">Clonar elementos</b><br>
            <b class="azul">const</b> <b class="doger">span</b> = <b class="doger">parrafo</b>.<b class="golden">querySelector(</b><b class="naranja">"span"</b><b class="golden">)</b> <br>
            <b class="azul">const</b> <b class="doger">clon</b> = <b class="doger">span</b>.<b class="golden">cloneNode(</b><b class="azul">true</b><b class="golden">)</b> <br>
            <b class="doger">parrafo</b>.<b class="golden">append(<b class="doger">clon</b>)</b> 
            <button class="btn-consola2" onclick="ejecutarMetodosDeManipulacion('cloneNode')">clonar</button><br><br>

        <b class="letra-B">Reemplazar elementos</b><br>
            <b class="azul">const</b> <b class="doger">titulo</b> = <b class="doger">elemento</b>.<b class="golden">querySelector(</b><b class="naranja">"div"</b><b class="golden">)</b> <br>
            <b class="doger">titulo</b>.<b class="golden">replaceWith(<b class="doger">span</b>)</b> 
            <button class="btn-consola2" onclick="ejecutarMetodosDeManipulacion('replaceWith')">reemplazar</button><br><br>
        `
    }

    //Botones texto
    if(tipo == "textContent"){
        parrafo.textContent = "Texto Manipulado con textContent"
    }
    else if(tipo == "innerText"){
        parrafo.innerText = "Texto Manipulado con innerText"
    }
    else if(tipo == "outerText"){
        parrafo.outerText = "Texto Manipulado con outerText"     
    }

    //Botones contenido HTML
    else if(tipo == "innerHTML"){
        parrafo.innerHTML = `Texto Manipulado con <b class="aqua">innerHTML</b>` 
        consola.innerHTML = `
        <b class="doger">elemento</b>.<b class="sky">outerText</b><br> ${elemento.outerHTML} 
        <b class="doger">elemento</b>.<b class="sky">innerHTML</b><br> ${elemento.innerHTML} <br>
        <b class="doger">elemento</b>.<b class="golden">getHTML()</b><br> ${elemento.getHTML()} <br>
        `
    }
    else if(tipo == "outerHTML"){
        parrafo.outerHTML = `Texto Manipulado con <b class="aqua">outerHTML</b>`
        consola.innerHTML = `
        <b class="doger">elemento</b>.<b class="sky">outerText</b><br> ${elemento.outerHTML} 
        <b class="doger">elemento</b>.<b class="sky">innerHTML</b><br> ${elemento.innerHTML} <br>
        <b class="doger">elemento</b>.<b class="golden">getHTML()</b><br> ${elemento.getHTML()} <br>
        `
    }
    else if(tipo == 'insertAdjacentHTML-beforebegin'){
        parrafo.insertAdjacentHTML("beforebegin", "<b>antes del elemento</b><br>")
    }
    else if(tipo == 'insertAdjacentHTML-afterbegin'){
        parrafo.insertAdjacentHTML("afterbegin", "<b>dentro del elemento, al principio</b><br>")
    }
    else if(tipo == 'insertAdjacentHTML-beforeend'){
        parrafo.insertAdjacentHTML("beforeend", "<br><b>dentro del elemento, al final</b>")
    }
    else if(tipo == "insertAdjacentHTML-afterend"){
        parrafo.insertAdjacentHTML("afterend","<b>despues del elemento<b><br>")
    }

    //Botones insertar y eliminar
    else if(tipo == "append"){
        const paragraph = document.createElement("p")
        const div = document.createElement("div")

        paragraph.textContent = "nuevo parrafo creado (insertado con append)"
        paragraph.style.margin = "0"
        paragraph.classList.add("fondo-aqua")

        div.textContent = "nuevo div creado (insertado con append)"
        div.style.margin = "0"
        div.classList.add("fondo-naranja")
        
        parrafo.append(paragraph, div, "string")
    }
    else if(tipo == "appendChild"){
        const paragraph = document.createElement("p")

        paragraph.textContent = "nuevo parrafo (insertado con appendChild)"
        paragraph.style.margin = "0"
        
        parrafo.appendChild(paragraph)
    }
    else if(tipo == "prepend"){
        const paragraph = document.createElement("p")

        paragraph.textContent = "nuevo parrafo (insertado con prepend)"
        paragraph.style.margin = "0"
        
        parrafo.prepend(paragraph)
    }
    else if(tipo == "before"){
        const paragraph = document.createElement("p")

        paragraph.textContent = "nuevo parrafo (insertado con before)"
        paragraph.style.margin = "0"
        
        parrafo.before(paragraph)
    }
    else if(tipo == "after"){
        const paragraph = document.createElement("p")

        paragraph.textContent = "nuevo parrafo (insertado con after)"
        paragraph.style.margin = "0"
        
        parrafo.after(paragraph)
    }
    else if(tipo == "remove"){
        parrafo.remove()
    }
    else if(tipo == "removeChild"){
        parrafo.removeChild(parrafo.firstElementChild)
        consola.innerHTML = `${Array.from(parrafo.children).map(item => item.nodeName)}`
    }

    //Botones clonar y reemplazar
    else if(tipo == "cloneNode"){
        const span = parrafo.querySelector("span")
        const clon = span.cloneNode(true)
        parrafo.append(clon)

    }
    else if(tipo == "replaceWith"){
        const titulo = elemento.querySelector("div")
        const span = parrafo.querySelector("span")

        titulo.replaceWith(span)
    }

}ejecutarMetodosDeManipulacion()

//metodos y propiedades de manipulacion de atributos
function ejecutarManipulacionDeAtributos(tipo){
    const consola = document.getElementById("consola-manipulacionDeAtributos")
    const codigo = document.getElementById("codigo-manipulacionDeAtributos")

    const elemento = document.querySelector(".ElementoDeManipulacion")
    const parrafo = document.querySelector(".parrafo")

    //Codigo
    if(tipo == "Manipular-atributos"){
        codigo.innerHTML = `
        <b class="letra-B">cambiar, crear y eliminar atributos</b><br>
            <b class="doger">parrafo</b>.<b class="golden">setAttribute(</b><b class="naranja">"style"</b>, <b class="naranja">"margin: 0; background: verde"</b><b class="golden">)</b>
            <button class="btn-consola2" onclick="ejecutarManipulacionDeAtributos('setAttribute')">cambiar</button><br>

            <b class="doger">parrafo</b>.<b class="golden">toggleAttribute(</b><b class="naranja">"hidden"</b><b class="golden">)</b>
            <button class="btn-consola2" onclick="ejecutarManipulacionDeAtributos('toggleAttribute')">cambiar</button><br>

            <b class="doger">parrafo</b>.<b class="golden">removeAttribute(</b><b class="naranja">"style"</b><b class="golden">)</b>
            <button class="btn-consola2" onclick="ejecutarManipulacionDeAtributos('removeAttribute')">cambiar</button><br>

            <b class="doger">parrafo</b>.<b class="sky">style</b>.<b class="sky">background</b> =  <b class="naranja">"black"</b>
            <button class="btn-consola2" onclick="ejecutarManipulacionDeAtributos('style')">cambiar</button><br><br>
        `
        consola.innerHTML = `
            <b class="doger">parrafo</b>.<b class="golden">hasAttributes()</b> ${parrafo.hasAttributes()} <br>
            <b class="doger">parrafo</b>.<b class="golden">hasAttribute(<b class="naranja">"id"</b>)</b> ${parrafo.hasAttribute("id")} <br><br>
            <b class="doger">parrafo</b>.<b class="golden">getAttributeNames()</b> ${parrafo.getAttributeNames()} <br>
            <b class="doger">parrafo</b>.<b class="doger">attributes</b> ${Array.from(parrafo.attributes).map(item => item.nodeName)} <br><br>
            <b class="doger">parrafo</b>.<b class="golden">getAttribute(<b class="naranja">"style"</b>)</b><br> ${parrafo.getAttribute("style")} <br>
            <b class="doger">parrafo</b>.<b class="sky">style</b> ${JSON.stringify(parrafo.style).slice(0,20)}. etc.. 
        `
    }
    else if(tipo == "Manipular-clases"){
        codigo.innerHTML = `
        <b class="letra-B">cambiar, crear y eliminar el atributo class</b><br>
            <b class="doger">parrafo</b>.<b class="sky">className</b> =  <b class="naranja">"parrafo fondo-morado"</b>
            <button class="btn-consola2" onclick="ejecutarManipulacionDeAtributos('className')">cambiar</button><br>

            <b class="doger">parrafo</b>.<b class="sky">classList</b>.<b class="golden">add(<b class="naranja">"fondo-aqua"</b>)</b> 
            <button class="btn-consola2" onclick="ejecutarManipulacionDeAtributos('classList-add')">añadir</button><br>

            <b class="doger">parrafo</b>.<b class="sky">classList</b>.<b class="golden">remove(<b class="naranja">"fondo-aqua"</b>)</b> 
            <button class="btn-consola2" onclick="ejecutarManipulacionDeAtributos('classList-remove')">remover</button><br>

            <b class="doger">parrafo</b>.<b class="sky">classList</b>.<b class="golden">toggle(<b class="naranja">"fondo-azul"</b>)</b> 
            <button class="btn-consola2" onclick="ejecutarManipulacionDeAtributos('classList-toggle')">toggle</button><br>

            <b class="doger">parrafo</b>.<b class="sky">classList</b>.<b class="golden">replace(</b><b class="naranja">"fondo-azul"</b>, <b class="naranja">"fondo-verde"</b><b class="golden">)</b> 
            <button class="btn-consola2" onclick="ejecutarManipulacionDeAtributos('classList-replace')">reemplazar</button><br>
        `
        consola.innerHTML = `
        <p style="border-bottom: rgb(254, 210, 99) 3px solid; width: 100px" >clases:</p>
        <b class="doger">parrafo</b>.<b class="sky">className</b> ${parrafo.className} <br>
            <b class="doger">parrafo</b>.<b class="sky">classList</b>.<b class="golden">item(<b class="verde">1</b>)</b> ${parrafo.classList.item(1)} <br>
            <b class="doger">parrafo</b>.<b class="sky">classList</b>.<b class="golden">contains(<b class="naranja">"parrafo"</b>)</b> ${parrafo.classList.contains("parrafo")} <br>
        `
    }

    //Botones atributos
    else if(tipo == "setAttribute"){
        parrafo.setAttribute("style", "margin: 0; background: rgb(87, 176, 87)")

        consola.innerHTML = `
        <p style="border-bottom: rgb(254, 210, 99) 3px solid; width: 190px" >Ver atributos:</p>

        <b class="doger">parrafo</b>.<b class="golden">hasAttributes()</b><br> ${parrafo.hasAttributes()} <br>
        <b class="doger">parrafo</b>.<b class="golden">hasAttribute(<b class="naranja">"id"</b>)</b><br> ${parrafo.hasAttribute("id")} <br>
        <b class="doger">parrafo</b>.<b class="golden">getAttributeNames()</b><br> ${parrafo.getAttributeNames()} <br>
        <b class="doger">parrafo</b>.<b class="golden">getAttribute(<b class="naranja">"style"</b>)</b><br> ${parrafo.getAttribute("style")} <br><br>
        <b class="doger">parrafo</b>.<b class="sky">style</b><br> ${JSON.stringify(parrafo.style).slice(0,24)} <br>
        <b class="doger">parrafo</b>.<b class="sky">className</b><br> ${parrafo.className} <br>
        `
    }
    else if(tipo == "toggleAttribute"){
        parrafo.toggleAttribute("hidden")

        consola.innerHTML = `
        <p style="border-bottom: rgb(254, 210, 99) 3px solid; width: 190px" >Ver atributos:</p>

        <b class="doger">parrafo</b>.<b class="golden">hasAttributes()</b><br> ${parrafo.hasAttributes()} <br>
        <b class="doger">parrafo</b>.<b class="golden">hasAttribute(<b class="naranja">"id"</b>)</b><br> ${parrafo.hasAttribute("id")} <br>
        <b class="doger">parrafo</b>.<b class="golden">getAttributeNames()</b><br> ${parrafo.getAttributeNames()} <br>
        <b class="doger">parrafo</b>.<b class="golden">getAttribute(<b class="naranja">"style"</b>)</b><br> ${parrafo.getAttribute("style")} <br><br>
        <b class="doger">parrafo</b>.<b class="sky">style</b><br> ${JSON.stringify(parrafo.style).slice(0,24)} <br>
        <b class="doger">parrafo</b>.<b class="sky">className</b><br> ${parrafo.className} <br>
        `
    }
    else if(tipo == "removeAttribute"){
        parrafo.removeAttribute("style")

        consola.innerHTML = `
        <p style="border-bottom: rgb(254, 210, 99) 3px solid; width: 190px" >Ver atributos:</p>

        <b class="doger">parrafo</b>.<b class="golden">hasAttributes()</b><br> ${parrafo.hasAttributes()} <br>
        <b class="doger">parrafo</b>.<b class="golden">hasAttribute(<b class="naranja">"id"</b>)</b><br> ${parrafo.hasAttribute("id")} <br>
        <b class="doger">parrafo</b>.<b class="golden">getAttributeNames()</b><br> ${parrafo.getAttributeNames()} <br>
        <b class="doger">parrafo</b>.<b class="golden">getAttribute(<b class="naranja">"style"</b>)</b><br> ${parrafo.getAttribute("style")} <br><br>
        <b class="doger">parrafo</b>.<b class="sky">style</b><br> ${JSON.stringify(parrafo.style).slice(0,24)} <br>
        <b class="doger">parrafo</b>.<b class="sky">className</b><br> ${parrafo.className} <br>
        `
    }
    else if(tipo == "style"){
        parrafo.style.background = "black"

        consola.innerHTML = `
        <p style="border-bottom: rgb(254, 210, 99) 3px solid; width: 190px" >Ver atributos:</p>

        <b class="doger">parrafo</b>.<b class="golden">hasAttributes()</b><br> ${parrafo.hasAttributes()} <br>
        <b class="doger">parrafo</b>.<b class="golden">hasAttribute(<b class="naranja">"id"</b>)</b><br> ${parrafo.hasAttribute("id")} <br>
        <b class="doger">parrafo</b>.<b class="golden">getAttributeNames()</b><br> ${parrafo.getAttributeNames()} <br>
        <b class="doger">parrafo</b>.<b class="golden">getAttribute(<b class="naranja">"style"</b>)</b><br> ${parrafo.getAttribute("style")} <br><br>
        <b class="doger">parrafo</b>.<b class="sky">style</b><br> ${JSON.stringify(parrafo.style).slice(0,24)} <br>
        <b class="doger">parrafo</b>.<b class="sky">className</b><br> ${parrafo.className} <br>
        `
    }
    else if(tipo == "className"){
        parrafo.classList = "parrafo fondo-morado"

        consola.innerHTML = `
        <p style="border-bottom: rgb(254, 210, 99) 3px solid; width: 190px" >Ver atributos:</p>

        <b class="doger">parrafo</b>.<b class="golden">hasAttributes()</b><br> ${parrafo.hasAttributes()} <br>
        <b class="doger">parrafo</b>.<b class="golden">hasAttribute(<b class="naranja">"id"</b>)</b><br> ${parrafo.hasAttribute("id")} <br>
        <b class="doger">parrafo</b>.<b class="golden">getAttributeNames()</b><br> ${parrafo.getAttributeNames()} <br>
        <b class="doger">parrafo</b>.<b class="golden">getAttribute(<b class="naranja">"style"</b>)</b><br> ${parrafo.getAttribute("style")} <br><br>
        <b class="doger">parrafo</b>.<b class="sky">style</b><br> ${JSON.stringify(parrafo.style).slice(0,24)} <br>
        <b class="doger">parrafo</b>.<b class="sky">className</b><br> ${parrafo.className} <br>
        `
    }
    else if(tipo == "classList-add"){
        parrafo.classList.add("fondo-aqua")
    }
    else if(tipo == "classList-remove"){
        parrafo.classList.remove("fondo-aqua")
    }
    else if(tipo == "classList-toggle"){
        parrafo.classList.toggle("fondo-azul")
    }
    else if(tipo == "classList-replace"){
        parrafo.classList.replace("fondo-azul","fondo-verde")
    }
}ejecutarManipulacionDeAtributos("Manipular-atributos")

//eventos
let evento = "click"
function ejecutarEventos(tipo){
    const consola = document.getElementById("consola-eventos")
    const codigo = document.getElementById("javascript-eventos")
    const eventos = document.getElementById("cambiar-eventoDelMouse")
    
    if(tipo == "con-propiedades"){

        codigo.innerHTML = `
        <b class="letra-B">evento con propiedad</b> <button class="button btn-consola2">evento click</button><br>
            <b class="doger">botonConPropiedad</b>.<b class="golden">onclick</b> = <b class="azul">function</b><b class="golden">() {</b> <br>
            &emsp; <b class="doger">consola</b>.<b class="sky">innerHTML</b> = <b class="naranja">"mensaje activado gracias a la propiedad onclick"</b> <br>
            <b class="golden">}</b>
        `
        eventos.innerHTML = ' '

        const botonConPropiedad = document.querySelector(".button")

        botonConPropiedad.onclick = function(){
        consola.innerHTML = `mensaje activado gracias a la propiedad onclick`
        }

    }
    
    else if(tipo == "con-metodos"){

        codigo.innerHTML = `
        <b class="letra-B">evento con metodo (funcion interna)</b> <button class="button2 btn-consola2">evento</button><br>
            <b class="doger">botonConMetodo</b>.<b class="golden">addEventListener(</b><b class="naranja">"${evento}"</b>, <b class="azul">function</b><b class="morado">() {</b> <br>
            &emsp; <b class="doger">consola</b>.<b class="sky">innerHTML</b> = <b class="naranja">"mensaje enviado gracias al metodo addEventListener"</b> <br>
            <b class="morado">}</b><b class="golden">)</b><br><br>
            
            <b class="letra-B">evento con metodo (funcion externa)</b> <button class="button3 btn-consola2">evento</button><br>
            <b class="azul">function</b> <b class="golden">mensaje() {</b> <br>
            &emsp; <b class="doger">consola</b>.<b class="sky">innerHTML</b> = <b class="naranja">"llamando funcion externa"</b> <br>
            <b class="golden">}</b> <br>
            <b class="doger">botonConMetodo2</b>.<b class="golden">addEventListener(</b><b class="naranja">"${evento}"</b>, <b class="golden">mensaje</b><b class="golden">)</b> <br><br>

            <b class="letra-B">evento con metodo (arrow funcion)</b> <button class="button4 btn-consola2">evento</button><br>
            <b class="doger">botonConMetodo3</b>.<b class="golden">addEventListener(</b><b class="naranja">"${evento}"</b>, <b class="morado">() <b class="azul">=></b> {</b> <br>
            &emsp; <b class="doger">consola</b>.<b class="sky">innerHTML</b> = <b class="naranja">"mensaje enviado gracias al metodo addEventListener"</b> <br>
            <b class="morado">}</b><b class="golden">)</b>
        `
        // botones
        const botonConMetodo = document.querySelector(".button2")
        const botonConMetodo2 = document.querySelector(".button3")
        const botonConMetodo3 = document.querySelector(".button4")

        //funciones
        botonConMetodo.addEventListener(evento, function(){
            consola.innerHTML = `mensaje enviado gracias al metodo addEventListener`
        })
        
        function mensaje(){
            consola.innerHTML = `llamando funcion externa`
        }
        botonConMetodo2.addEventListener(evento, mensaje)

        botonConMetodo3.addEventListener(evento, () => {
            consola.innerHTML = `llamado con arrow funcion`
        })

        eventos.innerHTML = `
        <p class="letra-B">Cambiar evento del mouse</p>
            <button class="btn-consola2" style="background: #da9d47;" onclick="tiposEvento('dblclick')">dblclick</button>
            <button class="btn-consola2" style="background: #da9d47;" onclick="tiposEvento('mousedown')">mousedown</button>
            <button class="btn-consola2" style="background: #da9d47;" onclick="tiposEvento('mouseup')">mouseup</button>
            <button class="btn-consola2" style="background: #da9d47;" onclick="tiposEvento('mousemove')">mousemove</button>
            <button class="btn-consola2" style="background: #da9d47;" onclick="tiposEvento('mouseenter')">mouseenter</button>
            <button class="btn-consola2" style="background: #da9d47;" onclick="tiposEvento('mouseleave')">mouseleave</button>
            <button class="btn-consola2" style="background: #da9d47;" onclick="tiposEvento('mouseover')">mouseover</button>
            <button class="btn-consola2" style="background: #da9d47;" onclick="tiposEvento('mouseout')">mouseout</button>
            <button class="btn-consola2" style="background: #da9d47;" onclick="tiposEvento('contextmenu')">contextmenu</button>
        `
    }

    else if(tipo == "remover-eventos"){
        codigo.innerHTML = `
        <b class="letra-B">mediante remove</b> <button class="button2 btn-consola2">remover</button><br>
            <b class="azul">function</b> <b class="golden">mensaje() {</b> <br>
            &emsp; <b class="doger">consola</b>.<b class="sky">innerHTML</b> = <b class="naranja">"llamando funcion una vez y eliminar"</b> <br>
            &emsp; <b class="doger">botonConMetodo</b>.<b class="golden">removeEventListener(</b><b class="naranja">"click"</b>, <b class="golden">mensaje</b><b class="golden">)</b><br>
            <b class="golden">}</b> <br><br>

            <b class="doger">botonConMetodo</b>.<b class="golden">addEventListener(</b><b class="naranja">"click"</b>, <b class="golden">mensaje</b><b class="golden">)</b><br><br>

        <b class="letra-B">mediante opcion once</b> <button class="button3 btn-consola2">remover</button><br>
            <b class="doger">botonConMetodo</b>.<b class="golden">addEventListener(</b><b class="naranja">"click"</b>, <b class="golden">mensaje</b>, <b class="morado">{<b class="sky">once:</b><b class="azul">true</b>}</b><b class="golden">)</b>

        
        `
        eventos.innerHTML = ' '

        //boton
        const botonConMetodo = document.querySelector(".button2")
        const botonConMetodo2 = document.querySelector(".button3")

        //metodo remove
        function mensaje(){
            consola.innerHTML += `llamando funcion una vez y eliminar`
            botonConMetodo.removeEventListener("click",mensaje)
        }

        botonConMetodo.addEventListener("click",mensaje)

        //opcion once
        botonConMetodo2.addEventListener("click",mensaje,{once:true})
    }

}ejecutarEventos()

function tiposEvento(tipo){
    if(tipo == "dblclick"){evento = "dblclick"}
    if(tipo == "mousedown"){evento = "mousedown"}
    if(tipo == "mouseup"){evento = "mouseup"}
    if(tipo == "mousemove"){evento = "mousemove"}
    if(tipo == "mouseenter"){evento = "mouseenter"}
    if(tipo == "mouseleave"){evento = "mouseleave"}
    if(tipo == "mouseover"){evento = "mouseover"}
    if(tipo == "mouseout"){evento = "mouseout"}
    if(tipo == "contextmenu"){evento = "contextmenu"}

    ejecutarEventos("con-metodos")
}

//Objeto Event
function ejecutarObjetoEvent(tipo){
    const consola = document.getElementById("consola-objetoEvent")
    const consola2 = document.getElementById("consola-objetoEvent2")
    const codigo = document.getElementById("codigo-ObjetoEvent")

    if(tipo == "propiedades-objeto-event"){
        codigo.innerHTML = `
        <b class="letra-B">mostrar propiedades del objeto event</b> <button class="btn-consola2 button">mostrar</button><br><br>
            <b class="azul">const</b> <b class="doger">boton</b> = <b class="sky">document</b>.<b class="golden">querySelector(<b class="naranja">".button"</b>)</b> <br><br>

            <b class="doger">boton</b>.<b class="golden">addEventListener(</b><b class="naranja">"click"</b>, <b class="azul">function</b><b class="morado">(<b class="sky">event</b>) {</b> <br>
            &emsp; <b class="doger">consola</b>.<b class="sky">innerHTML</b> = <b class="naranja">'</b> <br>
            &emsp; &emsp; <b class="azul">$ {<b class="sky">event</b>}</b> <br>
            &emsp; &emsp; <b class="azul">$ {</b><b class="sky">event</b>.<b class="doger">type</b><b class="azul">}</b> <br>
            &emsp; &emsp; <b class="azul">$ {</b><b class="sky">event</b>.<b class="doger">target</b><b class="azul">}</b> <br>
            &emsp; &emsp; <b class="azul">$ {</b><b class="sky">event</b>.<b class="sky">pointerType</b><b class="azul">}</b> <br>
            &emsp; &emsp; <b class="azul">$ {</b><b class="sky">event</b>.<b class="sky">detail</b><b class="azul">}</b><br>
            &emsp; <b class="naranja">'</b> <br>
            <b class="morado">}</b><b class="golden">)</b><br><br></br>
        `
        document.getElementById("manipularTarget").style.display = "none"

        const boton = document.querySelector(".button")

        boton.addEventListener("click", function(event){
            consola.innerHTML = `
            ${event}<br> ${event.type}<br> ${event.target.nodeName}<br> ${event.pointerType}<br> ${event.detail}`
        }) 
    }
    else if(tipo == "propiedad-target"){
        codigo.innerHTML = ` 
        <b class="letra-B">Manipular la propiedad target</b> <br><br>
        <b class="azul">const</b> <b class="doger">contenedor</b> = <b class="sky">document</b>.<b class="golden">getElementById(<b class="naranja">"manipularTarget"</b>)</b> <br><br>

        <b class="doger">contenedor</b>.<b class="golden">addEventListener(</b><b class="naranja">"click"</b>, <b class="morado">(<b class="sky">event</b>)</b> <b class="azul">=></b> <b class="morado">{</b> <br>
        &emsp; <b class="doger">consola</b>.<b class="sky">innerHTML</b> = <b class="naranja">'</b> <br>

        &emsp; &emsp; <b class="azul">$ {</b><b class="sky">event</b>.<b class="doger">target</b>.<b class="sky">className</b><b class="azul">}</b> <br>
        &emsp; &emsp; <b class="azul">$ {</b><b class="sky">event</b>.<b class="doger">target</b>.<b class="sky">textContent</b><b class="azul">}</b> <br>
        &emsp; &emsp; <b class="azul">$ {</b><b class="sky">event</b>.<b class="doger">target</b>.<b class="sky">outerHTML</b><b class="azul">}</b> <br>
        <b class="morado">}</b><b class="golden">)</b><br><br><br>
        
        <b class="letra-B">Manipular el elemento</b><br><br>

        <b class="doger">contenedor</b>.<b class="golden">addEventListener(</b><b class="naranja">"click"</b>, <b class="morado">()</b> <b class="azul">=></b> <b class="morado">{</b> <br>
        &emsp; <b class="doger">consola</b>.<b class="sky">innerHTML</b> = <b class="naranja">'</b> <br>

        &emsp; &emsp; <b class="azul">$ {</b><b class="doger">contenedor</b>.<b class="sky">className</b><b class="azul">}</b> <br>
        &emsp; &emsp; <b class="azul">$ {</b><b class="doger">contenedor</b>.<b class="sky">textContent</b><b class="azul">}</b> <br>
        &emsp; &emsp; <b class="azul">$ {</b><b class="doger">contenedor</b>.<b class="sky">outerHTML</b><b class="azul">}</b> <br>
        <b class="morado">}</b><b class="golden">)</b><br><br>
        
        `

        //Seleccionar
        const contenedor = document.getElementById("manipularTarget")
        contenedor.style.display = "block"

        contenedor.addEventListener("click", (event) => {
        consola.innerHTML = `
            <b class="letra-segoe letra-B">manipulando el target</b><br>
            <b class="sky">className</b> ${event.target.className}<br>
            <b class="sky">textContent</b> ${event.target.textContent}<br>
            <b class="sky">outerHTML</b> ${event.target.outerHTML}
            `
        })

        contenedor.addEventListener("click", () => {
        consola2.innerHTML = `
            <b class="letra-segoe letra-B">manipulando el boton</b><br>
            <b class="sky">className</b> ${contenedor.className}<br>
            <b class="sky">textContent</b> ${contenedor.textContent}<br>
            <b class="sky">outerHTML</b> ${contenedor.outerHTML}
        `
        })
    }

    

}ejecutarObjetoEvent("propiedad-target")

//PreventDefault
function ejecutarpreventDefault(){
    const consola = document.getElementById("consola-preventDefault")

    //elementos
    const details = document.querySelector("details")
    const formulario = document.querySelector(".formulario")

    //boton para añadir el preventDefault
    const añadir = document.querySelector(".añadirpreventDefault")
    añadir.addEventListener("click", () => {prevenirDefault = true})
    let prevenirDefault

    //prevenir en etiqueta details
    details.addEventListener("click", (event) => {
        if(prevenirDefault == true){event.preventDefault();}
        consola.innerHTML = `la proiedad defaultPrevented es ${event.defaultPrevented}`
    })

    //prevenir en formulario
    formulario.addEventListener("click",(event) => {
        if(prevenirDefault == true){event.preventDefault();}
    })

}ejecutarpreventDefault()

//Delegation Pattern
function ejecutarDelegationPattern(){
    // const elementosDinamicos = document.querySelectorAll("#elementosDinamicos div")

    // elementosDinamicos.forEach(item => {
    //     item.addEventListener("click",(event) => {
    //         event.target.classList.toggle("fondo-morado")
    //     })
    // })

    const elementosDinamicos = document.getElementById("elementosDinamicos")

    elementosDinamicos.addEventListener("click", (event) => {
        if (event.target.closest("#elementosDinamicos div")){
            event.target.closest("#elementosDinamicos div").classList.toggle("fondo-morado")
        }
    })

}ejecutarDelegationPattern()

//Local Storage
function ejecutarLocalStorage(tipo){
    const consola = document.getElementById("consola-localStorage")
    const codigo = document.getElementById("codigo-localStorage")

    if(tipo == "GuardarArreglosyObjetos"){
        localStorage.clear()

        codigo.innerHTML = `
        <b class="azul">const</b> <b class="doger">string</b> = <b class="naranja">"Developer"</b><br>
        <b class="azul">const</b> <b class="doger">lista</b> = <b class="azul">[</b><b class="naranja">"Javascript"</b>,<b class="naranja">"Python"</b><b class="azul">]</b><br>
        <b class="azul">const</b> <b class="doger">objeto</b> = <b class="golden">{</b><b class="sky">nombre:</b> <b class="naranja">"David"</b><b class="golden">}</b><br><br>

        <b class="letra-B">Guardar arreglos y objetos</b> <button class="btn-consola2" onclick="ejecutarLocalStorage('guardar-sin-JSON')">guardar</button>  <br>
        <b class="sky">localStorage</b>.<b class="golden">setItem(</b><b class="naranja">"string"</b>, <b class="doger">string</b><b class="golden">)</b><br>
        <b class="sky">localStorage</b>.<b class="golden">setItem(</b><b class="naranja">"lista"</b>, <b class="doger">lista</b><b class="golden">)</b><br>
        <b class="sky">localStorage</b>.<b class="golden">setItem(</b><b class="naranja">"objeto"</b>, <b class="doger">objeto</b><b class="golden">)</b><br><br>

        <b class="letra-B">Guardar con JSON</b> <button class="btn-consola2" onclick="ejecutarLocalStorage('guardar-con-JSON')">guardar</button>  <br>
            <b class="sky">localStorage</b>.<b class="golden">setItem(</b><b class="naranja">"string"</b>, 
            <b class="sky">JSON</b>.<b class="golden">stringify</b><b class="morado">(</b><b class="doger">string</b><b class="morado">)</b><b class="golden">)</b><br>
            
            <b class="sky">localStorage</b>.<b class="golden">setItem(</b><b class="naranja">"lista"</b>, 
            <b class="sky">JSON</b>.<b class="golden">stringify</b><b class="morado">(</b><b class="doger">lista</b><b class="morado">)</b><b class="golden">)</b><br>

            <b class="sky">localStorage</b>.<b class="golden">setItem(</b><b class="naranja">"objeto"</b>,
            <b class="sky">JSON</b>.<b class="golden">stringify</b><b class="morado">(</b><b class="doger">objeto</b><b class="morado">)</b><b class="golden">)</b><br>
        `
        consola.innerHTML = `
        <b class="sky">localStorage</b><br> ${JSON.stringify(localStorage)}<br>
        `
    }
    else if(tipo == "GuardaryRemoverStrings"){

        codigo.innerHTML = `
        <b class="letra-B">Guardar informacion</b> <button class="btn-consola2" onclick="ejecutarLocalStorage('guardar')">guardar</button>  <br>
        <b class="sky">localStorage</b>.<b class="golden">setItem(</b><b class="naranja">"nombre"</b>, <b class="naranja">"David"</b><b class="golden">)</b><br>
        <b class="sky">localStorage</b>.<b class="golden">setItem(</b><b class="naranja">"apellido"</b>, <b class="naranja">"Puente"</b><b class="golden">)</b><br><br>

        <b class="letra-B">Borrar informacion</b> <button class="btn-consola2" onclick="ejecutarLocalStorage('borrar')">borrar</button>  <br>
        <b class="sky">localStorage</b>.<b class="golden">removeItem(</b><b class="naranja">"apellido"</b><b class="golden">)</b><br><br>

        <b class="letra-B">Vaciar todo</b> <button class="btn-consola2" onclick="ejecutarLocalStorage('vaciarTodo')">borrar</button>  <br>
        <b class="sky">localStorage</b>.<b class="golden">clear()</b>
        `

        consola.innerHTML = `
        <b class="sky">localStorage</b> ${localStorage}<br>
        <b class="sky">JSON</b>.<b class="golden">stringify(</b><b class="sky">localStorage</b><b class="golden">)</b><br> ${JSON.stringify(localStorage)}<br><br>
        <b class="sky">localStorage</b>.<b class="doger">length</b> ${localStorage.length}<br>
        <b class="sky">localStorage</b>.<b class="golden">key(</b><b class="verde">0</b><b class="golden">)</b> ${localStorage.key(0)}<br><br>
        <b class="sky">localStorage</b>.<b class="golden">getItem(</b><b class="naranja">"nombre"</b><b class="golden">)</b> ${localStorage.getItem("nombre")}<br>
        `
    }
    else if(tipo == "FuncionCrearArrayTareas"){
        codigo.innerHTML = `
        <b class="azul">function</b> <b class="golden">funcionLocalStorage(<b class="sky">tarea</b>) {</b> <br>
        &emsp; <b class="azul">const</b> <b class="doger">tareas</b> = <b class="sky">JSON</b>.<b class="golden">parse</b><b class="morado">(</b>
        <b class="sky">localStorage</b>.<b class="golden">getItem</b><b class="azul">(<b class="naranja">"tasks"</b>)</b> || <b class="naranja">"[]"</b><b class="morado">)</b><br><br>

        &emsp; <b class="doger">tareas</b>.<b class="golden">push</b><b class="morado">(<b class="sky">tarea</b>)</b><br><br>

        &emsp; <b class="sky">localStorage</b>.<b class="golden">setItem</b><b class="morado">(</b><b class="naranja">"tasks"</b>,  
        <b class="sky">JSON</b>.<b class="golden">stringify</b><b class="azul">(<b class="doger">tareas</b>)</b><b class="morado">)</b> <br>
        <b class="golden">}</b><br><br>

        <input id="input-localStorage" style="border: solid 1px;" placeholder="Ingresar datos"></input>
        <button class="btn-consola" onclick="ejecutarLocalStorage('guardarTareasEnArray')">Guardar</button>  
        `
        consola.innerHTML = `
        <b class="sky">localStorage</b> ${JSON.stringify(localStorage)}<br>
        `
    }

    //Guardar y Remover Strings
    if(tipo == "guardar"){
        localStorage.setItem("apellido","Puente")
        localStorage.setItem("nombre","David")

        consola.innerHTML = `
        <b class="sky">localStorage</b> ${localStorage}<br>
        <b class="sky">JSON</b>.<b class="golden">stringify(</b><b class="sky">localStorage</b><b class="golden">)</b><br> ${JSON.stringify(localStorage)}<br><br>
        <b class="sky">localStorage</b>.<b class="doger">length</b> ${localStorage.length}<br>
        <b class="sky">localStorage</b>.<b class="golden">key(</b><b class="verde">0</b><b class="golden">)</b> ${localStorage.key(0)}<br><br>
        <b class="sky">localStorage</b>.<b class="golden">getItem(</b><b class="naranja">"nombre"</b><b class="golden">)</b> ${localStorage.getItem("nombre")}<br>
        `
    }
    else if(tipo == "borrar"){
        localStorage.removeItem("apellido")

        consola.innerHTML = `
        <b class="sky">localStorage</b> ${localStorage}<br>
        <b class="sky">JSON</b>.<b class="golden">stringify(</b><b class="sky">localStorage</b><b class="golden">)</b><br> ${JSON.stringify(localStorage)}<br><br>
        <b class="sky">localStorage</b>.<b class="doger">length</b> ${localStorage.length}<br>
        <b class="sky">localStorage</b>.<b class="golden">key(</b><b class="verde">0</b><b class="golden">)</b> ${localStorage.key(0)}<br><br>
        <b class="sky">localStorage</b>.<b class="golden">getItem(</b><b class="naranja">"nombre"</b><b class="golden">)</b> ${localStorage.getItem("nombre")}<br>
        `
    }
    else if(tipo == "vaciarTodo"){
        localStorage.clear()

        consola.innerHTML = `
        <b class="sky">localStorage</b> ${localStorage}<br>
        <b class="sky">JSON</b>.<b class="golden">stringify(</b><b class="sky">localStorage</b><b class="golden">)</b><br> ${JSON.stringify(localStorage)}<br><br>
        <b class="sky">localStorage</b>.<b class="doger">length</b> ${localStorage.length}<br>
        <b class="sky">localStorage</b>.<b class="golden">key(</b><b class="verde">0</b><b class="golden">)</b> ${localStorage.key(0)}<br><br>
        <b class="sky">localStorage</b>.<b class="golden">getItem(</b><b class="naranja">"nombre"</b><b class="golden">)</b> ${localStorage.getItem("nombre")}<br>
        `
    }

    //Guardar arreglos y objetos
    const string = "Developer"
    const lista = ["Javascript","Python"]
    const objeto = {nombre: "David"}

    if(tipo == "guardar-sin-JSON"){

        localStorage.setItem("string", string)
        localStorage.setItem("lista", lista)
        localStorage.setItem("objeto", objeto)

        const traerString = localStorage.getItem("string")
        const traerLista = localStorage.getItem("lista")
        const traerObjeto = localStorage.getItem("objeto")

        const elemento = document.getElementById("elemento-localStorage")
        elemento.textContent = `${traerString} ${traerLista}`
        elemento.classList.add("fondo-morado")
        
        consola.innerHTML = `
        <b class="azul">typeof</b> <b class="doger">string</b> ${typeof string} <br>
        <b class="azul">typeof</b> <b class="doger">lista</b> ${typeof lista} <br>
        <b class="azul">typeof</b> <b class="doger">objeto</b> ${typeof objeto} <br><br>

        <b class="sky">localStorage</b><br> ${JSON.stringify(localStorage)}<br><br>

        <b class="sky">localStorage</b>.<b class="golden">getItem(</b><b class="naranja">"string"</b><b class="golden">)</b> ${localStorage.getItem("string")}<br>
        <b class="sky">localStorage</b>.<b class="golden">getItem(</b><b class="naranja">"lista"</b><b class="golden">)</b> ${localStorage.getItem("lista")}<br>
        <b class="sky">localStorage</b>.<b class="golden">getItem(</b><b class="naranja">"objeto"</b><b class="golden">)</b> ${localStorage.getItem("objeto")}<br><br>

        `
    }
    else if(tipo == "guardar-con-JSON"){

        localStorage.setItem("string", JSON.stringify(string))
        localStorage.setItem("lista", JSON.stringify(lista))
        localStorage.setItem("objeto", JSON.stringify(objeto))


        consola.innerHTML = `
        <b class="azul">typeof</b> <b class="doger">string</b> ${typeof string} <br>
        <b class="azul">typeof</b> <b class="doger">lista</b> ${typeof lista} <br>
        <b class="azul">typeof</b> <b class="doger">objeto</b> ${typeof objeto} <br><br>

        <b class="sky">localStorage</b><br> ${JSON.stringify(localStorage)}<br><br>

        <b class="sky">localStorage</b>.<b class="golden">getItem(</b><b class="naranja">"string"</b><b class="golden">)</b> ${localStorage.getItem("string")}<br>
        <b class="sky">localStorage</b>.<b class="golden">getItem(</b><b class="naranja">"lista"</b><b class="golden">)</b> ${localStorage.getItem("lista")}<br>
        <b class="sky">localStorage</b>.<b class="golden">getItem(</b><b class="naranja">"objeto"</b><b class="golden">)</b> ${localStorage.getItem("objeto")}<br><br>

        <b class="sky">JSON</b>.<b class="golden">parse(</b><b class="sky">localStorage</b>.<b class="golden">getItem</b><b class="morado">(</b><b class="naranja">"string"</b><b class="morado">)</b><b class="golden">)</b> ${JSON.parse(localStorage.getItem("string"))}<br>
        <b class="sky">JSON</b>.<b class="golden">parse(</b><b class="sky">localStorage</b>.<b class="golden">getItem</b><b class="morado">(</b><b class="naranja">"lista"</b><b class="morado">)</b><b class="golden">)</b> ${JSON.parse(localStorage.getItem("lista"))}<br>
        <b class="sky">JSON</b>.<b class="golden">parse(</b><b class="sky">localStorage</b>.<b class="golden">getItem</b><b class="morado">(</b><b class="naranja">"objeto"</b><b class="morado">)</b><b class="golden">)</b> ${JSON.parse(localStorage.getItem("objeto"))}<br>
        `
    }

    //Funcion para crear un array de tareas
    if(tipo == "guardarTareasEnArray"){
        const input = document.getElementById("input-localStorage").value

        let mostrartareas 
        function funcionLocalStorage(tarea) {
            const tareas = JSON.parse(localStorage.getItem("tasks") || "[]")
            mostrartareas = tareas

            tareas.push(tarea)
            localStorage.setItem("tasks", JSON.stringify(tareas))
        }

        funcionLocalStorage(input)

        consola.innerHTML = `
        <b class="sky">localStorage</b> ${JSON.stringify(localStorage)}<br><br>
        <b class="doger">input</b> ${input}<br>
        <b class="doger">tareas</b> ${mostrartareas}<br>
        `
    }
    
}ejecutarLocalStorage("GuardaryRemoverStrings")

//HtmlCollection
function ejecutarHTMLCollection(tipo){
    const consola = document.getElementById("consola-HTMLCollection")

    const Elemento = document.getElementsByClassName("coleccion")

    if(tipo == "Manipular-HTMLCollection"){
        consola.innerHTML = `
        <p style="border-bottom: rgb(254, 210, 99) 3px solid; width: 300px" >Manipular por Indices:</p>
        
        <b class="doger">Elemento</b> ${Elemento} <br>  
        <b class="doger">Elemento</b>.<b class="sky">length</b> ${Elemento.length} <br><br>

        <b class="doger">Elemento[<b class="verde">0</b>]</b>.<b class="sky">outerHTML</b> <br>
        ${Elemento[0].outerHTML} 

        <b class="doger">Elemento[<b class="verde">1</b>]</b>.<b class="sky">outerHTML</b> <br>
        ${Elemento[1].outerHTML} 

        <b class="doger">Elemento[<b class="verde">2</b>]</b>.<b class="sky">outerHTML</b> <br>
        ${Elemento[2].outerHTML} <br>
        `
    }
    else if(tipo == "Manipular-array"){
        consola.innerHTML = " "

        const spreadOperator = [...document.getElementsByClassName("coleccion")]
        const ArrayFrom = Array.from(document.getElementsByClassName("coleccion"))
        const bucle = []
        
        for(i = 0; i < Elemento.length; i++){bucle.push(Elemento[i])}

        consola.innerHTML = `
        <p style="border-bottom: rgb(254, 210, 99) 3px solid; width: 230px" >Manipular Arrays:</p>

        <b class="doger">spreadOperator</b>, <br>
        <b class="doger">ArrayFrom</b>, <br>
        <b class="doger">bucle</b> <br><br>
        ${ArrayFrom} <br><br>

        <b class="doger">spreadOperator</b>.<b class="golden">map(</b><b class="sky">item</b> <b class="azul">=></b> <b class="sky">item</b>.<b class="sky">outerHTML</b><b class="golden">)</b>,
        <b class="doger">ArrayFrom</b>.<b class="golden">map(</b><b class="sky">item</b> <b class="azul">=></b> <b class="sky">item</b>.<b class="sky">outerHTML</b><b class="golden">)</b>,  
        <b class="doger">bucle</b>.<b class="golden">map(</b><b class="sky">item</b> <b class="azul">=></b> <b class="sky">item</b>.<b class="sky">outerHTML</b><b class="golden">)</b> <br> <br>
        ${spreadOperator.map(item => item.outerHTML).join("")}<br>
        
        `
    }
    
}

//Proyecto DOM: Lista de Compras
function proyectoDOM(){
    const listaDeCompras = document.querySelector(".proyecto-listaDeCompras form")
    const lista = document.querySelector(".proyecto-listaDeCompras ul")
    const modo = document.getElementById("btn-modoClaroyoscuro")

    const confirmarPeticion = document.getElementById("confirmar-peticion")
    const btnReset = document.getElementById("btn-resetearProyectoListaDeCompras")
    let input = document.querySelector(".proyecto-listaDeCompras input")

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
    listaDeCompras.addEventListener("submit", (event) => {
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

    
    
    
}proyectoDOM()
    
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

// PROYECTO SOLICITUDES HTTP

function ProyectoSolicitudesHTTP(tipo){
    const consola = document.getElementById("consola-Proyecto-HTTP")
    const titulo = document.getElementById("titulo-post").value
    const contenido = document.getElementById("contenido-post").value
    const contenedor = document.getElementById("content-projects-HTTP")

    function enviarPeticion(metodo, url, data){
        return fetch(url,{
            method: metodo,
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json"},
        }).then(response => {
            return response.json()}
        )
    }

    async function traerPost(){
        const response = await enviarPeticion("GET","https://jsonplaceholder.typicode.com/posts")
        const listaDePost = response.slice(0,4)

        for(const post of listaDePost){

            const target = document.createElement("div")
            target.id = "target" + post.id
            target.classList.add("targets")

                const articulo = document.createElement("article")
                articulo.style.height = "300px"

                    const title = document.createElement("h2")
                    title.textContent = post.title

                    const body = document.createElement("p")
                    body.textContent = post.body
                
                articulo.append(title)
                articulo.append(body)

            const button = document.createElement("button")
            button.textContent = "DELETE"
            button.classList.add("btn-delete")

            target.append(articulo)
            target.append(button)

            contenedor.append(target)
        }

        consola.innerHTML = 
        `<b class="doger">reponse</b><b class="golden">[<b class="verde">0</b>]</b>.<b class="sky">userId</b> <br> <b>${response[0].userId}</b> <br><br>
        <b class="doger">reponse</b><b class="golden">[<b class="verde">0</b>]</b>.<b class="sky">id</b> <br> <b>${response[0].id}</b> <br><br>
        <b class="doger">reponse</b><b class="golden">[<b class="verde">0</b>]</b>.<b class="sky">title</b> <br> <b>${response[0].title}</b> <br><br>
        <b class="doger">reponse</b><b class="golden">[<b class="verde">0</b>]</b>.<b class="sky">body</b> <br> <b>${response[0].body}</b> <br><br>
        `
    }

    async function crearPost(title, content){
        const userID = Math.random()
        const post = {
            title: title,
            body: content,
            userID: userID
        }
        enviarPeticion("POST","https://jsonplaceholder.typicode.com/posts", post)
        consola.innerHTML = `para ver este post, ir a la consola del navegador, y luego a networks
        <br><br> <b class="naranja">${JSON.stringify(post,null,2)}</b>`
    }

    if(tipo == "traer-post"){
        traerPost()
    }else if(tipo == "enviar-post"){
        crearPost(titulo, contenido)
    }
}

//ESTRUCTURAS DE DATOS

//Hashtable
function ejecutarEstructurasDeDatos(tipo){
    const consola = document.getElementById("consola-estructurasDeDatos")
    const codigo = document.getElementById("codigo-estructurasDeDatos")

    //hashtable
    class HashTable {
        constructor(size){
            this.data = new Array(size)
        }
        hashFunction(key){
            let hash = 0
            for(let i = 0; i < key.length; i++){
                hash = (hash + key.charCodeAt(i) * i) % this.data.length
            }
            return hash
        }
        set(key,value){
            const direccion = this.hashFunction(key)
            if(!this.data[direccion]){
                this.data[direccion] = []
            }
            this.data[direccion].push(`<b> ${[key,value]}</b>`)
            return `<b class="azul">direccion: ${direccion}.</b> [${this.data}] `
        }
    }
    //instancia
    const myhashtable = new HashTable(6)

    consola.innerHTML = `
        <code>
            <b class="verde">//instancia: array con espacios vacios</b><br>
            <b class="doger">myhashtable</b> ${JSON.stringify(myhashtable,null,2)}<br>
        </code>
    `
    codigo.innerHTML = `
        <code>
            <b class="azul">class</b> <b class="aqua">Hashtable</b><b class="golden">{</b> <br>

            &emsp;&emsp;<b class="azul">constructor</b><b class="morado">(</b><b class="sky">size</b><b class="morado">) {</b> <br>
            &emsp;&emsp;&emsp;&emsp;<b class="azul">this</b>.<b class="sky">data</b> = <b class="azul">new</b> <b class="aqua">Array</b><b class="azul">(<b class="sky">size</b>)</b><br>
            &emsp;&emsp;<b class="morado">}</b><br>
        </code>

        <code>
            &emsp;&emsp;<b class="golden">hashFunction</b><b class="morado">(<b class="sky">key</b>){</b> <br>

            &emsp; &emsp; <b class="azul">let</b> <b class="sky">hash</b> = <b class="verde">0</b>  <br>

            &emsp; &emsp; <b class="morado">for</b><b class="azul">(let</b>
            <b class="sky">i</b> = <b class="verde">0</b>;
            <b class="sky">i</b> &lt; <b class="sky">key</b>.<b class="sky">length</b>;
            <b class="sky">i</b> ++<b class="azul">){</b> <br>
            &emsp; &emsp; &emsp; <b class="sky">hash</b> = <b class="golden">(</b><b class="sky">hash</b> + 
            <b class="sky">key</b>.<b class="golden">charCodeAt</b><b class="morado">(</b><b class="sky">i</b><b class="morado">)</b>
            * <b class="sky">i</b><b class="golden">)</b> % <b class="azul">this</b>.<b class="sky">data</b>.<b class="sky">length</b><br>
            &emsp; &emsp; <b class="azul">}</b> <br>

            &emsp; &emsp; <b class="morado">return</b> <b class="sky">hash</b> <br>
            &emsp;&emsp;<b class="morado">}</b><br>
        </code>
            
        <code>
            <b class="azul">const</b> <b class="doger">myhashtable</b> =
            <b class="azul">new</b> <b class="aqua">Hashtable</b><b class="golden">(<b class="verde">6</b>)</b><br>
        </code>
    `

    if(tipo == "añadir-elementos"){
        class HashTable {
        constructor(size){
            this.data = new Array(size)
        }
        hashFunction(key){
            let hash = 0
            for(let i = 0; i < key.length; i++){
                hash = (hash + key.charCodeAt(i) * i) % this.data.length
            }
            return hash
        }
        set(key,value){
            const direccion = this.hashFunction(key)
            if(!this.data[direccion]){
                this.data[direccion] = []
            }
            this.data[direccion].push([key,value])
            return this.data
        }
        get(key){
            const direccion = this.hashFunction(key);
            const bucket = this.data[direccion];

            if(bucket){
                for(let i=0; i < bucket.length; i++){
                    if(bucket[i][0] === key) return bucket[i][1];
                }
            }
            return undefined
        }
        delete(key){
            const direccion = this.hashFunction(key)
            const bucket = this.data[direccion]

            if(bucket){
                for(let i=0; i < bucket.length; i++){
                    if(bucket[i][0] == key) {
                        const elementoAborrar = bucket[i]
                        bucket.splice(i,1)
                        return elementoAborrar 
                    }
                }
            }
            return `El elemento: ${key} no existe en la lista`
        }
        getKeys(){
            let claves = [];
            for(let i = 0; i < this.data.length; i++){
                if(this.data[i]){
                    for(let init = 0; init < this.data[i].length; init++){
                        claves.push(this.data[i][init][0]) 
                    }
                }
            }
            return claves
        }
        }
        const myhashtable = new HashTable(6)

        consola.innerHTML = `
        <code>
            <b class="verde">//añadir elementos</b><br>
            <b class="doger">myhashtable</b>.<b class="golden">set(</b><b class="naranja">"David"</b>,<b class="verde">30</b><b class="golden">)</b><br> ${myhashtable.set("David",30)}<br><br>
            <b class="doger">myhashtable</b>.<b class="golden">set(</b><b class="naranja">"Sharom"</b>,<b class="verde">31</b><b class="golden">)</b><br> ${myhashtable.set("Sharom",31)}<br><br>
            <b class="doger">myhashtable</b>.<b class="golden">set(</b><b class="naranja">"Adriana"</b>,<b class="verde">28</b><b class="golden">)</b><br> ${myhashtable.set("Adriana",28)}<br><br>
            <b class="doger">myhashtable</b>.<b class="golden">set(</b><b class="naranja">"Jireh"</b>,<b class="verde">27</b><b class="golden">)</b><br> ${myhashtable.set("Jireh",27)}<br><br>
            <b class="doger">myhashtable</b>.<b class="golden">set(</b><b class="naranja">"Luis"</b>,<b class="verde">60</b><b class="golden">)</b><br> ${myhashtable.set("Luis",60)}<br><br>
            <b class="doger">myhashtable</b>.<b class="golden">set(</b><b class="naranja">"Carmen"</b>,<b class="verde">58</b><b class="golden">)</b><br> ${myhashtable.set("Carmen",58)}<br><br>
            <b class="doger">myhashtable</b> ${JSON.stringify(myhashtable)}
        </code>
        `
        codigo.innerHTML = `
            <code>
                <b class="azul">class</b> <b class="aqua">Hashtable</b><b class="golden">{</b> <br>

                &emsp;&emsp;<b class="azul">constructor</b><b class="morado">(</b><b class="sky">size</b><b class="morado">) {</b> <br>
                &emsp;&emsp;&emsp;&emsp;<b class="azul">this</b>.<b class="sky">data</b> = <b class="azul">new</b> <b class="aqua">Array</b><b class="azul">(<b class="sky">size</b>)</b><br>
                &emsp;&emsp;<b class="morado">}</b><br>
            </code>

            <code>
                &emsp;&emsp;<b class="golden">hashFunction</b><b class="morado">(<b class="sky">key</b>){</b> <br>

                &emsp; &emsp; <b class="azul">let</b> <b class="sky">hash</b> = <b class="verde">0</b>  <br>

                &emsp; &emsp; <b class="morado">for</b><b class="azul">(let</b>
                <b class="sky">i</b> = <b class="verde">0</b>;
                <b class="sky">i</b> &lt; <b class="sky">key</b>.<b class="sky">length</b>;
                <b class="sky">i</b> ++<b class="azul">){</b> <br>
                &emsp; &emsp; &emsp; <b class="sky">hash</b> = <b class="golden">(</b><b class="sky">hash</b> + 
                <b class="sky">key</b>.<b class="golden">charCodeAt</b><b class="morado">(</b><b class="sky">i</b><b class="morado">)</b>
                * <b class="sky">i</b><b class="golden">)</b> % <b class="azul">this</b>.<b class="sky">data</b>.<b class="sky">length</b><br>
                &emsp; &emsp; <b class="azul">}</b> <br>

                &emsp; &emsp; <b class="morado">return</b> <b class="sky">hash</b> <br>
                &emsp;&emsp;<b class="morado">}</b><br>
            </code>

            <code>
                &emsp;&emsp;<b class="golden">set</b><b class="morado">(</b><b class="sky">key</b>, <b class="sky">value</b><b class="morado">){</b> <br>
                
                &emsp; &emsp; <b class="azul">const</b> <b class="doger">direccion</b> = <b class="azul">this</b>.<b class="golden">hashFunction</b><b class="azul">(<b class="sky">key</b>)</b>  <br><br>
                
                &emsp; &emsp; <b class="morado">if</b><b class="azul">(</b>!
                <b class="azul">this</b>.<b class="sky">data</b><b class="golden">[</b><b class="doger">direccion</b><b class="golden">]</b><b class="azul">) {</b>  <br>
                &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">data</b><b class="golden">[</b><b class="doger">direccion</b><b class="golden">]</b> = <b class="golden">[]</b> <br>
                &emsp; &emsp; <b class="azul">}</b><br>

                &emsp; &emsp; <b class="azul">this</b>.<b class="sky">data</b>
                <b class="azul">[<b class="doger">direccion</b>]</b>.<b class="golden">push</b><b class="azul">(</b><b class="golden">[</b><b class="sky">key</b>, <b class="sky">value</b><b class="golden">]</b><b class="azul">)</b> <br>
                &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b>.<b class="sky">data</b>  <br>
                &emsp;&emsp;<b class="morado">}</b><br>
                <b class="golden">}</b><br><br>
            </code>
                
            <code>
                <b class="azul">const</b> <b class="doger">myhashtable</b> =
                <b class="azul">new</b> <b class="aqua">Hashtable</b><b class="golden">(<b class="verde">6</b>)</b><br>
            </code>
        `
    }
    
    else if(tipo == "obtener-elementos"){
        class HashTable {
        constructor(size){
            this.data = new Array(size)
        }
        hashFunction(key){
            let hash = 0
            for(let i = 0; i < key.length; i++){
                hash = (hash + key.charCodeAt(i) * i) % this.data.length
            }
            return hash
        }
        set(key,value){
            const direccion = this.hashFunction(key)
            if(!this.data[direccion]){
                this.data[direccion] = []
            }
            this.data[direccion].push([key,value])
            return this.data
        }
        get(key){
            const direccion = this.hashFunction(key);
            const bucket = this.data[direccion];

            if(bucket){
                for(let i=0; i < bucket.length; i++){
                    if(bucket[i][0] === key) return bucket[i][1];
                }
            }
            return undefined
        }
        delete(key){
            const direccion = this.hashFunction(key)
            const bucket = this.data[direccion]

            if(bucket){
                for(let i=0; i < bucket.length; i++){
                    if(bucket[i][0] == key) {
                        const elementoAborrar = bucket.splice(i,1)
                        return elementoAborrar 
                    }
                }
            }
            return `El elemento: ${key} no existe en la lista`
        }
        getKeys(){
            let claves = [];
            for(let i = 0; i < this.data.length; i++){
                if(this.data[i]){
                    for(let init = 0; init < this.data[i].length; init++){
                        claves.push(this.data[i][init][0]) 
                    }
                }
            }
            return claves
        }
    }

    const myhashtable = new HashTable(6)
    myhashtable.set("David",30)
    myhashtable.set("Sharom",31)
    myhashtable.set("Adriana",28)
    myhashtable.set("Jireh",27)
    myhashtable.set("Luis",60)
    myhashtable.set("Carmen",58)

    consola.innerHTML = `
    <code>
        <b class="doger">myhashtable</b><br> ${JSON.stringify(myhashtable)}<br><br>

        <b class="verde">//obtener elementos</b><br>
        <b class="doger">myhashtable</b>.<b class="golden">get(</b><b class="naranja">"David"</b><b class="golden">)</b> ${myhashtable.get("David")}<br>
        <b class="doger">myhashtable</b>.<b class="golden">get(</b><b class="naranja">"Sharom"</b><b class="golden">)</b> ${myhashtable.get("Sharom")}<br>
        <b class="doger">myhashtable</b>.<b class="golden">get(</b><b class="naranja">"Adriana"</b><b class="golden">)</b> ${myhashtable.get("Adriana")}<br>
        <b class="doger">myhashtable</b>.<b class="golden">get(</b><b class="naranja">"Jireh"</b><b class="golden">)</b> ${myhashtable.get("Jireh")}<br>
        <b class="doger">myhashtable</b>.<b class="golden">get(</b><b class="naranja">"Luis"</b><b class="golden">)</b> ${myhashtable.get("Luis")}<br>
        <b class="doger">myhashtable</b>.<b class="golden">get(</b><b class="naranja">"Carmen"</b><b class="golden">)</b> ${myhashtable.get("Carmen")}<br><br>

        <b class="verde">//eliminar elementos</b><br>
        <b class="doger">myhashtable</b>.<b class="golden">delete(</b><b class="naranja">"Carmen"</b><b class="golden">)</b> ${myhashtable.delete("Carmen")}<br>
        <b class="doger">myhashtable</b>.<b class="golden">delete(</b><b class="naranja">"Jireh"</b><b class="golden">)</b> ${myhashtable.delete("Jireh")}<br>
        <b class="doger">myhashtable</b><br> ${JSON.stringify(myhashtable)}<br><br>

                <b class="verde">//obtener claves</b><br>
        <b class="doger">myhashtable</b>.<b class="golden">getKeys()</b> ${myhashtable.getKeys()}<br>
        </code>
        `
    codigo.innerHTML = `
        <code>
            <b class="azul">class</b> <b class="aqua">Hashtable</b><b class="golden">{</b> <br>

            &emsp;&emsp;<b class="azul">constructor</b><b class="morado">(</b><b class="sky">size</b><b class="morado">) {</b> <br>
            &emsp;&emsp;&emsp;&emsp;<b class="azul">this</b>.<b class="sky">data</b> = <b class="azul">new</b> <b class="aqua">Array</b><b class="azul">(<b class="sky">size</b>)</b><br>
            &emsp;&emsp;<b class="morado">}</b><br>
        </code>

        <code>
            &emsp;&emsp;<b class="golden">hashFunction</b><b class="morado">(<b class="sky">key</b>){</b> <br>
            &emsp; &emsp; <b>...</b><br>
            &emsp;&emsp;<b class="morado">}</b><br>
        </code>

        <code>  
            &emsp;&emsp;<b class="golden">set</b><b class="morado">(</b><b class="sky">key</b>, <b class="sky">value</b><b class="morado">){</b> <br>
            &emsp; &emsp; <b>...</b><br>
            &emsp;&emsp;<b class="morado">}</b><br>
        </code>

        <code>
            &emsp;&emsp;<b class="golden">get</b><b class="morado">(</b><b class="sky">key</b><b class="morado">){</b> <br>
            
            &emsp; &emsp; <b class="azul">const</b> <b class="doger">direccion</b> = <b class="azul">this</b>.<b class="golden">hashFunction</b><b class="azul">(<b class="sky">key</b>)</b>  <br>
            &emsp; &emsp; <b class="azul">const</b> <b class="doger">bucket</b> = <b class="azul">this</b>.<b class="sky">data</b><b class="azul">[<b class="doger">direccion</b>]</b>  <br><br>
         
            &emsp; &emsp; <b class="morado">if</b><b class="azul">(<b class="doger">bucket</b>){</b> <br>

            &emsp; &emsp; &emsp; <b class="morado">for</b><b class="azul">(let</b>
            <b class="sky">i</b> = <b class="verde">0</b>;
            <b class="sky">i</b> &lt; <b class="doger">bucket</b>.<b class="sky">length</b>;
            <b class="sky">i</b> ++<b class="azul">){</b> <br>

            &emsp; &emsp; &emsp; &emsp; <b class="morado">if</b>
            <b class="azul">(</b><b class="doger">bucket</b><b class="golden">[<b class="sky">i</b>]</b><b class="golden">[<b class="verde">0</b>]</b> 
            === <b class="sky">key</b><b class="azul">)</b> <b class="morado">return</b>
            <b class="doger">bucket</b><b class="golden">[<b class="sky">i</b>]</b><b class="golden">[<b class="verde">1</b>]</b> <br>
            &emsp; &emsp; &emsp; <b class="azul">}</b><br>

            &emsp; &emsp; <b class="morado">return</b> <b class="azul">undefined</b> <br>
            &emsp;&emsp;<b class="morado">}</b><br>
            <b class="golden">}</b><br><br>
        </code>
            
        <code>
            <b class="azul">const</b> <b class="doger">myhashtable</b> =
            <b class="azul">new</b> <b class="aqua">Hashtable</b><b class="golden">(<b class="verde">6</b>)</b><br>
        </code>
    `
    }

}ejecutarEstructurasDeDatos()

//Linkedlist
    //Single
function ejecutarlinkedlist(tipo){
    const consola = document.getElementById("consola-linkedlist")
    const codigo = document.getElementById("codigo-linkedlist")

    //clases
    class Node {
        constructor(value){
            this.value = value
            this.next = null
        }
    }

    class Mylinkedlist {
        constructor(value){
            this.head = new Node(value) //head contendra todos los nodos anidados
            this.tail = this.head // la cola tiene la misma referencia que head
            this.length = 1 //el largo inicia en 1
        }
        append(value) {
            const newnode = new Node(value) //crear nodo

            this.tail.next = newnode //pasamos el nodo primer next del head 
            this.tail = newnode //asignamos tail el nuevo nodo 
            this.length++ //aumentar longitud

            return this.tail 
        }
        prepend(value) {
            const newnode = new Node(value) //crear nodo

            newnode.next = this.head //al next de nuevo nodo le pasamos el head
            this.head = newnode //asignamos al head el nuevoi nodo
            this.length++ //aumenta el largo

            return this.head
        }
        getNodo(index) {
            let contador = 1
            let nodoActual = this.head

            while(contador !== index){
                nodoActual = nodoActual.next
                contador ++
            }
            return nodoActual
        }
        insert(index, value) {
            if(index >= this.length) { //si el tamaño de length es mayor a mi lista
                return this.append(value) //añade al final de la lista 
            }
            // if(index == 0){
            //     return this.prepend(value)
            // }

            const newnode = new Node(value)  //creamos un nuevo nodo
            const nodoPrevio = this.getNodo(index - 1) //se obtiene el nodo anterior al indice solicitado
            const nodoSiguiente = nodoPrevio.next //se obtiene el next del nodo anterior

            nodoPrevio.next = newnode //al next de noto anterior le asignamos el nuevo nodo
            newnode.next = nodoSiguiente //al next del nuevo nodo le asginamos los nodos siguientes
            this.length ++

            return this
        }
        delete(index){
            if(index > this.length || index < 1){
                return "Este nodo no existe"
            }
            if(index === 1){
                this.head = this.head.next
                this.length--
                return this
            }
            if(index === this.length){
                const nodoPrevio = this.getNodo(index - 1) 
                this.tail = nodoPrevio
            }

            const nodoPrevio = this.getNodo(index - 1) 
            const nodoSiguiente = this.getNodo(index + 1)
            
            nodoPrevio.next = nodoSiguiente
            this.length--
            return this
        }
    }

    //instancia
    let nodo = new Node("nodo")
    let lista = new Mylinkedlist(1)

    codigo.innerHTML = `
    <p style="margin-top: 0;">
        <b class="azul">class</b> <b class="aqua">Node</b> { <br>
        &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">value</b> = <b class="sky">value</b> <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">next</b> = <b class="azul">null</b> <br>
        &emsp; } <br>
    </p>

    <p>
        <b class="azul">class</b> <b class="aqua">Mylinkedlist</b> { <br>
        &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="azul">this</b>.<b class="sky">head</b> <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 1 <br>
        &emsp; } <br>
        }
    </p>

    <p>
        <b>crear instancias</b> <br>
        <b class="azul">let</b> <b class="sky">nodo</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="naranja">"nodo"</b>) <br>
        <b class="azul">let</b> <b class="sky">lista</b> = <b class="azul">new</b> <b class="aqua">Mylinkedlist</b>(1) <br>
    </p>
    `

    consola.innerHTML = `
        <p style="margin-top:0">
            <b class="verde">//instancia de Node</b> <br>
            <b class="sky">nodo</b> ${JSON.stringify(nodo)} 
        </p>

        <p>
            <b class="verde">//instancia de Mylinkedlist</b> <br>
            <b class="sky">lista</b> ${JSON.stringify(lista)} <br>
        </p>

    `

    if(tipo == "metodo-Append"){
        consola.innerHTML = `
        <p style="margin-top:0">
            <b class="verde">//Añadir elementos</b> <br>
            <b class="sky">lista</b>.<b class="golden">append(<b class="verde">2</b>)</b> ${JSON.stringify(lista.append(2))} <br>
            <b class="sky">lista</b>.<b class="golden">append(<b class="verde">3</b>)</b> ${JSON.stringify(lista.append(3))} <br>
            <b class="sky">lista</b>.<b class="golden">append(<b class="verde">4</b>)</b> ${JSON.stringify(lista.append(4))} <br>
            <b class="sky">lista</b>.<b class="golden">append(<b class="verde">5</b>)</b> ${JSON.stringify(lista.append(5))} <br>
        </p>

        <p>
            <b class="verde">//ver lista</b> <br>
            <b class="sky">lista</b> ${JSON.stringify(lista)} <br>
        </p>

        `
        codigo.innerHTML = `
        <p style="margin-top: 0;">
            <b class="azul">class</b> <b class="aqua">Node</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">value</b> = <b class="sky">value</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">next</b> = <b class="azul">null</b> <br>
            &emsp; } <br>
        </p>

        <p>
            <b class="azul">class</b> <b class="aqua">Mylinkedlist</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="azul">this</b>.<b class="sky">head</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 1 <br>
            &emsp; }
        </p>

        <p>
            &emsp; <b class="golden">append</b>(<b class="sky">value</b>) { <br>
            &emsp; &emsp; <b class="azul">const</b> <b class="doger">newnode</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>

            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b>.<b class="sky">next</b> = <b class="doger">newnode</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="doger">newnode</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>++ <br>

            &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b>.<b class="sky">tail</b> <br>
            &emsp; } <br>
            }
        </p>
        `
    }
    else if(tipo == "metodo-Prepend"){
        consola.innerHTML = `
        <p style="margin-top:0">
            <b class="verde">//Añadir elementos</b> <br>
            <b class="sky">lista</b>.<b class="golden">prepend(<b class="verde">2</b>)</b> ${JSON.stringify(lista.prepend(2))} <br>
            <b class="sky">lista</b>.<b class="golden">prepend(<b class="verde">3</b>)</b> ${JSON.stringify(lista.prepend(3))} <br>
            <b class="sky">lista</b>.<b class="golden">prepend(<b class="verde">4</b>)</b> ${JSON.stringify(lista.prepend(4))} <br>
            <b class="sky">lista</b>.<b class="golden">prepend(<b class="verde">5</b>)</b> ${JSON.stringify(lista.prepend(5))} <br>
        </p>

        <p>
            <b class="verde">//ver lista</b> <br>
            <b class="sky">lista</b> ${JSON.stringify(lista)} <br>
        </p>

        `
        codigo.innerHTML = `
        <p style="margin-top: 0;">
            <b class="azul">class</b> <b class="aqua">Node</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">value</b> = <b class="sky">value</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">next</b> = <b class="azul">null</b> <br>
            &emsp; } <br>
        </p>

        <p>
            <b class="azul">class</b> <b class="aqua">Mylinkedlist</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="azul">this</b>.<b class="sky">head</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 1 <br>
            &emsp; }
        </p>

        <p>
            &emsp; <b class="golden">prepend</b>(<b class="sky">value</b>) { <br>
            &emsp; &emsp; <b class="azul">const</b> <b class="doger">newnode</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>

            &emsp; &emsp; <b class="doger">newnode</b>.<b class="sky">next</b>  = <b class="azul">this</b>.<b class="sky">head</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="doger">newnode</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>++ <br>

            &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b>.<b class="sky">head</b> <br>
            &emsp; } <br>
            }
        </p>
        `
    }
    else if(tipo == "Obtener-Nodo"){
        lista.append(2)
        lista.append(3)
        lista.append(4)

        codigo.innerHTML = `
        <p style="margin-top: 0;">
            <b class="azul">class</b> <b class="aqua">Node</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">value</b> = <b class="sky">value</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">next</b> = <b class="azul">null</b> <br>
            &emsp; } <br>
        </p>

        <p>
            <b class="azul">class</b> <b class="aqua">Mylinkedlist</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="azul">this</b>.<b class="sky">head</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 1 <br>
            &emsp; } <br>
        </p>

        <p>
            &emsp; <b class="golden">getNodo</b>(<b class="sky">index</b>) { <br>
            &emsp; &emsp; <b class="azul">let</b> <b class="sky">contador</b> = 1 <br>
            &emsp; &emsp; <b class="azul">let</b> <b class="sky">nodoActual</b> = <b class="azul">this</b>.<b class="sky">head</b> <br><br>

            &emsp; &emsp; <b class="morado">while</b>(<b class="sky">contador</b> !== <b class="sky">index</b>){ <br>
            &emsp; &emsp; &emsp; <b class="sky">nodoActual</b> = <b class="sky">nodoActual</b>.<b class="sky">next</b> <br>
            &emsp; &emsp; &emsp; <b class="sky">contador</b> ++ <br>
            &emsp; &emsp; } <br>
            &emsp; &emsp; <b class="morado">return</b> <b class="sky">nodoActual</b> <br>
            &emsp; } <br>
            }
        </p>
        `

        consola.innerHTML = `
        <p style="margin-top:0">
            <b class="verde">//instancia de Node</b> <br>
            <b class="sky">lista</b> ${JSON.stringify(lista)} 
        </p>

        <p style="margin-top:0">
            <b class="verde">//obtener nodos</b> <br>
            <b class="sky">lista</b>.<b class="golden">getNodo(<b class="verde">1</b>)</b> ${JSON.stringify(lista.getNodo(1))} <br><br>
            <b class="sky">lista</b>.<b class="golden">getNodo(<b class="verde">2</b>)</b> ${JSON.stringify(lista.getNodo(2))} <br><br>
            <b class="sky">lista</b>.<b class="golden">getNodo(<b class="verde">3</b>)</b> ${JSON.stringify(lista.getNodo(3))} <br><br>
            <b class="sky">lista</b>.<b class="golden">getNodo(<b class="verde">4</b>)</b> ${JSON.stringify(lista.getNodo(4))} <br>
        </p>
        `
    }
    else if(tipo == "metodo-Insert"){
        lista.append(2)
        lista.append(3)
        lista.append(4)

        codigo.innerHTML = `
        <p style="margin-top: 0;">
            <b class="azul">class</b> <b class="aqua">Node</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">value</b> = <b class="sky">value</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">next</b> = <b class="azul">null</b> <br>
            &emsp; } <br>
        </p>

        <p>
            <b class="azul">class</b> <b class="aqua">Mylinkedlist</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="azul">this</b>.<b class="sky">head</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 1 <br>
            &emsp; } 
        </p>

        <p>
            &emsp; <b class="golden">insert</b>(<b class="sky">index</b>, <b class="sky">value</b>) { <br>
            &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> >= <b class="azul">this</b>.<b class="sky">length</b>) { <br>
            &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b>.<b class="golden">append</b>(<b class="sky">value</b>) <br>
            &emsp; &emsp; } <br><br>

            &emsp; &emsp; <b class="azul">const</b> <b class="doger">newnode</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
            &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
            &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoSiguiente</b> = <b class="doger">nodoPrevio</b>.<b class="sky">next</b> <br><br>

            &emsp; &emsp; <b class="doger">nodoPrevio</b>.<b class="sky">next</b> = <b class="doger">newnode</b> <br>
            &emsp; &emsp; <b class="doger">newnode</b>.<b class="sky">next</b> = <b class="doger">nodoSiguiente</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> ++ <br><br>

            &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
            &emsp; } <br>
            }
        </p>
        `

        consola.innerHTML = `
        <p style="margin-top:0">
            <b class="verde">//insertar nodos</b> <br>
            <b class="sky">lista</b>.<b class="golden">insert(</b><b class="verde">2</b>,<b class="verde">12</b><b class="golden">)</b> <br>
            ${JSON.stringify(lista.insert(2, 12))} <br><br>

            <b class="sky">lista</b>.<b class="golden">insert(</b><b class="verde">5</b>,<b class="verde">25</b><b class="golden">)</b> <br>
            ${JSON.stringify(lista.insert(5, 25))} 
        </p>

        <p style="margin-top:0">
            <b class="verde">//ver lista</b> <br>
            <b class="sky">lista</b> ${JSON.stringify(lista)} 
        </p>
        `
    }

    //metodo delete
    else if(tipo == "metodo-Delete"){
        lista.append(2)
        lista.append(3)
        lista.append(4)

        codigo.innerHTML = `
        <p style="margin-top: 0;">
            <b class="azul">class</b> <b class="aqua">Mylinkedlist</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="azul">this</b>.<b class="sky">head</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 1 <br>
            &emsp; } <br>
        </p>

        <p>
            &emsp; <b class="golden">delete</b>(<b class="sky">index</b>){ <br>
            &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> > <b class="azul">this</b>.<b class="sky">length</b> || <b class="sky">index</b> &lt; 1){ <br>
            &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="naranja">"Este nodo no existe"</b> <br>
            &emsp; &emsp; } <br>

            &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> === 1){ <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">this</b>.<b class="sky">head</b>.<b class="sky">next</b> <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>-- <br>
            &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
            &emsp; &emsp; } <br>
            &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> === <b class="azul">this</b>.<b class="sky">length</b>){ <br>
            &emsp; &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="doger">nodoPrevio</b> <br>
            &emsp; &emsp; } <br><br>

            &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
            &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoSiguiente</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> + 1) <br><br>
            
            &emsp; &emsp; <b class="doger">nodoPrevio</b>.<b class="sky">next</b> = <b class="doger">nodoSiguiente</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>-- <br>
            &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
            &emsp; } <br>
            }
        </p>

        <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(1)')">
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">1</b>)</b>
        </button>

        <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(2)')">
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">2</b>)</b>
        </button>

        <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(3)')">
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">3</b>)</b>
        </button>

        <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(4)')">
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">4</b>)</b>
        </button>

        `

        consola.innerHTML = `
        <p style="margin-top:0">
            <b class="sky">lista</b><br> ${JSON.stringify(lista)} 
        </p>

        <p>
            <b class="verde">//Eliminar nodos</b> <br>
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">0</b>)</b> <br>
            ${JSON.stringify(lista.delete(0))} <br><br>

            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">5</b>)</b> <br>
            ${JSON.stringify(lista.delete(5))} <br><br>
        </p>

        `
    }
    //botones de delete
    else if(tipo == "delete(1)"){
        lista.append(2)
        lista.append(3)
        lista.append(4)

        codigo.innerHTML = `
        <p style="margin-top: 0;">
            <b class="azul">class</b> <b class="aqua">Mylinkedlist</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="azul">this</b>.<b class="sky">head</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 1 <br>
            &emsp; } <br>
        </p>

        <p>
            &emsp; <b class="golden">delete</b>(<b class="sky">index</b>){ <br>
            &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> > <b class="azul">this</b>.<b class="sky">length</b> || <b class="sky">index</b> &lt; 1){ <br>
            &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="naranja">"Este nodo no existe"</b> <br>
            &emsp; &emsp; } <br>

            &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> === 1){ <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">this</b>.<b class="sky">head</b>.<b class="sky">next</b> <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>-- <br>
            &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
            &emsp; &emsp; } <br>
            &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> === <b class="azul">this</b>.<b class="sky">length</b>){ <br>
            &emsp; &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="doger">nodoPrevio</b> <br>
            &emsp; &emsp; } <br><br>

            &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
            &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoSiguiente</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> + 1) <br><br>
            
            &emsp; &emsp; <b class="doger">nodoPrevio</b>.<b class="sky">next</b> = <b class="doger">nodoSiguiente</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>-- <br>
            &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
            &emsp; } <br>
            }
        </p>

        <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(1)')">
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">1</b>)</b>
        </button>

        <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(2)')">
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">2</b>)</b>
        </button>

        <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(3)')">
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">3</b>)</b>
        </button>

        <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(4)')">
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">4</b>)</b>
        </button>
        `

        consola.innerHTML = `
        <p style="margin-top:0">
            <b class="sky">lista</b><br> ${JSON.stringify(lista)} 
        </p>

        <p>
            <b class="verde">//Eliminar nodos</b> <br><br>
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">1</b>)</b> <br>
            ${JSON.stringify(lista.delete(1))} <br><br>
        </p>

        `
    }else if(tipo == "delete(2)"){
        lista.append(2)
        lista.append(3)
        lista.append(4)

        codigo.innerHTML = `
        <p style="margin-top: 0;">
            <b class="azul">class</b> <b class="aqua">Mylinkedlist</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="azul">this</b>.<b class="sky">head</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 1 <br>
            &emsp; } <br>
        </p>

        <p>
            &emsp; <b class="golden">delete</b>(<b class="sky">index</b>){ <br>
            &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> > <b class="azul">this</b>.<b class="sky">length</b> || <b class="sky">index</b> &lt; 1){ <br>
            &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="naranja">"Este nodo no existe"</b> <br>
            &emsp; &emsp; } <br>

            &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> === 1){ <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">this</b>.<b class="sky">head</b>.<b class="sky">next</b> <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>-- <br>
            &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
            &emsp; &emsp; } <br>
            &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> === <b class="azul">this</b>.<b class="sky">length</b>){ <br>
            &emsp; &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="doger">nodoPrevio</b> <br>
            &emsp; &emsp; } <br><br>

            &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
            &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoSiguiente</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> + 1) <br><br>
            
            &emsp; &emsp; <b class="doger">nodoPrevio</b>.<b class="sky">next</b> = <b class="doger">nodoSiguiente</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>-- <br>
            &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
            &emsp; } <br>
            }
        </p>

        <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(1)')">
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">1</b>)</b>
        </button>

        <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(2)')">
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">2</b>)</b>
        </button>

        <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(3)')">
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">3</b>)</b>
        </button>

        <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(4)')">
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">4</b>)</b>
        </button>
        `

        consola.innerHTML = `
        <p style="margin-top:0">
            <b class="sky">lista</b><br> ${JSON.stringify(lista)} 
        </p>

        <p>
            <b class="verde">//Eliminar nodos</b> <br><br>
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">2</b>)</b> <br>
            ${JSON.stringify(lista.delete(2))} <br><br>
        </p>

        `
    }else if(tipo == "delete(3)"){
        lista.append(2)
        lista.append(3)
        lista.append(4)

        codigo.innerHTML = `
        <p style="margin-top: 0;">
            <b class="azul">class</b> <b class="aqua">Mylinkedlist</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="azul">this</b>.<b class="sky">head</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 1 <br>
            &emsp; } <br>
        </p>

        <p>
            &emsp; <b class="golden">delete</b>(<b class="sky">index</b>){ <br>
            &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> > <b class="azul">this</b>.<b class="sky">length</b> || <b class="sky">index</b> &lt; 1){ <br>
            &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="naranja">"Este nodo no existe"</b> <br>
            &emsp; &emsp; } <br>

            &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> === 1){ <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">this</b>.<b class="sky">head</b>.<b class="sky">next</b> <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>-- <br>
            &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
            &emsp; &emsp; } <br>
            &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> === <b class="azul">this</b>.<b class="sky">length</b>){ <br>
            &emsp; &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="doger">nodoPrevio</b> <br>
            &emsp; &emsp; } <br><br>

            &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
            &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoSiguiente</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> + 1) <br><br>
            
            &emsp; &emsp; <b class="doger">nodoPrevio</b>.<b class="sky">next</b> = <b class="doger">nodoSiguiente</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>-- <br>
            &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
            &emsp; } <br>
            }
        </p>

        <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(1)')">
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">1</b>)</b>
        </button>

        <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(2)')">
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">2</b>)</b>
        </button>

        <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(3)')">
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">3</b>)</b>
        </button>

        <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(4)')">
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">4</b>)</b>
        </button>
        `

        consola.innerHTML = `
        <p style="margin-top:0">
            <b class="sky">lista</b><br> ${JSON.stringify(lista)} 
        </p>

        <p>
            <b class="verde">//Eliminar nodos</b> <br><br>
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">3</b>)</b> <br>
            ${JSON.stringify(lista.delete(3))} <br><br>
        </p>

        `
    }else if(tipo == "delete(4)"){
        lista.append(2)
        lista.append(3)
        lista.append(4)

        codigo.innerHTML = `
        <p style="margin-top: 0;">
            <b class="azul">class</b> <b class="aqua">Mylinkedlist</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="azul">this</b>.<b class="sky">head</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 1 <br>
            &emsp; } <br>
        </p>

        <p>
            &emsp; <b class="golden">delete</b>(<b class="sky">index</b>){ <br>
            &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> > <b class="azul">this</b>.<b class="sky">length</b> || <b class="sky">index</b> &lt; 1){ <br>
            &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="naranja">"Este nodo no existe"</b> <br>
            &emsp; &emsp; } <br>

            &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> === 1){ <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">this</b>.<b class="sky">head</b>.<b class="sky">next</b> <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>-- <br>
            &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
            &emsp; &emsp; } <br>
            &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> === <b class="azul">this</b>.<b class="sky">length</b>){ <br>
            &emsp; &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="doger">nodoPrevio</b> <br>
            &emsp; &emsp; } <br><br>

            &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
            &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoSiguiente</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> + 1) <br><br>
            
            &emsp; &emsp; <b class="doger">nodoPrevio</b>.<b class="sky">next</b> = <b class="doger">nodoSiguiente</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>-- <br>
            &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
            &emsp; } <br>
            }
        </p>

        <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(1)')">
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">1</b>)</b>
        </button>

        <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(2)')">
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">2</b>)</b>
        </button>

        <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(3)')">
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">3</b>)</b>
        </button>

        <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(4)')">
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">4</b>)</b>
        </button>
        `

        consola.innerHTML = `
        <p style="margin-top:0">
            <b class="sky">lista</b><br> ${JSON.stringify(lista)} 
        </p>

        <p>
            <b class="verde">//Eliminar nodos</b> <br><br>
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">4</b>)</b> <br>
            ${JSON.stringify(lista.delete(4))} <br><br>
        </p>

        `
    }

}
    //Double
function ejecutarlinkedlistDouble(tipo){
    const consola = document.getElementById("consola-linkedlistDouble")
    const codigo = document.getElementById("codigo-linkedlistDouble")

    //clases
    class Nodo {
        constructor(value){
            this.value = value
            this.next = null
            this.prev = null
        }
    }

    class MylinkedlistDouble {
        constructor(value){
            this.head = new Nodo(value) //head contendra todos los nodos anidados
            this.tail = this.head // la cola tiene la misma referencia que head
            this.length = 1 //el largo inicia en 1
        }
        append(value) {
            const newnode = new Nodo(value) //crear nodo

            newnode.prev = this.tail //mandamos la cola al prev del nuevo nodo
            this.tail.next = newnode //le pasamos a la cola el nuevo nodo al next
            this.tail = newnode //asignamos tail el nuevo nodo 
            this.length ++ //aumentar longitud

            return this
        } 
    }
// prepend(value) {
        //     const newnode = new Node(value) //crear nodo

        //     newnode.next = this.head //al next de nuevo nodo le pasamos el head
        //     this.head = newnode //asignamos al head el nuevoi nodo
        //     this.length++ //aumenta el largo

        //     return this.head
        // }
        // getNodo(index) {
        //     let contador = 1
        //     let nodoActual = this.head

        //     while(contador !== index){
        //         nodoActual = nodoActual.next
        //         contador ++
        //     }
        //     return nodoActual
        // }
        // insert(index, value) {
        //     if(index >= this.length) { //si el tamaño de length es mayor a mi lista
        //         return this.append(value) //añade al final de la lista 
        //     }
        //     // if(index == 0){
        //     //     return this.prepend(value)
        //     // }

        //     const newnode = new Node(value)  //creamos un nuevo nodo
        //     const nodoPrevio = this.getNodo(index - 1) //se obtiene el nodo anterior al indice solicitado
        //     const nodoSiguiente = nodoPrevio.next //se obtiene el next del nodo anterior

        //     nodoPrevio.next = newnode //al next de noto anterior le asignamos el nuevo nodo
        //     newnode.next = nodoSiguiente //al next del nuevo nodo le asginamos los nodos siguientes
        //     this.length ++

        //     return this
        // }
        // delete(index){
        //     if(index > this.length || index < 1){
        //         return "Este nodo no existe"
        //     }
        //     if(index === 1){
        //         this.head = this.head.next
        //         this.length--
        //         return this
        //     }
        //     if(index === this.length){
        //         const nodoPrevio = this.getNodo(index - 1) 
        //         this.tail = nodoPrevio
        //     }

        //     const nodoPrevio = this.getNodo(index - 1) 
        //     const nodoSiguiente = this.getNodo(index + 1)
            
        //     nodoPrevio.next = nodoSiguiente
        //     this.length--
        //     return this
        // }
    //instancia
    let nodo = new Nodo("nodo")
    let lista = new MylinkedlistDouble(1)

    codigo.innerHTML = `
    <p style="margin-top: 0;">
        <b class="azul">class</b> <b class="aqua">Node</b> { <br>
        &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">value</b> = <b class="sky">value</b> <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">next</b> = <b class="azul">null</b> <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">prev</b> = <b class="azul">null</b> <br>
        &emsp; } <br>
        }
    </p>

    <p>
        <b class="azul">class</b> <b class="aqua">Mylinkedlist</b> { <br>
        &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="azul">this</b>.<b class="sky">head</b> <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 1 <br>
        &emsp; } <br>
        }
    </p>

    <p>
        <b>crear instancias</b> <br>
        <b class="azul">let</b> <b class="sky">nodo</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="naranja">"nodo"</b>) <br>
        <b class="azul">let</b> <b class="sky">lista</b> = <b class="azul">new</b> <b class="aqua">Mylinkedlist</b>(1) <br>
    </p>
    `

    consola.innerHTML = `
        <p style="margin-top:0">
            <b class="verde">//instancia de Node</b> <br>
            <b class="sky">nodo</b> ${JSON.stringify(nodo)} 
        </p>

        <p>
            <b class="verde">//instancia de Mylinkedlist</b> <br>
            <b class="sky">lista</b> ${JSON.stringify(lista)} <br>
        </p>

    `

    if(tipo == "metodo-append"){
        console.log(
            lista.append(2),
            lista.append(3),
            lista.append(4),
        )

        consola.innerHTML = `
        <p style="margin-top:0">
            <b class="verde">//Añadir elementos</b> <br>
            <b class="sky">lista</b>.<b class="golden">append(<b class="verde">2</b>)</b> <br>
            <b class="sky">lista</b>.<b class="golden">append(<b class="verde">3</b>)</b> <br>
            <b class="sky">lista</b>.<b class="golden">append(<b class="verde">4</b>)</b> 
        </p>

        <p>
            <b>
                Problema: los punteros next y prev generan referencias circulares (un nodo apunta al siguiente y este al anterior).<br><br>
                JSON.stringify no puede serializar referencias circulares y lanzará un error:
                TypeError: Converting circular structure to JSON.<br><br>
            </b>
            <b class="naranja">
                Ver resultado en consola del navegador
            </b>
        </p>
        `
        codigo.innerHTML = `
        <p style="margin-top: 0;">
            <b class="azul">class</b> <b class="aqua">Node</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">value</b> = <b class="sky">value</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">next</b> = <b class="azul">null</b> <br>
            &emsp; } <br>
        </p>

        <p>
            <b class="azul">class</b> <b class="aqua">Mylinkedlist</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="azul">this</b>.<b class="sky">head</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 1 <br>
            &emsp; }
        </p>

        <p>
            &emsp; <b class="golden">append</b>(<b class="sky">value</b>) { <br>
            &emsp; &emsp; <b class="azul">const</b> <b class="doger">newnode</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br><br>

            &emsp; &emsp; <b class="doger">newnode</b>.<b class="sky">prev</b> = <b class="azul">this</b>.<b class="sky">tail</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b>.<b class="sky">next</b> = <b class="doger">newnode</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="doger">newnode</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>++ <br>

            &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b>.<b class="sky">tail</b> <br>
            &emsp; } <br>
            }
        </p>
        `
    }
    // else if(tipo == "metodo-Prepend"){
    //     consola.innerHTML = `
    //     <p style="margin-top:0">
    //         <b class="verde">//Añadir elementos</b> <br>
    //         <b class="sky">lista</b>.<b class="golden">prepend(<b class="verde">2</b>)</b> ${JSON.stringify(lista.prepend(2))} <br>
    //         <b class="sky">lista</b>.<b class="golden">prepend(<b class="verde">3</b>)</b> ${JSON.stringify(lista.prepend(3))} <br>
    //         <b class="sky">lista</b>.<b class="golden">prepend(<b class="verde">4</b>)</b> ${JSON.stringify(lista.prepend(4))} <br>
    //         <b class="sky">lista</b>.<b class="golden">prepend(<b class="verde">5</b>)</b> ${JSON.stringify(lista.prepend(5))} <br>
    //     </p>

    //     <p>
    //         <b class="verde">//ver lista</b> <br>
    //         <b class="sky">lista</b> ${JSON.stringify(lista)} <br>
    //     </p>

    //     `
    //     codigo.innerHTML = `
    //     <p style="margin-top: 0;">
    //         <b class="azul">class</b> <b class="aqua">Node</b> { <br>
    //         &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">value</b> = <b class="sky">value</b> <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">next</b> = <b class="azul">null</b> <br>
    //         &emsp; } <br>
    //     </p>

    //     <p>
    //         <b class="azul">class</b> <b class="aqua">Mylinkedlist</b> { <br>
    //         &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="azul">this</b>.<b class="sky">head</b> <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 1 <br>
    //         &emsp; }
    //     </p>

    //     <p>
    //         &emsp; <b class="golden">prepend</b>(<b class="sky">value</b>) { <br>
    //         &emsp; &emsp; <b class="azul">const</b> <b class="doger">newnode</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>

    //         &emsp; &emsp; <b class="doger">newnode</b>.<b class="sky">next</b>  = <b class="azul">this</b>.<b class="sky">head</b> <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="doger">newnode</b> <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>++ <br>

    //         &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b>.<b class="sky">head</b> <br>
    //         &emsp; } <br>
    //         }
    //     </p>
    //     `
    // }
    // else if(tipo == "Obtener-Nodo"){
    //     lista.append(2)
    //     lista.append(3)
    //     lista.append(4)

    //     codigo.innerHTML = `
    //     <p style="margin-top: 0;">
    //         <b class="azul">class</b> <b class="aqua">Node</b> { <br>
    //         &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">value</b> = <b class="sky">value</b> <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">next</b> = <b class="azul">null</b> <br>
    //         &emsp; } <br>
    //     </p>

    //     <p>
    //         <b class="azul">class</b> <b class="aqua">Mylinkedlist</b> { <br>
    //         &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="azul">this</b>.<b class="sky">head</b> <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 1 <br>
    //         &emsp; } <br>
    //     </p>

    //     <p>
    //         &emsp; <b class="golden">getNodo</b>(<b class="sky">index</b>) { <br>
    //         &emsp; &emsp; <b class="azul">let</b> <b class="sky">contador</b> = 1 <br>
    //         &emsp; &emsp; <b class="azul">let</b> <b class="sky">nodoActual</b> = <b class="azul">this</b>.<b class="sky">head</b> <br><br>

    //         &emsp; &emsp; <b class="morado">while</b>(<b class="sky">contador</b> !== <b class="sky">index</b>){ <br>
    //         &emsp; &emsp; &emsp; <b class="sky">nodoActual</b> = <b class="sky">nodoActual</b>.<b class="sky">next</b> <br>
    //         &emsp; &emsp; &emsp; <b class="sky">contador</b> ++ <br>
    //         &emsp; &emsp; } <br>
    //         &emsp; &emsp; <b class="morado">return</b> <b class="sky">nodoActual</b> <br>
    //         &emsp; } <br>
    //         }
    //     </p>
    //     `

    //     consola.innerHTML = `
    //     <p style="margin-top:0">
    //         <b class="verde">//instancia de Node</b> <br>
    //         <b class="sky">lista</b> ${JSON.stringify(lista)} 
    //     </p>

    //     <p style="margin-top:0">
    //         <b class="verde">//obtener nodos</b> <br>
    //         <b class="sky">lista</b>.<b class="golden">getNodo(<b class="verde">1</b>)</b> ${JSON.stringify(lista.getNodo(1))} <br><br>
    //         <b class="sky">lista</b>.<b class="golden">getNodo(<b class="verde">2</b>)</b> ${JSON.stringify(lista.getNodo(2))} <br><br>
    //         <b class="sky">lista</b>.<b class="golden">getNodo(<b class="verde">3</b>)</b> ${JSON.stringify(lista.getNodo(3))} <br><br>
    //         <b class="sky">lista</b>.<b class="golden">getNodo(<b class="verde">4</b>)</b> ${JSON.stringify(lista.getNodo(4))} <br>
    //     </p>
    //     `
    // }
    // else if(tipo == "metodo-Insert"){
    //     lista.append(2)
    //     lista.append(3)
    //     lista.append(4)

    //     codigo.innerHTML = `
    //     <p style="margin-top: 0;">
    //         <b class="azul">class</b> <b class="aqua">Node</b> { <br>
    //         &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">value</b> = <b class="sky">value</b> <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">next</b> = <b class="azul">null</b> <br>
    //         &emsp; } <br>
    //     </p>

    //     <p>
    //         <b class="azul">class</b> <b class="aqua">Mylinkedlist</b> { <br>
    //         &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="azul">this</b>.<b class="sky">head</b> <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 1 <br>
    //         &emsp; } 
    //     </p>

    //     <p>
    //         &emsp; <b class="golden">insert</b>(<b class="sky">index</b>, <b class="sky">value</b>) { <br>
    //         &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> >= <b class="azul">this</b>.<b class="sky">length</b>) { <br>
    //         &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b>.<b class="golden">append</b>(<b class="sky">value</b>) <br>
    //         &emsp; &emsp; } <br><br>

    //         &emsp; &emsp; <b class="azul">const</b> <b class="doger">newnode</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
    //         &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
    //         &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoSiguiente</b> = <b class="doger">nodoPrevio</b>.<b class="sky">next</b> <br><br>

    //         &emsp; &emsp; <b class="doger">nodoPrevio</b>.<b class="sky">next</b> = <b class="doger">newnode</b> <br>
    //         &emsp; &emsp; <b class="doger">newnode</b>.<b class="sky">next</b> = <b class="doger">nodoSiguiente</b> <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> ++ <br><br>

    //         &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
    //         &emsp; } <br>
    //         }
    //     </p>
    //     `

    //     consola.innerHTML = `
    //     <p style="margin-top:0">
    //         <b class="verde">//insertar nodos</b> <br>
    //         <b class="sky">lista</b>.<b class="golden">insert(</b><b class="verde">2</b>,<b class="verde">12</b><b class="golden">)</b> <br>
    //         ${JSON.stringify(lista.insert(2, 12))} <br><br>

    //         <b class="sky">lista</b>.<b class="golden">insert(</b><b class="verde">5</b>,<b class="verde">25</b><b class="golden">)</b> <br>
    //         ${JSON.stringify(lista.insert(5, 25))} 
    //     </p>

    //     <p style="margin-top:0">
    //         <b class="verde">//ver lista</b> <br>
    //         <b class="sky">lista</b> ${JSON.stringify(lista)} 
    //     </p>
    //     `
    // }

    // //metodo delete
    // else if(tipo == "metodo-Delete"){
    //     lista.append(2)
    //     lista.append(3)
    //     lista.append(4)

    //     codigo.innerHTML = `
    //     <p style="margin-top: 0;">
    //         <b class="azul">class</b> <b class="aqua">Mylinkedlist</b> { <br>
    //         &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="azul">this</b>.<b class="sky">head</b> <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 1 <br>
    //         &emsp; } <br>
    //     </p>

    //     <p>
    //         &emsp; <b class="golden">delete</b>(<b class="sky">index</b>){ <br>
    //         &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> > <b class="azul">this</b>.<b class="sky">length</b> || <b class="sky">index</b> &lt; 1){ <br>
    //         &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="naranja">"Este nodo no existe"</b> <br>
    //         &emsp; &emsp; } <br>

    //         &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> === 1){ <br>
    //         &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">this</b>.<b class="sky">head</b>.<b class="sky">next</b> <br>
    //         &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>-- <br>
    //         &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
    //         &emsp; &emsp; } <br>
    //         &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> === <b class="azul">this</b>.<b class="sky">length</b>){ <br>
    //         &emsp; &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
    //         &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="doger">nodoPrevio</b> <br>
    //         &emsp; &emsp; } <br><br>

    //         &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
    //         &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoSiguiente</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> + 1) <br><br>
            
    //         &emsp; &emsp; <b class="doger">nodoPrevio</b>.<b class="sky">next</b> = <b class="doger">nodoSiguiente</b> <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>-- <br>
    //         &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
    //         &emsp; } <br>
    //         }
    //     </p>

    //     <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(1)')">
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">1</b>)</b>
    //     </button>

    //     <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(2)')">
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">2</b>)</b>
    //     </button>

    //     <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(3)')">
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">3</b>)</b>
    //     </button>

    //     <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(4)')">
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">4</b>)</b>
    //     </button>

    //     `

    //     consola.innerHTML = `
    //     <p style="margin-top:0">
    //         <b class="sky">lista</b><br> ${JSON.stringify(lista)} 
    //     </p>

    //     <p>
    //         <b class="verde">//Eliminar nodos</b> <br>
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">0</b>)</b> <br>
    //         ${JSON.stringify(lista.delete(0))} <br><br>

    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">5</b>)</b> <br>
    //         ${JSON.stringify(lista.delete(5))} <br><br>
    //     </p>

    //     `
    // }
    // //botones de delete
    // else if(tipo == "delete(1)"){
    //     lista.append(2)
    //     lista.append(3)
    //     lista.append(4)

    //     codigo.innerHTML = `
    //     <p style="margin-top: 0;">
    //         <b class="azul">class</b> <b class="aqua">Mylinkedlist</b> { <br>
    //         &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="azul">this</b>.<b class="sky">head</b> <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 1 <br>
    //         &emsp; } <br>
    //     </p>

    //     <p>
    //         &emsp; <b class="golden">delete</b>(<b class="sky">index</b>){ <br>
    //         &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> > <b class="azul">this</b>.<b class="sky">length</b> || <b class="sky">index</b> &lt; 1){ <br>
    //         &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="naranja">"Este nodo no existe"</b> <br>
    //         &emsp; &emsp; } <br>

    //         &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> === 1){ <br>
    //         &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">this</b>.<b class="sky">head</b>.<b class="sky">next</b> <br>
    //         &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>-- <br>
    //         &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
    //         &emsp; &emsp; } <br>
    //         &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> === <b class="azul">this</b>.<b class="sky">length</b>){ <br>
    //         &emsp; &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
    //         &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="doger">nodoPrevio</b> <br>
    //         &emsp; &emsp; } <br><br>

    //         &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
    //         &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoSiguiente</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> + 1) <br><br>
            
    //         &emsp; &emsp; <b class="doger">nodoPrevio</b>.<b class="sky">next</b> = <b class="doger">nodoSiguiente</b> <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>-- <br>
    //         &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
    //         &emsp; } <br>
    //         }
    //     </p>

    //     <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(1)')">
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">1</b>)</b>
    //     </button>

    //     <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(2)')">
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">2</b>)</b>
    //     </button>

    //     <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(3)')">
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">3</b>)</b>
    //     </button>

    //     <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(4)')">
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">4</b>)</b>
    //     </button>
    //     `

    //     consola.innerHTML = `
    //     <p style="margin-top:0">
    //         <b class="sky">lista</b><br> ${JSON.stringify(lista)} 
    //     </p>

    //     <p>
    //         <b class="verde">//Eliminar nodos</b> <br><br>
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">1</b>)</b> <br>
    //         ${JSON.stringify(lista.delete(1))} <br><br>
    //     </p>

    //     `
    // }else if(tipo == "delete(2)"){
    //     lista.append(2)
    //     lista.append(3)
    //     lista.append(4)

    //     codigo.innerHTML = `
    //     <p style="margin-top: 0;">
    //         <b class="azul">class</b> <b class="aqua">Mylinkedlist</b> { <br>
    //         &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="azul">this</b>.<b class="sky">head</b> <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 1 <br>
    //         &emsp; } <br>
    //     </p>

    //     <p>
    //         &emsp; <b class="golden">delete</b>(<b class="sky">index</b>){ <br>
    //         &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> > <b class="azul">this</b>.<b class="sky">length</b> || <b class="sky">index</b> &lt; 1){ <br>
    //         &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="naranja">"Este nodo no existe"</b> <br>
    //         &emsp; &emsp; } <br>

    //         &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> === 1){ <br>
    //         &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">this</b>.<b class="sky">head</b>.<b class="sky">next</b> <br>
    //         &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>-- <br>
    //         &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
    //         &emsp; &emsp; } <br>
    //         &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> === <b class="azul">this</b>.<b class="sky">length</b>){ <br>
    //         &emsp; &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
    //         &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="doger">nodoPrevio</b> <br>
    //         &emsp; &emsp; } <br><br>

    //         &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
    //         &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoSiguiente</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> + 1) <br><br>
            
    //         &emsp; &emsp; <b class="doger">nodoPrevio</b>.<b class="sky">next</b> = <b class="doger">nodoSiguiente</b> <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>-- <br>
    //         &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
    //         &emsp; } <br>
    //         }
    //     </p>

    //     <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(1)')">
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">1</b>)</b>
    //     </button>

    //     <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(2)')">
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">2</b>)</b>
    //     </button>

    //     <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(3)')">
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">3</b>)</b>
    //     </button>

    //     <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(4)')">
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">4</b>)</b>
    //     </button>
    //     `

    //     consola.innerHTML = `
    //     <p style="margin-top:0">
    //         <b class="sky">lista</b><br> ${JSON.stringify(lista)} 
    //     </p>

    //     <p>
    //         <b class="verde">//Eliminar nodos</b> <br><br>
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">2</b>)</b> <br>
    //         ${JSON.stringify(lista.delete(2))} <br><br>
    //     </p>

    //     `
    // }else if(tipo == "delete(3)"){
    //     lista.append(2)
    //     lista.append(3)
    //     lista.append(4)

    //     codigo.innerHTML = `
    //     <p style="margin-top: 0;">
    //         <b class="azul">class</b> <b class="aqua">Mylinkedlist</b> { <br>
    //         &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="azul">this</b>.<b class="sky">head</b> <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 1 <br>
    //         &emsp; } <br>
    //     </p>

    //     <p>
    //         &emsp; <b class="golden">delete</b>(<b class="sky">index</b>){ <br>
    //         &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> > <b class="azul">this</b>.<b class="sky">length</b> || <b class="sky">index</b> &lt; 1){ <br>
    //         &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="naranja">"Este nodo no existe"</b> <br>
    //         &emsp; &emsp; } <br>

    //         &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> === 1){ <br>
    //         &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">this</b>.<b class="sky">head</b>.<b class="sky">next</b> <br>
    //         &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>-- <br>
    //         &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
    //         &emsp; &emsp; } <br>
    //         &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> === <b class="azul">this</b>.<b class="sky">length</b>){ <br>
    //         &emsp; &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
    //         &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="doger">nodoPrevio</b> <br>
    //         &emsp; &emsp; } <br><br>

    //         &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
    //         &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoSiguiente</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> + 1) <br><br>
            
    //         &emsp; &emsp; <b class="doger">nodoPrevio</b>.<b class="sky">next</b> = <b class="doger">nodoSiguiente</b> <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>-- <br>
    //         &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
    //         &emsp; } <br>
    //         }
    //     </p>

    //     <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(1)')">
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">1</b>)</b>
    //     </button>

    //     <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(2)')">
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">2</b>)</b>
    //     </button>

    //     <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(3)')">
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">3</b>)</b>
    //     </button>

    //     <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(4)')">
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">4</b>)</b>
    //     </button>
    //     `

    //     consola.innerHTML = `
    //     <p style="margin-top:0">
    //         <b class="sky">lista</b><br> ${JSON.stringify(lista)} 
    //     </p>

    //     <p>
    //         <b class="verde">//Eliminar nodos</b> <br><br>
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">3</b>)</b> <br>
    //         ${JSON.stringify(lista.delete(3))} <br><br>
    //     </p>

    //     `
    // }else if(tipo == "delete(4)"){
    //     lista.append(2)
    //     lista.append(3)
    //     lista.append(4)

    //     codigo.innerHTML = `
    //     <p style="margin-top: 0;">
    //         <b class="azul">class</b> <b class="aqua">Mylinkedlist</b> { <br>
    //         &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="azul">this</b>.<b class="sky">head</b> <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 1 <br>
    //         &emsp; } <br>
    //     </p>

    //     <p>
    //         &emsp; <b class="golden">delete</b>(<b class="sky">index</b>){ <br>
    //         &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> > <b class="azul">this</b>.<b class="sky">length</b> || <b class="sky">index</b> &lt; 1){ <br>
    //         &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="naranja">"Este nodo no existe"</b> <br>
    //         &emsp; &emsp; } <br>

    //         &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> === 1){ <br>
    //         &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">head</b> = <b class="azul">this</b>.<b class="sky">head</b>.<b class="sky">next</b> <br>
    //         &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>-- <br>
    //         &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
    //         &emsp; &emsp; } <br>
    //         &emsp; &emsp; <b class="morado">if</b>(<b class="sky">index</b> === <b class="azul">this</b>.<b class="sky">length</b>){ <br>
    //         &emsp; &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
    //         &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">tail</b> = <b class="doger">nodoPrevio</b> <br>
    //         &emsp; &emsp; } <br><br>

    //         &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoPrevio</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> - 1) <br>
    //         &emsp; &emsp; <b class="azul">const</b> <b class="doger">nodoSiguiente</b> = <b class="azul">this</b>.<b class="golden">getNodo</b>(<b class="sky">index</b> + 1) <br><br>
            
    //         &emsp; &emsp; <b class="doger">nodoPrevio</b>.<b class="sky">next</b> = <b class="doger">nodoSiguiente</b> <br>
    //         &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b>-- <br>
    //         &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
    //         &emsp; } <br>
    //         }
    //     </p>

    //     <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(1)')">
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">1</b>)</b>
    //     </button>

    //     <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(2)')">
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">2</b>)</b>
    //     </button>

    //     <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(3)')">
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">3</b>)</b>
    //     </button>

    //     <button class="btn-simple2" onclick="ejecutarlinkedlist('delete(4)')">
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">4</b>)</b>
    //     </button>
    //     `

    //     consola.innerHTML = `
    //     <p style="margin-top:0">
    //         <b class="sky">lista</b><br> ${JSON.stringify(lista)} 
    //     </p>

    //     <p>
    //         <b class="verde">//Eliminar nodos</b> <br><br>
    //         <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">4</b>)</b> <br>
    //         ${JSON.stringify(lista.delete(4))} <br><br>
    //     </p>

    //     `
    // }

}ejecutarlinkedlistDouble()

//Stacks
function ejecutarStack(tipo){
    const consola = document.getElementById("consola-Stack")
    const codigo = document.getElementById("codigo-Stack")

    //clases
    class Nodo {
        constructor(value){
            this.value = value
            this.next = null
        }
    }

    class Stack {
        constructor(){
            this.top = null 
            this.bottom = null 
            this.length = 0
        }
        peek(){
            return this.top
        }
        push(value) {
            const newnode = new Nodo(value) //crear nodo

            if(this.length === 0){ //si la pila esta vacia, top y bottom apuntan al mismo nodo
                this.top = newnode
                this.bottom = newnode
            } else {               //sino
                const topActual = this.top  //guardamos el top actual
                this.top = newnode          //actualizamos el top con el nuevo nodo
                this.top.next = topActual   //y asu next le mandamos el top antiguo(top actual)
            }

            this.length ++ //aumentar longitud y retornamos
            return this
        } 
        pop(){
            if(this.length === 0){
                return "No hay elementos en al lista"
            } else if (this.length === 1){
                this.top = null
                this.bottom = null
                this.length --
                return this
            }
            this.top = this.top.next 
            this.length --
            return this
        }
    }

    //instancia
    let nodo = new Nodo(100)
    let lista = new Stack

    codigo.innerHTML = `
    <!-- clase nodo -->
    <p style="margin-top: 0;">
        <b class="azul">class</b> <b class="aqua">Node</b> { <br>
        &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">value</b> = <b class="sky">value</b> <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">next</b> = <b class="azul">null</b> <br>
        &emsp; } <br>
        }
    </p>

    <!-- clase stack -->
    <p>
        <b class="azul">class</b> <b class="aqua">Stack</b> { <br>
        &emsp; <b class="azul">constructor</b>(){ <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">top</b> = <b class="azul">null</b>  <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">bottom</b> = <b class="azul">null</b> <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 0 <br>
        &emsp; } <br>
        }
    </p>

    <!-- instacias -->
    <p>
        <b>crear instancias</b> <br>
        <b class="azul">let</b> <b class="sky">nodo</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="naranja">"nodo"</b>) <br>
        <b class="azul">let</b> <b class="sky">lista</b> = <b class="azul">new</b> <b class="aqua">Stack</b> <br>
    </p>
    `

    consola.innerHTML = `
        <p style="margin-top:0">
            <b class="verde">//instancia de Node</b> <br>
            <b class="sky">nodo</b> ${JSON.stringify(nodo)} 
        </p>

        <p>
            <b class="verde">//instancia de Mylinkedlist</b> <br>
            <b class="sky">lista</b> ${JSON.stringify(lista)} <br>
        </p>

    `

    if(tipo == "metodo-push"){
            
        consola.innerHTML = `
        <p style="margin-top:0">
            <b class="verde">//Añadir elementos</b> <br>
            <b class="sky">lista</b>.<b class="golden">append(<b class="verde">1</b>)</b> <br> ${JSON.stringify(lista.push(1))} <br><br>
            <b class="sky">lista</b>.<b class="golden">append(<b class="verde">2</b>)</b> <br> ${JSON.stringify(lista.push(2))} <br><br>
            <b class="sky">lista</b>.<b class="golden">append(<b class="verde">3</b>)</b> <br> ${JSON.stringify(lista.push(3))} <br><br>
            <b class="sky">lista</b>.<b class="golden">append(<b class="verde">4</b>)</b> <br> ${JSON.stringify(lista.push(4))} <br><br>
        </p>
        `
        codigo.innerHTML = `
        <p style="margin-top: 0;">
            <b class="azul">class</b> <b class="aqua">Node</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">value</b> = <b class="sky">value</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">next</b> = <b class="azul">null</b> <br>
            &emsp; } <br>
        </p>

        <p>
            <b class="azul">class</b> <b class="aqua">Stack</b> { <br>
            &emsp; <b class="azul">constructor</b>(){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">top</b> = <b class="azul">null</b>  <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">bottom</b> = <b class="azul">null</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 0 <br>
            &emsp; } <br>
        </p>

        <p>
            &emsp; <b class="golden">push</b>(<b class="sky">value</b>) { <br>
            &emsp; &emsp; <b class="azul">const</b> <b class="doger">newnode</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>)  <br><br>

            &emsp; &emsp; <b class="morado">if</b> (<b class="azul">this</b>.<b class="sky">length</b> === 0){ <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">top</b> = <b class="doger">newnode</b> <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">bottom</b> = <b class="doger">newnode</b> <br>
            &emsp; &emsp; } <b class="morado">else</b> { <br>              
            &emsp; &emsp; &emsp; <b class="azul">const</b> <b class="doger">topActual</b> = <b class="azul">this</b>.<b class="sky">top</b>  <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">top</b> = <b class="doger">newnode</b> <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">top</b>.<b class="sky">next</b> = <b class="doger">topActual</b>   <br>
            &emsp; &emsp; } <br><br>

            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> ++ <br>
            &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
            &emsp; } <br>
            }
        </p>
        `
    }
    else if(tipo == "metodo-Peek"){
        lista.push(1)
        lista.push(2)
        lista.push(3)
        lista.push(4)
            
        consola.innerHTML = `
        <p style="margin-top:0">
            <b class="verde">//Añadir elementos</b> <br>
            <b class="sky">lista</b>.<b class="golden">peek()</b> <br> ${JSON.stringify(lista.peek())} 
        </p>
        `
        codigo.innerHTML = `
        <p style="margin-top: 0;">
            <b class="azul">class</b> <b class="aqua">Node</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">value</b> = <b class="sky">value</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">next</b> = <b class="azul">null</b> <br>
            &emsp; } <br>
        </p>

        <p>
            <b class="azul">class</b> <b class="aqua">Stack</b> { <br>
            &emsp; <b class="azul">constructor</b>(){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">top</b> = <b class="azul">null</b>  <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">bottom</b> = <b class="azul">null</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 0 <br>
            &emsp; } <br>
        </p>

        <p>
            &emsp; <b class="golden">peek</b>(){ <br>
            &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b>.<b class="sky">top</b> <br>
            &emsp; } <br>
            }
        </p>
        `
    
    }
    else if(tipo == "metodo-pop"){
        lista.push(1)
        lista.push(2)
        lista.push(3)
        lista.push(4)
            
        consola.innerHTML = `
        <p style="margin-top:0">
            <b class="sky">lista</b> <br> ${JSON.stringify(lista)} <br><br>

            <b class="verde">//Eliminar elementos</b> <br>
            <b class="sky">lista</b>.<b class="golden">pop()</b> <br> ${JSON.stringify(lista.pop())} <br><br>
            <b class="sky">lista</b>.<b class="golden">pop()</b> <br> ${JSON.stringify(lista.pop())} <br><br>
            <b class="sky">lista</b>.<b class="golden">pop()</b> <br> ${JSON.stringify(lista.pop())} <br><br>
            <b class="sky">lista</b>.<b class="golden">pop()</b> <br> ${JSON.stringify(lista.pop())} <br><br>
            <b class="sky">lista</b>.<b class="golden">pop()</b> <br> ${JSON.stringify(lista.pop())} <br><br>
        </p>
        `
        codigo.innerHTML = `
        <p style="margin-top: 0;">
            <b class="azul">class</b> <b class="aqua">Node</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">value</b> = <b class="sky">value</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">next</b> = <b class="azul">null</b> <br>
            &emsp; } <br>
        </p>

        <p>
            <b class="azul">class</b> <b class="aqua">Stack</b> { <br>
            &emsp; <b class="azul">constructor</b>(){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">top</b> = <b class="azul">null</b>  <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">bottom</b> = <b class="azul">null</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 0 <br>
            &emsp; } <br>
        </p>

        <p>
            &emsp; <b class="golden">pop</b>(){ <br>
            &emsp; &emsp; <b class="morado">if</b> (<b class="azul">this</b>.<b class="sky">length</b> === 0){ <br>
            &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="naranja">"No hay elementos en al lista"</b> <br>
            &emsp; &emsp; } <b class="morado">else if</b> (<b class="azul">this</b>.<b class="sky">length</b> === 1){ <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">top</b> = <b class="azul">null</b> <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">bottom</b> = <b class="azul">null</b> <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> -- <br>
            &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
            &emsp; &emsp; } <br><br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">top</b> = <b class="azul">this</b>.<b class="sky">top</b>.<b class="sky">next</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> -- <br>
            &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
            &emsp; } <br>
            }
        </p>
        `
    
    }
    

}ejecutarStack()

//Queues
function ejecutarQueues(tipo){
    const consola = document.getElementById("consola-queues")
    const codigo = document.getElementById("codigo-queues")

    class Node {
        constructor(value){
            this.value = value
            this.next = null
        }
    }

    class Queues {
        constructor(){
            this.first = null
            this.last = null
            this.length = 0
        }
        Enqueue(value){
            const newnodo = new Node(value)

            if(this.length === 0){
                this.first = newnodo
                this.last = newnodo
            }else{
                this.last.next = newnodo
                this.last = newnodo
            }

            this.length ++
            return this
        }

        Dequeue(){
            if(this.length === 0){
                return "No hay elementos en la cola"
            }else if(this.length === 1){
                this.first = null
                this.last = null
            }else{
                this.first = this.first.next
            }
            this.length --
            return this
        }
        peek(){
            return this.first 
        }
    }

    //instancias
    let nodo = new Node(456)
    let lista = new Queues

    codigo.innerHTML = `
    <!-- clase nodo -->
    <p style="margin-top: 0;">
        <b class="azul">class</b> <b class="aqua">Node</b> { <br>
        &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">value</b> = <b class="sky">value</b> <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">next</b> = <b class="azul">null</b> <br>
        &emsp; } <br>
        }
    </p>

    <!-- clase stack -->
    <p>
        <b class="azul">class</b> <b class="aqua">Queue</b> { <br>
        &emsp; <b class="azul">constructor</b>(){ <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">first</b> = <b class="azul">null</b>  <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">last</b> = <b class="azul">null</b> <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 0 <br>
        &emsp; } <br>
        }
    </p>

    <!-- instacias -->
    <p>
        <b>crear instancias</b> <br>
        <b class="azul">let</b> <b class="sky">nodo</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="verde">456</b>) <br>
        <b class="azul">let</b> <b class="sky">lista</b> = <b class="azul">new</b> <b class="aqua">Queue</b> <br>
    </p>
    `

    consola.innerHTML = `
    <p style="margin-top:0">
        <b class="sky">nodo</b> ${JSON.stringify(nodo)} <br><br>
        <b class="sky">lista</b> ${JSON.stringify(lista)}
    </p>
    `

    if(tipo == "Enqueue"){
        codigo.innerHTML = `
        <!-- clase nodo -->
        <p style="margin-top: 0;">
            <b class="azul">class</b> <b class="aqua">Node</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">value</b> = <b class="sky">value</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">next</b> = <b class="azul">null</b> <br>
            &emsp; } <br>
            }
        </p>

        <!-- clase stack -->
        <p>
            <b class="azul">class</b> <b class="aqua">Queue</b> { <br>
            &emsp; <b class="azul">constructor</b>(){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">first</b> = <b class="azul">null</b>  <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">last</b> = <b class="azul">null</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 0 <br>
            &emsp; } <br>
            
        </p>

        <p>
            &emsp; <b class="golden">Enqueue</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">const</b> <b class="doger">newnodo</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br><br>

            &emsp; &emsp; <b class="morado">if</b>(<b class="azul">this</b>.<b class="sky">length</b> === 0){ <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">first</b> = <b class="doger">newnodo</b> <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">last</b> = <b class="doger">newnodo</b> <br>
            &emsp; &emsp; }<b class="morado">else</b>{ <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">last</b>.<b class="sky">next</b> = <b class="doger">newnodo</b> <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">last</b> = <b class="doger">newnodo</b> <br>
            &emsp; &emsp; } <br><br>

            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> ++ <br>
            &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
            &emsp; } <br>
            }
        </p>
        `

        consola.innerHTML = `
        <p style="margin-top:0">
            <b class="verde">//Encolar</b><br>
            <b class="sky">lista</b>.<b class="golden">Enqueue(<b class="verde">10</b>)</b><br> ${JSON.stringify(lista.Enqueue(10))} <br><br>
            <b class="sky">lista</b>.<b class="golden">Enqueue(<b class="verde">20</b>)</b><br> ${JSON.stringify(lista.Enqueue(20))} <br><br>
            <b class="sky">lista</b>.<b class="golden">Enqueue(<b class="verde">30</b>)</b><br> ${JSON.stringify(lista.Enqueue(30))} <br><br>
            <b class="sky">lista</b>.<b class="golden">Enqueue(<b class="verde">40</b>)</b><br> ${JSON.stringify(lista.Enqueue(40))} <br>
        </p>
        `
    }
    else if(tipo == "Peek"){
        lista.Enqueue(10)
        lista.Enqueue(20)
        lista.Enqueue(30)
        lista.Enqueue(40)

        codigo.innerHTML = `
        <!-- clase nodo -->
        <p style="margin-top: 0;">
            <b class="azul">class</b> <b class="aqua">Node</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">value</b> = <b class="sky">value</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">next</b> = <b class="azul">null</b> <br>
            &emsp; } <br>
            }
        </p>

        <!-- clase stack -->
        <p>
            <b class="azul">class</b> <b class="aqua">Queue</b> { <br>
            &emsp; <b class="azul">constructor</b>(){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">first</b> = <b class="azul">null</b>  <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">last</b> = <b class="azul">null</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 0 <br>
            &emsp; } <br>
        </p>

         <p> 
            &emsp; <b class="golden">peek</b>(){ <br>
            &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b>.<b class="sky">first</b> <br>
            &emsp; } <br>
            }
        </p>
        `

        consola.innerHTML = `
        <p style="margin-top:0">
            <b class="verde">//Encolar</b><br>
            <b class="sky">lista</b>.<b class="golden">peek()</b> ${JSON.stringify(lista.peek())} 
        </p>
        `
    }
    else if(tipo == "Dequeue"){
        lista.Enqueue(10)
        lista.Enqueue(20)
        lista.Enqueue(30)
        lista.Enqueue(40)

        codigo.innerHTML = `
        <!-- clase nodo -->
        <p style="margin-top: 0;">
            <b class="azul">class</b> <b class="aqua">Node</b> { <br>
            &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">value</b> = <b class="sky">value</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">next</b> = <b class="azul">null</b> <br>
            &emsp; } <br>
            }
        </p>

        <!-- clase stack -->
        <p>
            <b class="azul">class</b> <b class="aqua">Queue</b> { <br>
            &emsp; <b class="azul">constructor</b>(){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">first</b> = <b class="azul">null</b>  <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">last</b> = <b class="azul">null</b> <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> = 0 <br>
            &emsp; } <br>
        </p>

        <p>
            &emsp; <b class="golden">Dequeue</b>(){ <br>
            &emsp; &emsp; <b class="morado">if</b>(<b class="azul">this</b>.<b class="sky">length</b> === 0){ <br>
            &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="naranja">"No hay elementos en la cola"</b> <br>
            &emsp; &emsp; }<b class="morado">else if</b>(<b class="azul">this</b>.<b class="sky">length</b> === 1){ <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">first</b> = <b class="azul">null</b> <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">last</b> = <b class="azul">null</b> <br>
            &emsp; &emsp; }<b class="morado">else</b>{ <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">first</b> = <b class="azul">this</b>.<b class="sky">first</b>.<b class="sky">next</b> <br>
            &emsp; &emsp; } <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">length</b> -- <br>
            &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
            &emsp; } <br>
            }
        </p>   
        `

        consola.innerHTML = `
        <p style="margin-top:0">
            <b class="sky">lista</b> ${JSON.stringify(lista)} <br><br>

            <b class="verde">//Desencolar</b><br>
            <b class="sky">lista</b>.<b class="golden">Dequeue()</b><br> ${JSON.stringify(lista.Dequeue())} <br><br>
            <b class="sky">lista</b>.<b class="golden">Dequeue()</b><br> ${JSON.stringify(lista.Dequeue())} <br><br>
            <b class="sky">lista</b>.<b class="golden">Dequeue()</b><br> ${JSON.stringify(lista.Dequeue())} <br><br>
            <b class="sky">lista</b>.<b class="golden">Dequeue()</b><br> ${JSON.stringify(lista.Dequeue())} <br><br>
            <b class="sky">lista</b>.<b class="golden">Dequeue()</b><br> ${JSON.stringify(lista.Dequeue())} 
        </p>
        `
    }
}ejecutarQueues()

//Trees
function ejecutarTrees(tipo){
    const consola = document.getElementById("consola-tree")
    const codigo = document.getElementById("codigo-tree")

    class Node {
        constructor(value){
            this.value = value
            this.left = null
            this.right = null
        }
    }

    class BinarySearchTree {
        constructor(){
            this.root = null
        }
        insert(value){
            const newnode = new Node(value)
            if(this.root === null){
                this.root = newnode
                return this
            }

            let nodoActual = this.root
            while(true){
                if(value < nodoActual.value){
                    if(nodoActual.left === null){
                        nodoActual.left = newnode
                        return this
                    }
                    nodoActual = nodoActual.left
                } else {
                    if(nodoActual.right === null){
                        nodoActual.right = newnode
                        return this
                    }
                    nodoActual = nodoActual.right
                }
            }
        }
        search(value){
            let nodoActual = this.root

            while(value != nodoActual.value){
                
                if(value > nodoActual.value){
                    nodoActual = nodoActual.right
                //es menor?
                } else {
                    nodoActual = nodoActual.left
                } 
                //se encuentra?
                if(nodoActual == null) return `${value} No se encontro`
            }
            return `resumen: ${resumen} <br><br> ${JSON.stringify(nodoActual.value)}`
        }
        delete(value){
            let nodoActual = this.root
            let parent = null 

            while(value != nodoActual.value){ 
                parent = nodoActual 
                if(value > nodoActual.value){ 
                    nodoActual = nodoActual.right 
                } else {                      
                    nodoActual = nodoActual.left
                }
                if(nodoActual == null) return `no se encontro: ${value}`
            }

            //caso 1: nodo hoja
            if(!nodoActual.left && !nodoActual.right){
                if(!parent) this.root = null // si es la raiz, la eliminamos
                else if (parent.left === nodoActual) parent.left = null
                else parent.right = null
            }
            //caso 2: un hijo
            else if(!nodoActual.left || !nodoActual.right){
                const child = nodoActual.left || nodoActual.right  
                if(parent == null) this.root = child  // si es la raiz la reemplazamos
                else if(parent.left == nodoActual) parent.left = child
                else parent.right = child
            }
            //caso 3: dos hijos
            else {
                let Parent = nodoActual 
                let successor = nodoActual.right 
                while(successor.left){ 
                    Parent = successor
                    successor = successor.left
                }

                nodoActual.value = successor.value 
                if(Parent.left === successor){ 
                    Parent.left = successor.right
                } else {
                    Parent.right = successor.right
                }
            }

            return this
        }
    }

    // instancias
    let nodo = new Node(12)
    let lista = new BinarySearchTree


    codigo.innerHTML = `
    <!-- clase nodo -->
    <p style="margin-top: 0;">
        <b class="azul">class</b> <b class="aqua">Node</b> { <br>
        &emsp; <b class="azul">constructor</b>(<b class="sky">value</b>){ <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">value</b> = <b class="sky">value</b> <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">left</b> = <b class="azul">null</b> <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">right</b> = <b class="azul">null</b> <br>
        &emsp; } <br>
        }
    </p>

    <!-- clase tree -->
    <p>
        <b class="azul">class</b> <b class="aqua">BinarySearchTree</b> { <br>
        &emsp; <b class="azul">constructor</b>(){ <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">root</b> = <b class="azul">null</b>  <br>
        &emsp; } <br>
        }
    </p>

    <!-- instacias -->
    <p>
        <b>crear instancias</b> <br>
        <b class="azul">let</b> <b class="sky">nodo</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="verde">12</b>) <br>
        <b class="azul">let</b> <b class="sky">lista</b> = <b class="azul">new</b> <b class="aqua">BinarySearchTree</b>() <br>
    </p>
    `
    consola.innerHTML = `
    <p style="margin-top: 0">
        <b class="sky">nodo</b> ${JSON.stringify(nodo)} <br><br>
        <b class="sky">lista</b> ${JSON.stringify(lista)} 
    </p>
    `

    if(tipo == "Insert"){
        codigo.innerHTML = `
        <!-- clase tree -->
        <p>
            <b class="azul">class</b> <b class="aqua">BinarySearchTree</b> { <br>
            &emsp; <b class="azul">constructor</b>(){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">root</b> = <b class="azul">null</b>  <br>
            &emsp; } <br>
        </p>

        <p>
            &emsp; <b class="golden">insert</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">const</b> <b class="doger">newnode</b> = <b class="azul">new</b> <b class="aqua">Node</b>(<b class="sky">value</b>) <br>
            &emsp; &emsp; <b class="morado">if</b>(<b class="azul">this</b>.<b class="sky">root</b> === <b class="azul">null</b>){ <br>
            &emsp; &emsp; &emsp; <b class="azul">this</b>.<b class="sky">root</b> = <b class="doger">newnode</b> <br> 
            &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
            &emsp; &emsp; } <br> <br> 

            &emsp; &emsp; <b class="azul">let</b> <b class="sky">nodoActual</b> = <b class="azul">this</b>.<b class="sky">root</b> <br>
            &emsp; &emsp; <b class="morado">while</b>(<b class="azul">true</b>){ <br>
            &emsp; &emsp; &emsp; <b class="morado">if</b>(<b class="sky">value</b> &lt; <b class="sky">nodoActual</b>.<b class="sky">value</b>){ <br>
            &emsp; &emsp; &emsp; &emsp; <b class="morado">if</b>(<b class="sky">nodoActual</b>.<b class="sky">left</b> === <b class="azul">null</b>){ <br>
            &emsp; &emsp; &emsp; &emsp; &emsp; <b class="sky">nodoActual</b>.<b class="sky">left</b> = <b class="doger">newnode</b> <br>
            &emsp; &emsp; &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
            &emsp; &emsp; &emsp; &emsp; } <br>
            &emsp; &emsp; &emsp; &emsp; <b class="sky">nodoActual</b> = <b class="sky">nodoActual</b>.<b class="sky">left</b> <br>
            &emsp; &emsp; &emsp; } <b class="morado">else</b> { <br>
            &emsp; &emsp; &emsp; &emsp; <b class="morado">if</b>(<b class="sky">nodoActual</b>.<b class="sky">right</b> === <b class="azul">null</b>){ <br>
            &emsp; &emsp; &emsp; &emsp; &emsp; <b class="sky">nodoActual</b>.<b class="sky">right</b> = <b class="doger">newnode</b> <br>
            &emsp; &emsp; &emsp; &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
            &emsp; &emsp; &emsp; &emsp; } <br>
            &emsp; &emsp; &emsp; &emsp; <b class="sky">nodoActual</b> = <b class="sky">nodoActual</b>.<b class="sky">right</b> <br>
            &emsp; &emsp; &emsp; } <br>
            &emsp; &emsp; } <br>
            &emsp; } <br>
            }
        </p>
        `

        consola.innerHTML = `
        <p style="margin-top: 0">
            <b class="sky">lista</b>.<b class="golden">insert(<b class="verde">10</b>)</b> ${JSON.stringify(lista.insert(10))} <br><br>
            <b class="sky">lista</b>.<b class="golden">insert(<b class="verde">5</b>)</b> ${JSON.stringify(lista.insert(5))} <br><br>
            <b class="sky">lista</b>.<b class="golden">insert(<b class="verde">3</b>)</b> ${JSON.stringify(lista.insert(3))} <br><br>
            <b class="sky">lista</b>.<b class="golden">insert(<b class="verde">4</b>)</b> ${JSON.stringify(lista.insert(4))} <br><br>

            <b class="sky">lista</b>.<b class="golden">insert(<b class="verde">12</b>)</b> ${JSON.stringify(lista.insert(12))} <br><br>
            <b class="sky">lista</b>.<b class="golden">insert(<b class="verde">15</b>)</b> ${JSON.stringify(lista.insert(15))} <br><br>
            <b class="sky">lista</b>.<b class="golden">insert(<b class="verde">18</b>)</b> ${JSON.stringify(lista.insert(18))} 
        </p>
        `
    }
    else if(tipo == "Search"){
        codigo.innerHTML = `
        <p>
            <b class="azul">class</b> <b class="aqua">BinarySearchTree</b> { <br>
            &emsp; <b class="azul">constructor</b>(){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">root</b> = <b class="azul">null</b>  <br>
            &emsp; } <br>
        </p>

        <p>
            &emsp; <b class="golden">search</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">let</b> <b class="sky">nodoActual</b> = <b class="azul">this</b>.<b class="sky">root</b> <br><br>

            &emsp; &emsp; <b class="morado">while</b>(<b class="sky">value</b> != <b class="sky">nodoActual</b>.<b class="sky">value</b>){ <br>
            &emsp; &emsp; &emsp; <b class="morado">if</b>(<b class="sky">value</b> > <b class="sky">nodoActual</b>.<b class="sky">value</b>){ <br>
            &emsp; &emsp; &emsp; &emsp; <b class="sky">nodoActual</b> = <b class="sky">nodoActual</b>.<b class="sky">right</b> <br>
            &emsp; &emsp; &emsp; } <b class="morado">else</b> { <br>
            &emsp; &emsp; &emsp; &emsp; <b class="sky">nodoActual</b> = <b class="sky">nodoActual</b>.<b class="sky">left</b> <br>
            &emsp; &emsp; &emsp; } <br>
            &emsp; &emsp; &emsp; <b class="morado">if</b>(<b class="sky">nodoActual</b> == <b class="azul">null</b>) <b class="morado">return</b> <b class="sky">value</b> <br>
            &emsp; &emsp; } <br>
            &emsp; &emsp; <b class="morado">return</b> <b class="sky">nodoActual</b> <br>
            &emsp; } <br>
            }
        </p>    
        
        <b class="sky">lista</b>.<b class="golden">search(</b>
        <input id="input-tree-search" type="number" width="50px">
        <b class="golden">)</b>
        <button class="btn-consola" onclick="ejecutarbotonSearch()">Ejecutar</button>
        `
        consola.innerHTML = ''
    }
    else if(tipo == "Delete"){
        lista.insert(5) 
        lista.insert(3) 
        lista.insert(7)
        lista.insert(1)
        lista.insert(4) 
        lista.insert(6)
        lista.insert(9)
        lista.insert(2) 
        lista.insert(8)
        lista.insert(10)

        codigo.innerHTML = `
        <p>
            &emsp; <b class="golden">delete</b>(<b class="sky">value</b>){ <br>
            &emsp; &emsp; <b class="azul">let</b> <b class="sky">nodoActual</b> = <b class="azul">this</b>.<b class="sky">root</b> <br>
            &emsp; &emsp; <b class="azul">let</b> <b class="sky">parent</b> = <b class="azul">null</b> <br><br>

            &emsp; &emsp; <b class="morado">while</b>(<b class="sky">value</b> != <b class="sky">nodoActual</b>.<b class="sky">value</b>){ <br>
            &emsp; &emsp; &emsp; <b class="sky">parent</b> = <b class="sky">nodoActual</b> <br>
            &emsp; &emsp; &emsp; <b class="morado">if</b>(<b class="sky">value</b> > <b class="sky">nodoActual</b>.<b class="sky">value</b>)
            <b class="sky">nodoActual</b> = <b class="sky">nodoActual</b>.<b class="sky">right</b> <br>
            &emsp; &emsp; &emsp; <b class="morado">else</b>   
            <b class="sky">nodoActual</b> = <b class="sky">nodoActual</b>.<b class="sky">left</b> <br>
            &emsp; &emsp; &emsp; <b class="morado">if</b>(<b class="sky">nodoActual</b> == <b class="azul">null</b>) <b class="morado">return</b> '<b class="naranja">no se encontro:</b> $ {<b class="sky">value</b>}' <br>
            &emsp; &emsp; } <br>

            &emsp; &emsp; <b class="verde">//caso 1: nodo hoja</b> <br>
            &emsp; &emsp; <b class="morado">if</b>(!<b class="sky">nodoActual</b>.<b class="sky">left</b> && !<b class="sky">nodoActual</b>.<b class="sky">right</b>){ <br>
            &emsp; &emsp; &emsp; <b class="morado">if</b>(!<b class="sky">parent</b>) <b class="azul">this</b>.<b class="sky">root</b> = <b class="azul">null</b> <b class="verde">// si es la raiz</b> <br>
            &emsp; &emsp; &emsp; <b class="morado">else if</b> (<b class="sky">parent</b>.<b class="sky">left</b> === <b class="sky">nodoActual</b>) <b class="sky">parent</b>.<b class="sky">left</b> = <b class="azul">null</b> <br>
            &emsp; &emsp; &emsp; <b class="morado">else</b> <b class="sky">parent</b>.<b class="sky">right</b> = <b class="azul">null</b> <br>
            &emsp; &emsp; } <br>

            &emsp; &emsp; <b class="verde">//caso 2: un hijo</b> <br>
            &emsp; &emsp; <b class="morado">else if</b>(!<b class="sky">nodoActual</b>.<b class="sky">left</b> || !<b class="sky">nodoActual</b>.<b class="sky">right</b>){ <br>
            &emsp; &emsp; &emsp; <b class="azul">const</b> <b class="doger">child</b> = <b class="sky">nodoActual</b>.<b class="sky">left</b> || <b class="sky">nodoActual</b>.<b class="sky">right</b> <br>
            &emsp; &emsp; &emsp; <b class="morado">if</b>(<b class="sky">parent</b> == <b class="azul">null</b>) <b class="azul">this</b>.<b class="sky">root</b> = <b class="doger">child</b> <b class="verde">// si es la raiz</b>  <br>
            &emsp; &emsp; &emsp; <b class="morado">else if</b> (<b class="sky">parent</b>.<b class="sky">left</b> == <b class="sky">nodoActual</b>) <b class="sky">parent</b>.<b class="sky">left</b> = <b class="doger">child</b> <br>
            &emsp; &emsp; &emsp; <b class="morado">else</b> <b class="sky">parent</b>.<b class="sky">right</b> = <b class="doger">child</b> <br>
            &emsp; &emsp; } <br>

            &emsp; &emsp; <b class="verde">//caso 3: dos hijos </b><br>
            &emsp; &emsp; <b class="morado">else</b> { <br>
            &emsp; &emsp; &emsp; <b class="azul">let</b> <b class="sky">Parent</b> = <b class="sky">nodoActual</b> <br>
            &emsp; &emsp; &emsp; <b class="azul">let</b> <b class="sky">successor</b> = <b class="sky">nodoActual</b>.<b class="sky">right</b> <br>
            &emsp; &emsp; &emsp; <b class="morado">while</b>(<b class="sky">successor</b>.<b class="sky">left</b>){ <br>
            &emsp; &emsp; &emsp; &emsp; <b class="sky">Parent</b> = <b class="sky">successor</b> <br>
            &emsp; &emsp; &emsp; &emsp; <b class="sky">successor</b> = <b class="sky">successor</b>.<b class="sky">left</b> <br>
            &emsp; &emsp; &emsp; } <br><br>

            &emsp; &emsp; &emsp; <b class="sky">nodoActual</b>.<b class="sky">value</b> = <b class="sky">successor</b>.<b class="sky">value</b> <br>
            &emsp; &emsp; &emsp; <b class="morado">if</b>(<b class="sky">Parent</b>.<b class="sky">left</b> === <b class="sky">successor</b>)
            <b class="sky">Parent</b>.<b class="sky">left</b> = <b class="sky">successor</b>.<b class="sky">right</b> <br>
            &emsp; &emsp; &emsp; <b class="morado">else</b> 
            <b class="sky">Parent</b>.<b class="sky">right</b> = <b class="sky">successor</b>.<b class="sky">right</b> <br>
            &emsp; &emsp; } <br><br>

            &emsp; &emsp; <b class="morado">return</b> <b class="azul">this</b> <br>
            &emsp;} <br>
            }
        </p>
        `

        consola.innerHTML = `
        <p style="margin-top: 0">
            <b class="sky">lista</b> <br> ${JSON.stringify(lista)} <br><br>
            <b class="sky">lista</b>.<b class="golden">delete(<b class="verde">4</b>)</b> <br> ${JSON.stringify(lista.delete(4),null,2)} 
        </p>
        `
    }
}ejecutarTrees("Search")

function ejecutarbotonSearch(){
    const consola = document.getElementById("consola-tree")
    let valor = document.getElementById("input-tree-search").value

    class Node {
        constructor(value){
            this.value = value
            this.left = null
            this.right = null
        }
    }

    class BinarySearchTree {
        constructor(){
            this.root = null
        }
        insert(value){
            const newnode = new Node(value)
            if(this.root === null){
                this.root = newnode
                return this
            }

            let nodoActual = this.root
            while(true){
                if(value < nodoActual.value){
                    if(nodoActual.left === null){
                        nodoActual.left = newnode
                        return this
                    }
                    nodoActual = nodoActual.left
                } else {
                    if(nodoActual.right === null){
                        nodoActual.right = newnode
                        return this
                    }
                    nodoActual = nodoActual.right
                }
            }
        }
        search(value){
            let nodoActual = this.root

            let resumen = ''
            while(value != nodoActual.value){
                resumen += `<br><b class="morado">while</b>(${value} != ${nodoActual.value})`
                //es mayor?
                if(value > nodoActual.value){
                    if(nodoActual.right == null) return `${value} No se encontro`
                    resumen += `<br>if(${value} > ${nodoActual.value}) nodoactual = `
                    nodoActual = nodoActual.right
                    resumen += `${nodoActual.value}<br>`
                //es menor?
                } else {
                    if(nodoActual.left == null) return `${value} No se encontro`
                    resumen += `<br>if(${value} < ${nodoActual.value}) nodoactual = `
                    nodoActual = nodoActual.left
                    resumen += `${nodoActual.value}<br>`
                } 
            }
            return `${resumen} <br> <b class="morado">return</b> ${nodoActual.value}`
        }
    }

    let lista = new BinarySearchTree
    lista.insert(5) 
    lista.insert(3) 
    lista.insert(7)
    lista.insert(1)
    lista.insert(4) 
    lista.insert(6)
    lista.insert(9)
    lista.insert(2) 
    lista.insert(8)
    lista.insert(10)

    consola.innerHTML = `
    <p style="margin-top: 0">
        <b class="sky">lista</b> ${JSON.stringify(lista)}<br><br>
        ${lista.search(valor)} 
    </p>
    `
}

//Graphs
function ejecutarGraphs(tipo){
    const consola = document.getElementById("consola-graphs")
    const codigo = document.getElementById("codigo-graphs")

    class Graphs {
        constructor (){
            this.nodes = 0
            this.adyacentList = {}
        }
        addVertex(node){
            this.adyacentList[node] = []
            this.nodes ++
        }
        addEdge(node1,node2){
            this.adyacentList[node1].push(node2)
            this.adyacentList[node2].push(node1)
        }
    }

    const myGraph = new Graphs()

    codigo.innerHTML = `
    <p style="margin-top: 0;">
        <b class="azul">class</b> <b class="aqua">Graphs</b> { <br>
        &emsp; <b class="azul">constructor</b> (){ <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">nodes</b> = 0 <br>
        &emsp; &emsp; <b class="azul">this</b>.<b class="sky">adyacentList</b> = {} <br>
        &emsp; } <br>
        } <br> <br>
    </p>
    <p>
        <b class="azul">const</b> <b class="doger">myGraph</b> = <b class="azul">new</b> <b class="aqua">Graphs</b>()
    </p>
    `
    consola.innerHTML = `
    <p style="margin-top:0">
        <b class="doger">myGraph</b> ${JSON.stringify(myGraph)}
    </p>
    `

    if(tipo == "Nodos"){
        myGraph.addVertex("1")
        myGraph.addVertex("3")
        myGraph.addVertex("4")
        myGraph.addVertex("5")
        myGraph.addVertex("6")
        myGraph.addVertex("8")

        codigo.innerHTML = `
        <p style="margin-top: 0;">
            <b class="azul">class</b> <b class="aqua">Graphs</b> { <br>
            &emsp; <b class="azul">constructor</b> (){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">nodes</b> = 0 <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">adyacentList</b> = {} <br>
            &emsp; } <br>
        </p>
        <p>
            &emsp; <b class="golden">addVertex</b>(<b class="sky">node</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">adyacentList</b>[<b class="sky">node</b>] = [] <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">nodes</b> ++ <br>
            &emsp; } <br>
        </p>
        <p>
            &emsp; <b class="golden">addEdge</b>(<b class="sky">node1</b>,<b class="sky">node2</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">adyacentList</b>[<b class="sky">node1</b>].<b class="golden">push</b>(<b class="sky">node2</b>) <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">adyacentList</b>[<b class="sky">node2</b>].<b class="golden">push</b>(<b class="sky">node1</b>) <br>
            &emsp; } <br>
            }
        </p>
        <p>
            <b>representar grafo:</b>
            <figure>
                <img src="./imagenes/Captura de pantalla 2026-01-05 120407.png" alt="grafo" width="300px">
            </figure>
        </p>
        `
        consola.innerHTML = `
        <p style="margin-top:0">
            <b class="doger">myGraph</b>.<b class="golden">addVertex(<b class="naranja">"1"</b>)</b> <br>
            <b class="doger">myGraph</b>.<b class="golden">addVertex(<b class="naranja">"3"</b>)</b> <br>
            <b class="doger">myGraph</b>.<b class="golden">addVertex(<b class="naranja">"4"</b>)</b> <br>
            <b class="doger">myGraph</b>.<b class="golden">addVertex(<b class="naranja">"5"</b>)</b> <br>
            <b class="doger">myGraph</b>.<b class="golden">addVertex(<b class="naranja">"6"</b>)</b> <br>
            <b class="doger">myGraph</b>.<b class="golden">addVertex(<b class="naranja">"8"</b>)</b> <br><br>
            
            <b class="doger">myGraph</b> ${JSON.stringify(myGraph)}
        </p>
        `
    }
    else if(tipo == "Enlaces"){
        myGraph.addVertex("1")
        myGraph.addVertex("3")
        myGraph.addVertex("4")
        myGraph.addVertex("5")
        myGraph.addVertex("6")
        myGraph.addVertex("8")

        myGraph.addEdge("3","5")
        myGraph.addEdge("6","3")
        myGraph.addEdge("1","6")
        myGraph.addEdge("1","3")
        myGraph.addEdge("1","4")
        myGraph.addEdge("4","5")
        myGraph.addEdge("8","4")

        codigo.innerHTML = `
        <p style="margin-top: 0;">
            <b class="azul">class</b> <b class="aqua">Graphs</b> { <br>
            &emsp; <b class="azul">constructor</b> (){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">nodes</b> = 0 <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">adyacentList</b> = {} <br>
            &emsp; } <br>
        </p>
        <p>
            &emsp; <b class="golden">addVertex</b>(<b class="sky">node</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">adyacentList</b>[<b class="sky">node</b>] = [] <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">nodes</b> ++ <br>
            &emsp; } <br>
        </p>
        <p>
            &emsp; <b class="golden">addEdge</b>(<b class="sky">node1</b>,<b class="sky">node2</b>){ <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">adyacentList</b>[<b class="sky">node1</b>].<b class="golden">push</b>(<b class="sky">node2</b>) <br>
            &emsp; &emsp; <b class="azul">this</b>.<b class="sky">adyacentList</b>[<b class="sky">node2</b>].<b class="golden">push</b>(<b class="sky">node1</b>) <br>
            &emsp; } <br>
            }
        </p>
        <p>
            <b>representar grafo:</b>
            <figure>
                <img src="./imagenes/Captura de pantalla 2026-01-05 120407.png" alt="grafo" width="300px">
            </figure>
        </p>
        `

        consola.innerHTML = `
        <p style="margin-top:0">
            <b class="doger">myGraph</b>.<b class="golden">addEdge(</b><b class="naranja">"3"</b>,<b class="naranja">"5"</b><b class="golden">)</b> <br>
            <b class="doger">myGraph</b>.<b class="golden">addEdge(</b><b class="naranja">"6"</b>,<b class="naranja">"3"</b><b class="golden">)</b> <br>
            <b class="doger">myGraph</b>.<b class="golden">addEdge(</b><b class="naranja">"1"</b>,<b class="naranja">"6"</b><b class="golden">)</b> <br>
            <b class="doger">myGraph</b>.<b class="golden">addEdge(</b><b class="naranja">"1"</b>,<b class="naranja">"3"</b><b class="golden">)</b> <br>
            <b class="doger">myGraph</b>.<b class="golden">addEdge(</b><b class="naranja">"1"</b>,<b class="naranja">"4"</b><b class="golden">)</b> <br>
            <b class="doger">myGraph</b>.<b class="golden">addEdge(</b><b class="naranja">"4"</b>,<b class="naranja">"5"</b><b class="golden">)</b> <br>
            <b class="doger">myGraph</b>.<b class="golden">addEdge(</b><b class="naranja">"8"</b>,<b class="naranja">"4"</b><b class="golden">)</b> <br><br>
            
            <b class="doger">myGraph</b><br> ${JSON.stringify(myGraph)}
        </p>
        `
    }
}ejecutarGraphs('Enlaces')


function ejecutarObjetosGlobales(){
    const consola = document.getElementById("consola-ObjetosGlobales")

    let numero = 0
    let intervalo = setInterval(function() {
        if(numero === 20){
            clearInterval(intervalo)
        }
        consola.innerHTML += ` ${numero}`
        numero ++
    },400)


    setTimeout(function(){
        consola.innerHTML += `<p>Separar</p>`
    },4500)    
}

/////////////////////// EXPORTAR MODULOS //////////////////////////

function ejecutarExport(tipo) {
    const consola = document.getElementById("consola-export")
    const codigo = document.getElementById("codigo-export")

    codigo.innerHTML = `
    <p style="margin-top: 0;">
        <b class="verde">Antes de declarar</b> <br>
        <b class="morado">export</b> <b class="azul">const</b>
        <b class="golden">add</b> = (x,y) => { <br>
        &emsp; return x + y <br>
        } 
    </p>

    <p>
        <b class="verde">Primero declarar y exportar entre llaves</b> <br>
        <b class="azul">const</b> <b class="golden">add</b> = (x,y) => { <br>
        &emsp; <b class="morado">return</b> x + y <br>
        } <br><br>

        <b class="morado">export</b> { <b class="golden">add</b>, <b class="golden">otherFunction</b>, ... }
    </p>

    <p>
        <b class="verde">Exportar por defecto</b> <br>
        <b class="morado">export</b> <b class="morado">default</b>
        <b class="azul">function</b> <b class="golden">add</b> (x,y){ <br>
        &emsp; <b class="morado">return</b> x + y; <br>
        }
    </p>
    `

    if(tipo == "import"){
        codigo.innerHTML = `
        <p style="margin-top: 0;">
            <b class="morado">import</b> { <b class="golden">add</b>, <b class="golden">otherFunction</b> } 
            <b class="morado">from</b> './math_functions.js' <br>
            <b class="golden">add</b>(2,2)
        </p>

        <p>
            <b class="verde">Importar todo</b> <br>
            <b class="morado">import</b> <b class="azul">*</b> 
            <b class="morado">as</b> <b class="sky">myMathModule</b> 
            <b class="morado">from</b> './math_functions.js'; <br><br>

            <b class="sky">myMathModule</b>.<b class="golden">add</b>(2,2) <br>
            <b class="sky">myMathModule</b>.<b class="golden">otherFunction</b>()
        </p>

        <p>
            <b class="verde">Importar por defecto</b> <br>
            <b class="morado">import</b> <b class="golden">add</b>  
            <b class="morado">from</b> './math_functions.js'
        </p>
        `
    }  
}

// const users = {
//     david: {country: 'MX'},
//     sharon: {country: 'VE'},
//     adriana: {country: 'CO'},
// }

// console.log(users.jireh?.age)
// console.log("Hola")
