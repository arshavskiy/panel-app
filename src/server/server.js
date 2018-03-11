let express = require('express');
let app = express();
let router = express.Router();
const Twit = require('twit');
const fs = require('fs');

let PORT = process.env.PORT || 3100;

app.listen(PORT, function () {
  console.log('Working on port ' + PORT);
});

app.get('/', function (req, res) {
  res.send('hello world');
  res.send( getMePosts('israel') );
});

const config = {
  consumer_key: 'ZNUDph6kxp4gXNztuwlxM9hjt',
  consumer_secret: 'TxZvvq23mQyIPeKXoZjUbMIUwqyXSfhOghmF4zbelrAMxjwuGS',
  access_token: '2574428706-5bwdKynS3zxPfz2aOZ4GuO6edDHvmR48inRSYtX',
  access_token_secret: 'VkVsXyTnbC43DKQjmMBG5FDkr3dcWhC3DEh4qGtgVhEg2',
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
};

app.post('/twit:q', function(req, res) {

  res.status(200).send( getMePosts(req.params.q) );

});


let T = new Twit(config);

function getMePosts(q) {
  let params = {
    q: q,
    t: 'since:2017-01-01',
    count: 10
  }
  T.get('search/tweets', params, gotData);

  function gotData(err, data, response) {
    let tweets = data.statuses;

    for (var i = 0, l =  tweets.length; i < l; i++) {
      console.log('we found ' + i + ' result' + ' ' + tweets[i].text);
      // fs.appendFile('./found/ufo.txt', tweets[i].user.name + ' \r: ' + tweets[i].text + '-- \r' + tweets[i].user.created_at + '\r\n', 'utf8', (err) => {
      //   if (err) throw err;
      // });
    }
    return tweets;
  }
}
