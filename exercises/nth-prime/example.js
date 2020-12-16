const isPrime = (number) => {
  if (number === 2 || number === 3) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const prime = (ordinal) => {
  if (ordinal === 0) {
    throw new Error('there is no zeroth prime');
  }
  if (ordinal === 1) {
    return 2;
  }
  let primeCount = 1;
  let index = 3;
  while (primeCount < ordinal) {
    if (isPrime(index)) {
      primeCount++;
    }
    index += 2;
  }
  return index - 2;
};
