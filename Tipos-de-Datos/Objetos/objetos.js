//               OBJETOS
function ejecutarObjeto(tipo) {
  const consola = document.getElementById("consola-objeto");
  const codigo = document.getElementById("codigo-objetos");

  const automovil = {
    marca: "Toyota",
    modelo: "Corolla",
    direccion: { calle: 200, carrera: 22 },
    vender: function () {
      return `El automovil ${automovil.marca} se vende por 2000$.`;
    },
  };

  // acceder a los valores
  if (tipo == "objeto") {
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
        <b class="golden">}</b>
    `;

    consola.innerHTML = `
        <b class="doger">automovil</b> <br> ${JSON.stringify(automovil)} <br><br>
        
        <b class="verde">//ver propiedades</b><br>
        <b class="doger">automovil</b>.<b class="sky">marca</b> ${automovil.marca} <br>
        <b class="doger">automovil</b><b class="golden">[<b class="naranja">"modelo"</b>]</b> ${automovil["modelo"]} <br>
        <b class="doger">automovil</b>.<b class="sky">direccion</b>.<b class="sky">calle</b> ${automovil.direccion.calle} <br><br>

        <b class="verde">//ver metodos</b><br>
        <b class="doger">automovil</b>.<b class="golden">vender</b><br> ${automovil.vender} <br>
        <b class="doger">automovil</b>.<b class="golden">vender()</b><br> ${automovil.vender()} 
    
        <p>
            <b class="verde">// metodos Object</b><br>
            <b class="aqua">Object</b>.<b class="golden">keys(<b class="doger">automovil</b>)</b> ${Object.keys(automovil)} <br>
            <b class="aqua">Object</b>.<b class="golden">values(</b><b class="doger">automovil</b>.<b class="sky">direccion</b><b class="golden">)</b> ${Object.values(automovil.direccion)} <br>
            <b class="aqua">Object</b>.<b class="golden">entries(</b><b class="doger">automovil</b>.<b class="sky">direccion</b><b class="golden">)</b> ${Object.entries(automovil.direccion)} <br><br>
        </p>
    `;
  }
  //desestructuracion
  else if (tipo == "desestructurar") {
    let {
      marca,
      modelo,
      direccion: { calle, carrera },
    } = automovil;
    let { marca: brand } = automovil;

    function auto({ marca, modelo, direccion }) {
      return `${marca} ${modelo} ${direccion.calle}`;
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
        `;

    consola.innerHTML = `
        <b class="verde">//traer objeto</b><br>
        <b class="morado">{</b><b class="sky">marca</b><b class="morado">}</b> ${JSON.stringify({ marca })}<br><br>
        
        <b class="verde">//traer propiedad</b><br>
        <b class="sky">marca</b> ${marca}<br>
        <b class="sky">modelo</b> ${modelo}<br>
        <b class="sky">calle</b> ${calle}<br>
        <b class="sky">carrera</b> ${carrera}<br><br>

        <b class="verde">//propiedad cambiada</b><br>
        <b class="sky">brand</b> ${brand}<br><br>

        <b class="verde">//llamar funcion</b><br>
        <b class="golden">auto(<b class="doger">automovil</b>)</b> ${auto(automovil)}<br>
        
        `;
  }
  //objetos literales
  else if (tipo == "objetos-literales") {
    const nombre = "David";
    const lastname = "Puente";
    const edad = 30;

    const usuario = { nombre, edad, apellido: lastname };

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
        `;

    consola.innerHTML = `
        <b class="doger">usuario</b> ${JSON.stringify(usuario)} <br><br>   
        `;
  }
  //añadir propiedades
  else if (tipo == "añadir-propiedad") {
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
        <b class="golden">}</b>

        <p>
            <b>Añadir nueva propiedad</b> 
            <button class="btn-consola2" onclick="añadirPropiedad()">añadir</button><br>
            <b class="doger">automovil</b>.<b class="sky">año</b> = <b class="verde">2022</b> 
        </p>

        <b>borrar propiedad:</b>
        <button class="btn-consola2" onclick="ejecutarObjeto('borrar-propiedad')">borrar</button><br>
        <b class="azul">delete</b> <b class="doger">automovil</b>.<b class="sky">año</b>
    `;
    consola.innerHTML = `
        <b class="doger">automovil</b> <br> ${JSON.stringify(automovil)} <br><br>
        <b class="doger">automovil</b>.<b class="sky">año</b> ${automovil.año} 
    `;
  }
  //añadir  propiedades
  else if (tipo == "borrar-propiedad") {
    delete automovil.año;

    consola.innerHTML = `
        <b class="doger">automovil</b> <br> ${JSON.stringify(automovil)} <br><br>

        <b class="verde">//ver propiedades</b><br>
        <b class="doger">automovil</b>.<b class="sky">marca</b> ${automovil.marca} <br>
        <b class="doger">automovil</b>.<b class="sky">modelo</b> ${automovil.modelo} <br>
        <b class="doger">automovil</b>.<b class="sky">direccion</b>.<b class="sky">calle</b> ${automovil.direccion.calle} <br>
        <b class="doger">automovil</b>.<b class="sky">año</b> ${automovil.año} 
        `;
  }
}
ejecutarObjeto("objeto");

function añadirPropiedad() {
  return (automovil.año = 2022);
}

//Funcion constructora
function ejecutarFuncionConstructora() {
  const consola = document.getElementById("consola-funcionConstructora");
  const consola2 = document.getElementById("consola-funcionConstructora2");
  const consola3 = document.getElementById("consola-funcionConstructora3");

  function Personas(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  const persona1 = new Personas("Luis", 30);
  const persona2 = new Personas("Sharon", 31);
  const persona3 = new Personas("Adriana", 28);

  //añadir propiedad individual
  persona1.ciudad = "Merida";
  //añadir propiedad al prototipo
  Personas.prototype.pais = "Venezuela";
  Personas.prototype.saludar = function () {
    return `Soy ${this.nombre} tengo ${this.edad} y soy de ${this.pais}`;
  };

  consola.innerHTML = JSON.stringify(persona1) + "<br>" + persona1.saludar();
  consola2.innerHTML = JSON.stringify(persona2) + "<br>" + persona2.saludar();
  consola3.innerHTML = JSON.stringify(persona3) + `<br>` + persona3.saludar();
}
//Clases
function ejecutarClases(tipo) {
  const consola = document.getElementById("consola-class");
  const codigo = document.getElementById("codigo-clases");
  const notas = document.getElementById("notas-clases");

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
    constructor(nombre, raza) {
      super(undefined, nombre);
      this.raza = raza;
    }
    mensaje() {
      return `Mi perro se llama ${this.nombre}, es un ${this.raza} ${this.tamaño}`;
    }
  }

  const animal1 = new Animal("perro", "Apolo");
  const animal2 = new Animal("gato", "Michi");
  const perro1 = new Perro("Firulais", "Golden");

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
        <code>
            <b class="doger">animal1</b> <br> ${JSON.stringify(animal1, null, 2)} <br> <br>

            <b class="doger">animal1</b>.<b class="golden">mensaje</b><b class="morado">()</b> <br> <b class="naranja">${animal1.mensaje()}</b> <br>
            <b class="doger">animal1</b>.<b class="golden">mensaje3</b><b class="morado">()</b> <br> <b class="naranja">${animal1.mensaje3()}</br> <br><br> <br>
        </code>
        `;
  }

  //añadir propiedad al objeto y al prototipo de Perro
  perro1.color = "marron";
  Perro.prototype.tamaño = "grande";
  Perro.prototype.personalidad = function () {
    return `${this.nombre} es muy alegre y le gusta correr y jugar con ${animal1.nombre}`;
  };

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
        `;

    notas.style.display = "block";
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
        
        `;

    consola.innerHTML = `
        <b class="verde">//primera instancia</b><br>
        <code>
            <b class="doger">animal1</b> <br> ${JSON.stringify(animal1, null, 2)} <br> <br>

            <b class="doger">animal1</b>.<b class="golden">mensaje</b><b class="morado">()</b> <br> <b class="naranja">${animal1.mensaje()}</b> <br><br>
        </code>

        <b class="verde">//segunda instancia</b><br>
        <b class="doger">animal2</b> <b>${JSON.stringify(animal2)}</b><br> <br>
        <b class="doger">animal2</b>.<b class="golden">mensaje</b><b class="morado">()</b> <br>
        
        <b class="naranja">${animal2.mensaje()}</b>
        `;
  } else if (tipo == "herencia") {
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
        `;

    notas.style.display = "block";
    notas.innerHTML = `
        
        <b>Explicacion:</b><br>
        <b class="doger">perro1</b> crea una instacia de la plantilla <span class="aqua">Perro</span> que asu vez extendera propiedades de la plantilla <span class="aqua">Animal</span> por medio de <span class="azul">super</span> que accede a su constructor y trae las propiedades: <span class="sky">tipo</span> y <span class="sky">nombre</span>, despues tiene su propia propiedad: <span class="sky">raza</span> y metodo, y recibe dos propiedades adicionales y otro metodo. 
        <ul>
            <li><span class="sky">color</span> esta instacia añade su propia propiedad de color para usar en su mensaje. Va directo al objeto.</li>
            <li><span class="sky">tamaño</span> al prototipo mandamos la propiedad tamaño especifica para esta clase tambien.</li>
            <li><span class="golden">personalidad</span> un metodo que agregamos al prototipo de nuestra clase y toma la propiedad nombre de su extencion y toma otra de un objeto ya creado <span class="doger">animal1</span>.</li>
        </ul>
        
        `;
    consola.innerHTML = `
        <b class="doger">perro1</b> + <b class="golden">mensaje</b><b class="morado">()</b> + <b class="golden">personalidad</b><b class="morado">()</b> <br>
        <b>${JSON.stringify(perro1, null, 2)}</b><br> 
        <b class="naranja">${perro1.mensaje()} <br><br>${perro1.personalidad()}</b> 
        `;
  } else if (tipo == "getYset") {
    class User {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      get userAge() {
        return `${this.age}`;
      }
      set userAge(age) {
        return `${(this.age = age)}`;
      }
    }
    const David = new User("David", 15);

    notas.style.display = "none";

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
        `;

    consola.innerHTML = `
        <code>
            <b class="doger">David</b>  ${JSON.stringify(David)} <br><br>

            <b class="verde">//obtener elemento</b><br>
            <b class="doger">David</b>.<b class="sky">userAge</b> ${David.userAge} <br><br>

            <b class="verde">//añadir elemento</b><br>
            <b class="doger">David</b>.<b class="sky">userAge</b> = <b class="verde">50</b> ${(David.userAge = 50)} <br><br>

            <b class="doger">David</b>  ${JSON.stringify(David)} <br><br>
        </code>
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
ejecutarClases("ConstruirArray2");

//formatoJSON
function ejecutarformatoJSON() {
  const consola = document.getElementById("consola-formatoJSON");

  const json = '{"nombre": "luis", "apellido": "Puente" , "edad": 32}';
  const parsear = JSON.parse(json);

  consola.innerHTML = `
    ${parsear}<br><br>

    ${JSON.stringify(parsear)}<br>
    ${JSON.stringify(parsear, ["nombre", "edad"])}<br>
    ${JSON.stringify(parsear, null, 1)}<br><br>
    
    ${JSON.stringify(json)}<br>
    `;
}
ejecutarformatoJSON();
