const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();
// const User = ;
let facebookProfile = {};

let fbOauth = 
{ 
  consumer_key: `${process.env.fbClientID}`,
  // API key
  consumer_secret: `${process.env.fbClientSecret}`,
  // API secret key
  // token: tw_token,
  // Access token
  // token_secret: tw_token_secret
  // Access token secret
};

const facebook = new FacebookStrategy({
    clientID: process.env.fbClientID,
    clientSecret: process.env.fbClientSecret,
    callbackURL: "https://pure-river-11017.herokuapp.com/api/oauth/facebook/authenticatedCallback"
  },
  function(accessToken, refreshToken, profile, done) {
    fbOauth.accessToken = accessToken;
    console.log('returned accessToken: ', accessToken);
    console.log('saved accessToken: ', fbOauth.accessToken);
    console.log('\n\n');
    fbOauth.refreshToken = refreshToken;
    console.log('returned refreshToken: ', refreshToken);
    console.log('saved refreshToken: ', fbOauth.refreshToken);
    facebookProfile.userData = profile;
    console.log('profile: ', profile);
    console.log('facebookProfile: ', facebookProfile);
    return done(null, profile);
  }
);

module.exports = {
    strat: facebook,
    oauth: fbOauth,
    userData: facebookProfile.userData
}