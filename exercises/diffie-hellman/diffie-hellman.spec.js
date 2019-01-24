/* eslint-disable no-new */
import { DiffieHellman } from './diffie-hellman';

describe('diffie-hellman', () => {
  const p = 23;
  const g = 5;
  const diffieHellman = new DiffieHellman(p, g);

  const alicePrivateKey = 6;
  const alicePublicKey = 8;

  const bobPrivateKey = 15;
  const bobPublicKey = 19;

  test('throws an error if the constructor arguments are out of range', () => {
    expect(() => {
      new DiffieHellman(0, 9999);
    }).toThrow();
  });

  xtest('throws an error if the constructor arguments are not prime', () => {
    expect(() => {
      new DiffieHellman(10, 13);
    }).toThrow();
  });

  xtest('throws an error if private key is negative', () => {
    expect(() => {
      diffieHellman.getPublicKeyFromPrivateKey(-1);
    }).toThrow();
  });

  xtest('throws an error if private key is zero', () => {
    expect(() => {
      diffieHellman.getPublicKeyFromPrivateKey(0);
    }).toThrow();
  });

  xtest('throws an error if private key is one', () => {
    expect(() => {
      diffieHellman.getPublicKeyFromPrivateKey(1);
    }).toThrow();
  });

  xtest('throws an error if private key equals the modulus parameter p', () => {
    expect(() => {
      diffieHellman.getPublicKeyFromPrivateKey(p);
    }).toThrow();
  });

  xtest('throws an error if private key is greater than the modulus parameter p', () => {
    expect(() => {
      diffieHellman.getPublicKeyFromPrivateKey(p + 1);
    }).toThrow();
  });

  xtest('when given a private key, returns the correct public one', () => {
    expect(diffieHellman.getPublicKeyFromPrivateKey(alicePrivateKey)).toEqual(alicePublicKey);
  });

  xtest('when given a different private key, returns the correct public one', () => {
    expect(diffieHellman.getPublicKeyFromPrivateKey(bobPrivateKey)).toEqual(bobPublicKey);
  });

  xtest('can generate a shared secret from our private key and their public key', () => {
    const sharedSecret = 2;

    expect(diffieHellman.getSharedSecret(alicePrivateKey, bobPublicKey))
      .toEqual(sharedSecret);

    expect(diffieHellman.getSharedSecret(bobPrivateKey, alicePublicKey))
      .toEqual(sharedSecret);
  });
});
