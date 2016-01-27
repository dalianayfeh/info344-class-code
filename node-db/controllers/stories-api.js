'use strict';

var express = require('express'); //completely private to this script file doesn't interfere with server.js
var request = require('request');
var cheerio = require('cheerio');
//(Story) adds reference to the story object created in models folder
module.exports.Router = function(Story) { //returns new express router that contains route implentations for apis
    var router = express.Router(); //declare new router
    
    router.get('/stories', function(req, res, next) { //when someone asks for stories...do something
        //return all stories from the db
        Story.getAll()
        .then(function(rows) {
            res.json(rows);
        })
        .catch(next); //error handling
    });
    
    router.post('/stories', function(req, res, next) { //post inserts a new record into db
        //inserts a new story into the db and returns the data with default
        //values applied
        request.get(req.body.url, function(err, response, body) {
            if (err) {
                req.body.title = req.body.url;
            } else {
                var $ = cheerio.load(body);
                req.body.title = $('head title').text();
            }
            Story.insert(req.body) //body uses bodyParser middleware
                .then(function(row) {
                    res.json(row);
                })
                .catch(next);
            });
    });
    
    router.post('/stories/:id/votes', function(req, res, next) {
        //upvote the story and return the full story with current number
        //of votes
        Story.upVote(req.params.id) //.id needs to match :id or whatever you put in url
            .then(function(row) {
                res.json(row);
            })
            .catch(next);
    });
    
    return router; 
}
