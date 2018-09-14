const router = require('express').Router();
const { savePost } = require('../../database/index');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'connected /createPost GET'
  });
});

router.post('/save', (req, res) => {
  console.log('body data to server /save endpoint -->', req.body);
  const { caption, post, url, date, userId} = req.body;
  const text = `caption: ${caption} post: ${post}`;
  savePost(userId, text, url, date, (err, result) => {
    if (err || !result) {
      res.status(500).send(err)
    } else {
      res.status(200).json({
        message: 'Post saved to DB'
      });
    }
  });
})


router.post('/publish', (req, res) => {
  console.log('body data to server /publish endpoint -->', req.body);
  res.status(200).json({
    message: 'connected /createPost/publish POST'
  });
});

module.exports = router;
