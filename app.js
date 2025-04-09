var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs'); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var infoRouter = require('./routes/info');
var testRouter = require('./routes/tests');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var profileRouter = require('./routes/perfil');
var diarioRouter = require('./routes/diario');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// 👇 Registrar parciales
hbs.registerPartials(path.join(__dirname, 'views/layouts'));
hbs.registerPartials(path.join(__dirname, 'partials/layouts'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/info', infoRouter);
app.use('/tests', testRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/perfil', profileRouter);
app.use('/diario', diarioRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error', status: err.status });
});

module.exports = app;
