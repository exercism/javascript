
/**
 * @param  {number} year
 * Numeric year.
 *
 * @return {boolean}
 * Whether given year is a leap year.
 */
class Year {
  constructor(year) {
    this.year = year;
  }

  isLeap() {
    return this.year % 400 === 0 || this.year % 4 === 0 && this.year % 100 !== 0;
  }
}

export default Year;
