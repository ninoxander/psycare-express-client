var express = require('express');
var router = express.Router();

/* GET perfil page. */
router.get('/', function(req, res, next) {
    res.render('profile', {
        title: 'Perfil',            
    });
});

module.exports = router;
