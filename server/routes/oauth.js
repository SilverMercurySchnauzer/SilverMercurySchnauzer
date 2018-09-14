const router = require('express').Router();
const passport = require('passport');
// const GithubStrategy = require('passport-github').Strategy;
const twitter = require('../../utility/passport/twitter');
const facebook = require('../../utility/passport/facebook');
// const OAuthStrategy = require('passport-oauth').OAuthStrategy;
const session = require('express-session');
// const request = require('request');
// const bodyParser = require('body-parser');
// const oAuth = require('./oauth.js');
require('dotenv').config();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'connected /oauth GET'
  });
});

// router.get('/twitter', (req, res) => {
//   res.status(200).json({
//     message: 'connected /oauth/twitter GET'
//   });
// });

// router.post('/twitter/authenticatedCallback', (req, res) => {
//   res.status(200).json({
//     message: 'connected /oauth/twitter/authenticatedCallback POST'
//   });
// });

router.get('/twitter', passport.authenticate('twitter'));

router.get('/twitter/authenticatedCallback', 
  passport.authenticate('twitter', { failureRedirect: '/'}),
  function(req, res) {
    res.redirect('/');
  }
);

app.get('/facebook', passport.authenticate('facebook'));

app.get('/facebook/authenticatedCallback', 
  passport.authenticate('facebook', { failureRedirect: '/'}),
  function(req, res) {    
    res.redirect('/');
  }
);

// router.get('/facebook', (req, res) => {
//   res.status(200).json({
//     message: 'connected /oauth/facebook GET'
//   });
// });

// router.post('/facebook/authenticatedCallback', (req, res) => {
//   res.status(200).json({
//     message: 'connected /oauth/facebook/authenticatedCallback POST'
//   });
// });

// passport.serializeUser(function(user, done) {
//   // placeholder for custom user serialization
//   // null is for errors
//   done(null, user);
// });

// passport.deserializeUser(function(user, done) {
//   // placeholder for custom user deserialization.
//   // maybe you are going to get the user from mongo by id?
//   // null is for errors
//   done(null, user);
// });

// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }

//   res.redirect('/')
// }

// app.get('/protected', ensureAuthenticated, function(req, res) {
//   res.send('access granted. secure stuff happens here');
// });

module.exports = router;