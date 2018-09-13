const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'connected /oauth GET'
  });
});

router.get('/twitter', (req, res) => {
  res.status(200).json({
    message: 'connected /oauth/twitter GET'
  });
});

router.post('/twitter/authenticatedCallback', (req, res) => {
  res.status(200).json({
    message: 'connected /oauth/twitter/authenticatedCallback POST'
  });
});

router.get('/facebook', (req, res) => {
  res.status(200).json({
    message: 'connected /oauth/facebook GET'
  });
});

// authfacebookcallback
router.post('/facebook/authenticatedCallback', (req, res) => {
  res.status(200).json({
    message: 'connected /oauth/facebook/authenticatedCallback POST'
  });
});

module.exports = router;