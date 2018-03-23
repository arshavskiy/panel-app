const Twit = require('twit');
const config = require('./config');
const fs = require('fs');

let T = new Twit(config);

function getMeFunc(q, count) {
  let params = {
    q: q + ' since:2017-01-01',
    count: count
  };

  console.log(params);

  function gotData(err, data, res) {
    if (err) {
      console.log(err);
    } else {
      let tweets = data.statuses;
      var dataPushedArray = new Array();

      for (let i = 0, l = tweets.length; i < l; i++) {
        dataPushedArray[i] = {
          name: tweets[i].user.name,
          text: tweets[i].text,
          date: tweets[i].user.created_at,
          url: tweets[i].user.profile_image_url_https,
        };
      }
      console.log('1');

      fs.writeFileSync('./data/data.json', JSON.stringify(dataPushedArray, null, 2), (err) => {
          console.log('2');
        if (err) console.log(err);
      });

    }
  }

  T.get('search/tweets', params, gotData);
}

module.exports = {
  getMeFunc: getMeFunc
};
