'use strict';

var PerfectNumbers = function () {

};

/**
 * Calculate all the divisors for a given number and return them as an array.
 * Note: the actual number is not include in the returned array.
 * @param {number} number - a number input.
 * @returns {array} - the array of divisors
 */
PerfectNumbers.prototype.getDivisors = function (number) {
  var i;
  var divs = [];

  // Accepts only natura numbers greater than 1.
  if (number <= 1) {
    return divs;
  }

  // 1 always divides everyone!
  divs.push(1);

  // Calculate the divisors up the the half of the number + 1
  for (i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      divs.push(i);
    }
  }

  return divs;
};

PerfectNumbers.prototype.classify = function (number) {
  var i;
  var sum;
  var result;

  // Check if the input is valid
  if (number <= 0) {
    return 'Classification is only possible for natural numbers.';
  }

  // Factorize the current number.
  var divsArray = this.getDivisors(number);

  // Sum the factors.
  sum = 0;
  for (i = 0; i < divsArray.length; i++) {
    sum = sum + divsArray[i];
  }

  // Check if the number is perfect.
  if (sum === number) {
    result = 'perfect';
  } else if (sum > number) {
    result = 'abundant';
  } else {
    result = 'deficient';
  }

  return result;
};

module.exports = PerfectNumbers;
