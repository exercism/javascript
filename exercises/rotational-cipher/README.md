# Rotational Cipher

Create an implementation of the rotational cipher, also sometimes called the Caesar cipher.

The Caesar cipher is a simple shift cipher that relies on
transposing all the letters in the alphabet using an integer key
between `0` and `26`. Using a key of `0` or `26` will always yield
the same output due to modular arithmetic. The letter is shifted
for as many values as the value of the key.

The general notation for rotational ciphers is `ROT + <key>`.
The most commonly used rotational cipher is `ROT13`.

A `ROT13` on the Latin alphabet would be as follows:

```text
Plain:  abcdefghijklmnopqrstuvwxyz
Cipher: nopqrstuvwxyzabcdefghijklm
```

It is stronger than the Atbash cipher because it has 27 possible keys, and 25 usable keys.

Ciphertext is written out in the same formatting as the input including spaces and punctuation.

## Examples

- ROT5  `omg` gives `trl`
- ROT0  `c` gives `c`
- ROT26 `Cool` gives `Cool`
- ROT13 `The quick brown fox jumps over the lazy dog.` gives `Gur dhvpx oebja sbk whzcf bire gur ynml qbt.`
- ROT13 `Gur dhvpx oebja sbk whzcf bire gur ynml qbt.` gives `The quick brown fox jumps over the lazy dog.`

## Setup

Go through the setup instructions for JavaScript to install the
 necessary dependencies:

http://exercism.io/languages/javascript/installation

## Running the test suite

The provided test suite uses [Jasmine](https://jasmine.github.io/).
You can install it by opening a terminal window and running the
following command:

```sh
npm install -g jasmine
```

Run the test suite from the exercise directory with:

```sh
jasmine rotational-cipher.spec.js
```

In many test suites all but the first test have been marked "pending".
Once you get a test passing, activate the next one by changing `xit` to `it`.

## Source

Wikipedia [https://en.wikipedia.org/wiki/Caesar_cipher](https://en.wikipedia.org/wiki/Caesar_cipher)

## Submitting Incomplete Solutions
It's possible to submit an incomplete solution so you can see how others have completed the exercise.
