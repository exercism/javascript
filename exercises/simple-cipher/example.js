'use strict';

var ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function randomKey() {
  var result;
  for ( var i = 0; i < 100; i++ ) {
    result += ALPHABET[randomUpTo(ALPHABET.length)];
  }
  return result;
}

function randomUpTo(n) {
  return Math.floor(Math.random() * n);
}

module.exports = function (userDefinedKey) {
  var key;

  function addEncodedCharacter(character, index) {
    var i = ALPHABET.indexOf(character) + ALPHABET.indexOf(key[index % key.length]);
    if (i >= ALPHABET.length) { i -= ALPHABET.length; }
    this.push(ALPHABET[i]);
  }

  function addDecodedCharacter(character, index) {
    var i = ALPHABET.indexOf(character) - ALPHABET.indexOf(key[index % key.length]);
    if (i < 0) { i += ALPHABET.length; }
    this.push(ALPHABET[i]);
  }

  this.encode = function (plaintext) {
    var characters = [];
    plaintext.split('').forEach( addEncodedCharacter, characters );
    return characters.join('');
  };

  this.decode = function (ciphertext) {
    var characters = [];
    ciphertext.split('').forEach( addDecodedCharacter, characters );
    return characters.join('');
  };

  this.key = userDefinedKey || randomKey();
  key = this.key;

  if (userDefinedKey === '' || key.match(/[\dA-Z]/)) {
    throw new Error('Bad key');
  }
};
