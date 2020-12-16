import { Crypto } from './crypto-square';

describe('Crypto', () => {
  test('empty plaintext results in an empty ciphertext', () => {
    const crypto = new Crypto('');
    expect(crypto.plaintext).toEqual('');
  });

  test('Lowercase', () => {
    const crypto = new Crypto('A');
    expect(crypto.plaintext).toEqual('a');
  });

  test('Remove spaces', () => {
    const crypto = new Crypto('  b ');
    expect(crypto.plaintext).toEqual('b');
  });

  test('Remove punctuation', () => {
    const crypto = new Crypto('@1,%!');
    expect(crypto.plaintext).toEqual('1');
  });

  test('normalize strange characters', () => {
    const crypto = new Crypto('s#$%^&plunk');
    expect(crypto.plaintext).toEqual('splunk');
  });

  xtest('normalize numbers', () => {
    const crypto = new Crypto('1, 2, 3 GO!');
    expect(crypto.plaintext).toEqual('123go');
  });

  xtest('9 character plaintext results in 3 chunks of 3 characters', () => {
    const crypto = new Crypto('This is fun!');
    expect(crypto.plaintext).toEqual('tsf hiu isn');
  });

  xtest('8 character plaintext results in 3 chunks, the last one with a trailing space', () => {
    const crypto = new Crypto('Chill out.');
    expect(crypto.plaintext).toEqual('clu hlt io ');
  });

  xtest('54 character plaintext results in 7 chunks, the last two with trailing spaces', () => {
    const crypto = new Crypto(
      'If man was meant to stay on the ground, god would have given us roots.'
    );
    expect(crypto.plaintext).toEqual(
      'imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn  sseoau '
    );
  });

  xtest('cipher text', () => {
    const crypto = new Crypto('Time is an illusion. Lunchtime doubly so.');
    expect(crypto.ciphertext).toEqual('tasneyinicdsmiohooelntuillibsuuml');
  });

  xtest('cipher text', () => {
    const crypto = new Crypto('We all know interspecies romance is weird.');
    expect(crypto.ciphertext).toEqual('wneiaweoreneawssciliprerlneoidktcms');
  });
});
