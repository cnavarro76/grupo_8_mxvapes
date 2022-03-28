var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');

// Middlewares
const uploadProductFile = require('../middlewares/multerProductMiddleware');
const createvalidation = require('../middlewares/validateProductsMiddleware');
const editvalidation = require('../middlewares/validateEditMiddleware');

/* creacion  */
router.get('/crear', productsController.crear);
router.post('/crear', uploadProductFile.single('image'), createvalidation, productsController.guardar);

// rutas menu

// router.get('/ejuice', productsController.editar);
// router.get('/salts', productsController.editar);
// router.get('/pods', productsController.editar);
// router.get('/cbd', productsController.editar);
// router.get('/acesories', productsController.editar);



// Detalle

router.get('/:id', productsController.detalle);

//Actualización

router.get('/editar/:id', productsController.editar);
router.post('/editar/:id', editvalidation, productsController.actualizar);

//Borrar

router.post("/borrar/:id", productsController.borrar);




//Lectura

router.get('/', productsController.listado);



module.exports = router;