var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var MongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var flash = require('express-flash-messages')


var homeRouter = require('./routes/home');
var postsRouter = require('./routes/posts');
var userRouter = require('./routes/user');
var authRouter = require('./routes/auth');
var mainRouter = require('./routes/main');
// var commentRouter = require('./routes/posts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//use sessions for tracking logins
var db = mongoose.connection;
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'work harder',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: db })
}));
app.use(flash())

// route setup
app.use('/', homeRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/main', mainRouter);
// app.use('/posts', commentRouter);
app.use(methodOverride('_method'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
