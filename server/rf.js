const fs = require('fs');
var obj;

readMyData = function readMyData() {
  fs.readFile('./data/data.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = data.toString;
    console.log('data read..');
  });
}

module.exports = {
  readMyData: readMyData,
  obj:obj
};
