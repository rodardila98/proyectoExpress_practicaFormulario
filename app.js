const express = require('express');
const app = express();
const cors = require('cors'); // 1. Importar el paquete
const sequelize = require('./config/database');

app.use(cors()); // 2. Permitir cualquier origen (Acceso total)
app.use(express.json());

const routes = require('./routes/usuario.routes');
app.use('/usuarios', routes);

sequelize.sync().then(() => {
    console.log('BD conectada');
    app.listen(3000, () => {
        console.log('Servidor en puerto 3000');
    });
});
