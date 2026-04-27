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
  "explicacion-slice",
  //metodos mutables
  "explicacion-splice",
  "explicacion-sort",
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

//MOSTRAR SIGUIENTE BLOQUE

const bloques = ["then-uno", "then-dos", "then-tres"];
const botones = ["btn-uno", "btn-dos", "btn-tres"];

function next(tipo) {
  for (i = 0; i < bloques.length; i++) {
    if (tipo == bloques[i]) {
      if (tipo == "then-uno") {
        let max = bloques.length - 1;
        const bloque = document.getElementById(bloques[max]);
        const boton = document.getElementById(botones[max]);

        const bloque2 = document.getElementById(bloques[i]);
        const boton2 = document.getElementById(botones[i]);

        const bloqueyboton = [bloque, boton];
        const bloqueyboton2 = [bloque2, boton2];

        bloqueyboton.forEach((item) => (item.style.display = "none"));
        bloqueyboton2.forEach((item) => (item.style.display = "block"));
      }

      const bloque = document.getElementById(bloques[i - 1]);
      const boton = document.getElementById(botones[i - 1]);

      const bloque2 = document.getElementById(bloques[i]);
      const boton2 = document.getElementById(botones[i]);

      const bloqueyboton = [bloque, boton];
      const bloqueyboton2 = [bloque2, boton2];

      bloqueyboton.forEach((item) => {
        if (item) item.style.display = "none";
      });
      bloqueyboton2.forEach((item) => (item.style.display = "block"));
    }
  }
}
// ..........................................

// VARIABLES
//SCOPE
function ejecutarScope() {
  const consola = document.getElementById("consola-scope");
  const consola2 = document.getElementById("consola-scope2");

  let mensajeGlobal = "Hola desde afuera";

  if (true) {
    let mensajeBloque = "hola desde el bloque";
    var mensajeVar = "hola soy var";
    consola.innerHTML = `
        <b class="golden">mensajes()</b> <br>
        ${mensajeGlobal} <br>
        ${mensajeBloque} <br> 
        ${mensajeVar} <br>
        `;
  }

  consola2.innerHTML = `
    <b class="sky">mensajeGlobal</b> ${mensajeGlobal}<br>
    <b class="sky">mensajeBloque</b> ❌ <br>
    <b class="sky">mensajeVar</b> ${mensajeVar}
    `;
}
ejecutarScope();

function ejecutarVariablesDeEntorno() {
  const consola = document.getElementById("consola-variables-entorno");

  let nombre = process.env.NOMBRE || "Sin nombre";
  console.log(nombre);

  consola.innerHTML = `
    <p style="margin-top:0">
        <b class="sky">nombre</b> ${nombre}
    </p>
    `;
}

//PROYECTO RED SOCIAL
const datosUsuarios = [
  { username: "David", password: 1212 },
  { username: "Sharon", password: 777 },
  { username: "Adriana", password: 123 },
  { username: "Jireh", password: 456 },
];

const estado = [
  { frase: "Me encanta Javascript", emoji: "😎" },
  { frase: "Amo el cafe", emoji: "😋" },
  { frase: "Quiero ir a la piscina", emoji: "😭" },
  { frase: "Me fui para España", emoji: "😄" },
];

function verificar(tipo) {
  const verificarUsuario = document.getElementById("verificarUsuario");
  const crearUsuario = document.getElementById("crearUsuario");
  const bienvenida = document.getElementById("Bienvenida");

  class Persona {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  }

  class Frase {
    constructor(frase, emoji) {
      this.frase = frase;
      this.emoji = emoji;
    }
  }

  if (tipo == "verificar") {
    const usuario = document.getElementById("name").value;
    const contraseña = document.getElementById("contraseña").value;
    const mensaje = document.getElementById("mensaje");

    let encontrado = false;

    for (let i = 0; i < datosUsuarios.length; i++) {
      if (
        usuario == datosUsuarios[i].username &&
        contraseña == datosUsuarios[i].password
      ) {
        verificarUsuario.style.display = "none";
        bienvenida.style.display = "flex";

        mensaje.innerHTML = `<b style="color: white"> Bienvenido/a ${datosUsuarios[i].username} <br> "${estado[i].frase}${estado[i].emoji}"</b>`;
        encontrado = true;
        break;
      }
    }

    if (!encontrado) {
      verificarUsuario.style.display = "none";
      bienvenida.style.display = "flex";

      mensaje.innerHTML = `<b style="color: black"> Usuario y contraseña incorrectos! </b>`;
    }
  } else if (tipo == "registrar") {
    verificarUsuario.style.display = "none";
    crearUsuario.style.display = "flex";
  } else if (tipo == "atras") {
    bienvenida.style.display = "none";
    verificarUsuario.style.display = "flex";
  } else if (tipo == "crear") {
    const nuevoUsuario = document.getElementById("nuevoUsuario").value;
    const nuevaContraseña = document.getElementById("nuevaContraseña").value;
    const frase = document.getElementById("frase").value;
    const emoji = document.getElementById("emoji").value;

    const objetoNuevo = document.getElementById("añadirNuevoUsuario");
    const fraseNueva = document.getElementById("añadirFrase");
    const consola = document.getElementById("consola-redsocial");

    //crear objetos
    const persona1 = new Persona(nuevoUsuario, nuevaContraseña);
    const frase1 = new Frase(frase, emoji);
    //pasarlos al arreglo
    datosUsuarios.push(persona1);
    estado.push(frase1);

    //imprimir
    consola.innerHTML = `${JSON.stringify(datosUsuarios)} <br><br> ${JSON.stringify(estado)} `;

    objetoNuevo.innerHTML += `<br>&emsp;
        <b class="morado">{</b><b class="sky">username</b>: <b class="naranja">"${nuevoUsuario}"</b>,
        <b class="sky">password</b>: <b class="verde">${nuevaContraseña}</b><b class="morado">}</b>,`;

    fraseNueva.innerHTML += `<br>&emsp;
        <b class="morado">{</b><b class="sky">frase</b>: <b class="naranja">"${frase}"</b>,
        <b class="sky">emoji</b>: <b class="naranja">"${emoji}"</b><b class="morado">}</b>,`;

    verificarUsuario.style.display = "flex";
    crearUsuario.style.display = "none";
  }
}

function Student(nombre, edad, cursosAprovados) {
  this.name = nombre;
  this.age = edad;
  this.cursosAprovados = cursosAprovados;
}

Student.prototype.aprobarCurso = function (nuevo) {
  this.cursosAprovados.push(nuevo);
};

const david = new Student("David", 30, ["Curso HTML", "Curso CSS"]);
const jorge = new Student("Jorge", 30, ["Curso HTML", "Curso CSS"]);

david.aprobarCurso("Curso Java");
jorge.aprobarCurso("Curso Rubi");

console.log(david);
console.log(jorge);
