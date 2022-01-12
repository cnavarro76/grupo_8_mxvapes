//********** Require's **********
const express = require('express');
const mainRouters = express.Router();
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/img/productos'))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
  }) 


// ********** Controller Require **********
const productsController = require('../controllers/productsControllers');

//********** Get All Products **********
mainRouters.get('/', productsController.products);

//******* Create One Product **********
mainRouters.get('/create', productsController.productCreate);
var upload = multer({ storage: storage })
mainRouters.post('/create', upload.single('imagenes'), productsController.productSave);  

//********** Get One Product **********
mainRouters.get('/:id/', productsController.productDetail);

//********** Edit One Product **********
mainRouters.get('/edit/:id', productsController.productEdit);
var upload = multer({ storage: storage })
mainRouters.put('/edit/:id', upload.single('imagenes'),productsController.productUpdate);

//********** Delete One Product **********
mainRouters.delete('/delete/:id', productsController.productDelete);


module.exports = mainRouters;