const express = require('express');

const app = express();

const path = require('path');

const port = 3030;

app.use(express.static('public'));

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/views/index.html'));
});

app.get('/productDetail', function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
})

app.get('/productCart', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'views/productCart.html'));
})

app.get('/register', function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/login', function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})

app.get('*', (req, res) => {
    res.status(404).send('404 not found. <br> ¡Houston, we have a problem!');
});