'use strict';

// adds 2 to the number that's intialized
// var promise = new Promise(function(resolve, reject) {
//     resolve(5);
// })
// .then(function add2(val) {
//     console.log(val);
//     return val + 2;
// })
// .then(function(val) {
//     console.log(val);    
// });

var http = require('http');
var id;

function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual request stuff
    http.get(url, function(res) {
        var body = '';
        res.on('data', function(chunk) {
            body += chunk;
        });
        res.on('end', function() {
            resolve(body);
        });
    }).on('error', function(err) {
        reject(err);
    });
  });
}

function getMovie(movieId) {
    get("http://www.omdbapi.com/?i=" + movieId + "&plot=short&r=json")
    .then(function(results) {
        JSON.parse(results);
    }).catch(function(err) {
       console.log(err); 
    }); 
}