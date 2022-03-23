var express = require('express');
var router = express.Router();
var navbarController = require('../controllers/navbarController');



// rutas menu
router.get('/search', navbarController.search);
router.get('/:id', navbarController.kits);



module.exports = router;