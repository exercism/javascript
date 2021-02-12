const LENGTH = 7;
const CONT_BITS = 1 << LENGTH;
const DATA_BITS = CONT_BITS - 1;

const encodeOne = (val) => {
  const buf = [];
  let left = val;

  while (left) {
    const bits = (left & DATA_BITS) | CONT_BITS; // set continuation everywhere
    left = left >>> LENGTH;
    buf.push(bits);
  }
  buf[0] = buf[0] & DATA_BITS; // cancel the last continuation
  return buf.reverse();
};

const decodeOne = (buf) => {
  let val = 0;

  for (let i = 0; i < buf.length; i++) {
    val = (val << LENGTH) | (buf[i] & DATA_BITS);
  }
  return val >>> 0; // convert to unsigned 32-bit
};

export const encode = (data) => {
  let buf = [];

  for (let i = 0; i < data.length; i++) {
    buf = buf.concat(encodeOne(data[i]));
  }
  return buf;
};

export const decode = (data) => {
  let start = 0;
  const vals = [];

  for (let i = 0; i < data.length; i++) {
    if (~data[i] & CONT_BITS) {
      vals.push(decodeOne(data.slice(start, i + 1)));
      start = i + 1;
    }
  }
  if (start < data.length) {
    throw new Error('Incomplete sequence');
  }
  return vals;
};
