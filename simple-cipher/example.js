const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

function generateKey() {
  return Array.apply(null, Array(100))
    .map(() => ALPHA[Math.floor(Math.random() * ALPHA.length)])
    .join('');
}

function xCode(key, inText, sign) {
  return [...inText]
    .reduce((outText, letter, ii) => {
      const offset = sign * ALPHA.indexOf(key[mod(ii, key.length)]);
      outText += ALPHA[mod(ALPHA.indexOf(letter) + offset, ALPHA.length)];
      return outText;
    }, '');
}

const mod = (n, m) => ((n % m) + m) % m;

export default function (key) {

  if (typeof key === 'undefined') {
    key = generateKey();
  } else if (key.length === 0 || key.match(/[^a-z]/, "g")) {
    throw(new Error("Bad key"));
  }

  return {
    key:    key,
    encode: function (plainText) {
      return xCode(this.key, plainText, 1);
    },
    decode: function (encodedText) {
      return xCode(this.key, encodedText, -1);
    }
  }
};
