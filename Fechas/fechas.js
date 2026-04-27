const consola = document.getElementById("consola-fechas");

consola.innerHTML = `
<p>
    <b class="sky">currentDate</b> ${new Date()}
</p>
<p>
    <b class="sky">date</b> ${new Date("2018/01/30 23:30:14")}
</p>
<p>
    <b class="sky">timestamp</b> ${new Date(872817240000)}
</p>
<p>
    <b class="sky">createDate</b> ${new Date(2018, 0, 30, 23, 30, 14, 0)}
</p>
`;

function ejecutarMetodosDate(tipo) {
  const consola = document.getElementById("consola-metodos-date");
  document
    .getElementById("btn-getMonth")
    .addEventListener("click", () => ejecutarMetodosDate("getMonth"));

  const date = new Date();
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  consola.innerHTML = `
    <b class="doger">date</b>.<b class="golden">getDay()</b> ${date.getDay()} <br>
    <b class="doger">date</b>.<b class="golden">getFullYear()</b> ${date.getFullYear()} <br>
    <b class="doger">date</b>.<b class="golden">getMonth()</b> ${date.getMonth()} <br>
    <b class="doger">date</b>.<b class="golden">getDate()</b> ${date.getDate()} <br>
    <b class="doger">date</b>.<b class="golden">getHours()</b> ${date.getHours()} <br>
    <b class="doger">date</b>.<b class="golden">getMinutes()</b> ${date.getMinutes()} <br>
    <b class="doger">date</b>.<b class="golden">getSeconds()</b> ${date.getSeconds()} <br>
    <b class="doger">date</b>.<b class="golden">getMilliseconds()</b> ${date.getMilliseconds()} <br>
    <b class="doger">date</b>.<b class="golden">getTime()</b> ${date.getTime()} <br>
    <b class="doger">date</b>.<b class="golden">getTimezoneOffset()</b> ${date.getTimezoneOffset()} 

    `;

  if (tipo === "getMonth") {
    consola.innerHTML = ` 
        <b class="doger">meses</b>[<b class="doger">date</b>.<b class="golden">getMonth()</b>]
        ${meses[date.getMonth()]} <br>
        `;
  }
}
ejecutarMetodosDate();

function ejecutarMetodosDateCompleted() {
  const consola = document.getElementById("consola-metodos-date-completed");
  const date = new Date();

  consola.innerHTML = `
    <b class="doger">date</b>.<b class="golden">toDateString()</b> ${date.toDateString()} <br>
    <b class="doger">date</b>.<b class="golden">toLocaleDateString()</b> ${date.toLocaleDateString()} <br>
    <b class="doger">date</b>.<b class="golden">toTimeString()</b> ${date.toTimeString()} <br>
    <b class="doger">date</b>.<b class="golden">toLocaleTimeString()</b> ${date.toLocaleTimeString()} 
    <b class="doger">date</b>.<b class="golden">toISOString()</b> ${date.toISOString()} <br>
    <b class="doger">date</b>.<b class="golden">toJSON()</b> ${date.toJSON()} <br>
    <b class="doger">date</b>.<b class="golden">toUTCString()</b> ${date.toUTCString()} 


    `;
}
ejecutarMetodosDateCompleted();

function ejecutarDateOperation() {
  const consola = document.getElementById("consola-date-operation");

  const inicio = new Date(2026, 2, 1);
  const fin = new Date(2026, 2, 31);
  const diferencia = fin - inicio;
  const dias = diferencia / (1000 * 60 * 60 * 24);

  consola.innerHTML = `
  <p>
    <b class="doger">diferencia</b> ${diferencia}
  </p>
  <p>
    <b class="doger">dias</b> ${dias}
  </p>
  `;
}
ejecutarDateOperation();

// PROYECT
function proyect() {
  const dayWeek = document.getElementById("day-week");
  const dayMonth = document.getElementById("day-month");
  const month = document.getElementById("month");
  const year = document.getElementById("year");

  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const dia = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  const date = new Date();

  dayWeek.textContent = dia[date.getDay()];
  dayMonth.textContent = date.getDate();
  month.textContent = meses[date.getMonth()];
  year.textContent = date.getFullYear();
}
proyect();
