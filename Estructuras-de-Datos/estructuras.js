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
                <img src="../imagenes/Captura de pantalla 2026-01-05 120407.png" alt="grafo" width="300px">
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
                <img src="../imagenes/Captura de pantalla 2026-01-05 120407.png" alt="grafo" width="300px">
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
}