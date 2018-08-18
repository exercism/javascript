var DiffieHellman = require('./diffie-hellman');

describe('diffie-hellman', function () {
  var p = 23;
  var g = 5;
  var diffieHellman = new DiffieHellman(p, g);

  var alicePrivateKey = 6;
  var alicePublicKey = 8;

  var bobPrivateKey = 15;
  var bobPublicKey = 19;

  it('throws an error if the constructor arguments are out of range', function () {
    expect(function () {
      return new DiffieHellman(0, 9999);
    }).toThrow();
  });

  xit('throws an error if the constructor arguments are not prime', function () {
    expect(function () {
      return new DiffieHellman(10, 13);
    }).toThrow();
  });

  xit('throws an error if private key is negative', function () {
    expect(function () {
      diffieHellman.getPublicKeyFromPrivateKey(-1);
    }).toThrow();
  });

  xit('throws an error if private key is zero', function () {
    expect(function () {
      diffieHellman.getPublicKeyFromPrivateKey(0);
    }).toThrow();
  });

  xit('throws an error if private key is one', function () {
    expect(function () {
      diffieHellman.getPublicKeyFromPrivateKey(1);
    }).toThrow();
  });

  xit('throws an error if private key equals the modulus parameter p', function () {
    expect(function () {
      diffieHellman.getPublicKeyFromPrivateKey(p);
    }).toThrow();
  });

  xit('throws an error if private key is greater than the modulus parameter p', function () {
    expect(function () {
      diffieHellman.getPublicKeyFromPrivateKey(p + 1);
    }).toThrow();
  });

  xit('when given a private key, returns the correct public one', function () {
    expect(diffieHellman.getPublicKeyFromPrivateKey(alicePrivateKey)).toEqual(alicePublicKey);
  });

  xit('when given a different private key, returns the correct public one', function () {
    expect(diffieHellman.getPublicKeyFromPrivateKey(bobPrivateKey)).toEqual(bobPublicKey);
  });

  xit('can generate a shared secret from our private key and their public key', function () {
    var sharedSecret = 2;

    expect(diffieHellman.getSharedSecret(alicePrivateKey, bobPublicKey))
      .toEqual(sharedSecret);

    expect(diffieHellman.getSharedSecret(bobPrivateKey, alicePublicKey))
      .toEqual(sharedSecret);
  });
});
