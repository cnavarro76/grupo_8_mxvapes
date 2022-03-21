var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'MXVAPES'
  });
});

router.get('/productCart', function (req, res) {
  res.render('productCart')
})


router.get('/cbd', function (req, res) {
  res.render('cbd')
})


router.get('/sales', function (req, res) {
  res.render('sales')
})


router.get('/vapeo', function (req, res) {
  res.render('vapeo')
})





module.exports = router;