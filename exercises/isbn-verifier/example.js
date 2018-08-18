'use strict';

function ISBN(isbn) {
  this.isbn = isbn.replace(/-/g, '');

  this.isValid = function () {
    if (!this.isbn.match(/^(\d{9}[\dX])$/)) {
      return false;
    }

    var digits = this.isbn.split('');
    if (digits[9] === 'X') {
      digits[9] = 10;
    }

    var sum = digits.reduce(function (total, current, index) {
      return total + ((10 - index) * parseInt(current, 10));
    }, 0);

    return sum % 11 === 0;
  };
}

module.exports = ISBN;
