const express = require('express');
const productsControllers = require('../controllers/productsControllers');

const mainRouters = express.Router();


mainRouters.get('/detail/:id/', productsControllers.productDetail);




module.exports = mainRouters;