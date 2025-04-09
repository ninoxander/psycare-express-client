var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Inicio',            
    message: 'Bienvenido a Express con HBS y layout', 
  });
});

module.exports = router;
