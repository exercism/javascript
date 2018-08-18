# All Your Base

Convert a number, represented as a sequence of digits in one base, to any other base.

Implement general base conversion. Given a number in base **a**,
represented as a sequence of digits, convert it to base **b**.

## Note

- Try to implement the conversion yourself.
  Do not use something else to perform the conversion for you.

## About [Positional Notation](https://en.wikipedia.org/wiki/Positional_notation)

In positional notation, a number in base **b** can be understood as a linear
combination of powers of **b**.

The number 42, *in base 10*, means:

(4 * 10^1) + (2 * 10^0)

The number 101010, *in base 2*, means:

(1 * 2^5) + (0 * 2^4) + (1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (0 * 2^0)

The number 1120, *in base 3*, means:

(1 * 3^3) + (1 * 3^2) + (2 * 3^1) + (0 * 3^0)

I think you got the idea!

*Yes. Those three numbers above are exactly the same. Congratulations!*

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
jasmine all-your-base.spec.js
```

In many test suites all but the first test have been marked "pending".
Once you get a test passing, activate the next one by changing `xit` to `it`.

## Submitting Incomplete Solutions
It's possible to submit an incomplete solution so you can see how others have completed the exercise.
