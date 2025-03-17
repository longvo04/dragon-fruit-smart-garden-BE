const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

dotenv.config();

const USERNAME = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const encodedPassword = encodeURIComponent(PASSWORD);
const DB_NAME = process.env.DB_NAME;

const URI = `mongodb+srv://${USERNAME}:${encodedPassword}@cluster0.ei9n7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(URI)
  .then((result) => console.log("connected to db"))
  .catch((err) => console.log(err))

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
