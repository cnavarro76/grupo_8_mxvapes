const express = require('express');
const productsController = require('../controllers/productsControllers');

const mainRouters = express.Router();

mainRouters.get('/create', productsController.productCreate);
mainRouters.post('/', productsController.productSave);

mainRouters.get('/:id/', productsController.productDetail);


mainRouters.get('/:id/edit', productsController.productEdit);
mainRouters.put('/:id/actualizar', productsController.productPut);

mainRouters.get('/', productsController.products);







module.exports = mainRouters;