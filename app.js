const express = require('express');
const app = express();

const mainRoutes = require('./routes/mainRoutes') // Usar el archivo de rutas

app.set('view engine', 'ejs'); // asignar ejs como motor de plantillas
app.set(express.static('./public')); // asignar la carpeta para recursos publicos

app.use('/', mainRoutes); // usar para rutas main

app.listen(3000, () => {
    console.log('servidor corriendo en localhost:3000/');
});