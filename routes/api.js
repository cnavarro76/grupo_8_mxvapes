var express = require('express');
var router = express.Router();
var api = require('../controllers/api/api');



// rutas menu
router.get('/products', api.productsList);

router.get('/users', api.usersList);

module.exports = router;