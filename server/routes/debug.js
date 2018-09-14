const router = require('express').Router();
const twitter = require('../../utility/passport/twitter');
const facebook = require('../../utility/passport/facebook');


router.get('/log/credentials', function(req, res) {
  console.log(twitter.userData);
  console.log('\n\n\n\n\n\n\n\n\n\n');
  console.log('token: ', twitter.oauth.token);
  console.log('\n\n\n\n\n\n\n\n\n\n');
  console.log('token_secret: ', twitter.oauth.token_secret);
  console.log('\n\n\n\n\n\n\n\n\n\n');
  console.log(facebook.userData);
  console.log('\n\n\n\n\n\n\n\n\n\n');
  console.log('accessToken: ', facebook.oauth.accessToken);
  console.log('\n\n\n\n\n\n\n\n\n\n');
  console.log('refreshToken: ', facebook.oauth.refreshToken);
  console.log('\n\n\n\n\n\n\n\n\n\n');
  res.send('credentials logged');
});

module.exports = router;