const TwitterStrategy = require('passport-twitter').Strategy;
require('dotenv').config();

let twitterProfile = {};
let twOauth = 
{ 
  consumer_key: `${process.env.tw_consumer_key}`,
  consumer_secret: `${process.env.tw_consumer_secret}`
};

const twitter = new TwitterStrategy({
    consumerKey: process.env.tw_consumer_key,
    consumerSecret: process.env.tw_consumer_secret,
    callbackURL: `https://${process.env.heroku_app_name}.herokuapp.com/api/oauth/twitter/authenticatedCallback`
  },
  function(token, tokenSecret, profile, done) {
    twOauth.token = token;
    twOauth.token_secret = tokenSecret;
    twitterProfile.userData = profile;
    return done(null, profile);
  }
);

module.exports = {
    strat: twitter,
    oauth: twOauth,
    userData: twitterProfile.userData
}