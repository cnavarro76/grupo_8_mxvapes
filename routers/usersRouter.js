const express = require('express');
const usersRouter = express.Router();

// Controller
const usersController = require('../controllers/usersControllers');

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');



  //*****Registrar un cliente**********
  //Usuarios registro (GET)
    usersRouter.get('/register', guestMiddleware, usersController.register); //falla el guestMiddleware
  //Usuarios registro (POST)
    usersRouter.post('/register', uploadFile.single('image'), validations, usersController.processRegister);  

  // Formulario de login
  usersRouter.get('/login', guestMiddleware, usersController.login); //falla el guestMiddleware
  
  // Procesar el login
  usersRouter.post('/login', usersController.loginProcess);

  //Perfil de Usuario
  usersRouter.get('/profile', authMiddleware, usersController.profile); //falla el authMiddleware

  // Logout
  usersRouter.get('/logout', usersController.logout);




  //Error 404
   usersRouter.get('*', usersController.err404);

module.exports = usersRouter;