const router = require('express').Router();
const twitter = require('../../utility/passport/twitter');

router.get('/log/credentials', function(req, res) {
  console.log(twitter.userData);
  console.log('\n\n\n\n\n\n\n\n\n\n');
  console.log('token: ', twitter.oauth.token);
  console.log('\n\n\n\n\n\n\n\n\n\n');
  console.log('token_secret: ', twitter.oauth.token_secret);
  console.log('\n\n\n\n\n\n\n\n\n\n');
  console.log(facebookProfile);
  console.log('\n\n\n\n\n\n\n\n\n\n');
  console.log('accessToken: ', fb_accessToken);
  console.log('\n\n\n\n\n\n\n\n\n\n');
  console.log('refreshToken: ', fb_refreshToken);
  console.log('\n\n\n\n\n\n\n\n\n\n');
  res.send('credentials logged');
});

module.exports = router;