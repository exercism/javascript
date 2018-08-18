'use strict';

/**
 * Represents a year to check whether is leap or not
 *
 * @param {number} year
 *
 * Numeric year.
 */

function Year(year) {
  this.year = year;
}

/**
 * Whether given year is a leap year.
 *
 * @returns {boolean}
 *
 * Whether given year is a leap year.
 */

Year.prototype.isLeap = function () {
  return (this.year % 400 === 0) || ((this.year % 4 === 0) && (this.year % 100 !== 0));
};

module.exports = Year;

