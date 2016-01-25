// MONGO DB
'use strict';

var mongoose = require('mongoose');
var dbConfig = require('./secret/config-mongo.json');

var storySchema = new mongoose.Schema({
   url: String,
   votes: {type: Number, default: 0},
   createdOn: {type: Date, default: Date.now} 
});

var Story = mongoose.model('Story', storySchema);

mongoose.connect(dbConfig.url);
mongoose.connection.on('error', function(err) { // check if there was a problem connecting
    console.error(err);
});

var newStory = {
    url: 'http://www.google.com'
};
var id;

Story.create(newStory) //INSERT
    .then(function(story) {
        id = story._id;
        console.log('inserted new story!')
        console.log(story);
    })
    .then(function() {
        return Story.findById(id).exec; // finds id. returns a query object
    })
    .then(function(story) {
        console.log('found story!');
        console.log(story);
        
        return Story.findByIdAndUpdate(id, {$inc: {votes: 1}}, {new: true}); // update any property in a story
    })
    .then(function(story) {
        console.log('updated story!');
        console.log(story);
        
        return Story.findByIdAndRemove(id); // delete
    })
    .then(function() {
        console.log('story deleted!');
    })
    .then(null, function(err) { // use this instead of catch
        console.error(err);
    })
    .then(function() {
        mongoose.connection.close();
    })
