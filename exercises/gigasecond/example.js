function Gigasecond(dateOfBirth) {
  'use strict';

  this.dateOfBirth = dateOfBirth;

  this.date = function () {
    var gigasecondDate = new Date(this.dateOfBirth.getTime() + 1000000000000);
    return gigasecondDate;
  };
}

module.exports = Gigasecond;
