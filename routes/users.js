var express = require('express');
var router = express.Router();

// Controller
var usersController = require('../controllers/usersController');

// Middlewares
const uploadFile = require("../middlewares/multerMiddleware");
const validations = require('../middlewares/validateRegisterMiddleware');

/* creacion  */
router.get('/login', usersController.login);
// router.post('/login', usersController.loginProcess);

router.get('/register', usersController.register);
router.post("/register", uploadFile.single("image"), validations, usersController.guardarUsuario);




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
