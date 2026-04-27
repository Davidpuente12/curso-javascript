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
