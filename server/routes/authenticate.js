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
  const {suername, password} = req.body;
  saveUser(username, password, (err, result) => {
    if (err || !result) {
      res.status(500).send(err);
    } else {
      res.status(201).json({
        message: 'User and password hash saved to DB'
      })
    }
  })
});

router.post('/logout', (req, res) => {
  res.status(200).json({
    message: 'connected /api/logout POST'
  });
});

module.exports = router;