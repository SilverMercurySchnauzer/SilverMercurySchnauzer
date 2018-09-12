const router = require('express').Router();
const jwt = require('jsonwebtoken');
const oauth = require('./oauth.js');
const { saveUser } = require('../../database/index');
const { validateUser } = require('../../database/index');
require('dotenv').config();

// oauth routes
router.use('/oauth', oauth);

// router.get('/login', (req, res) => {
//   res.status(200).json({
//     message: 'connected /api/authenticate GET'
//   });
// });

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('user in server', username, 'password in server', password)
  validateUser(username, password, (err, result) => {
    if (err || !result) {
      res.status(500).send(err)
    } else {
      if (result === 'Wrong Password') {
        res.status(200).json({
          message: 'Wrong Password'
        });
      } else {
        res.status(200).json({
          username, token: jwt.sign({ username }, process.env.JWT_SECRET)
        });
      }
    }
  })
});

// router.get('/signup', (req, res) => {
//   res.status(200).json({
//     message: 'connected /api/signup GET'
//   });
// });

router.post('/signup', (req, res) => {
  const { username, password } = req.body;
  console.log('server user and pass-->', username, password);
  saveUser(username, password, (err, result) => {
    console.log('server result after saving new user');
    if (err || !result) {
      res.status(500).send(err)
    } else {
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