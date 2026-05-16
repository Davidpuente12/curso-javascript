const http = require("http");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Ruta del archivo solicitado
  let filePath = "." + req.url;
  if (filePath === "./") {
    filePath = "./index.html"; // Página por defecto
  }

  // Detectar extensión para el tipo de contenido
  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
  };

  const contentType = mimeTypes[extname] || "application/octet-stream";

  // Leer y servir archivo
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Archivo no encontrado</h1>", "utf-8");
      } else {
        res.writeHead(500);
        res.end(`Error del servidor: ${error.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);

  // Abrir navegador automáticamente en Windows
  exec(`start http://localhost:${PORT}`);
});
