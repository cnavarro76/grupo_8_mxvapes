const express = require('express');
const productsController = require('../controllers/productsControllers');

const mainRouters = express.Router();

mainRouters.get('/', productsController.products);
mainRouters.get('/:id/', productsController.productDetail);
mainRouters.get('/:id/edit', productsController.productEdit);




module.exports = mainRouters;