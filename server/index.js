require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
