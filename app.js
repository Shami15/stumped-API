// app.js
var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors())
var db = require('./db');
var UserController = require('./UserController');
var ClassController = require('./ClassController');
app.use('/users', UserController);
app.use('/classes', ClassController);
//use sessions for tracking logins
// app.use(session({
//     secret: 'work hard',
//     resave: true,
//     saveUninitialized: false
//   }));

module.exports = app;