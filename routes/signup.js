var express = require('express');
var router = express.Router();

/* GET signup page. */
router.get('/', function(req, res, next) {
  res.render('signup', {
    title: 'Registrate',  
  });
});

module.exports = router;
