/* eslint-disable no-new */
import { Cipher } from './simple-cipher';

describe('Random key cipher', () => {
  const cipher = new Cipher();

  test('can encode', () => {
    // Here we take advantage of the fact that plaintext of "aaa..."
    // outputs the key. This is a critical problem with shift ciphers, some
    // characters will always output the key verbatim.
    expect(cipher.encode('aaaaaaaaaa')).toEqual(cipher.key.substr(0, 10));
  });

  xtest('can decode', () => {
    expect(cipher.decode(cipher.key.substr(0, 10))).toEqual('aaaaaaaaaa');
  });

  xtest('is reversible', () => {
    // I.e., if you apply decode in a encoded result, you must see
    // the same plaintext encode parameter as a result of the decode method
    const plaintext = 'abcdefghij';
    expect(cipher.decode(cipher.encode(plaintext))).toEqual(plaintext);
  });

  xtest('key is made only of lowercase letters', () => {
    expect(cipher.key).toMatch(/^[a-z]+$/);
  });
});

describe('Substitution cipher', () => {
  const key = 'abcdefghij';
  const cipher = new Cipher(key);

  xtest('can encode', () => {
    expect(cipher.encode('aaaaaaaaaa')).toEqual('abcdefghij');
  });

  xtest('can decode', () => {
    expect(cipher.decode('abcdefghij')).toEqual('aaaaaaaaaa');
  });

  xtest('is reversible', () => {
    // I.e., if you apply decode in a encoded result, you must see
    // the same plaintext encode parameter as a result of the decode method
    expect(cipher.decode(cipher.encode('abcdefghij'))).toEqual('abcdefghij');
  });

  xtest('can double shift encode', () => {
    expect(new Cipher('iamapandabear').encode('iamapandabear')).toEqual(
      'qayaeaagaciai'
    );
  });

  xtest('can wrap on encode', () => {
    expect(cipher.encode('zzzzzzzzzz')).toEqual('zabcdefghi');
  });

  xtest('can wrap on decode', () => {
    expect(cipher.decode('zabcdefghi')).toEqual('zzzzzzzzzz');
  });

  xtest('can encode messages longer than the key', () => {
    expect(new Cipher('abc').encode('iamapandabear')).toEqual('iboaqcnecbfcr');
  });

  xtest('can decode messages longer than the key', () => {
    expect(new Cipher('abc').decode('iboaqcnecbfcr')).toEqual('iamapandabear');
  });
});
