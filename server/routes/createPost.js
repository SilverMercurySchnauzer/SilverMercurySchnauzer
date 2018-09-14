const router = require('express').Router();
const twitter = require('../../utility/passport/twitter');
const request = require('request');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'connected /createPost GET'
  });
});

router.post('/save', (req, res) => {
  console.log('body data to server /save endpoint -->', req.body);
  res.status(200).json({
    message: 'connected /createPost/save POST'
  });
});

router.post('/publish', (req, res) => {
  console.log('body data to server /publish endpoint -->', req.body);
  res.status(200).json({
    message: 'connected /createPost/publish POST'
  });
});

//Needs to be changed to a post (from client) and accept input from client
router.get('/publish/twitter', function(req, res) {
  request.post({url:`https://api.twitter.com/1.1/statuses/update.json?status=Test%20tweet%20using%20the%20POST%20statuses%2Fupdate%20endpoint2`, oauth: twitter.oauth},
    function (e,r, body) {
      console.log('Used twitter oauth headers: ', twitter.oauth);
      console.log('ERROR: ', e);
      console.log('Body: ', body);
      res.redirect('/');
    })
});

module.exports = router;