/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  // var cb = arguments[1];
  // console.log('callback', cb);
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, function(err, content) {
      // reject(err);
      // var result = content.toString().split('\n')[0];
      // resolve(result);
      var result;
      if (err) {
        // reject(new Error('fs.readFile failed:(\n', err));
        reject(err);
      } else {
        console.log('fs.readFile successfully completed :)\n', content.toString());
        var content = content.toString();
        result = content.split('\n')[0];
        console.log('this is the result', result);
      }
      resolve(result);
      // cb(err, result);
    });
  });
  // return promise;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  return new Promise(function(resolve, reject) {
    request(url, function(err, response, body) {
      reject(err);
      resolve(response.statusCode);
    });
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
