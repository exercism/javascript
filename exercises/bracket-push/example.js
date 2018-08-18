'use strict';

var bracketPush = module.exports = function (input) {
  if (input.length === 0) {
    return true;
  }

  var bracketArray;
  bracketArray = input;
  var iArr = [];

  if (typeof input === 'string') {
    bracketArray = input.split('');
  }

  var openArray = ['{', '[', '('];
  var closeArray = ['}', ']', ')'];

  for (var i = 0; i < bracketArray.length; i++) {
    for (var j = 0; j < openArray.length; j++) {
      if (bracketArray[i] === openArray[j]) {
        iArr.push(i);
      }
    }
  }

  var topNumber = Math.max.apply(Math, iArr);

  for (var k = 0; k < 3; k++) {
    if (bracketArray[topNumber] === openArray[k]) {
      if (typeof bracketArray[(topNumber + 1)] !== 'undefined') {
        if (bracketArray[(topNumber + 1)] === closeArray[k]) {
          bracketArray.splice(topNumber, 2);
          return bracketPush(bracketArray);
        }
      }
    }
  }
  return false;
};
