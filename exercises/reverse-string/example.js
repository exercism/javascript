'use strict';

function reverseString(string) {
  var revString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    revString += string[i];
  }
  return revString;
}

module.exports = reverseString;
