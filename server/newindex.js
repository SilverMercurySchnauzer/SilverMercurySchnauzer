const express = require('express');
const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
const OAuthStrategy = require('passport-oauth').OAuthStrategy;
const session = require('express-session');
const PORT = process.env.PORT || 3000;
const host = process.env.host;
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
require('dotenv').config();
const app = express();


app.use(express.static(__dirname + '/'));
app.use(session({secret: 'toot'}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', routes);

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/')
}

app.get('/protected', ensureAuthenticated, function(req, res) {
  res.send('access granted. secure stuff happens here');
});

passport.use(new GithubStrategy({
    clientID: process.env.tw_clientID,
    clientSecret: process.env.tw_clientSecret,
    callbackURL: 'https://pure-river-11017.herokuapp.com/auth/github/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
  // placeholder for custom user serialization
  // null is for errors
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  // placeholder for custom user deserialization.
  // maybe you are going to get the user from mongo by id?
  // null is for errors
  done(null, user);
});

app.get('/', function (req, res) {
  var html = `<ul><li><a href='/auth/github'>GitHub</a></li>\n
  <li><a href='/api/oauth/facebook'>Facebook</a></li>\n
  <li><a href='/api/oauth/twitter'>Twitter</a></li>\n
  <li><a href='/api/createPost/publish/twitter'>Tweet</a></li>\n
  <li><a href='/api/createPost/publish/facebook'>Comment</a></li>\n
  <li><a href='/api/home/updateTwitterFeed'>Update</a></li>\n
  <li><a href='/api/debug/log/credentials'>DEBUG:Credentials</a></li>\n
  <li><a href='/logout'>logout</a></li></ul>`;
  if (req.isAuthenticated()) {
    html += "<p>authenticated as user:</p>"
    html += "<pre>" + JSON.stringify(req.user, null, 4) + "</pre>";
  }

  res.send(html);
});

app.get('/logout', function(req, res) {
  console.log('logging out');
  req.logout();
  res.redirect('/');
});

app.get('/auth/github', passport.authenticate('github'));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/'}),
  function(req, res) {
    res.redirect('/');
  }
);

var server = app.listen(PORT, function() {
  console.log('Example app listening at http://%s:%s', server.address().address, server.address().port);
})