const fakeAPI = "https://fakestoreapi.com/products";
const contenedor = document.getElementById("productos");

fetch(fakeAPI)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        redenderizarDatos(data)
    })
    .catch(error => console.log(error))

function redenderizarDatos(data){
    data.forEach(producto => {
        const articulo = document.createElement("article")

        const figure = document.createElement("figure")
        figure.classList.add("figure")

        const image = document.createElement("img")
        image.src = producto.image
        image.alt = producto.title
        image.loading = "lazy" // Carga diferida para mejorar el rendimiento
        image.referrerPolicy = "no-referrer" // Evita enviar información de referencia al cargar la imagen
        image.crossOrigin = "anonymous" // Permite cargar imágenes de otros dominios sin enviar cookies

        const title = document.createElement("p")
        title.classList.add("title")
        title.textContent = producto.title

        const price = document.createElement("p")
        price.textContent = `Precio: $${producto.price.toFixed(2)}`

        figure.appendChild(image)
        articulo.append(figure, title, price)
        contenedor.appendChild(articulo)
    })
}












// fetch(fakeAPI, {
//   method: 'POST', 
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json'
//   },
//   body: JSON.stringify({
//     title: 'Producto de prueba',
//     price: 19.99,
//     description: 'Este es un producto de prueba para la API de Fake Store.',
//     category: 1,
//     images: ['https://placeimg.com/640/480/any']
//   })
// })
//   .then(res => res.json())
//   .then(data => {
//     console.log(data); 
//   })
//   .catch(err => console.error(err));