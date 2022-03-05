//********** Require's **********
const express = require('express');
const productsRouter = express.Router();
const multer = require('multer');
const path = require('path');

// Middlewares
const validations = require('../middlewares/validateProductsMiddleware');
const validation = require('../middlewares/validateEditMiddleware');

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
productsRouter.get('/', productsController.products);

//******* Create One Product **********
productsRouter.get('/create',  productsController.productCreate);
var uploadFile = multer({ storage: storage })
productsRouter.post('/create', uploadFile.single('image'), validations, productsController.productSave);  

//********** Get One Product **********
productsRouter.get('/:id/', productsController.productDetail);

//********** Edit One Product **********
productsRouter.get('/edit/:id', productsController.productEdit);
var upload = multer({ storage: storage })
productsRouter.put('/edit/:id', uploadFile.single('image'), validation, productsController.productUpdate);

//********** Delete One Product **********
productsRouter.delete('/delete/:id', productsController.productDelete);


module.exports = productsRouter;