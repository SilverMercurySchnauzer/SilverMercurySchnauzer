const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
const logger= require('morgan'); 
const cors = require('cors'); 


const app = express();

const corsOption = { 
  origin: true, 
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE', 
  credentials: true, 
  exposedHeaders: ['x-auth-token']
}

app.use(morgan('dev')); 
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/api', routes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
