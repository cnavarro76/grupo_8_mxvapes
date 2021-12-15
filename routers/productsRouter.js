const express = require('express');
const productsController = require('../controllers/productsControllers');

const mainRouters = express.Router();

mainRouters.get('/', productsController.products);
mainRouters.get('/detail/:id', productsController.productDetail);




module.exports = mainRouters;