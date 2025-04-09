var express = require('express');
var router = express.Router();

/* GET diario page. */
router.get('/', function(req, res, next) {
  res.render('diario', {
    title: 'Hoy me senti',            
    message: 'Bienvenido a Express con HBS y layout', 
  });
});

module.exports = router;
