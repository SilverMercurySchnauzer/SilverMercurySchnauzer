const router = require('express').Router();
const twitter = require('../../utility/passport/twitter');
const request = require('request');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'connected /createPost GET'
  });
});

router.post('/save', (req, res) => {
  res.status(200).json({
    message: 'connected /createPost/save POST'
  });
});

router.post('/publish', (req, res) => {
  res.status(200).json({
    message: 'connected /createPost/publish POST'
  });
});

router.get('/publish/twitter', function(req, res) {
  request.post({url:`https://api.twitter.com/1.1/statuses/update.json?status=Test%20tweet%20using%20the%20POST%20statuses%2Fupdate%20endpoint2`, oauth: twitter.oauth},
    function (e,r, body) {
      console.log('made it here');
      console.log(twitter.oauth);

      console.log('\n\n\n\n\n\n\n\n\n\n');
      console.log('ERROR: ', e);
      console.log('\n\n\n\n\n\n\n\n\n\n');
      // console.log('R: ', r);
      // console.log('\n\n\n\n\n\n\n\n\n\n');
      console.log('Body: ', body);
      // console.log(user.results[0]);
      console.log('\n\n\n\n\n\n\n\n\n\n');
      // console.log(req);
      console.log('\n\n\n\n\n\n\n\n\n\n');
      res.send('all done');
    })
});

module.exports = router;