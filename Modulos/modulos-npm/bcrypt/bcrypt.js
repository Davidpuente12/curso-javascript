import bcrypt from 'bcrypt';

const password = "1234segura!";
const saltRounds = 10; // Más seguro

bcrypt.hash(password, saltRounds, (error,hash) => {
    console.log(hash)
    
    bcrypt.compare(password, hash, (error, result) => {
        console.log(result)
    }) 
})
   
// MANEJAR EL ASINCRONISMO CON ASYN Y AWAIT:

// async function gestionarPassword() {
//     try {
//         // 1. Generar el hash
//         const hash = await bcrypt.hash(password, saltRounds);
//         console.log("Hash generado:", hash);

//         // 2. Comparar
//         const resultado = await bcrypt.compare(password, hash);
//         console.log("¿Coincide?:", resultado);

//         return { hash, resultado };
//     } catch (error) {
//         console.error("Error en el proceso:", error);
//     }
// }
// gestionarPassword()