const router = require('express').Router();
const passport = require('passport');
const twitter = require('../../utility/passport/twitter');
const facebook = require('../../utility/passport/facebook');
const { updateToken } = require('../../database/index');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'connected /oauth GET'
  });
});

router.get('/twitter/authenticatedCallback', 
  passport.authenticate('twitter', { session: false, failureRedirect: '/' }),
  (req, res) => {
    let userID = req.session.state;
    
    updateToken( userID, 
      { 'provider': 'twitter', 
        'token': twitter.oauth.token, 
        'secret': twitter.oauth.token_secret
      }, (err, result) => {
        if (err) {
          console.log('Error while updating twitter tokens: ', err);
        }
      } 
    );
    res.redirect('/');
  }
);

router.get('/twitter/:userID', (req, res, next) => {
  if(req.params.userID !== 'authenticatedCallback'){
    req.session.state = req.params.userID;
  }
  passport.authenticate('twitter', {session: false})(req, res, next);
});

router.get('/facebook/', passport.authenticate('facebook'));

router.get('/facebook/authenticatedCallback', 
  passport.authenticate('facebook', { failureRedirect: '/'}),
  function(req, res) {    
    res.redirect('/');
  }
);

module.exports = router;
