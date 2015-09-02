
/**
 * @param  {number} year
 * Numeric year.
 *
 * @return {boolean}
 * Whether given year is a leap year.
 */
export default (year) => (year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0));

