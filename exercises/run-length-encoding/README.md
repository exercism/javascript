# Run Length Encoding

Implement run-length encoding and decoding.

Run-length encoding (RLE) is a simple form of data compression, where runs
(consecutive data elements) are replaced by just one data value and count.

For example we can represent the original 53 characters with only 13.

```text
"WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"  ->  "12WB12W3B24WB"
```

RLE allows the original data to be perfectly reconstructed from
the compressed data, which makes it a lossless data compression.

```text
"AABCCCDEEEE"  ->  "2AB3CD4E"  ->  "AABCCCDEEEE"
```

For simplicity, you can assume that the unencoded string will only contain
the letters A through Z (either lower or upper case) and whitespace. This way
data to be encoded will never contain any numbers and numbers inside data to
be decoded always represent the count for the following character.

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
jasmine run-length-encoding.spec.js
```

In many test suites all but the first test have been marked "pending".
Once you get a test passing, activate the next one by changing `xit` to `it`.

## Source

Wikipedia [https://en.wikipedia.org/wiki/Run-length_encoding](https://en.wikipedia.org/wiki/Run-length_encoding)

## Submitting Incomplete Solutions
It's possible to submit an incomplete solution so you can see how others have completed the exercise.
