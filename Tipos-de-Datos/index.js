"use strict";

//MOSTRAR Y OCULTAR BLOQUES
const temas = [
  //HOME
  "Home",
  //datosPrimitivos
  "explicacion-strings",
  "explicacion-number",
  //ARRAYS
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
  "explicaciom-funcionConstructora",
  "explicacion-clases",
  //Detalles
  "detalle-json",
  //DOM
  "mostrar-HTMLCollection",
  "mostrar-NodeList",
  "explicacion-addEventListener",
  //TABLAS
  "tabla-tiposdeNodos",
  "tabla-propiedadesDom",
  "mostrar-tabalaComparativa-HTMLCollectionVsNodeList",
  "tablas-eventos",
  "tabla-propiedadesDeeventoClick",
  "tabla-comparacion-arrayVSlistaEnlazada",
  "tabla-response",
];

function mostrarExplicacion(tipo) {
  for (let i = 0; i < temas.length; i++) {
    if (temas[i] == tipo) {
      const bloque = document.getElementById(temas[i]);
      bloque.style.display = bloque.style.display == "none" ? "block" : "none";
    }
  }

  const nextExample = document.getElementById("lista-reduce-uno");
  const nextExample2 = document.getElementById("lista-reduce-dos");

  if (tipo == "explicacion-dos") {
    nextExample.style.display = "none";
    nextExample2.style.display = "block";
  } else if (tipo == "explicacion-uno") {
    nextExample.style.display = "block";
    nextExample2.style.display = "none";
  }
}

///////STRINGS
function ejecutarString() {
  let nombre = document.getElementById("nombre").value;
  let edad = document.getElementById("edad").value;

  const consola = document.getElementById("consola1");
  const consola2 = document.getElementById("consola2");

  if (nombre == "" || edad == "") {
    consola.textContent = "⚠️ Completa todos los campos!";
    return;
  }

  consola2.textContent = "Hola soy " + nombre + " y tengo " + edad + " años";
  consola.textContent = `Hola soy ${nombre} y tengo ${edad} años`;
}

//metodos de los string
function metodosStrings() {
  let frase = document.getElementById("frase").value;
  let palabra = "Genial";

  const consola = document.getElementById("consolaStrings");
  const consola2 = document.getElementById("consolaStrings2");
  const consola3 = document.getElementById("consolaStrings3");
  const consola4 = document.getElementById("consolaStrings4");
  const consola5 = document.getElementById("consolaStrings5");
  const consola6 = document.getElementById("consolaStrings6");
  const consola7 = document.getElementById("consolaStrings7");
  const consola8 = document.getElementById("consolaStrings8");
  const consola9 = document.getElementById("consolaStrings9");

  if (frase == "") {
    consola.textContent = "⚠️ Por favor, Escriba una frase.";
    return;
  }

  consola.innerHTML = `
    ${frase.length} <br>
    ${frase.padStart(25, " _")} <br>
    ${frase.padEnd(25, " *")}
    `;
  consola2.textContent = frase.toUpperCase();
  consola3.textContent = frase.toLowerCase();
  consola4.textContent = frase.substring(0, 10);
  consola5.textContent = frase.charAt(7) + " " + frase[8];
  consola6.textContent = frase.charCodeAt(10);
  consola7.textContent = frase.concat(" " + palabra);
  consola8.textContent = frase.match("mejor");
  consola9.textContent = frase.replace("mejor", "actual");
}

/////// NUMEROS
let resultado;
let tipodeOperacion;

function operaciones(tipo) {
  const operacion = document.querySelectorAll(".operacion");
  const operador = document.getElementById("operador");
  const consola = document.getElementById("consola3");
  const metodo = document.getElementById("metodo-number");

  let numero1 = parseInt(document.getElementById("numero1").value);
  let numero2 = parseInt(document.getElementById("numero2").value);

  if (numero1 == "" && numero2 == "") {
    consola.textContent = "⚠️ Rellena los campos";
    return;
  }

  if (tipo == "suma") {
    operacion.forEach((variable) => {
      variable.textContent = "suma";
    });
    operador.textContent = "+";
    resultado = numero1 + numero2;
    consola.textContent = resultado;
  } else if (tipo == "resta") {
    operacion.forEach((variable) => {
      variable.textContent = "resta";
    });
    operador.textContent = "-";
    resultado = numero1 - numero2;
    consola.textContent = resultado;
  } else if (tipo == "multiplicacion") {
    operacion.forEach((variable) => {
      variable.textContent = "multiplicacion";
    });
    operador.textContent = "*";
    resultado = numero1 * numero2;
    consola.textContent = resultado;
  } else if (tipo == "divicion") {
    operacion.forEach((variable) => {
      variable.textContent = "divicion";
    });
    operador.textContent = "/";
    resultado = numero1 / numero2;
    consola.textContent = resultado;
  } else if (tipo == "modulo") {
    operacion.forEach((variable) => {
      variable.textContent = "modulo";
    });
    operador.textContent = "%";
    resultado = numero1 % numero2;
    consola.textContent = resultado;
  } else if (tipo == "exponente") {
    operacion.forEach((variable) => {
      variable.textContent = "exponente";
    });
    operador.textContent = "**";
    resultado = numero1 ** numero2;
    consola.textContent = resultado;
  } else if (tipo == "toFixed") {
    metodo.innerHTML = `.<b class="golden">toFixed(<b class="verde">2</b>)</b>`;
    consola.textContent = resultado.toFixed(2);
  }

  tipodeOperacion = tipo;
}

function propiedades(tipo) {
  const operacion2 = document.querySelector(".operacion2");
  const consola = document.getElementById("consola3");

  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;

  if (numero1 == "" || numero2 == "") {
    consola.textContent = "⚠️ Rellena los campos";
    return;
  }

  if (tipo == "Math.sqrt") {
    operacion2.innerHTML = `<span class="sky">Math</span>.<span class="golden">sqrt</span><span class="morado">(<span class="sky">${tipodeOperacion}</span>)</span>`;
    consola.textContent = Math.sqrt(resultado);
  } else if (tipo == "Math.random") {
    operacion2.innerHTML = `<span class="sky">Math</span>.<span class="golden">random</span><span class="morado">()</span>`;
    consola.textContent = Math.random();
  } else if (tipo == "Math.abs") {
    operacion2.innerHTML = `<span class="sky">Math</span>.<span class="golden">abs</span><span class="morado">(<span class="sky">${tipodeOperacion}</span>)</span>`;
    consola.textContent = Math.abs(resultado);
  } else if (tipo == "Math.max") {
    operacion2.innerHTML = `<span class="sky">Math</span>.<span class="golden">max</span><span class="morado">(<span class="sky">${numero1},${numero2}</span>)</span>`;
    consola.textContent = Math.max(numero1, numero2);
  } else if (tipo == "Math.min") {
    operacion2.innerHTML = `<span class="sky">Math</span>.<span class="golden">min</span><span class="morado">(<span class="sky">${numero1},${numero2}</span>)</span>`;
    consola.textContent = Math.min(numero1, numero2);
  } else if (tipo == "Math.round") {
    operacion2.innerHTML = `<span class="sky">Math</span>.<span class="golden">round</span><span class="morado">(<span class="sky">${tipodeOperacion}</span>)</span>`;
    consola.textContent = Math.round(resultado);
  } else if (tipo == "Math.floor") {
    operacion2.innerHTML = `<span class="sky">Math</span>.<span class="golden">floor</span><span class="morado">(<span class="sky">${tipodeOperacion}</span>)</span>`;
    consola.textContent = Math.floor(resultado);
  } else if (tipo == "Math.ceil") {
    operacion2.innerHTML = `<span class="sky">Math</span>.<span class="golden">ceil</span><span class="morado">(<span class="sky">${tipodeOperacion}</span>)</span>`;
    consola.textContent = Math.ceil(resultado);
  } else if (tipo == "Math.pow") {
    operacion2.innerHTML = `<span class="sky">Math</span>.<span class="golden">pow</span><span class="morado">(<span class="sky">${numero1},${numero2}</span>)</span>`;
    consola.textContent = Math.pow(numero1, numero2);
  } else if (tipo == "Math.PI") {
    operacion2.innerHTML = `<span class="sky">Math</span>.<span class="golden">PI</span><span class="morado">()</span>`;
    consola.textContent = Math.PI;
  }
}

function numeroAleatorio() {
  const consola = document.getElementById("consola3");
  consola.textContent = Math.floor(Math.random() * 10 + 1);
}

function EjecutarparseInt() {
  const consola = document.getElementById("consola-parseInt");
  const consola2 = document.getElementById("consola-parseInt2");
  const consola3 = document.getElementById("consola-parseInt3");

  let string = "12";
  let string2 = "20.5";
  let string3 = "110010";

  let numero = parseInt(string);
  let decimal = parseFloat(string2);
  let binario = parseInt(string3, 2);

  consola.innerHTML = `${numero} <span class="letra-B">${typeof numero}</spam> <br>`;
  consola2.innerHTML = `${decimal} <span class="letra-B">${typeof decimal}</spam> <br>`;
  consola3.innerHTML = `${binario} <span class="letra-B">${typeof binario}</spam> <br>`;
}
EjecutarparseInt();

//TECLADO
// Detectar qué input está activo
const inputs = document.querySelectorAll(".inputs");
let inputActivo;

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    inputActivo = input; // guardamos el que recibió el foco
    teclas();
  });
});

function teclas(tecla) {
  const consola = document.getElementById("consola3");
  let numero1 = document.getElementById("numero1");
  let numero2 = document.getElementById("numero2");

  if (tecla == "uno") {
    inputActivo.value += 1;
  }
  if (tecla == "dos") {
    inputActivo.value += 2;
  }
  if (tecla == "tres") {
    inputActivo.value += 3;
  }
  if (tecla == "cuatro") {
    inputActivo.value += 4;
  }
  if (tecla == "cinco") {
    inputActivo.value += 5;
  }
  if (tecla == "seis") {
    inputActivo.value += 6;
  }
  if (tecla == "siete") {
    inputActivo.value += 7;
  }
  if (tecla == "ocho") {
    inputActivo.value += 8;
  }
  if (tecla == "nueve") {
    inputActivo.value += 9;
  }
  if (tecla == "cero") {
    inputActivo.value += 0;
  }
  if (tecla == "punto") {
    inputActivo.value += ".";
  }
  if (tecla == "clear") {
    numero1.value = "";
    numero2.value = "";
    consola.textContent = "";
  }
}

function PropiedadesMath() {
  const tabla = document.getElementById("propiedades-metodos");
  tabla.style.display = tabla.style.display == "none" ? "block" : "none";
}

//              BIGINT
function ejecutarBigInt() {
  const consola = document.getElementById("consola-bigInt");

  const max = Number.MAX_SAFE_INTEGER;
  const min = Number.MIN_SAFE_INTEGER;

  const number1 = 45n;
  const number2 = BigInt(45);

  // operacion
  const increment = 2;
  const operacion = max + increment;
  const operacionBig = BigInt(max) + BigInt(increment);

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
    `;
}
ejecutarBigInt();

//                ARRAYS
function ejecutarArrays(tipo) {
  const consola = document.getElementById("consola-array");

  // sintaxis antigua
  let frutas = new Array("manzana", "banano", "uvas");
  let verduras = Array("zanahoria", "papa", "yuca");
  let vacio = Array(5);

  // sintaxis nueva
  let colores = ["azul", "amarillo", "rojo", "negro"];
  let multiple = ["auto", 12, true, { telefono: "Sansung" }];
  let vacio2 = [];

  if (tipo == "accederElementos") {
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
            ${colores[colores.length - 1]} <br>

            <b class="sky">colores</b>.<b class="golden">at(</b>-<b class="verde">1</b><b class="golden">)</b> 
            ${colores.at(-1)}
        </p>

        <b class="verde">//obtener valor, modificarlo y mostrarlo</b><br>
        <b class="sky">verduras</b><b class="golden">[<b class="verde">2</b>]</b> ${verduras[2]}<br>
        <b class="sky">verduras</b><b class="golden">[<b class="verde">2</b>]</b> = <b class="naranja">"piña"</b> ${(verduras[2] = "piña")}<br>
        <b class="sky">verduras</b> ${verduras}<br><br>
        `;
  } else if (tipo == "longitudYcomprobar") {
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
        `;
  }
}
ejecutarArrays("accederElementos");

//mutables
const paises = ["venezuela", "colombia", "peru"];
function ejecutarmutables(tipo) {
  const consola = document.getElementById("consola-mutable");
  const codigo = document.getElementById("codigo-mutable");

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
    `;
  consola.innerHTML = `
    <b class="doger">paises</b> <br> ${paises}<br>
    `;

  if (tipo == "push") {
    let longitud = paises.push("usa", "canada");

    consola.innerHTML = `
        <b class="doger">paises</b> ${paises}<br><br>
        <b class="doger">paises</b>.<b class="golden">push()</b> ${longitud} <br>
        `;
  } else if (tipo == "pop") {
    let elemento = paises.pop();

    consola.innerHTML = `
        <b class="doger">paises</b> ${paises}<br><br>
        <b class="doger">paises</b>.<b class="golden">pop()</b> ${elemento} <br>
        `;
  } else if (tipo == "unshift") {
    let elemento = paises.unshift("mexico");

    consola.innerHTML = `
        <b class="doger">paises</b> ${paises}<br><br>
        <b class="doger">paises</b>.<b class="golden">unshift()</b> ${elemento} <br>
        `;
  } else if (tipo == "shift") {
    let elemento = paises.shift();

    consola.innerHTML = `
        <b class="doger">paises</b> ${paises}<br><br>
        <b class="doger">paises</b>.<b class="golden">unshift()</b> ${elemento} <br>
        `;
  } else if (tipo == "sort") {
    const letras = ["x", "h", "a", "o", "l", "p", "b", "d", "z"];
    const nombres = ["xoimara", "samuel", "adriana", "omar"];
    let elemento = letras.sort();
    let elemento2 = nombres.sort();

    codigo.innerHTML = `
        <p style="margin-top: 0">
            <b class="azul">const</b> <b class="doger">letras</b> = 
            <b class="azul">[<b class="naranja">"x","h","a","o","l","p","b","d","z"</b>]</b> <br> <br>

            <b class="azul">const</b> <b class="doger">nombres</b> = 
            <b class="azul">[<b class="naranja">"xiomara","samuel","adriana","omar"</b>]</b> 
        </p>
        `;

    consola.innerHTML = `
        <p style="margin-top: 0">
            <b class="doger">letras</b>.<b class="golden">sort()</b><br> ${elemento} <br><br>
            <b class="doger">nombres</b>.<b class="golden">sort()</b><br> ${elemento2} 
        </p>
        `;
  }

  //splice
  if (tipo == "splice") {
    const paises = ["venezuela", "colombia", "peru"];

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
        `;

    consola.innerHTML = `
        <b class="doger">paises</b> ${paises}
        `;
  } else if (tipo == "splice1") {
    const paises = ["venezuela", "colombia", "peru"];
    let elemento = paises.splice(1, 0, "ecuador");

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
        `;
    consola.innerHTML = `
        <b class="doger">paises</b> ${paises}

        <p>
            <b class="verde">//Añadir en indice 1</b> <br>
            <b class="doger">paises</b>.<b class="golden">splice()</b> ${elemento} <br>
            <b class="doger">paises</b>.<b class="golden">[<b class="verde">1</b>]</b> ${paises[1]} <br>
        </p>
        `;
  } else if (tipo == "splice2") {
    const paises = ["venezuela", "colombia", "peru"];
    let elemento = paises.splice(1, 2, "ecuador", "brasil");

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
        `;
    consola.innerHTML = `
        <b class="doger">paises</b> ${paises}

        <p>
            <b class="verde">//reemplazar a partir del indice 1, dos elementos</b> <br>
            <b class="doger">paises</b>.<b class="golden">splice()</b> ${elemento} <br>
            <b class="doger">paises</b>.<b class="golden">[<b class="verde">2</b>]</b> ${paises[2]} <br>
        </p>
        `;
  } else if (tipo == "splice3") {
    const paises = ["venezuela", "colombia", "peru"];
    let elemento = paises.splice(2, 1);

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
        `;
    consola.innerHTML = `
        <b class="doger">paises</b> ${paises}

        <p>
            <b class="verde">//Eliminar indice 2</b> <br>
            <b class="doger">paises</b>.<b class="golden">splice()</b> ${elemento} <br>
            <b class="doger">paises</b>.<b class="golden">[<b class="verde">2</b>]</b> ${paises[2]} <br>
        </p>
        `;
  }
}
ejecutarmutables("sort");

//      INMUTABLES

const animales = ["Dog", "Cat", "Duck", "Elephant", "Mouse", "Camell"];
const palabras = [
  "Guitarra",
  "Pua",
  "Cuerda",
  "Cable",
  "Guitarra",
  "Cable",
  "Microfono",
  "Guitarra",
  "Pua",
  "Cuerda",
  "Cable",
  "Guitarra",
];
const ciudades = ["Merida", "Caracas", "Falcon"];
const multiplos = [1, 2, 3, 4, 5];
const multiplosDecinco = [5, 10, 15, 20, 25];
const clientes = [
  { name: "Andres", producto: "iphone", precio: 1200 },
  { name: "Camilo", producto: "audifonos", precio: 120 },
  { name: "Rodrigo", producto: "cargador", precio: 50 },
  { name: "David", producto: "funda", precio: 80 },
];

function ejecutarinmutables(metodo) {
  if (metodo == "concat") {
    const consola = document.getElementById("consola-concat");
    let nuevo = ciudades.concat("Tachira", "Margarita");
    let paisYciudad = ciudades.concat(paises);

    consola.innerHTML = `
        <b class="sky">nuevo</b><br> ${nuevo} <br><br>
        <b class="sky">paisYciudad</b> ${paisYciudad} <br>
        `;
  }
  if (metodo == "map") {
    const consola = document.getElementById("consola-map");

    //sintaxis 1
    let elevar1 = multiplos.map(function (numero, index) {
      return `indice:${index}: ${numero * numero}<br>`;
    });

    //sintaxis 2
    let elevar2 = multiplos.map((num) => num * num);

    consola.innerHTML = `
        <b class="sky">elevar1</b><br>
        [${elevar1}] <br> 
        <b class="sky">elevar2</b><br>
        [${elevar2}]`;
  } else if (metodo == "forEach") {
    const consola = document.getElementById("consola-forEach");
    let suma = 0;
    let sumados = 0;
    let proceso = "";

    multiplos.forEach((num) => (suma += num));

    multiplos.forEach(function (a, b, c) {
      proceso += `<hr> lista: ${c}; iteracion: ${b}; numero: ${a} + ${sumados} es igual ${sumados + a}`;
      sumados += a;
    });

    consola.innerHTML = `${suma} ${proceso}`;
  }
  //Filter
  else if (metodo == "filtrar-numeros") {
    const consola = document.getElementById("consola-filter");
    const codigo = document.getElementById("codigo-filter");

    //filtrar numeros pares
    let filtrarPares = multiplos.filter((num) => num % 2 == 0);

    //filtrar numeros impares
    let filtrarImpares = multiplos.filter(function (num) {
      return num % 2 == 1;
    });

    //filtrar mayores a 5
    let filtrarmayoresa5 = [];
    for (let i = 0; i < multiplos.length; i++) {
      if (multiplos[i] > 5) {
        filtrarmayoresa5.push(multiplos[i]);
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
        `;

    consola.innerHTML = `
        <b class="sky">filtrarPares</b> [<b class="verde">${filtrarPares}</b>] <br><br>
        <b class="sky">filtrarImpares</b> [<b class="verde">${filtrarImpares}</b>] <br><br>
        <b class="sky">filtrarmayoresa5</b> [<b class="verde">${filtrarmayoresa5}</b>] <br>
        `;
  } else if (metodo == "filtrar-palabras") {
    const consola = document.getElementById("consola-filter");
    const codigo = document.getElementById("codigo-filter");

    //filtrar palabras con menos de 5 letras
    let tresletras = animales.filter((palabra) => palabra.length < 4);

    let cuatroletras = animales.filter(function (palabra) {
      return palabra.length == 4;
    });

    let masdecinco = [];
    for (let i = 0; i < animales.length; i++) {
      if (animales[i].length > 5) {
        masdecinco.push(animales[i]);
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
        `;

    consola.innerHTML = `
        <b class="sky">tresletras</b> [<b class="naranja">${tresletras}</b>] <br><br>
        <b class="sky">cuatroletras</b> [<b class="naranja">${cuatroletras}</b>] <br><br>
        <b class="sky">masdecinco</b> [<b class="naranja">${masdecinco}</b>] <br>
        `;
  } else if (metodo == "filtrar-objetos") {
    const consola = document.getElementById("consola-filter");
    const codigo = document.getElementById("codigo-filter");

    //filtrar palabras con menos de 5 letras
    let menorPrecio = clientes.filter((item) => item.precio < 100);

    let mayorPrecio = clientes.filter(function (item) {
      return item.precio > 100;
    });

    let clientesPremium = [];
    for (let i = 0; i < clientes.length; i++) {
      if (clientes[i].premium) {
        clientesPremium.push(clientes[i]);
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
        `;

    consola.innerHTML = `
        <b class="sky">menorPrecio</b><br> <b class="naranja" style="font-size: 0.9rem">${JSON.stringify(menorPrecio)}</b><br><br>
        <b class="sky">mayorPrecio</b><BR> <b class="naranja" style="font-size: 0.9rem">${JSON.stringify(mayorPrecio)}</b> <br><br>
        <b class="sky">clientesPremium</b> <b class="naranja" style="font-size: 0.9rem">${JSON.stringify(clientesPremium)}</b> <br>
        `;
  }

  //reduce
  else if (metodo == "reducir-numeros") {
    const consola = document.getElementById("consola-reduce");
    const codigo = document.getElementById("codigo-reduce");

    //metodo reduce
    let reducir = multiplos.reduce(
      (acumulador, valoractual) => acumulador + valoractual,
      0,
    );

    //funcion tradicional
    let suma = 0;
    for (let i = 0; i < multiplos.length; i++) {
      suma += multiplos[i];
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
        `;

    consola.innerHTML = `
        <b class="sky">reducir</b>  ${reducir}<br>
        <b class="sky">suma</b>  ${suma}<br>
       
        `;
  } else if (metodo == "reducir-palabras") {
    const consola = document.getElementById("consola-reduce");
    const codigo = document.getElementById("codigo-reduce");

    let frecuencia = palabras.reduce((acumulador, valorActual) => {
      if (acumulador[valorActual]) {
        acumulador[valorActual]++;
      } else {
        acumulador[valorActual] = 1;
      }
      return acumulador;
    }, {});

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
        `;

    consola.innerHTML = `
        <b class="sky">frecuencia</b>
        ${JSON.stringify(frecuencia, null, 2)}
        `;
  } else if (metodo == "Transformar-Reducir") {
    const consola = document.getElementById("consola-reduce");
    const codigo = document.getElementById("codigo-reduce");

    let transformar = clientes.map((item) => item.premium);
    let frecuencia = transformar.reduce((acumulador, valorActual) => {
      if (acumulador[valorActual]) {
        acumulador[valorActual]++;
      } else {
        acumulador[valorActual] = 1;
      }
      return acumulador;
    }, {});

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
        `;

    consola.innerHTML = `
        <b class="doger">transformar</b>
        ${transformar}<br><br>
        <b class="sky">frecuencia</b>
        ${JSON.stringify(frecuencia, null, 2)}
        `;
  } else if (metodo == "Reducir-rangos") {
    const consola = document.getElementById("consola-reduce");
    const codigo = document.getElementById("codigo-reduce");

    let frecuencia = multiplos.reduce(
      (acumulador, valorActual) => {
        if (valorActual < 6) {
          acumulador["1-5"] += 1;
        } else if (valorActual > 5 && valorActual < 9) {
          acumulador["6-8"] += 1;
        } else {
          acumulador["9-10"] += 1;
        }
        return acumulador;
      },
      { "1-5": 0, "6-8": 0, "9-10": 0 },
    );

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
        `;

    consola.innerHTML = `
        <b class="sky">frecuencia</b>
        ${JSON.stringify(frecuencia)}
        `;
  }

  //find and findIndex
  else if (metodo == "find") {
    const consola = document.getElementById("consola-find");

    let encontrar = multiplosDecinco.find((num) => num > 10);
    let encontrarIndice = multiplosDecinco.findIndex((num) => num == 20);

    let respuesta;
    for (let i = 0; i < multiplosDecinco.length; i++) {
      if (multiplosDecinco[i] > 12) {
        respuesta = multiplosDecinco[i];
        break;
      }
    }

    consola.innerHTML = `
        <b class="verde">//Encontrar numero mayor a 10</b><br>
        <b class="sky">encontrar</b> ${encontrar}<br><br>

        <b class="verde">//Encontrar numero 20</b><br>
        <b class="sky">encontrarIndice</b> ${encontrarIndice}<br><br>

        <b class="verde">//Encontrar numero mayor a 12</b><br>
        <b class="sky">respuesta</b> ${respuesta}<br>
        `;
  } else if (metodo == "slice") {
    const consola = document.getElementById("consola-slice");
    const consola2 = document.getElementById("consola-slice2");
    let extraer = animales.slice(1, 4);
    let ultimostres = animales.slice(-3);
    consola.textContent = extraer;
    consola2.textContent = ultimostres;
  }

  //join
  else if (metodo == "join") {
    const codigo = document.getElementById("codigo-join");
    const consola = document.getElementById("consola-join");

    let separar = animales.join();
    let juntar = animales.join("");
    let espacios = animales.join(" ");
    let rayas = animales.join("-");
    let letras = animales.join(" x ");

    let resultado = "";
    for (let i = 0; i < animales.length; i++) {
      if (i == animales.length - 1) {
        resultado += animales[i];
      } else {
        resultado += animales[i] + "-";
      }
    }

    let Revertir = espacios.split(" ");

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
        `;
  }

  //flat
  else if (metodo == "flat") {
    const codigo = document.getElementById("consola-flat");
    const consola = document.getElementById("consola-flat");

    const matriz = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const matriz2 = [
      [1, 2, 3],
      [4, [5, 6]],
      [7, [8, 9]],
    ];
    const matriz3 = [
      [1, 2, 3],
      [4, [5, 6]],
      [7, [8, [9]]],
    ];

    const dimension = matriz.flat();
    const dimension2 = matriz2.flat(2);
    const dimension3 = matriz3.flat(3);

    const arrayfor = [];
    for (let i = 0; i < matriz3.length; i++) {
      let array = matriz3[i];
      for (let j = 0; j < array.length; j++) {
        let element = array[j];
        arrayfor.push(element);
      }
    }

    function aplanar(lista) {
      let newlist = [];
      if (typeof lista != "object") {
        return [lista];
      }

      lista.forEach((element) => {
        newlist = newlist.concat(aplanar(element));
      });
      return newlist;
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
        `;
  }

  //some , every , includes
  if (metodo == "some") {
    const consola = document.getElementById("consola-some");
    const codigo = document.getElementById("codigo-some");

    //saber si hay numero par
    let respuesta1 = multiplos.some((num) => num % 2 == 0);

    //saber si hay numero impar
    let respuesta2 = multiplos.some(function (num) {
      return num % 2 == 1;
    });

    //saber si hay numero mayor a 5
    let respuesta3;
    for (let i = 0; i < multiplos.length; i++) {
      if (multiplos[i] > 5) {
        respuesta3 = true;
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
        `;

    consola.innerHTML = `
        <b class="sky">respuesta1</b> <b class="verde">${respuesta1}</b> <br><br>
        <b class="sky">respuesta2</b> <b class="verde">${respuesta2}</b> <br><br>
        <b class="sky">respuesta3</b> <b class="verde">${respuesta3}</b> <br>
        `;
  } else if (metodo == "every") {
    const consola = document.getElementById("consola-some");
    const codigo = document.getElementById("codigo-some");
    const multiplos = [1, 2, 3, 4, 5, 6, 7, 8];

    //saber si los numeros son pares
    let respuesta1 = multiplos.every((num) => num % 2 == 0);

    //saber si los numeros son menores a 20
    let respuesta2 = multiplos.every(function (num) {
      return num < 20;
    });

    //saber si los numeros son mayores a 5
    let respuesta3 = [];
    let final;

    for (let i = 0; i < multiplos.length; i++) {
      if (multiplos[i] > 5) respuesta3.push(true);
      else respuesta3.push(false);
    }

    for (let i = 0; i < respuesta3.length; i++) {
      if (respuesta3[i] == false) {
        final = false;
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
        `;

    consola.innerHTML = `
        <b class="sky">respuesta1</b> <b class="azul">${respuesta1}</b> <br><br>
        <b class="sky">respuesta2</b> <b class="azul">${respuesta2}</b> <br><br>
        <b class="sky">respuesta3</b> <b class="azul">${respuesta3}</b> <br>
        <b class="sky">final</b> <b class="azul">${final}</b> <br>
        `;
  } else if (metodo == "includes") {
    const consola = document.getElementById("consola-some");
    const codigo = document.getElementById("codigo-some");

    const palabra = "Computadora";

    //saber si los numeros son pares
    let respuesta1 = ciudades.includes("Falcon");
    let respuestaIndice = ciudades.includes("Caracas", 2);

    //saber si los numeros son menores a 20
    let respuesta2 = palabra.includes("x");

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
        `;

    consola.innerHTML = `
        <b class="verde">//buscar palabra</b><br>
        <b class="sky">respuesta1</b> <b class="azul">${respuesta1}</b> <br><br>
        
        <b class="verde">//buscar palabra desde el indice 2</b><br>
        <b class="sky">respuestaIndice</b> <b class="azul">${respuestaIndice}</b> <br><br>
        
        <b class="verde">//buscar letra</b><br>
        <b class="sky">respuesta2</b> <b class="azul">${respuesta2}</b> <br>
        `;
  }
}

//MAP
const botonMap = document.querySelectorAll(".btn-map-enObjetos button");
const consolamapEnObjetos = document.getElementById("consola-mapEnObjetos");
const codigomapEnObjetos = document.getElementById("codigo-mapEnObjetos");

botonMap.forEach((boton, index) => {
  boton.addEventListener("click", () => {
    if (index == 0) ejecutarMapEnObjetos("map-objetos");
    if (index == 1) ejecutarMapEnObjetos("map-modificar");
    if (index == 2) ejecutarMapEnObjetos("map-agregar");
    if (index == 3) ejecutarMapEnObjetos("map-crear");
  });
});

function ejecutarMapEnObjetos(metodo) {
  const clientes = [
    { name: "Andres", producto: "iphone", precio: 1200 },
    { name: "Camilo", producto: "audifonos", precio: 120 },
    { name: "Rodrigo", producto: "cargador", precio: 50 },
    { name: "David", producto: "funda", precio: 80 },
  ];

  //Map en objetos
  if (metodo == "map-objetos") {
    let precios = clientes.map((item) => item.precio);
    let impuestos = clientes.map((item) => item.precio * 0.2);

    codigomapEnObjetos.innerHTML = `
        <p class="margenTop0">
            <b class="azul">let</b> <b class="doger">clientes</b> = <b class="golden">[</b><br>
            &emsp; <b class="morado">{</b><b class="sky">name:</b> <b class="naranja">"Andres"</b>, <b class="sky">producto:</b> <b class="naranja">"iphone"</b>, <b class="sky">precio:</b> <b class="verde">"1200$"</b><b class="morado">}</b>, <br>
            &emsp; <b class="morado">{</b><b class="sky">name:</b> <b class="naranja">"Camilo"</b>, <b class="sky">producto:</b> <b class="naranja">"audifonos"</b>, <b class="sky">precio:</b> <b class="verde">"120$"</b><b class="morado">}</b>, <br>
            &emsp; <b class="morado">{</b><b class="sky">name:</b> <b class="naranja">"Rodrigo"</b>, <b class="sky">producto:</b> <b class="naranja">"cargador"</b>, <b class="sky">precio:</b> <b class="verde">"50$"</b><b class="morado">}</b>, <br>
            &emsp; <b class="morado">{</b><b class="sky">name:</b> <b class="naranja">"David"</b>, <b class="sky">producto:</b> <b class="naranja">"funda"</b>, <b class="sky">precio:</b> <b class="verde">"80$"</b><b class="morado">}</b> <br>
            <b class="golden">]</b>
        </p>
        
        <p>
            <b class="azul">let</b> <b class="sky">precios</b> =
            <b class="doger">clientes</b>.<b class="golden">map(</b><b class="sky">item</b>
            <b class="azul">=></b> <b class="sky">item</b>.<b class="sky">precio</b><b class="golden">)</b>
        </p>
    
        <p>
            <b class="azul">let</b> <b class="sky">impuestos</b> =
            <b class="doger">clientes</b>.<b class="golden">map(</b><b class="sky">item</b>
            <b class="azul">=></b> <b class="sky">item</b>.<b class="sky">precio</b> * .<b class="verde">20</b><b class="golden">)</b>
        </p>
        `;

    consolamapEnObjetos.innerHTML = `
            <b class="doger">clientes</b><br>
            ${JSON.stringify(clientes)} <br> <br>
            <b class="sky">precios</b><br>
            ${JSON.stringify(precios)} <br> <br>
            <b class="sky">impuestos</b><br>
            ${JSON.stringify(impuestos)} 
        `;
  } else if (metodo == "map-modificar") {
    let precios = clientes.map((item) => (item.precio = 500));

    codigomapEnObjetos.innerHTML = `
        <p class="margenTop0">
            <b class="azul">let</b> <b class="doger">clientes</b> = <b class="golden">[</b><br>
            &emsp; <b class="morado">{</b><b class="sky">name:</b> <b class="naranja">"Andres"</b>, <b class="sky">producto:</b> <b class="naranja">"iphone"</b>, <b class="sky">precio:</b> <b class="verde">"1200$"</b><b class="morado">}</b>, <br>
            &emsp; <b class="morado">{</b><b class="sky">name:</b> <b class="naranja">"Camilo"</b>, <b class="sky">producto:</b> <b class="naranja">"audifonos"</b>, <b class="sky">precio:</b> <b class="verde">"120$"</b><b class="morado">}</b>, <br>
            &emsp; <b class="morado">{</b><b class="sky">name:</b> <b class="naranja">"Rodrigo"</b>, <b class="sky">producto:</b> <b class="naranja">"cargador"</b>, <b class="sky">precio:</b> <b class="verde">"50$"</b><b class="morado">}</b>, <br>
            &emsp; <b class="morado">{</b><b class="sky">name:</b> <b class="naranja">"David"</b>, <b class="sky">producto:</b> <b class="naranja">"funda"</b>, <b class="sky">precio:</b> <b class="verde">"80$"</b><b class="morado">}</b> <br>
            <b class="golden">]</b>
        </p>

        <p>
            <b class="azul">let</b> <b class="sky">precios</b> =
            <b class="doger">clientes</b>.<b class="golden">map(</b><b class="sky">item</b>
            <b class="azul">=></b> <b class="sky">item</b>.<b class="sky">precio</b> = <b class="verde">500</b><b class="golden">)</b>
        </p>
        `;

    consolamapEnObjetos.innerHTML = `
        <p class="margenTop0">
            <b class="doger">clientes</b><br>
            ${JSON.stringify(clientes)} 
        </p>
        <p>
            <b class="sky">precios</b><br>
            ${JSON.stringify(precios)} 
        </p>
        `;
  } else if (metodo == "map-agregar") {
    let impuestos = clientes.map((item) => (item.tax = item.precio * 0.2));

    codigomapEnObjetos.innerHTML = `
        <p class="margenTop0">
            <b class="azul">let</b> <b class="doger">clientes</b> = <b class="golden">[</b><br>
            &emsp; <b class="morado">{</b><b class="sky">name:</b> <b class="naranja">"Andres"</b>, <b class="sky">producto:</b> <b class="naranja">"iphone"</b>, <b class="sky">precio:</b> <b class="verde">"1200$"</b><b class="morado">}</b>, <br>
            &emsp; <b class="morado">{</b><b class="sky">name:</b> <b class="naranja">"Camilo"</b>, <b class="sky">producto:</b> <b class="naranja">"audifonos"</b>, <b class="sky">precio:</b> <b class="verde">"120$"</b><b class="morado">}</b>, <br>
            &emsp; <b class="morado">{</b><b class="sky">name:</b> <b class="naranja">"Rodrigo"</b>, <b class="sky">producto:</b> <b class="naranja">"cargador"</b>, <b class="sky">precio:</b> <b class="verde">"50$"</b><b class="morado">}</b>, <br>
            &emsp; <b class="morado">{</b><b class="sky">name:</b> <b class="naranja">"David"</b>, <b class="sky">producto:</b> <b class="naranja">"funda"</b>, <b class="sky">precio:</b> <b class="verde">"80$"</b><b class="morado">}</b> <br>
            <b class="golden">]</b>
        </p>
    
        <p>
            <b class="azul">let</b> <b class="sky">impuestos</b> =
            <b class="doger">clientes</b>.<b class="golden">map(</b> 
            <b class="sky">item</b> <b class="azul">=></b> { <br>
            &emsp; <b class="sky">item</b>.<b class="sky">tax</b> =
            <b class="sky">item</b>.<b class="sky">precio</b> * 
            .<b class="verde">20</b>  <br>
            }<b class="golden">)</b>
        </p>
        `;

    consolamapEnObjetos.innerHTML = `
        <p class="margenTop0">
            <b class="doger">clientes</b><br>
            ${JSON.stringify(clientes)} 
        </p>
        <p>
            <b class="sky">impuestos</b><br>
            ${JSON.stringify(impuestos)} 
        </p>
        `;
  } else if (metodo == "map-crear") {
    let copiarYextender = clientes.map((item) => {
      return { ...item, tax: item.precio * 0.2 };
    });

    consolamapEnObjetos.innerHTML = `
        <b class="doger">clientes</b><br>
        ${JSON.stringify(clientes)} <br> <br>
        <b class="sky">copiarYextender</b><br>
        ${JSON.stringify(copiarYextender)} 
        `;

    codigomapEnObjetos.innerHTML = `
        <p class="margenTop0">
            <b class="azul">let</b> <b class="doger">clientes</b> = <b class="golden">[</b><br>
            &emsp; <b class="morado">{</b><b class="sky">name:</b> <b class="naranja">"Andres"</b>, <b class="sky">producto:</b> <b class="naranja">"iphone"</b>, <b class="sky">precio:</b> <b class="verde">"1200$"</b><b class="morado">}</b>, <br>
            &emsp; <b class="morado">{</b><b class="sky">name:</b> <b class="naranja">"Camilo"</b>, <b class="sky">producto:</b> <b class="naranja">"audifonos"</b>, <b class="sky">precio:</b> <b class="verde">"120$"</b><b class="morado">}</b>, <br>
            &emsp; <b class="morado">{</b><b class="sky">name:</b> <b class="naranja">"Rodrigo"</b>, <b class="sky">producto:</b> <b class="naranja">"cargador"</b>, <b class="sky">precio:</b> <b class="verde">"50$"</b><b class="morado">}</b>, <br>
            &emsp; <b class="morado">{</b><b class="sky">name:</b> <b class="naranja">"David"</b>, <b class="sky">producto:</b> <b class="naranja">"funda"</b>, <b class="sky">precio:</b> <b class="verde">"80$"</b><b class="morado">}</b> <br>
            <b class="golden">]</b>
        </p>
        <p>
            <b class="azul">let</b> <b class="sky">copiarYextender</b> =
            <b class="doger">clientes</b>.<b class="golden">map(</b><b class="sky">item</b> <b class="azul">=></b> <b class="morado">{</b> <br>
            &emsp; <b class="morado">return</b> <b class="azul">{</b>...<b class="sky">item</b>, <b class="sky">tax:</b>
            <b class="sky">item</b>.<b class="sky">precio</b> * .<b class="verde">20</b><b class="azul">}</b> <br>
            <b class="morado">}</b><b class="golden">)</b>
        </p>
        `;
  }
}

//iteracion de array
function ejecutarIterarArray() {
  const consola = document.getElementById("consola-iterarArray");
  const consola2 = document.getElementById("consola-iterarArray2");

  let numero = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  let suma = 0;

  for (let i = 0; i < numero.length; i++) {
    suma += numero[i];
    consola.textContent += suma + " ";
    console.log(suma);
  }

  const multiplos = new Array(2, 4, 6, 8, 10, 12, 14, 16, 18, 20);
  let sumas = 0;

  for (num of multiplos) {
    sumas += num;
    consola2.textContent += sumas + " ";
  }
}

//desestructuraciom y spread operator
function ejecutarSpread(tipo) {
  const consola = document.getElementById("consola-spread");
  const codigo = document.getElementById("codigo-desestructurar");

  if (tipo == "desestructurar") {
    const array = [45, "Script", 80, "Java"];

    //desestructurando
    const [primero, segundo, tercero] = array;

    //desestructurando valor especifico y valor extra
    const [, , , cuarto, quinto = "nuevo"] = array; //valor extra
    const { 1: uno } = array;

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

        `;

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
        
        `;
  } else if (tipo == "spread-operator") {
    //Arrays y Objetos
    const array = [1, 2, 3];
    const array2 = [4, 5, 6];
    const objeto = { nombre: "Luis", edad: 30 };
    const string = "Javascript";
    function suma(a, b, c) {
      return [a, b, c];
    }

    //copiar
    const copiaArray = [...array];
    const copiaObjeto = { ...objeto };
    const copiarString = [...string];
    //combinar
    const combinar = [...array, ...array2];
    const combinar2 = [...array2, ...string];
    //extender
    const extencion = [...array2, 7, 8, 9];
    //parametros
    const parametros = suma(...array);

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
        `;

    consola.innerHTML = `
        <b class="verde">//copias</b><br>
        <b class="doger">copiaArray</b> ${copiaArray}<br>
        <b class="doger">copiaObjeto</b> ${JSON.stringify(copiaObjeto)}<br>
        <b class="doger">copiarString</b> ${copiarString}<br><br>

        <b class="verde">//comparar</b><br>
        <b class="doger">copiaArray</b> === <b class="doger">array</b> ${copiaArray === array}<br><br>

        <b class="verde">//cambiar valor en copia</b><br>
        <b class="doger">copiaArray</b><b class="golden">[<b class="verde">1</b>]</b> = <b class="verde">20</b> ${(copiaArray[1] = 20)}<br>
        <b class="doger">copiaArray</b> ${copiaArray}<br>
        <b class="doger">array</b> ${array}<br><br>

        <b class="verde">//combinar</b><br>
        <b class="doger">combinar</b> ${combinar}<br>
        <b class="doger">combinar2</b> ${combinar2}<br><br>

        <b class="verde">//extender</b><br>
        <b class="doger">extencion</b> ${extencion}<br><br>

        <b class="verde">//funcion</b><br>
        <b class="doger">parametros</b> ${parametros}<br>
        `;
  } else if (tipo == "parametro-rest") {
    //con desestructuracion
    const elementos = [5, 4, 9, 8, 3];
    const [first, ...resto] = elementos;
    //en funciones
    function suma(first, ...resto) {
      return `pimero: ${first}, resto: ${resto}`;
    }

    consola.innerHTML = `
        <b class="doger">first</b> ${first}<br>
        <b class="doger">resto</b> ${resto}<br><br>
        <b class="golden">suma(</b><b class="verde">12</b>,<b class="verde">24</b>,<b class="verde">36</b><b class="golden">)</b> ${suma(12, 24, 36)}
        
        `;

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
            
        `;
  } else if (tipo == "estructuredCloned") {
    const array = [1, 2, [3, 4], 5];
    const copia = array;
    const clon = structuredClone(array);

    codigo.innerHTML = `
        <b class="azul">const</b> <b class="doger">array</b> = <b class="golden">[</b>
        <b class="verde">1</b>,<b class="verde">2</b>, 
        <b class="morado">[</b><b class="verde">3</b>,<b class="verde">4</b><b class="morado">]</b>,
        <b class="verde">5</b> <b class="golden">]</b><br><br>

        <b>copia normal</b><br>
        <b class="azul">const</b> <b class="doger">copia</b> = <b class="doger">array</b><br><br>
        
        <b>copia con estructuredCloned</b><br>
        <b class="azul">const</b> <b class="doger">clon</b> = <b class="golden">estructuredCloned(<b class="doger">array</b>)</b> <br><br>
        `;

    consola.innerHTML = `
        <b class="doger">array</b> ${array}<br>
        <b class="doger">copia</b><b class="golden">[<b class="verde">2</b>]</b> ${copia[2]}<br><br>

        <b class="verde">//cambiar valor en sub-elemento de copia</b><br>
        <b class="doger">copia</b><b class="golden">[<b class="verde">2</b>]</b> = <b class="verde">30</b> ${(copia[2] = 30)}<br>
        <b class="doger">copia</b> ${copia}<br>
        <b class="doger">array</b> ${array}<br><br>

        <b class="verde">//cambiar valor en clon</b><br>
        <b class="doger">clon</b><b class="golden">[<b class="verde">1</b>]</b> = <b class="verde">50</b> ${(clon[1] = 50)}<br>
        <b class="doger">clon</b> ${clon}<br>
        <b class="doger">array</b> ${array}<br><br>
        `;
  }
}
ejecutarSpread("estructuredCloned");

//SET
function ejecutarSet(tipo) {
  const consola = document.getElementById("consola-set");

  const set = new Set([1, 2, 3, 4, 1]);
  set.add(5);
  // encadenar
  set.add(2).add(6);

  if (tipo == "delete") {
    set.delete(3);
  }
  if (tipo == "clear") {
    set.clear();
  }

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
    `;
}
ejecutarSet();
