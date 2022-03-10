var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');




router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});


router.get('/productDetail', function (req, res, next) {
    res.render('detalleProducto', {
        title: 'Express'
    });
});



/*router.get('/productCart', mainController.productCart);
router.get('/vapeo', mainController.vapeo);
router.get('/cbd', mainController.cbd);
router.get('/sales', mainController.sal);*/


module.exports = router;