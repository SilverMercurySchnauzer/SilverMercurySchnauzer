// Encodes access tokens that can be transferred safely between two parties. 
// jwt.sign(payload,secretOrPrivateKey, [options, callback])
const createToken = function(auth) { 
  return jwt.sign({ 
    id: auth.id
  }, 'my-dirty-little-secret', 
  {
    expiresIn: '2 days'
  }); 
}

module.exports = { 
  generateToken: function(req, res, next) { 
    req.token = createToken(req.auth); 
    return next(); 
  }, 
  sendToken: function(req, res) { 
    res.setHeader('x-auth-token', req.token); 
    return res.status(200).send(JSON.stringify(req.user));
  }
}