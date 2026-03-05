const consola = document.getElementById("consola-Proyecto-HTTP")
const contenedor = document.getElementById("content-targets")

function ProyectoSolicitudesHTTP(tipo){
    const titulo = document.getElementById("titulo-post").value
    const contenido = document.getElementById("contenido-post").value

    async function traerPost(){
        const response = await enviarPeticion("GET","https://jsonplaceholder.typicode.com/posts")
        console.log(response)

        // para no traer los 100 posts, sino solo los primeros 12
        const listaDePost = response.slice(0, 12)

        for(const post of listaDePost){

            const target = document.createElement("div")
            target.id = "target" + post.id
            target.classList.add("targets")

                const articulo = document.createElement("article")
                articulo.style.height = "300px"

                    const title = document.createElement("h2")
                    title.textContent = post.title

                    const body = document.createElement("p")
                    body.textContent = post.body
                
                articulo.append(title)
                articulo.append(body)

                const footer = document.createElement("div")
                footer.innerHTML = `UserID:${post.userId} -- ID:${post.id}`
                footer.classList.add("footer")

            target.append(articulo)
            target.append(footer)

            contenedor.append(target)
        }

        consola.innerHTML = `
        <b>Datos del primer post:</b>
        <p>
            <b class="doger">reponse</b><b class="golden">[<b class="verde">0</b>]</b>.<b class="sky">userId</b> <br> <b>${response[0].userId}</b>
        </p>
        <p>
            <b class="doger">reponse</b><b class="golden">[<b class="verde">0</b>]</b>.<b class="sky">id</b> <br> <b>${response[0].id}</b> 
        </p>
        <p>
            <b class="doger">reponse</b><b class="golden">[<b class="verde">0</b>]</b>.<b class="sky">title</b> <br> <b>${response[0].title}</b> <br><br>
        </p>
        <p>
            <b class="doger">reponse</b><b class="golden">[<b class="verde">0</b>]</b>.<b class="sky">body</b> <br> <b>${response[0].body}</b> <br><br>
        </p>
        `
    }

    async function crearPost(title, content){
        const userID = Math.random()
        const post = {
            title: title,
            body: content,
            userID: userID
        }
        enviarPeticion("POST","https://jsonplaceholder.typicode.com/posts", post)

        consola.innerHTML = `
        para ver este post, ir a la consola del navegador, networks y post <br><br> 
        <b class="naranja">${JSON.stringify(post,null,2)}</b>`

        console.log(post)
    }

    if(tipo == "traer-post"){
        traerPost()
    }
    else if(tipo == "enviar-post"){
        crearPost(titulo, contenido)
    }
}

function enviarPeticion(metodo, url, data){
    return fetch(url,{
        method: metodo,
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(data),
    }).then(response => {
        return response.json()}
    )
}