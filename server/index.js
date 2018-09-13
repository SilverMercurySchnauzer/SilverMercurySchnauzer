const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const session = require('express-session');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'toot'}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
