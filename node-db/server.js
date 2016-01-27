'use strict';

var express = require('express');
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