const router = require('express').Router();
const twitter = require('../../utility/passport/twitter');

router.get('/log/credentials', function(req, res) {
  console.log('\n\n\n\n\n');
  console.log(twitter.userData);
  console.log('token: ', twitter.oauth.token);
  console.log('token_secret: ', twitter.oauth.token_secret);
  console.log('\n\n\n\n\n');
  console.log(facebookProfile);
  console.log('accessToken: ', fb_accessToken);
  console.log('refreshToken: ', fb_refreshToken);
  res.redirect('/');
});

module.exports = router;