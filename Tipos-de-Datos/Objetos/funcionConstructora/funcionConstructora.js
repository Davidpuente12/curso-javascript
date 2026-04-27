//FUNCION CONSTRUCTORA
function ejecutarFuncionConstructora() {
  const consola = document.getElementById("consola-funcionConstructora");

  function Personas(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function () {
      return `Soy ${this.nombre} tengo ${this.edad}`;
    };
  }

  const persona1 = new Personas("Luis", 30);
  const persona2 = new Personas("Sharon", 31);
  const persona3 = new Personas("Adriana", 28);

  consola.innerHTML = `
  <p>
    <b class="doger">persona1</b>.<b class="golden">saludar()</b> ${JSON.stringify(persona1) + "<br>" + persona1.saludar()}
  </p>
   <p>
    <b class="doger">persona2</b>.<b class="golden">saludar()</b> ${JSON.stringify(persona2) + "<br>" + persona2.saludar()}
  </p>
  <p>
    <b class="doger">persona3</b>.<b class="golden">saludar()</b> ${JSON.stringify(persona3) + `<br>` + persona3.saludar()}
  </p>
  `;
}

function ejecutarFncCnstraConPrototype() {
  const consola = document.getElementById("consola-prototype");

  function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  //añadir propiedades al prototipo
  Persona.prototype.pais = "Venezuela";
  Persona.prototype.saludar = function () {
    return `Soy ${this.nombre} tengo ${this.edad} y soy de ${this.pais}`;
  };

  const persona1 = new Persona("Luis", 30);
  const persona2 = new Persona("Sharon", 31);
  const persona3 = new Persona("Adriana", 28);

  consola.innerHTML = `
  <p>
    <b class="doger">persona1</b>.<b class="golden">saludar()</b> ${persona1.saludar()}
  </p>
   <p>
    <b class="doger">persona2</b>.<b class="golden">saludar()</b> ${persona2.saludar()}
  </p>
  <p>
    <b class="doger">persona3</b>.<b class="golden">saludar()</b> ${persona3.saludar()}
  </p>
  `;
}
