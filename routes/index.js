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





module.exports = router;