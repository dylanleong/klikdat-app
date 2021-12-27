require('dotenv').config()
var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var personsRouter = require('./routes/persons');
var usersRouter = require('./routes/users');
var placesRouter = require('./routes/places');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/persons', personsRouter);
app.use('/api', apiRouter);
app.use('/users', usersRouter);
app.use('/places', placesRouter);

module.exports = app;