var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log('/ router 들어옴');
  res.render('index/main');
});

module.exports = router;
