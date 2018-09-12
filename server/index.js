const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');

// Import for FB OAuth 
const logger = require('morgan'); 
const cookieParser = require('cookie-parser');  
const cors = require('cors'); 
const path = require('path');

const app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', routes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
