// call the packages we need
const express = require('express'); // call express
const app = express(); // define our app using express
const bodyParser = require('body-parser');


const getMePosts = require('./getMePosts');

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
    getMePosts(req.params.q, req.params.count);
    console.log('async?');

    res.send('got it?' + getMePosts);
  });


// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
