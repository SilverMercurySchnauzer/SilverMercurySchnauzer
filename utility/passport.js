const passport = require('passport'); 
const FacebookTokenStrategy = require('passport-facebook-token'); 
const config = require('../config/config.js'); 

module.exports = () => { 
  passport.use(new FacebookToken({ 
    clientID: config.facebookAuth.clientID, 
    clientSecret: config.facebookAuth.clientSecret
  }, 
  function (accessToken, refreshToken, profile, done) { 
    // Store token in mySQL databse 
  }
  ))
}