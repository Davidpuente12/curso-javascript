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

// DOM

//metodos de busqueda
function ejecutarMetodosDeBusqueda(tipo){
    const consola = document.getElementById("consola-MetodosDeBusqueda")
    const codigo = document.getElementById("codigo-MetodosDeBusqueda")

    //metodos tradicionales de busqueda
    if(tipo == "metodos-tradicionales"){
        codigo.innerHTML = `
        <p>
            <b class="letra-B">Elementos por ID</b><br>
            <b class="azul">const</b> <b class="doger">ElementoPorId</b> = <b class="sky">document</b>.<b class="golden">getElementById(<b class="naranja">"container"</b>)</b> 
        </p>

        <p>
            <b class="letra-B">Elementos por clases</b><br>
            <b class="azul">const</b> <b class="doger">ElementosPorClases</b> = <b class="sky">document</b>.<b class="golden">getElementsByClassName(<b class="naranja">"items"</b>)</b> 
        </p>

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
        <b class="azul">const</b> <b class="doger">consultasPorClase</b> = <b class="sky">document</b>.<b class="golden">querySelectorAll(<b class="naranja">".items"</b>)</b> <br>
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

        const consultasPorClase = document.querySelectorAll(".items")
        const consultasPorname = document.querySelectorAll("[name='nombre']")

        consola.innerHTML = `
        
        <b class="doger">consultasPorClase</b> ${consultasPorClase} <br><br>
        ${Array.from(consultasPorClase).map(item => item.outerHTML).join("")} <br>

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
}ejecutarMetodosDeBusqueda("metodos-tradicionales")

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