const express = require('express');
const cors = require('cors'); // 1. Importar el paquete
const app = express();

app.use(cors()); // 2. Permitir cualquier origen (Acceso total)
app.use(express.json());

// Importar y usar tus rutas
const usuarioRoutes = require('./routes/usuario.routes');
app.use('/usuarios', usuarioRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});