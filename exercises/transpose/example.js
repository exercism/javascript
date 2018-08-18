'use strict';

function transpose(text) {
  return text.reduce(function (result, line, lineNo) {
    line.split('').map(function (value, key) {
      if (typeof result[key] === 'undefined') {
        result[key] = new Array(lineNo + 1).join(' ');
      }

      result[key] += value;
    });

    return result;
  }, []);
}

module.exports = transpose;
