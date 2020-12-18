import { Crypto } from './crypto-square';

describe('Crypto', () => {
  test('empty plaintext results in an empty ciphertext', () => {
    const crypto = new Crypto('');
    expect(crypto.ciphertext).toEqual('');
  });

  test('Lowercase', () => {
    const crypto = new Crypto('A');
    expect(crypto.ciphertext).toEqual('a');
  });

  test('Remove spaces', () => {
    const crypto = new Crypto('  b ');
    expect(crypto.ciphertext).toEqual('b');
  });

  test('Remove punctuation', () => {
    const crypto = new Crypto('@1,%!');
    expect(crypto.ciphertext).toEqual('1');
  });

  xtest('9 character plaintext results in 3 chunks of 3 characters', () => {
    const crypto = new Crypto('This is fun!');
    expect(crypto.ciphertext).toEqual('tsf hiu isn');
  });

  xtest('8 character plaintext results in 3 chunks, the last one with a trailing space', () => {
    const crypto = new Crypto('Chill out.');
    expect(crypto.ciphertext).toEqual('clu hlt io ');
  });

  test.skip('54 character plaintext results in 7 chunks, the last two with trailing spaces', () => {
    const crypto = new Crypto(
      'If man was meant to stay on the ground, god would have given us roots.'
    );
    expect(crypto.ciphertext).toEqual(
      'imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn  sseoau '
    );
  });
});
