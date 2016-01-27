'use strict';

var express = require('express'); //completely private to this script file doesn't interfere with server.js

//(Story) adds reference to the story object created in models folder
module.exports.Router = function(Story) { //returns new express router that contains route implentations for apis
    var router = express.Router(); //declare new router
    
    router.get('/stories', function(req, res, next) { //when someone asks for stories...do something
        //return all stories from the db
        Story.getAll()
        .then(function(rows) {
            res.json(rows);
        })
        .catch(next);
    });
    
    router.post('/stories', function(req, res, next) { //post inserts a new record into db
        //inserts a new story into the db and returns the data with default
        //values applied
        res.json({});
    });
    
    router.post('/stories/:id/votes', function(req, res, next) {
        //upvote the story and return the full story with current number
        //of votes
        res.json({});
    });
    
    return router; 
}
