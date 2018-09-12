const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');

// Import for FB OAuth 
const logger = require('morgan'); 
const cookieParser = require('cookie-parser');  
const cors = require('cors'); 
const path = require('path');
const favicon = require('serve-favicon');

const app = express();

// Set up cors option 
const corsOption = {
  origin: true, 
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE', 
  credentials: true, 
  exposedHeaders: ['x-auth-token']
};


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// oAuth route additions 
app.use(logger('dev')); 
app.use(cookieParser()); 

app.use('/api', routes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
