const express = require('express');
const usersRouter = express.Router();
const multer = require('multer');
const path = require('path');

// Controller
const usersController = require('../controllers/usersControllers');

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/img/usuarios'))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
  }) 

  //*****Registrar un cliente**********
  //Usuarios registro (GET)
    usersRouter.get('/register', usersController.register); //falla el guestMiddleware
  //Usuarios registro (POST)
    var upload = multer({ storage: storage })
    usersRouter.post('/register', upload.single('imagenes'), validations, usersController.registerSave);  

  // Formulario de login
  usersRouter.get('/login', usersController.login); //falla el guestMiddleware
  
  // Procesar el login
  usersRouter.post('/login', usersController.loginProcess);

  //Perfil de Usuario
  usersRouter.get('/profile', usersController.profile); //falla el authMiddleware

  // Logout
  usersRouter.get('/logout', usersController.logout);




  //Error 404
   usersRouter.get('*', usersController.err404);

module.exports = usersRouter;