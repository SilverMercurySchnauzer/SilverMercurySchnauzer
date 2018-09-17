const router = require('express').Router();
const { savePost } = require('../../database/index');
const twitter = require('../../utility/passport/twitter');
const request = require('request');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'connected /createPost GET'
  });
});

router.post('/save', (req, res) => {
  console.log('body data to server /save endpoint -->', req.body);
  const { caption, post, url, date, userId } = req.body;
  savePost(userId, caption, post, url, date, (err, result) => {
    if (err || !result) {
      res.status(500).send(err)
    } else {
      res.status(200).json({
        message: 'Post saved to DB'
      });
    }
  });
})


router.post('/publish', (req, res) => {
  let userId = req.body.userId;
  let oauth = twitter.oauth;
  let qs = {
    status: `${req.body.caption}  ${req.body.post}  ${req.body.url}`
  }
  retrieveTokens(userId, (err, results) => {
    if (err) {
      console.log('Database/Server Error on retrieveTokens: ', err);
    } else {
      oauth.token = results.rows[0].twitter_token; 
      oauth.token_secret = results.rows[0].twitter_token_secret;
      request.post({
        url:`https://api.twitter.com/1.1/statuses/update.json`, 
        oauth: oauth, 
        qs: qs
      }, (error, response, body) => {
        console.log('Used twitter oauth headers: ', twitter.oauth);
        console.log('ERROR: ', e);
        console.log('Body: ', body);
        res.send().status(200);
      })      
    }
  })
  // console.log('body data to server /publish endpoint -->', req.body);
  // res.status(200).json({
  //   message: 'connected /createPost/publish POST'
  // });
});



//Needs to be changed to a post (from client) and accept input from client
router.get('/publish/twitter', function(req, res) {
  request.post({url:`https://api.twitter.com/1.1/statuses/update.json?status=Test%20tweet%20using%20the%20POST%20statuses%2Fupdate%20endpoint2`, oauth: twitter.oauth},
    function (e,r, body) {
      console.log('Used twitter oauth headers: ', twitter.oauth);
      console.log('ERROR: ', e);
      console.log('Body: ', body);
      res.send();
    })
});

module.exports = router;
