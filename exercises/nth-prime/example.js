let realPrimes = [];

function generatePrimes(uptoNumber) {
  if (realPrimes.length > 0) {
    return realPrimes;
  }

  let currentPrime,
    possiblePrimes = [];
  for (let i = 2; i <= uptoNumber; i++) {
    possiblePrimes.push({ number: i, prime: true });
  }

  for (let i = 2; i < Math.sqrt(possiblePrimes.length); i++) {
    for (let j = 0; j < possiblePrimes.length; j++) {
      currentPrime = possiblePrimes[j];
      if (currentPrime.number !== i && currentPrime.number % i === 0) {
        currentPrime.prime = false;
      }
    }
  }

  return possiblePrimes
    .filter(candidate => candidate.prime)
    .map(p => p.number);
}

export class Prime {
  nth(nthPrime) {
    if (nthPrime === 0) {
      throw new Error('Prime is not possible');
    }
    realPrimes = generatePrimes(200000);
    return realPrimes[nthPrime - 1];
  }
}
