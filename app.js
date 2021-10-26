const express = require('express');

const app = express();

const path = require('path');

const port = 3030;

app.use(express.static('public'));

app.listen (port, () => console.log(`Servidor corriendo en el puerto ${port}`));

app.get('/', function(req,res) {
    res.sendFile(path.resolve(__dirname + '/views/home.html'));
});