const opiniones = [
  {
    id: 'op-1',
    nombre: 'María',
    rating: 5,
    comentario: 'Llegó rápido y la calidad es excelente.',
    fecha: '2025-01-10',
  },
  {
    id: 'op-2',
    nombre: 'Carlos',
    rating: 4,
    comentario: 'Buen producto. El empaque podría mejorar.',
    fecha: '2025-01-22',
  },
  {
    id: 'op-3',
    nombre: 'Luisa',
    rating: 5,
    comentario: 'Muy cómodo. Compraría de nuevo.',
    fecha: '2025-02-03',
  },

  {
    id: 'op-5',
    nombre: 'Oscar',
    rating: 5,
    comentario: 'Muy cómodo. Compraría de nuevo.',
    fecha: '2025-02-03',
  },
];

function createOpinionElement(opinion){
    const article = document.createElement('article')
    article.classList.add('opinion')
    article.dataset.id = opinion.id

    const header = document.createElement('header')

        const meta = document.createElement('div')
        meta.classList.add('meta')

            const nombre = document.createElement('strong')
            nombre.textContent = opinion.nombre

            const rating = document.createElement('span')
            rating.textContent = `⭐ ${opinion.rating}`

    // insetar en meta
    meta.appendChild(nombre)
    meta.appendChild(rating)

    const fecha = document.createElement('small')
    fecha.classList.add('muted')
    fecha.textContent = opinion.fecha

    // insetar en header
    header.appendChild(meta)
    header.appendChild(fecha)

    const comentario = document.createElement('p')
    comentario.textContent = opinion.comentario

    // insetar en article
    article.appendChild(header)
    article.appendChild(comentario)

    return article
}

function renderOpinion(lista){
    const contenedor = document.getElementById('opiniones')
    contenedor.replaceChildren()

    lista.forEach(item => {
        const elemento = createOpinionElement(item)
        contenedor.appendChild(elemento)
    })
}

export function initOpiniones(list = opiniones) {
    renderOpinion(list)
}

// solo exportamos la función de inicialización, el resto queda privado dentro del módulo.
// rederOpnion llama a createOpinionElement, que es la que se encarga de crear el elemento del DOM para cada opinión.