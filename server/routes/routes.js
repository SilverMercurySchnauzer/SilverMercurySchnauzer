const router = require('express').Router();
const authenticate = require('./authenticate.js');
const createPost = require('./createPost.js');
const db = require('../../database/index.js');
const twitter = require('../../utility/passport/twitter');
//const facebook = require('../../utility/passport/facebook');
const passport = require('passport');
require('dotenv').config();
const session = require('express-session');
const request = require('request');
const debug = require('./debug.js');
const { retrieveTokens } = require('../../database/index');
const util = require('../../utility/index');

passport.use(twitter.strat);
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

function scrapeObj (fieldNames, inputObj) {
  let outputObj = {};
  console.log(inputObj);
  for (let i = 0; i < fieldNames.length; i++) {
    if(fieldNames[i] in inputObj) {
      outputObj[fieldNames[i]] = inputObj[fieldNames[i]];
    }
  }
  return outputObj;
}

function scrapeArr (fieldNames, inputArr) {
  let outputArr = [];
  for (let j = 0; j < inputArr.length; j++) {
    outputArr.push(scrapeObj(fieldNames, inputArr[j]))
  }
  return outputArr;
}

router.get('/home/updateTwitterFeed/:userId', (req, res) => {
  let userId = req.params.userId;
  let oauth = twitter.oauth;
  retrieveTokens(userId, (err, results) => {
    if (err) {
      console.log('Database/Server Error on retrieveTokens: ', err);
    } else {
      oauth.token = results.rows[0].twitter_token; 
      oauth.token_secret = results.rows[0].twitter_token_secret;
      request.get({url:`https://api.twitter.com/1.1/statuses/user_timeline.json`, oauth: oauth}, (error, response, body) => {
        // console.log(body);
        // pull out required info from each tweet object and send back
        let tweets = scrapeArr(util.tweetFields, body);
        res.send(body).status(200);
      })      
    }
  })
});


router.get('/drafts', (req, res) => {
  res.status(200).json({message: 'connected /api/drafts GET'});
});

module.exports = router;
