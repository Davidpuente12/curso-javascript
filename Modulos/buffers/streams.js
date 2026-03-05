import fs, { read } from 'fs' //modulo que permite leer archivos

// reconstruir __dirname y __filename
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// stream de lectura
let data = ''

let readableStream = fs.createReadStream(__dirname + '/texto.txt') // permite leer el archivo en pedazos
readableStream.setEncoding('UTF8') // transformar a utf8

readableStream.on('data', function(chunk) {
   data += chunk;
});

readableStream.on('end', function() {
   console.log(data);
});

readableStream.on('error', function(err) {
   console.log(err.stack);
});

