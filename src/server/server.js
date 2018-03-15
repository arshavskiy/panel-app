// call the packages we need
let express = require('express');        // call express
let app = express();                 // define our app using express
let bodyParser = require('body-parser');

var Twitter = require('twitter');
let Twit = require('twit');
let fs = require('fs');

const config = {
  consumer_key: 'ZNUDph6kxp4gXNztuwlxM9hjt',
  consumer_secret: 'TxZvvq23mQyIPeKXoZjUbMIUwqyXSfhOghmF4zbelrAMxjwuGS',
  access_token: '2574428706-5bwdKynS3zxPfz2aOZ4GuO6edDHvmR48inRSYtX',
  access_token_secret: 'VkVsXyTnbC43DKQjmMBG5FDkr3dcWhC3DEh4qGtgVhEg2',
  timeout_ms: 1 * 1000, // optional HTTP request timeout to apply to all requests.
};
let T = new Twit(config);


function getMePosts(q, count) {

  let params = {
    q: q,
    t: 'since:2018-01-01',
    count: count
  }

  T.get('search/tweets', params, gotData);

  function gotData(err, data, res) {
    let tweets = data.statuses;
    var dataPushedArray = new Array();

    for (let i = 0, l = tweets.length; i < l; i++) {

      dataPushedArray[i] = {
        name: tweets[i].user.name,
        text: tweets[i].text,
        url: tweets[i].user.profile_background_image_url,
        date: tweets[i].user.created_at
      };
    }
    // fs.appendFile('./ufo2.txt', tweets[i].user.name + ' \r: ' + tweets[i].text + '-- \r' + tweets[i].user.created_at + '\r\n', 'utf8', (err) => {
    //   if (err) throw err;
    // });
    // fs.appendFile('./ufo.json', JSON.stringify({"name":tweets[i].user.name, "text":tweets[i].text, "date":tweets[i].user.created_at}, null, 2), (err) => {
    //   if (err) throw err;
    // });

    fs.appendFile('./data/Scrapper-' + tweets[0].user.name + '_.json', JSON.stringify(dataPushedArray, null, 2), (err) => {
      if (err) throw err;
      console.log('file done');
    });

    if (err) {
      console.log(err)
    }
    return dataPushedArray;
  }
}

// this will let us get the data from a POST
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  let port = process.env.PORT || 8080;

// ROUTES FOR OUR API
  var router = express.Router();

  router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our api!'});
  });


  app.use('/api', router);


  router.route('/twits/:q,:count')
    .get(function (req, res) {
      let q = req.body.name;
      getMePosts(req.params.q, req.params.count);
      res.send('got it?');
    });



// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port)


