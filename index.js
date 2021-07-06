var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');
var upload = multer();

var app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.get('/person', function(req, res){
   res.render('person');
});

//Require the Router we defined in movies.js
var movies = require('./mgs.js');

//Use the Router on the sub route /movies
app.use('/mgs', mgs);

app.listen(3000);