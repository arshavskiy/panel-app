// call the packages we need
const express = require('express'); // call express
const app = express(); // define our app using express
const bodyParser = require('body-parser');
const fs = require('fs');
var Promise = require("bluebird");


const getMePostsModule = require('./getMePosts');
const getMeFunc = getMePostsModule.getMeFunc;

// const rf = require ('./rf.js');

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;

// ROUTES FOR OUR API
var router = express.Router();

router.get('/', function (req, res) {
  res.json({
    message: 'hooray! welcome to our api!'
  });
});

app.use('/api', router);


router.route('/twits/:q,:count')
  .get(function (req, res) {

    let q = req.body.name;
    console.log('data read..');

    getMeFunc(req.params.q, req.params.count, function (err, tweets) {
      res.status('200').send(tweets);
    });
  });


// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
