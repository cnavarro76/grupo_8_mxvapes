const express = require('express');
const mainController = require('../controllers/mainControllers');

const mainRouters = express.Router();

mainRouters.get('/', mainController.index);
mainRouters.get('/login', mainController.login);
mainRouters.get('/productCart', mainController.productCart);
mainRouters.get('/productDetail', mainController.productDetail);
mainRouters.get('/register', mainController.register);
mainRouters.get('*', mainController.err404);

module.exports = mainRouters;