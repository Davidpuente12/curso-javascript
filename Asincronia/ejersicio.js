async function getUser(id) {
  try {
    const response = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
    if (!response.ok) {
      throw new Error(`Error (${response.status})`);
    }

    const datos = await response.json();
    return datos;
  } catch (error) {
    return `error al cargar usuario: ${error.message}`;
  }
}

const usuario = await getUser(5);
console.log(usuario);
