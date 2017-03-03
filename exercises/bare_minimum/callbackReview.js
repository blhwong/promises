/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath) {
  // TODO
  // console.log(filePath);
  // var err = {};
  // err['code'] = 'ENOENT';
  var cb = arguments[1];
  fs.readFile(filePath, function(err, content) {
    var result;
    if (err) {
      console.log('fs.readFile failed :(\n', err);
    } else {
      console.log('fs.readFile successfully completed :)\n', content.toString());
      var content = content.toString();
      var result = content.split('\n')[0];
    }
    cb(err, result);
  })
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url) {
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
