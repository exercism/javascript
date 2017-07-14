
export default class PerfectNumbers {

  /**
   * Calculate all the divisors for a given number.
   * @param {number} number - natural number.
   * @returns {array} array that contains the divisors for a given number NOT including the number itself.
   */
  getDivisors(number) {
    let i;
    const divs = new Array();

    // Accepts only natural numbers greater than 1.
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
  }

  /**
   * Classify a given number as perfect, abundant or deficient.
   * @param {number} number - number to be classified. Note: if the number is equal or smaller than 0,
   * then returns an error: Classification is only possible for natural numbers.
   * @returns {string} - string that contains the number classification (perfect, abundant or deficient).
   */
  classify(number) {
    let sum,
      result;

    // Check if the input is valid
    if (number <= 0) {
      throw new Error('Classification is only possible for natural numbers.');
    }

    // Factorize the current number.
    const divsArray = this.getDivisors(number);

    // Sum the factors.
    sum = divsArray.reduce((sum, div) => sum += div, 0);

    // Check if the number is perfect.
    if (sum === number) {
      result = 'perfect';
    } else if (sum > number) {
      result = 'abundant';
    } else {
      result = 'deficient';
    }

    return result;
  }

}
