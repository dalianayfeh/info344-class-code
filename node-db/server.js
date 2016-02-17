'use strict';

var express = require('express');
<<<<<<< HEAD
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mysql  = require('mysql');
var dbConfig = require('./secret/config-maria.json');
var bluebird = require('bluebird');

var connPool = bluebird.promisifyAll(mysql.createPool(dbConfig)); //initializes to 10 connections, good for handling many concurrent requests
var storiesApi = require('./controllers/stories-api.js'); 
var Story = require('./models/story.js').Model(connPool);


//creates express app
var app = express();

app.use(morgan('dev')); //logs every request that comes to the server in console
app.use(bodyParser.json()); 

app.use(express.static(__dirname + '/static')); //allows you to use static files like index.html

app.use('/api/v1', storiesApi.Router(Story)); //use stories-api.js in controllers folder...need to pass in Story object

app.listen(80, function() {
    console.log('server is listening...');
});
=======
var morgan = require('morgan');                         //logging
var bodyParser = require('body-parser');                //body parsing
var mysql = require('mysql');                           //database
var dbConfig = require('./secret/config-maria.json');   //database config
var bluebird = require('bluebird');                     //promise wrapper

//create a connection pool to the MariaDB server
//this allow multiple queries to execute against
//the database in parallel
var connPool = bluebird.promisifyAll(mysql.createPool(dbConfig));

//require our stories controller
var storiesApi = require('./controllers/stories-api');
//require our story model
var stories = require('./models/stories.js').Model(connPool);

//create the express application
var app = express();

//log requests
app.use(morgan('dev'));
//parse JSON in the request body
app.use(bodyParser.json());

//serve static files from the /static subdirectory
app.use(express.static(__dirname + '/static'));

//mount the stories API router under /api/v1
app.use('/api/v1', storiesApi.Router(stories));

//start listening for HTTP requests on port 80
app.listen(80, function() {
    console.log('server is listening...'); 
});
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
