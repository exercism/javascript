'use strict';

function CollatzConjecture() {}

CollatzConjecture.prototype.steps = function (number) {
  var count = 0;
  if (number < 1) {
    throw new Error('Only positive numbers are allowed');
  }
  getStepsCount(number);
  function getStepsCount(n) {
    if (n === 1) return 0;
    var nextNumber = ( n % 2 === 0 ? n / 2 : 3 * n + 1);
    count++;
    return getStepsCount(nextNumber);
  }
  return count;
};

module.exports = CollatzConjecture;
