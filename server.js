var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
// var cookieParser = require('cookie-parser');

var databaseConfig = require('./config/database');
var router = require('./app/routes');

// var session = require('express-session')
var nodemailer = require('nodemailer');
var bcrypt = require('bcrypt-nodejs');
var async = require('async');
var crypto = require('crypto');

mongoose.connect(databaseConfig.url);

app.use(express.static(__dirname));


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, application/json, Accept, X-Auth-Token, client-security-token, Authorization');
    next();
}

app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' })); // Parses urlencoded bodies
app.use(bodyParser.json({limit: '10mb'})); // Send JSON responses
// app.use(cookieParser());
// app.use(session({ secret: 'session secret key' }));
app.use(allowCrossDomain);
app.use(logger('dev')); // Log requests to API using morgan
app.use(cors());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');; // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(process.env.PORT || 8080);
console.log("App listening on port 8080");

router(app);
