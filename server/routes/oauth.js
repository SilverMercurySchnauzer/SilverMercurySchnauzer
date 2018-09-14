const router = require('express').Router();
const passport = require('passport');
const twitter = require('../../utility/passport/twitter');
const session = require('express-session');
require('dotenv').config();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'connected /oauth GET'
  });
});

router.get('/twitter', passport.authenticate('twitter'));

router.get('/twitter/authenticatedCallback', 
  passport.authenticate('twitter', { failureRedirect: '/'}),
  function(req, res) {
    res.send();
  }
);

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