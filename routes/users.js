var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

/* creacion  */
router.get('/login', usersController.login);


router.get('/register', usersController.register);
router.post('/register', usersController.guardarUsuario);




/*router.get('/crear', usersController.crear);
router.post('/crear', usersController.guardar);

//Lectura

router.get('/', usersController.listado);

// Detalle

router.get('/:id', usersController.detalle);

//Actualización

router.get('/editar/:id', usersController.editar);
router.post('/editar/:id', usersController.actualizar);

//Borrar

router.post("/borrar/:id", usersController.borrar);*/


module.exports = router;
