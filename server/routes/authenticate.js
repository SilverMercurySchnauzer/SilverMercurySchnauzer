const router = require('express').Router();
const oauth = require('./oauth.js');

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
  res.status(200).json({
    message: 'connected /api/signup POST'
  });
});

module.exports = router;