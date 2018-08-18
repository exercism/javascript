var LENGTH = 7;
var CONT_BITS = 1 << LENGTH;
var DATA_BITS = CONT_BITS - 1;

var encodeOne = function (val) {
  var buf = [];
  var left = val;

  while (left) {
    var bits = left & DATA_BITS | CONT_BITS; // set continuation everywhere
    left = left >>> LENGTH;
    buf.push(bits);
  }
  buf[0] = buf[0] & DATA_BITS; // cancel the last continuation
  return buf.reverse();
};

var decodeOne = function (buf) {
  var val = 0;

  for (var i = 0; i < buf.length; i++) {
    val = val << LENGTH | buf[i] & DATA_BITS;
  }
  return val >>> 0; // convert to unsigned 32-bit
};

module.exports = {
  encode: function encode(data) {
    var buf = [];

    for (var i = 0; i < data.length; i++) {
      buf = buf.concat(encodeOne(data[i]));
    }
    return buf;
  },
  decode: function decode(data) {
    var start = 0;
    var vals = [];

    for (var i = 0; i < data.length; i++) {
      if (~data[i] & CONT_BITS) {
        vals.push(decodeOne(data.slice(start, i + 1)));
        start = i + 1;
      }
    }
    if (start < data.length) {
      throw new Error('Incomplete sequence');
    }
    return vals;
  }
};
