'use strict';

var bluebird = require('bluebird');
var bcrypt = bluebird.promisifyAll(require('bcrypt'));

var password = process.argv[2];
var rounds = 10;

if (process.argv.length >= 4) {
    rounds = parseInt(process.argv[3]);
    if (isNaN(rounds)) {
        console.error('Number of rounds must be integer!');
        process.exit(1);
    }
}

console.log("Hashing '%s' with %d rounds of bcrypt...", password, rounds);
console.time('duration'); //tells you how long bcypt algorithm takes

bcrypt.hashAsync(password, rounds)
    .then(function(hash) {
        console.timeEnd('duration');
        console.log(hash);
    });
