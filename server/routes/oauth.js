const router = require('express').Router();
const passport = require('passport');
const twitter = require('../../utility/passport/twitter');
const session = require('express-session');
require('dotenv').config();
const { updateToken } = require('../../database/index');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'connected /oauth GET'
  });
});

router.get('/twitter/authenticatedCallback', 
  passport.authenticate('twitter', { session: false, failureRedirect: '/' }),
  function(req, res) {
    console.log('\n\ntwitter login session.state #2: ', req.session.state);
    let userID = req.session.state;
    console.log('\n\nuserID: ', userID);
    updateToken( userID, 
      { 'provider': 'twitter', 
        'token': twitter.oauth.token, 
        'secret': twitter.oauth.token_secret
      }, (err, result) => {
        if (err) {
          console.log('Error while updating twitter tokens: ', err);
        } else {
          console.log('Results of twitter tokens update: ', result);
        }
      } 
    );
    res.redirect('/');
  }
);

router.get('/twitter/:userID', function (req, res, next) {
  console.log('req.session.state: ', req.session.state);
  console.log('\n\ntwitter login req.params.userID: ', req.params.userID);
  if(req.params.userID !== 'authenticatedCallback'){
    req.session.state = req.params.userID;
  }
  console.log('\n\ntwitter login session.state #1: ', req.session.state);
  passport.authenticate('twitter', {session: false})(req, res, next)
});

router.get('/facebook', (req, res) => {
  res.status(200).json({
    message: 'connected /oauth/facebook GET'
  });
});

router.post('/facebook/authenticatedCallback', (req, res) => {
  res.status(200).json({
    message: 'connected /oauth/facebook/authenticatedCallback POST'
  });
});

module.exports = router;