const Twit = require('twit');
const config = require('./config');
const fs = require('fs');

let T = new Twit(config);

module.exports =  (q, count) => {

  let params = {
    q: q,
    t: 'since:2018-01-01',
    count: count
  };

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

    fs.appendFile('./data/Scrapper-' + tweets[0].user.name + '_.json', JSON.stringify(dataPushedArray, null, 2), (err) => {
      if (err) throw err;
      console.log('file done');
    });

    if (err) {
      console.log(err);
    }
    return dataPushedArray;
  }
  return T.get('search/tweets', params, gotData);
}
