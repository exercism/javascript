import Crypto from './crypto-square';

describe('Crypto', () => {
  test('normalize strange characters', () => {
    const crypto = new Crypto('s#$%^&plunk');
    expect(crypto.normalizePlaintext()).toEqual('splunk');
  });

  xtest('normalize numbers', () => {
    const crypto = new Crypto('1, 2, 3 GO!');
    expect(crypto.normalizePlaintext()).toEqual('123go');
  });

  xtest('size of small square', () => {
    const crypto = new Crypto('1234');
    expect(crypto.size()).toEqual(2);
  });

  xtest('size of small square with additional non-number chars', () => {
    const crypto = new Crypto('1 2 3 4');
    expect(crypto.size()).toEqual(2);
  });

  xtest('size of slightly larger square', () => {
    const crypto = new Crypto('123456789');
    expect(crypto.size()).toEqual(3);
  });

  xtest('size of non-perfect square', () => {
    const crypto = new Crypto('123456789abc');
    expect(crypto.size()).toEqual(4);
  });

  xtest('plain text segments', () => {
    const crypto = new Crypto('Never vex thine heart with idle woes');
    expect(crypto.plaintextSegments()).toEqual(['neverv', 'exthin', 'eheart', 'withid', 'lewoes']);
  });

  xtest('plain text segments', () => {
    const crypto = new Crypto('ZOMG! ZOMBIES!!!');
    expect(crypto.plaintextSegments()).toEqual(['zomg', 'zomb', 'ies']);
  });

  xtest('cipher text', () => {
    const crypto = new Crypto('Time is an illusion. Lunchtime doubly so.');
    expect(crypto.ciphertext()).toEqual('tasneyinicdsmiohooelntuillibsuuml');
  });

  xtest('cipher text', () => {
    const crypto = new Crypto('We all know interspecies romance is weird.');
    expect(crypto.ciphertext()).toEqual('wneiaweoreneawssciliprerlneoidktcms');
  });
});
