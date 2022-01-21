const express = require('express');
// const session = require('express-session');
const cookies = require('cookie-parser');
const methodOverride = require('method-override');

const app = express();

//const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

// app.use(session({
// 	secret: "Shhh, It's a secret",
// 	resave: false,
// 	saveUninitialized: false,
// }));

app.use(cookies());
//app.use(userLoggedMiddleware);




app.use(express.json());

app.use(methodOverride('_method'));

app.use(express.urlencoded({
    extended: false
}));

/*Add static Files */
app.use(express.static('./public'));
app.listen(3000, () => console.log('Servidor levantado en el puerto 3000'));
// Template Engine
app.set('view engine', 'ejs');

// Routers
const mainRouters = require('./routers/mainRouters')
const productsRouter = require('./routers/productsRouter');
const usersRouter = require('./routers/usersRouter');

/*require routers*/
app.use('/', mainRouters);
app.use('/products', productsRouter);
app.use('/users', usersRouter);