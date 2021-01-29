/**
 * Calculate all the divisors for a given number.
 * @param {number} number - natural number.
 * @returns {array} that contains the divisors for a given number excluding the number itself.
 */
function getDivisors(number) {
  const divs = [];

  // Accepts only natural numbers greater than 1.
  if (number <= 1) {
    return divs;
  }

  // 1 always divides everyone!
  divs.push(1);

  // Calculate the divisors up the the half of the number + 1
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      divs.push(i);
    }
  }

  return divs;
}

/**
 * Classify a given number as perfect, abundant or deficient.
 * @param {number} - number to be classified. Note: if the number is equal or smaller than 0,
 * then returns an error: Classification is only possible for natural numbers.
 * @returns {string} - string that contains the classification (perfect, abundant or deficient).
 */
export const classify = (number) => {
  // Check if the input is valid
  if (number <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  // Factorize the current number.
  const divsArray = getDivisors(number);

  // Sum the factors.
  const sum = divsArray.reduce((partialSum, div) => partialSum + div, 0);

  // Check if the number is perfect/abundant/deficient
  if (sum === number) return 'perfect';
  if (sum > number) return 'abundant';
  return 'deficient';
};
