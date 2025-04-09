var express = require('express');
var router = express.Router();

/* GET reportes page. */
router.get('/', function(req, res, next) {
  res.render('reportes', {
    title: 'Hoy me senti',            
    message: 'Bienvenido a Express con HBS y layout', 
  });
});

module.exports = router;
