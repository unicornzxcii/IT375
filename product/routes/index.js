var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { stuname: '624608020005 Watcharaphon' });
});

module.exports = router;
