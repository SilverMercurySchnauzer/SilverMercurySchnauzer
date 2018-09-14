const router = require('express').Router();
const authenticate = require('./authenticate.js');
const createPost = require('./createPost.js');
const db = require('../../database');
const passport = require('passport');
const twitter = require('../../utility/passport/twitter');
const facebook = require('../../utility/passport/facebook');
require('dotenv').config();
const GithubStrategy = require('passport-github').Strategy;
const OAuthStrategy = require('passport-oauth').OAuthStrategy;
const session = require('express-session');
const request = require('request');
const debug = require('./debug.js');

passport.use(twitter.strat);
passport.use(facebook.strat);
router.use('/createpost', createPost);
router.use('/', authenticate);
router.use('/debug', debug);

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
    res.status(200).json({message: 'connected /api/home GET'});
});

router.get('/home/updateTwitterFeed', function (req, res) {
  request.get({url:`https://api.twitter.com/1.1/statuses/user_timeline.json`, oauth: twitter.oauth},
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
      res.send(body);
    })
});

router.get('/drafts', (req, res) => {
  res.status(200).json({message: 'connected /api/drafts GET'});
});

module.exports = router;
