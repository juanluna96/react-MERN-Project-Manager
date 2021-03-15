const express = require('express');
const conectarDB = require('./config/db');

// Crear el servidor

const app = express();

// Conectar a la bd
conectarDB();

// Habilitar express.json
app.use(express.json({ extended: true }));

// Puerto de la app
const PORT = process.env.PORT || 4000;

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));

// Definir la pagina principal
app.get('/', (req, res) => {
    res.send('Hola mundo')
})

// Arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
})