class PrimeFactors {
  for (num) {
    const factors=[];
    let currentFactor = 2;

    while (num !== 1) {
      if (num % currentFactor === 0) {
        factors.push(currentFactor);
        num /= currentFactor;
        currentFactor = 2;
      } else {
        currentFactor++;
      }
    }
    return factors;
  }
}

export default PrimeFactors;
