import Cipher from './simple-cipher';

describe('Random key generation', () => {
  xtest('generates keys at random', () => {
    // Strictly speaking, this is difficult to test with 100% certainty.
    // But, if you have a generator that generates 100-character-long
    // strings of lowercase letters at random, the odds of two consecutively
    // generated keys being identical are astronomically low.
    expect(new Cipher().key).not.toEqual(new Cipher().key);
  });
});

describe('Random key cipher', () => {
  const cipher = new Cipher();

  test('has a key made of letters', () => {
    expect(cipher.key).toMatch(/^[a-z]+$/);
  });

  xtest('has a key that is at least 100 characters long', () => {
    expect(cipher.key.length).toBeGreaterThanOrEqual(100);
  });

  // Here we take advantage of the fact that plaintext of "aaa..."
  // outputs the key. This is a critical problem with shift ciphers, some
  // characters will always output the key verbatim.
  xtest('can encode', () => {
    expect(cipher.encode('aaaaaaaaaa')).toEqual(cipher.key.substr(0, 10));
  });

  xtest('can decode', () => {
    expect(cipher.decode(cipher.key.substr(0, 10))).toEqual('aaaaaaaaaa');
  });

  xtest('is reversible', () => {
    const plaintext = 'abcdefghij';
    expect(cipher.decode(cipher.encode(plaintext))).toEqual(plaintext);
  });
});

describe('Incorrect key cipher', () => {
  xtest('throws an error with an all caps key', () => {
    expect(() => {
      new Cipher('ABCDEF');
    }).toThrow(new Error('Bad key'));
  });

  xtest('throws an error with a numeric key', () => {
    expect(() => {
      new Cipher('12345');
    }).toThrow(new Error('Bad key'));
  });

  xtest('throws an error with an empty key', () => {
    expect(() => {
      new Cipher('');
    }).toThrow(new Error('Bad key'));
  });
});

describe('Substitution cipher', () => {
  const key = 'abcdefghij';
  const cipher = new Cipher(key);

  xtest('keeps the submitted key', () => {
    expect(cipher.key).toEqual(key);
  });

  xtest('can encode', () => {
    expect(cipher.encode('aaaaaaaaaa')).toEqual('abcdefghij');
  });

  xtest('can decode', () => {
    expect(cipher.decode('abcdefghij')).toEqual('aaaaaaaaaa');
  });

  xtest('is reversible', () => {
    expect(cipher.decode(cipher.encode('abcdefghij'))).toEqual('abcdefghij');
  });

  xtest(': double shift encode', () => {
    expect(new Cipher('iamapandabear').encode('iamapandabear'))
      .toEqual('qayaeaagaciai');
  });

  xtest('can wrap on encode', () => {
    expect(cipher.encode('zzzzzzzzzz')).toEqual('zabcdefghi');
  });

  xtest('can wrap on decode', () => {
    expect(cipher.decode('zabcdefghi')).toEqual('zzzzzzzzzz');
  });

  xtest('can handle messages longer than the key', function() {
    expect(new Cipher('abc').encode('iamapandabear'))
      .toEqual('iboaqcnecbfcr');
  });
});
