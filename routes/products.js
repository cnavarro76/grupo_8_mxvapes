var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');

/* creacion  */
router.get('/crear', productsController.crear);
router.post('/crear', productsController.guardar);

//Lectura

router.get('/', productsController.listado);

// Detalle

router.get('/:id', productsController.detalle);

//Actualización

router.get('/editar/:id', productsController.editar);
router.post('/editar/:id', productsController.actualizar);

//Borrar

router.post("/borrar/:id", productsController.borrar);


module.exports = router;