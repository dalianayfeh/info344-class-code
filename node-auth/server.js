'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

//new modules
var session = require('express-session'); //allows for user sessions
var RedisStore = require('connect-redis')(session); //stores sessions
var passport = require('passport'); //framework node uses for authentication
var GitHubStrategy = require('passport-github').Strategy;

var ghConfig = require('./secret/oauth-github.json');
//copy exact callback url created on github
ghConfig.callbackURL = 'http://localhost:8080/signin/github/callback'; 

var ghStrategy = new GitHubStrategy(ghConfig, 
    function(accessToken, refreshToken, profile, done) {
     console.log('Authentication Successful!');
     console.dir(profile);
     done(null, profile);
});

var cookieSigSecret = process.env.COOKIE_SIG_SECRET; 
if (!cookieSigSecret) {
    console.error('Please set COOKIE_SIG_SECRET');
    process.exit(1); //ends process in error state
}

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(session({
    secret: cookieSigSecret,
    resave: false,
    saveUninitialized: false,
    store: new RedisStore()
}));

passport.use(ghStrategy);
//called once after successful
passport.serializeUser(function(user, done) {
   done(null, user); 
});
//called at the start of every session
passport.deserializeUser(function(user, done) {
   done(null, user); 
});
//add to express application
app.use(passport.initialize());
app.use(passport.session());

app.get('/signin/github', passport.authenticate('github'));
app.get('/signin/github/callback', passport.authenticate('github'), 
    function(req, res) {
        //if successful, redirect to secure.html
        res.redirect('/secure.html');
    });
app.get('/signout', function(req, res) {
    req.logOut();
    res.redirect('/');
});

app.use(express.static(__dirname + '/static/public'));

//disallows you to access secure.html if you're not an authenticated user
//FIGURE THIS ON YOUR OWN
app.use(function(req, res, next) {
    //req.isAuthenticated();
    next();
});

app.use(express.static(__dirname + '/static/secure'));

//returned after done() function above
app.get('/app/v1/users/me', function(req, res) {
    //req.user is currently authenticated user
    res.json(req.user);    
});

app.listen(80, function() {
    console.log('Server is listening...');
});
