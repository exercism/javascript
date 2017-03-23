
export default class PerfectNumbers {

  /**
   * Calculate all the divisors for a given number and return them as an array.
   * Note: the actual number is not include in the returned array.
   */
  getDivisors(number) {

    let i;
    let divs = new Array();

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
  }

  /**
   * Classify a given number as perfect, abundant or deficient.
   * If the number is equal or smaller than 0, then returns an error: Classification is only possible for natural numbers.
   */
  classify(number) {

    let i, sum, result;

    // Check if the input is valid
    if (number <= 0) {
      return 'Classification is only possible for natural numbers.';
    }

    // Factorize the current number.
    const divsArray = this.getDivisors(number);

    // Sum the factors.
    sum = 0;
    for (i = 0; i < divsArray.length; i++) {
      sum = sum + divsArray[i];
    }

    // Check if the number is perfect.
    if (sum === number) {
      result = 'perfect';
    }
    else if (sum > number) {
      result = 'abundant';
    }
    else {
      result = 'deficient';
    }

    return result;
  }

}
