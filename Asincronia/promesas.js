//                    PROMESAS 

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

//                    Asynd and await
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

//                     For await...of
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

//                     TRY / CATCH
function tryCatch(){ 
    const consola = document.getElementById("consola-try-catch")

    let result
    try{
        result = 3 + z
    } catch (error) {
        consola.innerHTML = `ha ocurrido el siguiente error: <br> ${error.message}`
    }

    consola.innerHTML += `
    <p>
        <b class="sky">result</b> ${result}
    </p>
    `
}tryCatch()


//                       FETCH 
let actual = 0;
function ejecutarFetch(tipo){
    const consola = document.getElementById("consola-fetch")
    const codigo = document.getElementById("code-fetch")
    
    if(tipo == "fetch-uno"){

        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => response.json())
            .then(data => {
                consola.innerHTML = `
                Ver <b class="sky">response</b> y <b class="sky">response</b>.<b class="golden">json</b> en consola <br><br> 
                <b class="sky">datos</b>: 
                <p class="naranja">${JSON.stringify(data)}</p>`
            })

        //por consola:
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            console.log(response)
            console.log(response.json())
        })

        codigo.innerHTML =
        `<p>    
            <b class="golden">fetch(</b>
            <b class="naranja">"https://jsonplaceholder.typicode.com/posts/1"</b>
            <b class="golden">)</b><br>
            &emsp; &emsp;.<b class="golden">then(</b><b class="sky">response</b> <b class="azul">=></b> <b class="sky">response</b>.<b class="golden">json<b class="morado">()</b>)</b><br>
            &emsp; &emsp;.<b class="golden">then(</b><b class="sky">datos</b> <b class="azul">=></b> <b class="sky">console</b>.<b class="golden">log<b class="morado">(<b class="sky">datos</b>)</b>)</b>
        </p>`

    }

    else if(tipo == "fetch-dos"){

        fetch("https://jsonplaceholder.typicode.com/posts/",{
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
        .then(data => {
            consola.innerHTML= `
            Datos obtenidos con exito. <br>
            Total de post: 
            <span class="verde">${data.length}</span>, 
            post 1: 

            <p class="naranja">${JSON.stringify(data[actual])}</p>
            `
        });  

        codigo.innerHTML = `
        <p>
            <b class="golden">fetch(</b><b class="naranja">"https://jsonplaceholder.typicode.com/posts/"</b>, <b class="morado">{</b><br>
            &emsp; <b class="sky">method:</b> <b class="naranja">"GET"</b>,<br>
            &emsp; <b class="sky">headers:</b> <b class="azul">{</b>
            <b class="naranja">"Content-Type"</b>: <b class="naranja">"application/json"</b>
            <b class="azul">}</b><br>
            <b class="morado">}</b><b class="golden">)</b><br>
            
            .<b class="golden">then(</b><b class="sky">response</b> <b class="azul">=></b> <b class="sky">response</b>.<b class="golden">json<b class="morado">()</b>)</b><br>
            .<b class="golden">then(</b><b class="sky">datos</b> <b class="azul">=></b> <b class="sky">console</b>.<b class="golden">log</b><b class="morado">(</b><br>
            &emsp; <b class="naranja">Datos obtenidos con exito. <br>
            &emsp; Total de post: <b class="azul">$ {<b class="sky">datos.length</b>}</b>,
            post actual: <b class="azul">$ {<b class="sky">datos<b class="golden">[<b class="verde">0</b>]</b></b>}</b> <br> 
            <b class="morado">)</b><b class="golden">)</b>
        </p>

        <button 
            onclick="nextpost()" 
            style="
                background-color: transparent; 
                color: white;
                font-size: 1.5rem;
                border: orange solid 1px; 
                width: 210px;
                padding: 5px;"
            >next post 
            <span class="sky">datos</span>
            <span class="golden">[<b class="verde" id="actual">${actual}</b>]</span>
        </button>
        `
    }

    else if(tipo == "fetch-tres"){

        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => consola.innerHTML = `
                ${response.status}<br> 
                ${response.ok}<br> 
                ${response.url}<br> 
                ${response.body}<br> 
                ${response.headers} 
            `
        )

        codigo.innerHTML =`
        <p>    
            <b class="golden">fetch(</b><b class="naranja">"https://jsonplaceholder.typicode.com/posts/1"</b><b class="golden">)</b><br>
            &emsp; .<b class="golden">then(</b><b class="sky">response</b> <b class="azul">=></b> <b class="sky">console</b>.<b class="golden">log</b><b class="morado">(</b> <br>
            &emsp; &emsp; <b class="sky">response</b>.<b class="doger">status</b>, <br>
            &emsp; &emsp; <b class="sky">response</b>.<b class="doger">ok</b>, <br>
            &emsp; &emsp; <b class="sky">response</b>.<b class="doger">url</b>, <br>
            &emsp; &emsp; <b class="sky">response</b>.<b class="doger">body</b>, <br>
            &emsp; &emsp; <b class="sky">response</b>.<b class="doger">headers</b> <br>
            &emsp;<b class="morado">)</b><b class="golden">)</b>
        </p>
        `

    }

}

//llamar otro post
function nextpost(){
    if(actual > 99){return}
    actual ++
    ejecutarFetch("fetch-dos")
}
