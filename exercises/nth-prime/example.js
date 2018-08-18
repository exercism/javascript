'use strict';

module.exports = {
  nth: function (nthPrime) {
    if (nthPrime === 0) { throw new Error('Prime is not possible'); }

    // Using prime number theory to approximate the prime
    // See https://en.wikipedia.org/wiki/Prime_number_theorem#Approximations_for_the_nth_prime_number
    var upperBound = (nthPrime + 2) * Math.log((nthPrime + 2) * Math.log((nthPrime + 2)));
    this.generatePrimes(upperBound);
    return this.realPrimes[nthPrime - 1];
  },
  generatePrimes: function (uptoNumber) {
    var i;
    var j;
    var currentPrime;
    var possiblePrimes = [];

    for (i = 2; i <= uptoNumber; i++) {
      possiblePrimes.push({ number: i, prime: true });
    }

    for (i = 2; i < Math.sqrt(possiblePrimes.length); i++) {
      for (j = 0; j < possiblePrimes.length; j++) {
        currentPrime = possiblePrimes[j];
        if (currentPrime.number !== i && currentPrime.number % i === 0) {
          currentPrime.prime = false;
        }
      }
    }

    this.realPrimes = [];

    for (i = 0; i < possiblePrimes.length; i++) {
      currentPrime = possiblePrimes[i];
      if (currentPrime.prime) {
        this.realPrimes.push(currentPrime.number);
      }
    }
    return this.realPrimes;
  }

};
