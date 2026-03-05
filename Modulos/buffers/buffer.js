// crear un buffer (espacios en memoria vacios)
const buffer = Buffer.alloc(5)
console.log(buffer)
buffer[2] = 41 // guardar datos
console.log(buffer)

// crear un buffer (a partir de un string)
const string = Buffer.from('Hola')
const array = Buffer.from([1,2,3,4])
console.log(string, array)

// crear un abecedario
let abc = Buffer.alloc(26)
for(let i = 0; i < 26; i++){
    abc[i] = i + 97  //97 es el código ASCII de la letra 'a'
}
console.log(abc)
console.log(abc.toString())

