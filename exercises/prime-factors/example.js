'use strict';

exports.for = function (n) {
  var primeFactors = [];
  var possibleFactor = 2;
  var number = n;
  while (possibleFactor * possibleFactor <= number) {
    while (number % possibleFactor === 0) {
      primeFactors.push(possibleFactor);
      number /= possibleFactor;
    }
    possibleFactor += 1;
  }
  if (number > 1) { primeFactors.push(number); }
  return primeFactors;
};
