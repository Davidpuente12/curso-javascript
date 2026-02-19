// setInterval -setTimeout

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

// export - import

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

// FILE SYSTEM
function fileSystem(tipo){
    const codigo = document.getElementById('codigo-file-system')

    if(tipo == 'promises'){
        codigo.innerHTML = ` 
        <p style="margin-bottom: 0;">
            <b class="azul">const</b> <b class="aqua">file</b> = 
            <b class="golden">require</b>(<b class="naranja">'fs/promises'</b>); <br><br>

            <b class="azul">async function</b> <b class="golden">ejemplo</b>() {
            <div class="margenIz">
                <b class="morado">try</b> {
                <div class="margenIz">
                    <b class="letra-B">// Leer archivo</b> <br>
                    <b class="azul">const</b> <b class="doger">data</b> = 
                    <b class="morado">await</b> 
                    <b class="aqua">file</b>.<b class="golden">readFile</b>(
                    <b class="naranja">'./Modulos/archivo.txt'</b>, 
                    <b class="naranja">"utf8"</b> ); <br>
                    console.log('Contenido:', <b class="doger">data</b>); <br><br>

                    <b class="letra-B">// Escribir archivo</b> <br>
                    <b class="morado">await</b> 
                    <b class="aqua">file</b>.<b class="golden">writeFile</b>(
                    <b class="naranja">'./Modulos/nuevo.txt'</b>, 
                    <b class="naranja">'Hola Mundo'</b>); <br>
                    console.log('Archivo escrito correctamente'); <br><br>

                    <b class="letra-B">// Eliminar archivo</b> <br>
                    <b class="morado">await</b> 
                    <b class="aqua">file</b>.<b class="golden">unlink</b>(
                    <b class="naranja">'./Modulos/nuevo.txt'</b> ); <br>
                    console.log('Archivo eliminado'); <br><br>
                </div>

                } <b class="morado">catch</b> (<b class="sky">error</b>) { <br>
                &emsp; console.error('Error:', <b class="sky">error</b>); <br>
                }
            </div>
            }
        </p>
        `
    }
    else if(tipo == 'file-system'){
        codigo.innerHTML = `
        <p style="margin-bottom: 0;">
            <b class="azul">const</b> <b class="aqua">file</b> = 
            <b class="golden">require</b>(<b class="naranja">'fs'</b>); <br><br>
            
            <b class="aqua">file</b>.<b class="golden">readFile</b>(
            <b class="naranja">'./Modulos/archivo.txt'</b>, 
            <b class="naranja">"utf8"</b>, 
            (<b class="sky">error</b>, <b class="sky">data</b>) 
            <b class="azul">=></b> {
            <div class="margenIz">
                <b class="morado">if</b> (<b class="sky">error</b>) { <br>
                &emsp; console.error('Error al leer el archivo: $ {<b class="sky">error</b>}') <br>
                } <b class="morado">else</b> { <br>
                &emsp; console.log('Contenido del archivo: $ {<b class="sky">data</b>}') <br>
                }  
            </div>      
            })
        </p>

        <p style="margin-bottom: 0;">        
            <b class="aqua">file</b>.<b class="golden">writeFile</b>(
            <b class="naranja">'./Modulos/nuevo.txt'</b>, 
            <b class="naranja">'Hola Mundo'</b>, 
            <b class="naranja">"utf8"</b>, 
            (<b class="sky">error</b>) 
            <b class="azul">=></b> {
            <div class="margenIz">
                <b class="morado">if</b> (<b class="sky">error</b>) { <br>
                &emsp; console.error('Error al escribir el archivo: $ {<b class="sky">error</b>}') <br>
                }
            </div>      
            })
        </p>

        <p style="margin-bottom: 0;">        
            <b class="aqua">file</b>.<b class="golden">unlink</b>(
            <b class="naranja">'./Modulos/nuevo.txt'</b>, 
            (<b class="sky">error</b>) 
            <b class="azul">=></b> {
            <div class="margenIz">
                <b class="morado">if</b> (<b class="sky">error</b>) { <br>
                &emsp; console.error('Error al borrar el archivo: $ {<b class="sky">error</b>}') <br>
                }
            </div>      
            })
        </p>
        `
    }
    
}

// SUBPROCESOS
function childProcess(tipo){
    const codigo = document.getElementById('consola-childProcess')

    if(tipo == 'exec'){
        codigo.innerHTML = `
        <p>
            <b class="azul">const</b> { <b class="golden">exec</b>, <b class="golden">spawn</b> } =
            <b class="golden">require</b>(<b class="naranja">'child_process'</b>);
        </p>
            <p class="margen0">
            <b class="golden">exec</b>(<b class="naranja">'dir'</b>, 
            (<b class="sky">error</b>, <b class="sky">stdout</b>, <b class="sky">estderr</b>)
            <b class="azul">=></b> {
            <div class="margenIz">
                <b class="morado">if</b>(<b class="sky">error</b>) { <br>
                &emsp; console.log('Error ejecutando el comando: ', <b class="sky">error</b>) <br>
                &emsp; <b class="morado">return</b> <br>
                }
                <b class="morado">if</b>(<b class="sky">estderr</b>) { <br>
                &emsp; console.log('Error ejecutando el comando: ', <b class="sky">estderr</b>) <br>
                &emsp; <b class="morado">return</b> <br>
                } <br>

                console.log(<b class="sky">stdout</b>)
            </div>
            })
        </p>
        `
    }
    else if(tipo === 'spawn'){
        codigo.innerHTML = `
        <p>
            <b class="azul">const</b> { <b class="golden">exec</b>, <b class="golden">spawn</b> } =
            <b class="golden">require</b>(<b class="naranja">'child_process'</b>);
        </p>
        <p>
            <b class="azul">let</b> <b class="sky">proceso</b> = 
            <b class="golden">spawn</b>(<b class="naranja">'dir'</b>,
            {<b class="sky">shell</b>:<b class="azul">true</b>}) <br><br>

            <b class="sky">proceso</b>.<b class="sky">stdout</b>.<b class="golden">on</b>(
            <b class="naranja">'data'</b>, (<b class="sky">dato</b>) <b class="azul">=></b> { <br>
            &emsp; console.log(<b class="sky">dato</b>.<b class="golden">toString()</b>) <br>
            }) <br><br>

            <b class="sky">proceso</b>.<b class="sky">estderr</b>.<b class="golden">on</b>(
            <b class="naranja">'data'</b>, (<b class="sky">data</b>) <b class="azul">=></b> { <br>
            &emsp; console.error('Error: ', <b class="sky">data</b> ) <br>
            }) <br><br>

            <b class="sky">proceso</b>.<b class="golden">on</b>(
            <b class="naranja">'data'</b>, (<b class="sky">code</b>) => { <br>
            &emsp; console.log('proceso finalizado con codigo: ', <b class="sky">code</b>) <br>
            }) 
        </p>
        `
    }
}
{
    const { exec, spawn } = require('child_process');
    
    exec('dir', (error, stdout, stderr) => {
        if(error) {
            console.log('Error ejecutando el comando: ', error)
            return 
        }
        if(stderr) {
            console.log('Error ejecutando el comando: ', stderr)
            return 
        }

        console.log(stdout)

    })

    
    let proceso = spawn('dir',{shell:true})
    
    proceso.stdout.on('data', (dato) => {
        console.log(dato.toString())
    })

    proceso.stderr.on('data', (data) => {
        console.error('Error: ', data )
    })

    proceso.on('close', (code) => {
        console.log('proceso finalizado con codigo: ', code)
    })
}



