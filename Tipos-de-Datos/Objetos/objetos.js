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
    `;
  }
  // Property Shorthand
  else if (tipo == "Property-Shorthand") {
    const nombre = "David";
    const lastname = "Puente";
    const edad = 30;

    const usuario = { nombre, edad, apellido: lastname };

    codigo.innerHTML = `
        <p>
            <b class="azul">const</b> <b class="doger">nombre</b> = <b class="naranja">"David"</b> <br>
            <b class="azul">const</b> <b class="doger">lastname</b> = <b class="naranja">"Puente"</b> <br>
            <b class="azul">const</b> <b class="doger">edad</b> = <b class="verde">30</b> <br><br>
        </p> 

        <p>
            <b class="azul">const</b> <b class="doger">usuario</b> = <b class="golden">{</b> <br>
            &emsp;&emsp;<b class="sky">nombre</b>,<br> 
            &emsp;&emsp;<b class="sky">edad</b>,<br>
            &emsp;&emsp;<b>//Personalizar</b><br>
            &emsp;&emsp;<b class="sky">apellido:</b> <b class="doger">lastname</b>,<br>
            <b class="golden">}</b> 
        </p> 
        `;

    consola.innerHTML = `
        <b class="doger">usuario</b> ${JSON.stringify(usuario)} <br><br>   
        `;
  }

  // Seccion añadir/Eliminar propiedades
  else if (tipo == "Seccion-añadir-propiedad") {
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
          <button class="btn-consola" onclick="ejecutarObjeto('añadir-propiedad')">añadir</button><br>
          <b class="doger">automovil</b>.<b class="sky">año</b> = <b class="verde">2022</b> 
        </p>

        <p>
          <b>borrar propiedad:</b>
          <button class="btn-consola" onclick="ejecutarObjeto('borrar-propiedad')">borrar</button><br>
          <b class="azul">delete</b> <b class="doger">automovil</b>.<b class="sky">año</b>
        </p>
    `;

    consola.innerHTML = "";
  }
  //Btn añadir propiedades
  else if (tipo == "añadir-propiedad") {
    automovil.año = 2022;

    consola.innerHTML = `
        <b class="doger">automovil</b> <br> ${JSON.stringify(automovil)} <br><br>
        <b class="doger">automovil</b>.<b class="sky">año</b> ${automovil.año} 
    `;
  }
  //Btn eliminar propiedades
  else if (tipo == "borrar-propiedad") {
    delete automovil.año;

    consola.innerHTML = `
        <b class="doger">automovil</b> <br> ${JSON.stringify(automovil)} <br><br>
        <b class="doger">automovil</b>.<b class="sky">año</b> ${automovil.año} 
        `;
  }
}

// Función constructora Object
document.getElementById("constructor").addEventListener("click", () => {
  ejecutarFncCnstraConPrototype("constructor");
});

document.getElementById("metodos-estaticos").addEventListener("click", () => {
  ejecutarFncCnstraConPrototype("metodos-estaticos");
});

document.getElementById("metodos-prototype").addEventListener("click", () => {
  ejecutarFncCnstraConPrototype("metodos-prototype");
});

function ejecutarFncCnstraConPrototype(tipo) {
  const consola = document.getElementById("consola-Object");

  const usuario = new Object();
  usuario.nombre = "David";
  usuario.apellido = "Puente";
  usuario.edad = 30;
  usuario.hobbies = ["programar", "jugar", "correr"];
  usuario.saludar = function () {
    return `Hola, mi nombre es ${this.nombre} ${this.apellido}.`;
  };

  consola.innerHTML = `
    <p>
      <b class="doger">usuario</b> <br> ${JSON.stringify(usuario)} 
    </p>
  `;

  if (tipo == "constructor") {
    consola.innerHTML = `
      <p>
        <b class="doger">usuario</b> <br> ${JSON.stringify(usuario)} 
      </p>
    `;
  } else if (tipo == "metodos-estaticos") {
    consola.innerHTML = `
      <p>
        <b class="aqua">Object</b>.<b class="golden">keys(</b><b class="doger">usuario</b><b class="golden">)</b> ${JSON.stringify(Object.keys(usuario))} 
      </p>
      <p>
        <b class="aqua">Object</b>.<b class="golden">values(</b><b class="doger">usuario</b><b class="golden">)</b> ${JSON.stringify(Object.values(usuario))} 
      </p>

      <br/>
      <b>Pares clave-valor</b>
      <p>
        <b class="aqua">Object</b>.<b class="golden">entries(</b><b class="doger">usuario</b><b class="golden">)</b> ${JSON.stringify(Object.entries(usuario))} 
      </p>
      <p>
        <b class="aqua">Object</b>.<b class="golden">entries(</b><b class="doger">usuario</b><b class="golden">)</b>[3] ${JSON.stringify(Object.entries(usuario)[3])} 
      </p>
    `;
  } else if (tipo == "metodos-prototype") {
    consola.innerHTML = `
      <p>
        <b class="doger">usuario</b>.<b class="golden">hasOwnProperty(</b><b class="naranja">"nombre"</b><b class="golden">)</b> ${JSON.stringify(usuario.hasOwnProperty("nombre"))} 
      </p>
      <p>
        <b class="doger">usuario</b>.<b class="golden">toString()</b> ${JSON.stringify(usuario.toString())} <br>
      </p>
      <p>
        <b class="doger">usuario</b>.<b class="golden">valueOf()</b> ${JSON.stringify(usuario.valueOf())} <br>
      </p>
    `;
  }
}

// DESESTRUCTURACION
function ejecutarDesestructuracion() {
  const consola = document.getElementById("consola-desestructuracion");

  const automovil = {
    marca: "Toyota",
    modelo: "Corolla",
    direccion: { calle: 200, carrera: 22 },
    vender: function () {
      return `El automovil ${automovil.marca} se vende por 2000$.`;
    },
  };

  let {
    marca,
    modelo,
    direccion: { calle, carrera },
  } = automovil;
  let { marca: brand } = automovil;

  function auto({ marca, modelo, direccion }) {
    return `${marca} ${modelo} ${direccion.calle}`;
  }

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

document.addEventListener("DOMContentLoaded", () => {
  ejecutarObjeto("objeto");
  ejecutarDesestructuracion();
});
