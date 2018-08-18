'use strict';

module.exports = Binary;

function Binary(binary) {
  if (binary.match(/^[01]*$/)) {
    this.binary = parseInt(binary, 2);
  } else {
    this.binary = 0;
  }
}

Binary.prototype.toDecimal = function () {
  var out = Number(this.binary.toString(10));
  return isNaN(out) ? 0 : out;
};
