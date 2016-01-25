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

Story.create(newStory)
    .then(function(story) {
        console.log('inserted new story!')
        console.log(story);
    })
    .then(null, function(err) { // use this instead of catch
        console.error(err);
    })
    .then(function() {
        mongoose.connection.close();
    })
