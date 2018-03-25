const Twit = require('twit');
const config = require('./config');
const fs = require('fs');

let T = new Twit(config);

function datestring() {
  var d = new Date(Date.now() - 24*(5*60*60*1000) );  //est timezone
  return d.getUTCFullYear()   + '-'
     +  (d.getUTCMonth() + 1) + '-'
     +   d.getDate();
};


function getMeFunc(q, count, callBackFn) {

  let params = {
    q: '"' + q + '" ',
    since: datestring(),
    count: count,
    result_type: 'recent',
    lang: 'en'
  };

  console.log(params);

  function gotData(err, data, res) {
    if(err){
      if(callBackFn){
        callBackFn(err);
      }
      return;
    }

    let tweets = data.statuses;
    let dataPushedArray = new Array();

    for (let i = 0, l = tweets.length; i < l; i++) {

      dataPushedArray[i] = {
        name: tweets[i].user.name,
        text: tweets[i].text,
        date: tweets[i].user.created_at,
        url: tweets[i].user.profile_image_url_https,
      };

      if (tweets[i].entities.media && tweets[i].entities.media != 'null') {
        dataPushedArray[i] = {
          image: tweets[i].entities.media[0].media_url
        }
      }

      console.log(dataPushedArray[i])
    }

    if(callBackFn){
       callBackFn(null, dataPushedArray);
    }
  }

  T.get('search/tweets', params, gotData);
}

module.exports = {
  getMeFunc: getMeFunc
};
