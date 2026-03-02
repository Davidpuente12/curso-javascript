//                  CONDICIONALES
function condicionIF(){
    const input = document.getElementById("input-nota").value
    const consola = document.getElementById("consola-if")

    if(input == ""){
        consola.textContent = "⚠️ ingresa una nota"
    }else if (input == 20) {
        consola.textContent = "sobresaliente" 
    }
    else if (input >= 15 && input < 20) {
        consola.textContent = "Buen Trabajo"
    }
    else if (input >= 10 && input < 15) {
        consola.textContent = "Puede Mejorar"
    }
    else {
        consola.textContent = "Reprobado"
    }
}

function condicionSwitch(){
    const input = document.getElementById("input-fruta").value
    const consola = document.getElementById("consola-switch")

    switch (input) {
    case 'naranjas':
        consola.textContent = 'cuesta 2.000 pesos la libra'
        break
    case 'manzanas':
        consola.textContent = 'cuesta 4.000 pesos la libra'
        break
    case 'cambures':
        consola.textContent = 'cuesta 3.000 pesos la libra'
        break
    case 'mangos':
    case 'papayas':
        consola.textContent = 'cuesta 5.000 pesos la libra'
        break
    case "":
        consola.textContent = "⚠️ ingresa una fruta"
        break
    default:
        consola.textContent = 'Lo siento, no contamos con: ' + input
    }
}

function ejecutarOperadorTernario(){
    const consola = document.getElementById("consola-operador-termarioYnullish")
    const codigo = document.getElementById("codigo-operador-termarioYnullish")

    let edad = 30
    let mensaje = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad"

    codigo.innerHTML = `
    <p class="margenTop0">
        <b class="azul">let </b> <b class="sky">edad</b> = <b class="verde">30</b> <br>
        <b class="azul">let </b> <b class="sky">mensaje</b> = (<b class="sky">edad</b> >= <b class="verde">18</b>) ?
        <b class="naranja">"Es mayor de edad"</b> : <b class="naranja">"Es menor de edad"</b> 
    </p>
    `
    consola.innerHTML = `
    <p class="margenTop0">
        <b class="sky">mensaje</b> ${mensaje}
    </p>
    `
}

function ejecutarOperadorNullish(){
    const consola = document.getElementById("consola-operador-termarioYnullish")
    const codigo = document.getElementById("codigo-operador-termarioYnullish")

    const nombre = null ?? "Invitado"
    const edad = undefined ?? 18
    const cantidad = 0 ?? 12

    const usuarios = {}
    const nombre1 = usuarios.name ?? "Andres"

    codigo.innerHTML = `
    <p  class="margenTop0">
        <b class="azul">const</b> <b class="doger">nombre</b> = <b class="azul">null</b> ?? "Invitado" <br>
        
        <b class="azul">const</b> <b class="doger">edad</b> = 
        <b class="azul">undefined</b> ?? <b class="verde">18</b> <br>
        
        <b class="azul">const</b> <b class="doger">cantidad</b> = 
        <b class="verde">0</b> ?? <b class="verde">12</b> <br><br>

        <b class="azul">const</b> <b class="doger">usuarios</b> = {} <br>
        
        <b class="azul">const</b> <b class="doger">nombre1</b> = 
        <b class="doger">usuarios</b>.<b class="sky">name</b> ?? "Andres"
    </p>
    `
    consola.innerHTML = `
    <p class="margenTop0">
        <b class="doger">nombre</b> ${nombre} <br>
        <b class="doger">edad</b> ${edad} <br>
        <b class="doger">cantidad</b> ${cantidad} <b class="verde">cero NO es null ni undefined</b>
    </p>

    <p>
        <b class="doger">nombre</b> ${nombre1} <br>
    </p>
    `

}