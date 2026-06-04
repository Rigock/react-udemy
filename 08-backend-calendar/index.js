const path = require('path');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Crear servidor de express
const app = express();

// Base de datos
dbConnection();

//CORS
app.use(cors());

// Directorio Public
app.use( express.static('public') );

// Lectura y PARSE del Body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

app.use( '/*', (req, res) => {
  res.sendFile(path.join( __dirname, 'public/index.html' ) );
});

// Escuchar peticiones
app.listen( process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
} )