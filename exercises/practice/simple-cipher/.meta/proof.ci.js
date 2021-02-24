const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

function generateKey() {
  return Array(...Array(100))
    .map(() => ALPHA[Math.floor(Math.random() * ALPHA.length)])
    .join('');
}

const mod = (n, m) => ((n % m) + m) % m;

function xCode(key, inText, sign) {
  return [...inText].reduce((outText, letter, ii) => {
    const offset = sign * ALPHA.indexOf(key[mod(ii, key.length)]);
    return outText + ALPHA[mod(ALPHA.indexOf(letter) + offset, ALPHA.length)];
  }, '');
}

export class Cipher {
  constructor(key) {
    if (typeof key === 'undefined') {
      this.key = generateKey();
    } else if (key.length === 0 || key.match(/[^a-z]/, 'g')) {
      throw new Error('Bad key');
    } else {
      this.key = key;
    }
  }

  encode(plainText) {
    return xCode(this.key, plainText, 1);
  }

  decode(encodedText) {
    return xCode(this.key, encodedText, -1);
  }
}
