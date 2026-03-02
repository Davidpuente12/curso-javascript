import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

// reconstruir __dirname y __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname)

sharp(path.join(__dirname, 'icon.png'))
    .resize(80)
    .grayscale()
    .toFile(__dirname + '/resized.png')

