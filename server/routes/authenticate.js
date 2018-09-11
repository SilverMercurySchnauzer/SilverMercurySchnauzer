const router = require('express').Router();
const jwt = require('jsonwebtoken');
const oauth = require('./oauth.js');
const { saveUser } = require('../../database/index');

// oauth routes
router.use('/oauth', oauth);

router.get('/login', (req, res) => {
  res.status(200).json({
    message: 'connected /api/authenticate GET'
  });
});

router.post('/login', (req, res) => {
  console.log('user data from client to server-->', req.body)
  res.status(200).json({
    message: 'connected /api/login POST'
  });
});

router.get('/signup', (req, res) => {
  res.status(200).json({
    message: 'connected /api/signup GET'
  });
});

router.post('/signup', (req, res) => {
  const { username, password } = req.body;
  console.log('user from client to server->', username, password)
  saveUser(username, password, (err, result) => {
    if (err || !result) {
      res.status(500).send(err)
    } else {
      console.log('server result after saving user to DB-->', result)
      res.status(200).json({
        message: 'User added to DB'
      });
    }
  });
});

router.post('/logout', (req, res) => {
  res.status(200).json({
    message: 'connected /api/logout POST'
  });
});

module.exports = router;