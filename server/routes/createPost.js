const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'connected /createPost GET'
  });
});

router.post('/save', (req, res) => {
  console.log('body data to server /save endpoint -->', req.body);
  res.status(200).json({
    message: 'connected /createPost/save POST'
  });
});

router.post('/publish', (req, res) => {
  console.log('body data to server /publish endpoint -->', req.body);
  res.status(200).json({
    message: 'connected /createPost/publish POST'
  });
});

module.exports = router;