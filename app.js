const express = require('express');
const mainRouters = require('./routers/mainRouters')
const productsRouter = require('./routers/products');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

/*Add static Files */
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor corriendo en puerto 3000');
})

/*require routers*/

app.use('/', mainRouters);
app.use('/products', productsRouter)