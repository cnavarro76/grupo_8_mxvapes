const express = require('express');

const app = express();

const path = require('path');



app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor corriendo en puerto 3000');    
})

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/views/index.html'));
});

app.get('/login', function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})

app.get('/productCart', function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'));
})

app.get('/productDetail', function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
})

app.get('/register', function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})



app.get('*', (req, res) => {
    res.status(404).send('404 not found. <br> ¡Houston, we have a problem!');
});