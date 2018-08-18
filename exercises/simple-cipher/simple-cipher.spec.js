var Cipher = require('./simple-cipher');

describe('Random key generation', function () {
  xit('generates keys at random', function () {
    // Strictly speaking, this is difficult to test with 100% certainty.
    // But, if you have a generator that generates 100-character-long
    // strings of lowercase letters at random, the odds of two consecutively
    // generated keys being identical are astronomically low.
    expect(new Cipher().key).not.toEqual(new Cipher().key);
  });
});

describe('Random key cipher', function () {
  var cipher = new Cipher();

  it('has a key made of letters', function () {
    expect(cipher.key).toMatch(/^[a-z]+$/);
  });

  xit('has a key that is at least 100 characters long', function () {
    expect(cipher.key.length).toBeGreaterThanOrEqual(100);
  });

  // Here we take advantage of the fact that plaintext of "aaa..."
  // outputs the key. This is a critical problem with shift ciphers, some
  // characters will always output the key verbatim.
  xit('can encode', function () {
    expect(cipher.encode('aaaaaaaaaa')).toEqual(cipher.key.substr(0, 10));
  });

  xit('can decode', function () {
    expect(cipher.decode(cipher.key.substr(0, 10))).toEqual('aaaaaaaaaa');
  });

  xit('is reversible', function () {
    var plaintext = 'abcdefghij';
    expect(cipher.decode(cipher.encode(plaintext))).toEqual(plaintext);
  });
});

/* eslint-disable no-new */

describe('Incorrect key cipher', function () {
  xit('throws an error with an all caps key', function () {
    expect(function () {
      new Cipher('ABCDEF');
    }).toThrow(new Error('Bad key'));
  });

  xit('throws an error with a numeric key', function () {
    expect(function () {
      new Cipher('12345');
    }).toThrow(new Error('Bad key'));
  });

  xit('throws an error with an empty key', function () {
    expect(function () {
      new Cipher('');
    }).toThrow(new Error('Bad key'));
  });
});

/* eslint-enable no-new */

describe('Substitution cipher', function () {
  var key = 'abcdefghij';
  var cipher = new Cipher(key);

  xit('keeps the submitted key', function () {
    expect(cipher.key).toEqual(key);
  });

  xit('can encode', function () {
    expect(cipher.encode('aaaaaaaaaa')).toEqual('abcdefghij');
  });

  xit('can decode', function () {
    expect(cipher.decode('abcdefghij')).toEqual('aaaaaaaaaa');
  });

  xit('is reversible', function () {
    expect(cipher.decode(cipher.encode('abcdefghij'))).toEqual('abcdefghij');
  });

  xit(': double shift encode', function () {
    expect(new Cipher('iamapandabear').encode('iamapandabear'))
      .toEqual('qayaeaagaciai');
  });

  xit('can wrap on encode', function () {
    expect(cipher.encode('zzzzzzzzzz')).toEqual('zabcdefghi');
  });

  xit('can wrap on decode', () => {
    expect(cipher.decode('zabcdefghi')).toEqual('zzzzzzzzzz');
  });

  xit('can handle messages longer than the key', function () {
    expect(new Cipher('abc').encode('iamapandabear'))
      .toEqual('iboaqcnecbfcr');
  });
});
