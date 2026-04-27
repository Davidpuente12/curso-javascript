//FUNCIONES
function ejecutarFunciones(tipo) {
  const consola = document.getElementById("consola-function");
  const codigo = document.getElementById("codigo-function");

  if (tipo == "funcion-tradicional") {
    //un parametro
    function saludar(nombre) {
      return "Hola " + nombre + "👋 Bienvenido/a";
    }

    //dos parametro
    function saludar2(nombre, apellido) {
      return `Hola ${nombre} ${apellido} 👋 Bienvenido/a`;
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
        `;

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
        ${saludar2(undefined, "Gamez")}<br>
        `;
  } else if (tipo == "expresionDeFuncion") {
    const saludo = function (nombre) {
      return "Hola " + nombre;
    };

    codigo.innerHTML = `
        <p style="margin-top:0">
            <b class="azul">const</b> <b class="golden">saludo</b> = <b class="azul">function</b> <b class="golden">(</b><b class="sky">nombre</b><b class="golden">) {</b>
            <br>&emsp;&emsp;<b class="morado">return</b> <b class="naranja">'Hola'</b> + <b class="sky">nombre</b> 
            <br><b class="golden">}</b>
            <br><br>
        </p>
        `;
    consola.innerHTML = `
        <b class="golden">saludar(<b class="naranja">"Luis"</b>)</b>
        ${saludo("Luis")}<br>
        `;
  } else if (tipo == "parametros-pordefecto") {
    function newuser(name, age, country) {
      let nombre = name || "Luis";
      let edad = age || 30;
      let pais = country || "Venezuela";
      return `${nombre} ${edad} ${pais}`;
    }

    function newAdmin(name = "Santiago", age = 50, country = "Londres") {
      return `${name} ${age} ${country}`;
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
        `;

    consola.innerHTML = `
        <b class="verde">//Ninguno por defecto</b><br>
            <b class="golden">newuser</b><b class="morado">(</b><b class="naranja">"David"</b>,
            <b class="verde">32</b>, <b class="naranja">"Colombia"</b><b class="morado">)</b>  
            ${newuser("David", 32, "Colombia")}<br>

            <b class="golden">newAdmin</b><b class="morado">(</b><b class="naranja">"Jorge"</b> ,
            <b class="verde">42</b> , <b class="naranja">"Chile"</b><b class="morado">)</b>  
            ${newAdmin("Jorge", 42, "Chile")}<br><br>


        <b class="verde">//Dos por defecto</b><br>
            <b class="golden">newuser</b><b class="morado">(</b><b class="azul">undefined</b>,
            <b class="verde">55</b><b class="morado">)</b>  
            ${newuser(undefined, 55)}<br>

            <b class="golden">newAdmin</b><b class="morado">(</b><b class="naranja">"Carlos"</b><b class="morado">)</b>  
            ${newAdmin("Carlos")}<br><br>


        <b class="verde">//Todos por defecto</b><br>
            <b class="golden">newuser</b><b class="morado">()</b>  
            ${newuser()}<br>

            <b class="golden">newAdmin</b><b class="morado">()</b> 
            ${newAdmin()}<br>
        `;
  } else if (tipo == "retornar-objetos") {
    function userName(firstname, lastname, age) {
      return {
        firstname,
        lastname,
        age,
      };
    }

    consola.innerHTML = `
        <p class='margen0'>
            <b class='golden'>userName</b>('Luis', 'Puente', 30) <br><br>
            ${JSON.stringify(userName("Luis", "Puente", 30), null, 2)}
        </p>
        `;

    codigo.innerHTML = `
        <p class="margen0">
            <b class="azul">function</b> <b class="golden">userName</b>(
            <b class="sky">firstname</b>, <b class="sky">lastname</b>, <b class="sky">age</b> ){
            <div class="margenIz">
                <b class="morado">return</b> {
                <div class="margenIz">
                    <b class="sky">firstname</b>, <br>
                    <b class="sky">lastname</b>, <br>
                    <b class="sky">age</b>
                </div>
                }
            </div>
            }
        </p>
        `;
  }
}

//CALLBACKS
function ejecutarCallback(tipo) {
  const consola = document.getElementById("consola-callback");
  const codigo = document.getElementById("codigo-callback");

  // callback
  if (tipo == "callback") {
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
        `;

    function procesarUsuario(callback) {
      const nombre = "Luis";
      callback(nombre);
    }

    function saludar(nombre) {
      consola.innerHTML = `
            <b class="golden">procesarUsuario</b><b class="morado">(<b class="golden">saludar</b>)</b> <br>
            Hola ${nombre}
            `;
    }

    procesarUsuario(saludar);
  }

  // callback hell
  if (tipo == "CallbackHell") {
    consola.innerHTML = "";

    function saludar(nombre, callback) {
      consola.innerHTML += `<p>Hola ${nombre}</p>`;
      callback();
    }
    function instruccionUno(callback) {
      consola.innerHTML += `<p>Ve a la app store</p>`;
      callback();
    }
    function instruccionDos(callback) {
      consola.innerHTML += "<p>Compra unos airpods</p>";
      callback();
    }
    function instruccionTres(callback) {
      consola.innerHTML += "<p>Traelos a mi casa</p>";
      callback();
    }
    function despedir(nombre) {
      consola.innerHTML += `<p>Adios ${nombre}</p>`;
    }

    saludar("David", function () {
      instruccionUno(function () {
        instruccionDos(function () {
          instruccionTres(function () {
            despedir("david");
          });
        });
      });
    });

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
        `;
  }

  //Callback Hell Recursivo
  if (tipo == "CallbackHellRecursivo") {
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
        `;

    function saludar(nombre, callback) {
      consola.innerHTML = `<p>Hola ${nombre}</p>`;
      callback(nombre);
    }
    function hablar(callback) {
      consola.innerHTML += `<p>bla bla bla</p>`;
      callback();
    }
    function adios(nombre) {
      consola.innerHTML += `<p>Adios ${nombre}</p>`;
    }
    //recursividad
    function conversacion(veces, nombre) {
      if (veces > 0) {
        hablar(function () {
          conversacion(--veces, nombre);
        });
      } else {
        adios(nombre);
      }
    }

    saludar("David", function (nombre) {
      conversacion(3, nombre);
    });
  }
}

//CLOSURE
const codigoClosure = document.getElementById("codigo-closure");
const consolaClosure = document.getElementById("consola-closure");
const botonClosure = document.querySelectorAll(".btn-closure button");

botonClosure.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (index == 0) {
      closure();
    } else if (index == 1) {
      closure2();
    }
  });
});

function closure() {
  function saludo() {
    let mensaje = "Bienvenido/a";
    let numero = 0;

    function imprimir(nombre) {
      numero++;
      return `${mensaje} ${nombre}  <span class="verde">${numero}<span> <br>`;
    }
    return imprimir;
  }

  const users = saludo();

  consolaClosure.innerHTML = `
        <p class='margen0'>
            ${users("Luis")}
        </p>

        <p>
            ${users("Sharon")}
        </p>

        <p>
            ${users("Adriana")}
        </p>
    `;

  codigoClosure.innerHTML = `
    <p class="margenTop0">
        <b class="azul">function</b> <b class="golden">saludo(</b><b class="golden">) {</b>  <br>
        &emsp;&emsp;<b class="azul">let</b> <b class="sky">mensaje</b> = <b class="naranja">"Hola Bienvenido/a"</b> <b class="verde">// ambito lexico</b> <br>
        &emsp;&emsp;<b class="azul">let</b> <b class="sky">numero</b> = <b class="verde">1</b>  <br>
    </p>
    
    <div style="box-shadow: 1px -1px 4px gray;">
        &emsp;&emsp;<b class="azul">function</b> <b class="golden">imprimir</b><b class="morado">(<b class="sky">nombre</b>) {</b> <b class="verde">// closure</b> <br>
        &emsp;&emsp;&emsp;&emsp;<b class="sky">console</b>.<b class="golden">log</b><b class="morado">(</b><b class="sky">mensaje</b> +
        <b class="naranja">" "</b>  + <b class="sky">nombre</b> +
        <b class="naranja">" "</b> + <b class="sky">numero</b><b class="morado">)</b><br>
        &emsp;&emsp;&emsp;&emsp;<b class="sky">numero</b> ++ <br>
        &emsp;&emsp;<b class="morado">}</b> <br>
    </div>

    <p class="margenIz">
        <b class="morado">return</b> <b class="golden">imprimir</b> <br>
    </p>
    <b class="golden">}</b>
    
    <p>
        <b class="azul">const</b> <b class="golden">users</b> = <b class="golden">saludo()</b> <br>
        <b class="golden">users(<b class="naranja">"Luis"</b>)</b>  <br>
        <b class="golden">users(<b class="naranja">"Sharon"</b>)</b> <br>
        <b class="golden">users(<b class="naranja">"Adriana"</b>)</b> 
    </p>
    `;
}

function closure2() {
  function cuentaBancaria(numero) {
    let saldo = numero;

    return {
      depositar(cantidad) {
        saldo += cantidad;
        return `Deposito ${cantidad}. Saldo actual: ${saldo}.`;
      },

      retirar(cantidad) {
        if (cantidad > saldo) {
          return "Fondos insuficientes";
        }

        saldo -= cantidad;
        return `Retirado ${cantidad}. Saldo actual: ${saldo}.`;
      },

      consultarSaldo() {
        return `Saldo ${saldo}`;
      },
    };
  }

  // instancia
  const miCuenta = cuentaBancaria(1000);

  consolaClosure.innerHTML = `
    <p>
        <b class="golden">cuentaBancaria</b>() <br>
        ${JSON.stringify(cuentaBancaria())} 
    </p>
    <p>
        <b class="doger">miCuenta</b>.<b class="golden">consultarSaldo</b>() <br>
        ${miCuenta.consultarSaldo()} 
    </p>
    <p>
        <b class="doger">miCuenta</b>.<b class="golden">depositar</b>(1000) <br>
        ${miCuenta.depositar(1000)}
    </p>
    <p>
        <b class="doger">miCuenta</b>.<b class="golden">retirar</b>(500) <br>
        ${miCuenta.retirar(500)}
    </p>
    `;

  codigoClosure.innerHTML = `
    <p class="margen0">
        <b class="azul">function</b> <b class="golden">cuentaBancaria</b>(<b class="sky">numero</b>){
        <div class="margenIz">
            <b class="azul">let</b> <b class="sky">saldo</b> = <b class="sky">numero</b> <br><br>

            <b class="morado">return</b> {
            <div class="margenIz">
                <b class="golden">depositar</b>(<b class="sky">cantidad</b>){
                <div class="margenIz">
                    <b class="sky">saldo</b> += <b class="sky">cantidad</b>; <br>
                    <b class="morado">return</b> 
                    'Deposito $ {<b class="sky">cantidad</b>}. Saldo actual: $ {<b class="sky">saldo</b>}.'
                </div>
                }, <br>

                <b class="golden">retirar</b>(<b class="sky">cantidad</b>) {
                <div class="margenIz">
                        if(<b class="sky">cantidad</b> > <b class="sky">saldo</b>){ <br>
                        <b class="morado">return</b> 'Fondos insuficientes' <br>
                    } <br><br>

                    <b class="sky">saldo</b> -= <b class="sky">cantidad</b> <br>
                    <b class="morado">return</b> 
                    'Retirado $ {<b class="sky">cantidad</b>}. Saldo actual: $ {<b class="sky">saldo</b>}.'
                </div>
                }, <br>

                <b class="golden">consultarSaldo</b>(){ <br>
                &emsp; <b class="morado">return</b> 
                'Saldo $ {<b class="sky">saldo</b>}' <br>
                }
            </div>
            }
        </div>
        }
    </p>
    <p>
        <b class="azul">const</b> <b class="doger">miCuenta</b> = 
        <b class="golden">cuentaBancaria</b>(1000) 
    </p>
    `;
}

//METODOS EN OBJETOS
function ejecutarMetodo() {
  const persona = {
    nombre: "Sharon",
    apellido: "Gamez",
    edad: 31,
    saludar: function () {
      return `Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`;
    },
  };

  const consola = document.getElementById("consola-metodo");
  consola.innerHTML = `
    <b class="doger">persona</b>.<b class="golden">saludar</b><b class="morado">()</b> <br>
    ${persona.saludar()}
    `;
}
ejecutarMetodo();

//Metodos en Clases
function ejecutarMetodoDeClase() {
  class Persona {
    constructor(nombre, hobbie) {
      this.nombre = nombre;
      this.hobbie = hobbie;
    }

    saludar() {
      return `Hola, soy ${this.nombre}`;
    }

    instrumento() {
      return `y toco la ${this.hobbie}`;
    }
  }

  const ana = new Persona("David", "guitarra");

  const consola = document.getElementById("consola-metodo-clase");
  consola.textContent = ana.saludar() + " " + ana.instrumento();
}

//Generadores
function ejecutarGeneradores(tipo) {
  const consola = document.getElementById("consola-generadores");
  //bloques
  const bloque1 = document.getElementById("codigo-generador1");
  const bloque2 = document.getElementById("codigo-generador2");
  const bloque3 = document.getElementById("codigo-generador3");

  if (tipo == "Declaracion") {
    bloque1.style.display = "block";
    bloque2.style.display = "none";
    bloque3.style.display = "none";

    function* generador() {
      yield 10;
      yield 20;
      yield 30;
    }

    //crear el generador
    const valores = generador();
    const valoresiterados = [...generador()];

    consola.innerHTML = `
        <b class="doger">valores</b> ${valores} = ${JSON.stringify(valores)} <br>
            <b class="doger">valoresiterados</b> ${JSON.stringify(valoresiterados)} <br><br>

        <b class="verde">//llamar Generador</b><br>
        <b class="doger">valores</b>.<b class="golden">next()</b> ${JSON.stringify(valores.next())} <br>
        <b class="doger">valores</b>.<b class="golden">next()</b> ${JSON.stringify(valores.next())} <br><br>

        <b class="verde">//ver propiedades</b><br>
        <b class="doger">valores</b>.<b class="golden">next()</b>.<b class="sky">value</b> ${valores.next().value} <br>
        <b class="doger">valores</b>.<b class="golden">next()</b>.<b class="sky">done</b> ${valores.next().done} <br>
        `;
  } else if (tipo == "iterar-valores") {
    bloque1.style.display = "none";
    bloque2.style.display = "block";
    bloque3.style.display = "none";

    function* generador(array) {
      for (let value of array) {
        yield value;
      }
    }

    //crear el generador
    const valores = generador([
      "Luis",
      "David",
      "Sharon",
      "Carmen",
      "Jireh",
      "Adriana",
    ]);

    consola.innerHTML = `
        <b class="verde">//ver propiedades</b><br>
        <b class="doger">valores</b>.<b class="golden">next()</b>.<b class="sky">value</b> ${valores.next().value} <br>
        <b class="doger">valores</b>.<b class="golden">next()</b>.<b class="sky">value</b> ${valores.next().value} <br>
        <b class="doger">valores</b>.<b class="golden">next()</b>.<b class="sky">value</b> ${valores.next().value} <br>
        <b class="doger">valores</b>.<b class="golden">next()</b>.<b class="sky">value</b> ${valores.next().value} <br>
        <b class="doger">valores</b>.<b class="golden">next()</b>.<b class="sky">value</b> ${valores.next().value} <br>
        <b class="doger">valores</b>.<b class="golden">next()</b>.<b class="sky">value</b> ${valores.next().value} <br>
        <b class="doger">valores</b>.<b class="golden">next()</b>.<b class="sky">value</b> ${valores.next().value} <br>
        `;
  } else if (tipo == "Generar-valores") {
    bloque1.style.display = "none";
    bloque2.style.display = "none";
    bloque3.style.display = "block";

    function* obtenerId() {
      while (true) {
        yield Math.random().toString(36).substring(5).toUpperCase();
      }
    }
    const codigos = obtenerId();

    consola.innerHTML = `
        <b class="doger">codigos</b>.<b class="golden">next()</b>.<b class="sky">value</b> <br>
        ${codigos.next().value}<br>
        <b class="doger">codigos</b>.<b class="golden">next()</b>.<b class="sky">value</b> <br>
        ${codigos.next().value}<br>
        <b class="doger">codigos</b>.<b class="golden">next()</b>.<b class="sky">value</b> <br>
        ${codigos.next().value}<br>
        `;
  }
}

//Arrow Function
function ejecutarArrowFunction() {
  const consola = document.getElementById("consola-Arrowfunction");

  // funcion tradicional
  const saludar = function (nombre) {
    return "Hola " + nombre;
  };
  // arrow function
  const suma = (num1, num2) => {
    return num1 + num2;
  };
  // arrow function con retorno implicito
  const resta = (num1, num2) => num1 - num2;
  const multiplicar = (numero) => numero * 5;
  const numero = () => 45;
  // multilinea implicito
  const multilinea = (num1, num2) => num1 * num2 + 45;

  consola.innerHTML = `
    <b class="verde">//funcion tradicional</b><br>
    <b class="golden">saludar</b><b class="morado">(</b><b class="naranja">"David"</b><b class="morado">)</b> <br>
    ${saludar("David")}<br><br>

    <b class="verde">//Arrow Function</b><br>
    <b class="golden">suma</b><b class="morado">(</b><b class="verde">5,7</b><b class="morado">)</b> 
    ${suma(5, 7)}<br><br>

    <b class="verde">//Arrow Function(retorno implicito)</b><br>
    <b class="golden">resta</b><b class="morado">(</b><b class="verde">12,4</b><b class="morado">)</b> 
    ${resta(12, 4)}<br>

    <b class="golden">multiplicar</b><b class="morado">(</b><b class="verde">5</b><b class="morado">)</b> 
    ${multiplicar(5)}<br>

    <b class="golden">numero</b><b class="morado">()</b> 
    ${numero()}<br>

    <b class="golden">multilinea</b><b class="morado">(</b><b class="verde">5</b><b class="morado">)</b> 
    ${multilinea(5, 3)}<br>
    `;
}

// Recursion
function ejecutarRecursion() {
  const consola = document.getElementById("consola-Recursividad");

  function factorial(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorial(num - 1);
  }

  consola.innerHTML = `
    <p>
        <b class="golden">factorial</b><b class="morado">(</b><b class="verde">5</b><b class="morado">)</b> <br>
        ${factorial(5)}
    </p>
    `;
}

// Patron RORO
function ejecutarRORO() {
  const consola = document.getElementById("consola-patronRORO");

  function crearUsuario({ nombre, edad, pais, twiter, facebook } = {}) {
    return {
      nombre,
      edad,
      pais,
      socialMedia: {
        twiter,
        facebook,
      },
    };
  }

  consola.innerHTML = `
    <p>
        <b class="golden">crearUsuario</b><b class="morado">(</b><b class="azul">{</b> <br>
        &emsp; <b class="sky">nombre</b>: <b class="naranja">"Luis"</b>,  <br>
        &emsp; <b class="sky">edad</b>: <b class="verde">30</b>, <br>
        &emsp; <b class="sky">pais</b>: <b class="naranja">"Venezuela"</b>, <br>
        &emsp; <b class="sky">twiter</b>: <b class="naranja">"@luis"</b>, <br>
        &emsp; <b class="sky">facebook</b>: <b class="naranja">"luis.fb"</b> <br>
        <b class="azul">}</b><b class="morado">)</b> <br> <br> 

        ${JSON.stringify(
          crearUsuario({
            nombre: "Luis",
            edad: 30,
            pais: "Venezuela",
            twiter: "@luis",
            facebook: "luis.fb",
          }),
        )}
    </p>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
  ejecutarMetodo();
  ejecutarMetodoDeClase();
  ejecutarArrowFunction();
  ejecutarRecursion();
  ejecutarRORO();
});
