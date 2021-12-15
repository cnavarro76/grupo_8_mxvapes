const express = require('express');
const mainController = require('../controllers/productsControllers');

const mainRouters = express.Router();


mainRouters.get('/detail/:id/', mainController.productDetail);




module.exports = mainRouters;