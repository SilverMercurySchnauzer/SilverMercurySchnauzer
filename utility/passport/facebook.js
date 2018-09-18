const FacebookStrategy = require('passport-facebook').Strategy;

const facebookProfile = {};
const fbOauth = {
  fbClientId: `${process.env.fbClientID}`,
  fbClientSecret: `${process.env.fbClientSecret}`
};

const facebook = new FacebookStrategy(
  {
    clientID: process.env.fbClientID,
    clientSecret: process.env.fbClientSecret,
    callbackURL: `https://${process.env.herokuAppName}/api/oauth/facebook/authenticatedCallback`
  },
  (accessToken, refreshToken, profile, done) => {
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
};
