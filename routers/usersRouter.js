const express = require('express');
const usersController = require('../controllers/usersControllers');
const multer = require('multer');
const path = require('path');

const usersRouter = express.Router();

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
    usersRouter.get('/register', usersController.register);
  //Usuarios registro (POST)
    var upload = multer({ storage: storage })
    usersRouter.post('/register', upload.single('imagenes'), usersController.registerSave);  
  //Error 404
    usersRouter.get('*', usersController.err404);

module.exports = usersRouter;