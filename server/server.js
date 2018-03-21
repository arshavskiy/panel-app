// call the packages we need
const express = require('express'); // call express
const app = express(); // define our app using express
const bodyParser = require('body-parser');
const fs = require('fs');
var Promise = require("bluebird");


const getMePostsModule = require('./getMePosts');
const getMeFunc = getMePostsModule.getMeFunc;

// const rf = require ('./rf.js');


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
    let twits = getMeFunc(req.params.q, req.params.count);

    fs.readFile('./data/data.json', 'utf8', function (err, data) {
      if (err) throw err;
      obj = data;
      console.log('data read..');
    });

    // const readTwitter = rf.readMyData();
    // const dataFromTwitter = rf.obj;
    res.send('got it?' + obj);

  });


// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
