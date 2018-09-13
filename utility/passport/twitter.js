const TwitterStrategy = require('passport-twitter').Strategy;
require('dotenv').config();
// const User = ;
let twitterProfile = {};
let twOauth = 
{ 
  consumer_key: `${process.env.tw_consumer_key}`,
  // API key
  consumer_secret: `${process.env.tw_consumer_secret}`,
  // API secret key
  // token: tw_token,
  // Access token
  // token_secret: tw_token_secret
  // Access token secret
};

const twitter = new TwitterStrategy({
    consumerKey: process.env.tw_consumer_key,
    consumerSecret: process.env.tw_consumer_secret,
    callbackURL: `https://${process.env.heroku_app_name}.herokuapp.com/api/oauth/twitter/authenticatedCallback`
  },
  function(token, tokenSecret, profile, done) {
    // User.findOrCreate(..., function(err, user) {
    //   if (err) { return done(err); }
    twOauth.token = token;
    console.log('returned token: ', token);
    console.log('saved tw_token: ', twOauth.token);
    twOauth.token_secret = tokenSecret;
    console.log('\n\n');
    console.log('returned secret: ', tokenSecret);
    console.log('saved tw_token_secret: ', twOauth.token_secret);
    twitterProfile.userData = profile;
    console.log('profile: ', profile);
    console.log('twitterProfile: ', twitterProfile);
    // console.log(done);
    return done(null, profile);
    // });
  }
);

// console.log(twitter);

module.exports = {
    strat: twitter,
    oauth: twOauth,
    userData: twitterProfile.userData
}