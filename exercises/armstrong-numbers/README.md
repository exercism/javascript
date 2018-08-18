# Armstrong Numbers

An [Armstrong number](https://en.wikipedia.org/wiki/Narcissistic_number) is a number that is the sum of its own digits each raised to the power of the number of digits.

For example:

- 9 is an Armstrong number, because `9 = 9^1 = 9`
- 10 is *not* an Armstrong number, because `10 != 1^2 + 0^2 = 2`
- 153 is an Armstrong number, because: `153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153`
- 154 is *not* an Armstrong number, because: `154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190`

Write some code to determine whether a number is an Armstrong number.

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
jasmine armstrong-numbers.spec.js
```

In many test suites all but the first test have been marked "pending".
Once you get a test passing, activate the next one by changing `xit` to `it`.

## Source

Wikipedia [Narcissistic number](https://en.wikipedia.org/wiki/Narcissistic_number)

## Submitting Incomplete Solutions

It's possible to submit an incomplete solution so you can see how others have completed the exercise.
