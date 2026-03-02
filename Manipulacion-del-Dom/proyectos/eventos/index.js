// ESTADO INICIAL  
const state = {
    likes: 0,
    isHovering: false
}

function getStatusMessage() {
  if (state.likes === 0) return 'Aún no hay likes. Haz clic en me gusta';
  if (state.likes === 1) return 'Tienes 1 like. Buen inicio';
  return `Tienes ${state.likes} likes. Sigue así`;
}


const btnLike = document.getElementById('btn-like');
const btnReset = document.getElementById('btn-reset');
const hoverZone = document.getElementById('hover-zone');

const hoverPill = document.getElementById('hover-pill');
const hoverTitle = document.getElementById('hover-title');
const hoverText = document.getElementById('hover-text');


// RENDERIZAR  
function render(){
    const status = document.getElementById('status')

    // renderizamos el mensaje 
    status.textContent = getStatusMessage()

    // si no hay likes, dehabilitamos el boton 'reset' | y lo volvemos opaco
    btnReset.disabled = state.likes === 0 // true
    btnReset.style.opacity = state.likes === 0 ? '0.55' : '1'

    // aplica una clase al contenedor si se cumple la condicion
    hoverZone.classList.toggle('is-hover', state.isHovering)
    // deja un mensaje en la "pildora"
    hoverPill.textContent = state.isHovering ? 'mouse: dentro' : 'mouse: fuera'
    // deja un mensaje en el titulo
    hoverTitle.textContent = state.isHovering ? 'Hover detectado' : 'Pasa el mouse aqui'
    // deja un mensaje en el parrafo
    hoverText.textContent = state.isHovering ? 'Este cambio se disparo por mousenter' : 'Cuando entras/sales, cambiamos una clase y el texto.'
    
}

// EVENTOS
function setupEvents(){

    btnLike.addEventListener('click', () => {
        state.likes += 1
        render()
    })

    btnReset.addEventListener('click', () => {
        state.likes = 0
        render()
    })

    hoverZone.addEventListener('mouseenter', () => {
        state.isHovering = true
        render()
    })

    hoverZone.addEventListener('mouseleave', () => {
        state.isHovering = false
        render()
    })
}

// EVENTO DE TECLADO
function setupKey(){
    document.addEventListener('keydown', (event) => {
        if(event.key?.toLocaleLowerCase() != 'l') return
        state.likes += 1
        render()
    })
}

render()
setupEvents()
setupKey()