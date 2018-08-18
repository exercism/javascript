'use strict';

module.exports = {
  validate: function (input) {
    var digits = String(input).split('');
    var sum = digits.reduce(function (total, current) {
      return total + Math.pow(current, digits.length);
    }, 0);
    return sum === input;
  }
};
