/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var git = require('./promisification');
var fs = require('fs');
var Promise = require('bluebird');
var pluck = require('./promiseConstructor');

Promise.promisifyAll(fs);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  console.log('readfilepath', readFilePath);
  return pluck.pluckFirstLineFromFileAsync(readFilePath)
    .then(function(user) {
      return git.getGitHubProfileAsync(user);
    })
    .then(function(res) {
      console.log('response!', res);
      return fs.writeFileAsync(writeFilePath, JSON.stringify(res));
    })
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
