const router = require('express').Router();
const oauth = require('./oauth.js');
const createPost = require('./createPost.js');
const db = require('../../database');
const twitter = require('../../utility/twitter');
const facebook = require('../../utility/facebook');

router.use('/createPost', createPost);
router.use('/oauth', oauth);

router.get('/', (req, res) => {
  res.status(200).json({message: 'connected / GET'});
});

router.get('/items', (req, res) => {
  res.status(200).json({message: 'connected /items GET'});
  // db.selectAll(function(err, data) {
  //   console.log('data from db to server-->', data)
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
});

router.post('/items', (req, res) => {
  res.status(200).json({message: 'connected /items POST'});

    // const searchTerm = req.body.term;
    // twitter.getTweets(searchTerm, function(err, response) {
    //   response.forEach(tweet => {
    //     date = tweet.createdAt;
    //     text = tweet.text;
    //     retweets = tweet.retweetsCount;
    //     user = tweet.username;
    //     screen = tweet.userscreen;

    //     db.save(searchTerm, date, text, retweets, user, screen, function(err, response) {
    //       if (err) {
    //         res.send(500);
    //       } else {
    //         res.end();
    //       }
    //     });
    //   });
    // });
});

router.get('/home', (req, res) => {
  
});

module.exports = router;