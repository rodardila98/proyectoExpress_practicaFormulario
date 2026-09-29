const express = require('express');
const app = express();
const port = 3000;

app.get('/saludo', (req, res) => {

    res.json({mensaje:'Hola mundo, API JSON'});
});

app.listen(port, () =>{

    console.log(`Servidor corriendo en http://localhost:${port}`);
});