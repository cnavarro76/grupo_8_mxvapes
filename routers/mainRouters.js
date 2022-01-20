const express = require('express');
const mainController = require('../controllers/mainControllers');
const multer = require('multer');
const path = require('path');

const mainRouters = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/img/usuarios'))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
  }) 

mainRouters.get('/', mainController.index);
mainRouters.get('/login', mainController.login);
mainRouters.get('/productCart', mainController.productCart);
mainRouters.get('/productDetail', mainController.productDetail);
mainRouters.get('/products-edit', mainController.editarProducto);
mainRouters.get('/detail/:id/', mainController.productDetail);

mainRouters.get('*', mainController.err404);


module.exports = mainRouters;