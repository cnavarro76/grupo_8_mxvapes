const express = require('express');
const usersRouter = express.Router();

// Controller
const usersController = require('../controllers/usersControllers');

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');



  //*****Registrar un cliente**********
  //Usuarios registro (GET)
    usersRouter.get('/register', guestMiddleware, usersController.register); 
  //Usuarios registro (POST)
    usersRouter.post('/register', uploadFile.single('image'), validations, usersController.processRegister);  

  // Formulario de login
  usersRouter.get('/login', guestMiddleware, usersController.login); 
  
  // Procesar el login
  usersRouter.post('/login', usersController.loginProcess);

  //Perfil de Usuario
  usersRouter.get('/profile', authMiddleware, usersController.profile); 

  // Logout
  usersRouter.get('/logout', usersController.logout);



  // usersRouter.get('/*', usersController.err404);
  

module.exports = usersRouter;