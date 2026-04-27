//CLASES
class Animal {
  constructor(tipo, nombre) {
    this.tipo = tipo;
    this.nombre = nombre;
  }
  mensaje() {
    return `Mi mascota es un ${this.tipo} llamado ${this.nombre}`;
  }
}

class Perro extends Animal {
  constructor(tipo, nombre, raza) {
    super(tipo, nombre);
    this.raza = raza;
  }
  mensaje() {
    return `Mi perro se llama ${this.nombre}, es un ${this.raza} ${this.tamaño}`;
  }
}

function ejecutarClases(tipo) {
  const consola = document.getElementById("consola-class");
  const codigo = document.getElementById("codigo-clases");
  const notas = document.getElementById("notas-clases");

  const animal1 = new Animal("perro", "Apolo");
  const animal2 = new Animal("gato", "Michi");

  //añadir propiedad al objeto y al prototipo de Animal
  if (tipo == "añadir-propiedadYmetodo") {
    animal1.color = "negro";
    animal1.mensaje2 = function () {
      return `es de color ${this.color}`;
    };

    consola.innerHTML = `
        <b class="verde">//primera instancia</b><br>
        <code>
            <b class="doger">animal1</b> <br> ${JSON.stringify(animal1, null, 2)} <br> <br>

            <b class="doger">animal1</b>.<b class="golden">mensaje</b><b class="morado">()</b> <br> <b class="naranja">${animal1.mensaje()}</b> <br>
            <b class="doger">animal1</b>.<b class="golden">mensaje2</b><b class="morado">()</b> <br> <b class="naranja">${animal1.mensaje2()}</br> <br><br> <br>
        </code>
        `;
  } else if (tipo == "añadir-propiedadYmetodo-prototipo") {
    Animal.prototype.tamaño = "pequeño";
    Animal.prototype.mensaje3 = function () {
      return `es un ${this.tipo} ${this.tamaño}`;
    };

    consola.innerHTML = `
        <b class="verde">//primera instancia</b><br>
        <p>
            <b class="doger">animal1</b> <br> ${JSON.stringify(animal1, null, 2)} <br> <br>

            <b class="doger">animal1</b>.<b class="golden">mensaje</b><b class="morado">()</b> <br> <b class="naranja">${animal1.mensaje()}</b> <br>
            <b class="doger">animal1</b>.<b class="golden">mensaje3</b><b class="morado">()</b> <br> <b class="naranja">${animal1.mensaje3()}</br> <br><br> <br>
        </p>
        `;
  }

  if (tipo == "Declaracion-instancias") {
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

        <p>
            <b>añadir propiedad y metodo al objeto</b>
            <button onclick="ejecutarClases('añadir-propiedadYmetodo')" class="btn-consola">añadir</button><br>

            <b class="doger">animal1</b>.<b class="sky">color</b> = <b class="naranja">"negro"</b><br>
            <b class="doger">animal1</b>.<b class="golden">mensaje2</b> = <b class="azul">"function"</b><b class="morado">(){ return</b> 
            <b class="naranja">'es de color</b> <b class="azul">$ {this</b>.<b class="sky">color</b><b class="azul">}</b><b class="naranja">'</b><b class="morado">}</b> <br><br>
        </p>

        <p>
            <b>añadir propiedad y metodo al prototipo</b>
            <button onclick="ejecutarClases('añadir-propiedadYmetodo-prototipo')" class="btn-consola">añadir</button><br>

            <b class="aqua">Animal</b>.<b class="sky">prototype</b>.<b class="sky">tamaño</b> = <b class="naranja">"pequeño"</b><br>
            <b class="aqua">Animal</b>.<b class="sky">prototype</b>.<b class="golden">mensaje3</b> = <b class="azul">"function"</b><b class="morado">(){ return</b> 
            <b class="naranja">'es un </b>  <b class="azul">$ {this</b>.<b class="sky">tipo</b><b class="azul">}</b>
            <b class="azul">$ {this</b>.<b class="sky">tamaño</b><b class="azul">}</b><b class="naranja">'</b>
            <b class="morado">}</b> 
        </p>
        `;

    notas.style.display = "block";
    notas.innerHTML = `
         <div>
            <b>Explicacion:</b><br>
            <b class="doger">animal1</b> crea una instacia de la plantilla "Animal" y le pasa dos argumentos, luego recibe dos propiedades mas y un metodo:
            <ul style="margin-top: 15px;">
                <li><span class="sky">color</span> fue añadido al propio objeto por lo tanto es visible cuando se imprime.</li>
                <li><span class="sky">tamaño</span> fue añadido al prototipo de la clase, no es visible en el objeto, pero existe en el prototipo y sera usado por el metodo <span class="golden">mensaje</span>.</li>
                <li><span class="golden">mensaje3</span> es añadido al prototipo tambien y usara <span class="sky">tamaño</span> en su mensaje</li>
            </ul> 
        </div>
        
        <div>
            <b>Explicacion:</b><br>
            <b class="doger">animal2</b> es una instacia que solo trabaja con los valores "gato y michi" en su mensaje.
        </div> 
        
        `;

    consola.innerHTML = `
        <b class="verde">//primera instancia</b><br>
        <p>
            <b class="doger">animal1</b> <br> ${JSON.stringify(animal1, null, 2)} <br> <br>

            <b class="doger">animal1</b>.<b class="golden">mensaje</b><b class="morado">()</b> <br> <b class="naranja">${animal1.mensaje()}</b> <br><br>
        </p>

        <b class="verde">//segunda instancia</b><br>
        <b class="doger">animal2</b> <b>${JSON.stringify(animal2)}</b><br> <br>
        <b class="doger">animal2</b>.<b class="golden">mensaje</b><b class="morado">()</b> <br>
        
        <b class="naranja">${animal2.mensaje()}</b>
        `;
  } else if (tipo == "ConstruirArray") {
    class Myarray {
      constructor() {
        this.length = 0;
        this.data = {};
      }
      get(index) {
        return this.data[index];
      }
      push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
      }
      pop() {
        const ultimoItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return ultimoItem;
      }
      delete(index) {
        const item = this.data[index];
        for (let i = index; i < this.length - 1; i++) {
          this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return item;
      }
    }
    const myarreglo = new Myarray();
    //añadir mas valores al array
    myarreglo.push("David");
    myarreglo.push("Sharom");
    myarreglo.push("Adriana");

    notas.style.display = "none";

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
        `;

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
        `;
  } else if (tipo == "ConstruirArray2") {
    class Myarray {
      constructor() {
        this.length = 0;
        this.data = {};
      }
      unshift(item) {
        //valida si se paso argumento item
        if (!item) {
          return this.data;
        }
        //si no hay valores en el arreglo, asigna item como el primero y aumenta la longitud
        if (this.length == 0) {
          this.data[0] = item;
          this.length++;
          return this.data;
        }
        //si hay mas valores en el arreglo entonces los mueve todos a la derecha
        for (let i = this.length; i > 0; i--) {
          this.data[i] = this.data[i - 1];
        }

        this.data[0] = item;
        this.length++;
        return this.data;
      }
      shift() {
        if (this.length == 0) {
          return undefined;
        }
        const firstItem = this.data[0];

        for (let i = 0; i < this.length; i++) {
          this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
      }
    }
    const myarreglo = new Myarray();

    notas.style.display = "none";

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
        `;

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
        `;
  }
}

// Herencia
function ejecutarHerencias() {
  const consola = document.getElementById("consola-herencia");

  const animal1 = new Animal("perro", "Apolo");
  const perro1 = new Perro("perro", "Firulais", "Golden");

  //añadir propiedad al objeto y al prototipo de Perro
  perro1.color = "marron";
  Perro.prototype.tamaño = "grande";
  Perro.prototype.personalidad = function () {
    return `${this.nombre} es muy alegre y le gusta correr y jugar con ${animal1.nombre}`;
  };

  consola.innerHTML = `
    <p>
        <b class="doger">perro1</b> ${JSON.stringify(perro1)}
    </p>
    <p>
        <b class="doger">perro1</b>.<b class="golden">mensaje</b><b class="morado">()</b> ${perro1.mensaje()}
    </p>
    <p>
        <b class="doger">perro1</b>.<b class="golden">personalidad</b><b class="morado">()</b> ${perro1.personalidad()}
    </p>
    `;
}

// Encapsulacion
document
  .querySelector(".Getter_y_Setter")
  .addEventListener("click", ejecutarGetterSetter);

// Getter y Setter
function ejecutarGetterSetter() {
  const consola = document.getElementById("consola-getterSetter");
  const codigo = document.getElementById("codigo-getterSetter");

  class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    get userAge() {
      return `Mayor de edad: ${this.age}`;
    }
    set userAge(newAge) {
      if (newAge > 18) {
        this.age = newAge;
      }
    }
  }
  const David = new User("David", 30);

  consola.innerHTML = `
    <p>
        <b>obtener elemento</b><br>
        <b class="doger">David</b>.<b class="sky">userAge</b> ${David.userAge} <b>⬅️ usa getter</b> <br>
        <b class="doger">David</b>.<b class="sky">age</b> ${David.age} <b>⬅️ Directamente</b> <br>
    </p>
    <p>
        <b>añadir elemento</b><br>
        <b class="doger">David</b>.<b class="sky">userAge</b> = <b class="verde">12</b> ${(David.userAge = 12)} <b>⬅️ usa setter</b> 
    </p>
    <p>
        <b class="doger">David</b>  <b>${JSON.stringify(David)} </b> 
    </p>
    `;

  codigo.innerHTML = `
  <p>
      <b class="azul">class</b> <b class="aqua">User</b>
      <b class="golden">{</b> <br />

      &emsp;&emsp;<b class="azul">constructor</b><b class="morado">(</b
      ><b class="sky">name</b>, <b class="sky">age</b
      ><b class="morado">) {</b> <br />
      &emsp;&emsp;&emsp;&emsp;<b class="azul">this</b>.<b class="sky"
        >name</b
      >
      = <b class="sky">name</b><br />
      &emsp;&emsp;&emsp;&emsp;<b class="azul">this</b>.<b class="sky"
        >age</b
      >
      = <b class="sky">age</b><br />
      &emsp;&emsp;<b class="morado">}</b><br />

      &emsp;&emsp;<b class="azul">get</b> <b class="sky">userAge</b
      ><b class="morado">() {</b> <br />
      &emsp; &emsp; <b class="morado">return</b> Mayor de edad:
      <b class="azul">this</b>.<b class="sky">age</b>
      <br />
      &emsp;&emsp;<b class="morado">}</b><br />

      &emsp; <b class="azul">set</b> <b class="sky">userAge</b
      ><b class="morado">(<b class="sky">age</b>) {</b> <br />
      &emsp; &emsp; <b class="morado">if</b> (age > 18)
      <b class="azul">this</b>.<b class="sky">age</b> =
      <b class="sky">age</b> <br />
      &emsp;&emsp;<b class="morado">}</b><br />

      <b class="golden">}</b><br /><br />
    </p>

    <p>
      <b class="azul">const</b> <b class="doger">David</b> =
      <b class="azul">new</b> <b class="aqua">User</b
      ><b class="golden">(</b><b class="naranja">"David"</b>,<b
        class="verde"
        >30</b
      ><b class="golden">)</b><br />
    </p>
  `;
}

document
  .querySelector(".Campos_privados")
  .addEventListener("click", ejecutarConCamposPrivados);

// Getter y Setter con campos privados
function ejecutarConCamposPrivados() {
  const consola = document.getElementById("consola-getterSetter");
  const codigo = document.getElementById("codigo-getterSetter");

  class User {
    #age;

    constructor(name, age) {
      this.name = name;
      this.#age = age;
    }
    get userAge() {
      return this.#age;
    }
    set userAge(newAge) {
      if (newAge > 18) {
        this.#age = newAge;
      }
    }
  }

  const persona = new User("David", 20);

  consola.innerHTML = `
  <p>${JSON.stringify(persona)}</p>
  <p>
    <b>obtener propiedad publica</b> <br>
    <b class="doger">persona</b>.<b class="sky">name</b> 
     ${persona.name} 
  </p>

  <p>
    <b>obtener propiedad privada</b> <br>
    <b class="doger">persona</b>.<b class="sky">age</b> ${persona.age} <br>
    <b class="doger">persona</b>.<b class="sky">userAge</b> ${persona.userAge}
  </p>

  <p>
    <b>modificar propiedad privada</b> <br>
    <b class="doger">persona</b>.<b class="sky">userAge</b> = ${(persona.userAge = 25)} <br>
    <b class="doger">persona</b>.<b class="sky">userAge</b> ${persona.userAge}
  </p>
  `;

  codigo.innerHTML = `
    <p>
      <b class="azul">class</b> <b class="aqua">User</b>
      <b class="golden">{</b> <br />

      &emsp; <b class="sky">#age</b> <br><br>

      &emsp; <b class="azul">constructor</b><b class="morado">(</b>
      <b class="sky">name</b>, <b class="sky">age</b>
      <b class="morado">) {</b> <br/>
      &emsp; &emsp; <b class="azul">this</b>.<b class="sky">name</b>
      = <b class="sky">name</b> <br/>
      &emsp; &emsp; <b class="azul">this</b>.<b class="sky">#age</b>
      = <b class="sky">age</b><br />
      &emsp;&emsp;<b class="morado">}</b><br />

      &emsp;&emsp;<b class="azul">get</b> <b class="sky">userAge</b
      ><b class="morado">() {</b> <br />
      &emsp;&emsp;&emsp;&emsp;<b class="morado">return</b>
      <b class="azul">this</b>.<b class="sky">#age</b>
      <br />
      &emsp;&emsp;<b class="morado">}</b><br />

      &emsp; <b class="azul">set</b> <b class="sky">userAge</b><b class="morado">(<b class="sky">age</b>) {</b> <br />
      &emsp; &emsp; <b class="morado">if</b> (age > 18)
      <b class="azul">this</b>.<b class="sky">#age</b> =
      <b class="sky">age</b> <br />
      &emsp;&emsp;<b class="morado">}</b><br />

      <b class="golden">}</b><br /><br />
    </p>

    <p>
      <b class="azul">const</b> <b class="doger">persona</b> =
      <b class="azul">new</b> <b class="aqua">User</b
      ><b class="golden">(</b><b class="naranja">"David"</b>,<b
        class="verde"
        >20</b
      ><b class="golden">)</b><br />
    </p>
  `;
}

// Polimorfismo
function ejecutarPolimorfismo() {
  const consola = document.getElementById("consola-polimorfismo");
  const codigo = document.getElementById("codigo-polimorfismo");

  class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
    hacerSonido() {
      return `${this.nombre} hace un sonido`;
    }
  }

  class Perro extends Animal {
    constructor(nombre, raza) {
      super(nombre);
      this.raza = raza;
    }
    hacerSonido() {
      return `${this.nombre} ladra`;
    }
  }

  class Gato extends Animal {
    constructor(nombre, color) {
      super(nombre);
      this.color = color;
    }
    hacerSonido() {
      return `${this.nombre} maulla`;
    }
  }

  const miPerro = new Perro("Firulais", "Golden");
  const miGato = new Gato("Michi", "Blanco");

  consola.innerHTML = `
    <p>
        <b class="doger">miPerro</b> ${JSON.stringify(miPerro)} <br>
        <b class="doger">miGato</b> ${JSON.stringify(miGato)} <br>
    </p>
    <p>
        <b class="doger">miPerro</b>.<b class="golden">hacerSonido()</b> ${miPerro.hacerSonido()} <br>
        <b class="doger">miGato</b>.<b class="golden">hacerSonido()</b> ${miGato.hacerSonido()} <br>
    </p>
    `;

  codigo.innerHTML = `
    <p>
        <b class="azul">class</b> <b class="aqua">Animal</b> <b class="golden">{</b> <br>
        &emsp;&emsp;<b class="azul">constructor</b><b class="morado">(</b><b class="sky">nombre</b><b class="morado">){</b> <br>
        &emsp;&emsp;&emsp;&emsp;<b class="azul">this</b>.<b class="sky">nombre</b> = <b class="sky">nombre</b> <br>
        &emsp;&emsp;<b class="morado">}</b><br> 
        &emsp;&emsp;<b class="golden">hacerSonido</b><b class="morado">(){</b> <br>
        &emsp;&emsp;&emsp;&emsp;<b class="morado">return</b> <b class="azul">this</b>.<b class="sky">nombre</b> + "hace un sonido" <br>
        &emsp;&emsp;<b class="morado">}</b><br>
        <b class="golden">}</b>
    </p>
    <p>
        <b class="azul">class</b> <b class="aqua">Perro</b> <b class="azul">extends</b> <b class="aqua">Animal</b> <b class="golden">{</b> <br>
        &emsp;&emsp;<b class="azul">constructor</b><b class="morado">(</b><b class="sky">nombre</b>, <b class="sky">raza</b><b class="morado">){</b> <br>
        &emsp;&emsp;&emsp;&emsp;<b class="azul">super</b><b class="golden">(</b><b class="sky">nombre</b><b class="golden">)</b> <br>
        &emsp;&emsp;&emsp;&emsp;<b class="azul">this</b>.<b class="sky">raza</b> = <b class="sky">raza</b> <br>
        &emsp;&emsp;<b class="morado">}</b><br>
        &emsp;&emsp;<b class="golden">hacerSonido</b><b class="morado">(){</b> <br>
        &emsp;&emsp;&emsp;&emsp;<b class="morado">return</b> <b class="azul">this</b>.<b class="sky">nombre</b> + "ladra" <br>
        &emsp;&emsp;<b class="morado">}</b><br>
        <b class="golden">}</b>
    </p>
    <p>
        <b class="azul">class</b> <b class="aqua">Gato</b> <b class="azul">extends</b> <b class="aqua">Animal</b> <b class="golden">{</b> <br>  
        &emsp;&emsp;<b class="azul">constructor</b><b class="morado">(</b><b class="sky">nombre</b>, <b class="sky">color</b><b class="morado">){</b> <br>  
        &emsp;&emsp;&emsp;&emsp;<b class="azul">super</b><b class="golden">(</b><b class="sky">nombre</b><b class="golden">)</b> <br>
        &emsp;&emsp;&emsp;&emsp;<b class="azul">this</b>.<b class="sky">color</b> = <b class="sky">color</b> <br>
        &emsp;&emsp;<b class="morado">}</b><br>
        &emsp;&emsp;<b class="golden">hacerSonido</b><b class="morado">(){</b> <br>
        &emsp;&emsp;&emsp;&emsp;<b class="morado">return</b> <b class="azul">this</b>.<b class="sky">nombre</b> + "maulla" <br>
        &emsp;&emsp;<b class="morado">}</b><br>
        <b class="golden">}</b>
    </p> 
    <p>
        <b class="azul">const</b> <b class="doger">miPerro</b> = <b class="azul">new</b> <b class="aqua">Perro</b><b class="golden">(</b><b class="naranja">"Firulais"</b>,<b class="naranja">"Golden"</b><b class="golden">)</b> <br>
        <b class="azul">const</b> <b class="doger">miGato</b> = <b class="azul">new</b> <b class="aqua">Gato</b><b class="golden">(</b><b class="naranja">"Michi"</b>,<b class="naranja">"Blanco"</b><b class="golden">)</b> <br>
    </p>   
        `;
}

// metodos estaticos
function ejecutarMetodosEstaticos() {
  const consola = document.getElementById("consola-metodosEstaticos");
  const codigo = document.getElementById("codigo-metodosEstaticos");

  class Matematica {
    static sumar(a, b) {
      return a + b;
    }
    static propiedadEstatica = "Soy una propiedad estatica";
  }
  const resultado = Matematica.sumar(5, 3);

  consola.innerHTML = `
    <p>
        <b class="aqua">Matematica</b>.<b class="golden">sumar</b>(5, 3) <br> ${resultado} 
    </p>
    <p>
        <b class="aqua">Matematica</b>.<b class="sky">propiedadEstatica</b> <br> ${Matematica.propiedadEstatica} 
    </p>
    `;
  codigo.innerHTML = `
    <p>
        <b class="azul">class</b> <b class="aqua">Matematica</b> <b class="golden">{</b> <br>
        &emsp;&emsp;<b class="azul">static</b> <b class="golden">sumar</b><b class="morado">(</b><b class="sky">a</b>, <b class="sky">b</b><b class="morado">){</b> <br>
        &emsp;&emsp;&emsp;&emsp;<b class="morado">return</b> <b class="sky">a</b> + <b class="sky">b</b> <br>
        &emsp;&emsp;<b class="morado">}</b><br>

        &emsp;&emsp;<b class="azul">static</b> <b class="sky">propiedadEstatica</b> = <b class="naranja">"Soy una propiedad estatica"</b> <br>
        <b class="golden">}</b>
    </p>
   
  `;
}

// INICIO
document.addEventListener("DOMContentLoaded", () => {
  ejecutarClases("Declaracion-instancias");
  ejecutarHerencias();
  ejecutarPolimorfismo();
  ejecutarMetodosEstaticos();
});

const obj1 = {
  a: "a",
  b: "b",
};

const obj2 = {};
obj2.a = obj1.a;
obj2.b = obj1.b;

obj1.a = "ccc";
obj2.b = "ddd";

console.log(obj1);
console.log(obj2);
console.log(obj1 === obj2);
