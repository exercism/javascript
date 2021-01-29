function newArrayWithRange(first, last) {
  let i;
  const array = [];
  for (i = first; i <= last; i += 1) {
    array.push(i);
  }
  return array;
}

function indivisibleBy(value) {
  return value % this !== 0;
}

function sieve(n) {
  if (n <= 1) {
    return [];
  }
  let prime;
  let possibilities;
  const primes = [];

  possibilities = newArrayWithRange(2, n);

  do {
    prime = possibilities.shift();
    primes.push(prime);
    possibilities = possibilities.filter(indivisibleBy, prime);
  } while (possibilities.length > 0);

  return primes;
}

export const primes = (n) => sieve(n);
