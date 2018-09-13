require('dotenv').config();
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
const app = express();
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const session = require('express-session');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'toot'}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', routes);

app.get('/validateuser' , (req, res) => {
  if (req.query.token) {
    res.send(true).status(200);
  } else {
    res.send(false).status(200);
  }

});

// Needed to handle page refresh when using React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
