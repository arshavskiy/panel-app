let express = require('express');
let app = express();
let cors = require('cors');
let bodyParser = require('body-parser');
let router = express.Router();
let fs = require('fs');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4300'); // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // Set to true if you need the website to include cookies in the requests sent   // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true); // Pass to next layer of middleware
  next();
});


let PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log('Working on port ' + PORT);
});

app.get('/', function (req, res) {
  res.send('hello world');
});


app.post('/api/twit', function(req, res) {

}

