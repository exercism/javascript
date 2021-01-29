# Raindrops

Your task is to convert a number into a string that contains raindrop sounds corresponding to certain potential factors. A factor is a number that evenly divides into another number, leaving no remainder. The simplest way to test if a one number is a factor of another is to use the [modulo operation](https://en.wikipedia.org/wiki/Modulo_operation).

The rules of `raindrops` are that if a given number:

- has 3 as a factor, add 'Pling' to the result.
- has 5 as a factor, add 'Plang' to the result.
- has 7 as a factor, add 'Plong' to the result.
- _does not_ have any of 3, 5, or 7 as a factor, the result should be the digits of the number.

## Examples

- 28 has 7 as a factor, but not 3 or 5, so the result would be "Plong".
- 30 has both 3 and 5 as factors, but not 7, so the result would be "PlingPlang".
- 34 is not factored by 3, 5, or 7, so the result would be "34".

## Setup

Go through the setup instructions for Javascript to install the necessary
dependencies:

[https://exercism.io/tracks/javascript/installation](https://exercism.io/tracks/javascript/installation)

## Requirements

Please `cd` into exercise directory before running all below commands.

Install assignment dependencies:

```bash
$ npm install
```

## Making the test suite pass

Execute the tests with:

```bash
$ npm test
```

In the test suites all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by changing `xtest` to
`test`.


## Submitting Solutions

Once you have a solution ready, you can submit it using:

```bash
exercism submit raindrops.js
```

## Submitting Incomplete Solutions

It's possible to submit an incomplete solution so you can see how others have
completed the exercise.

## Exercise Source Credits

A variation on FizzBuzz, a famous technical interview question that is intended to weed out potential candidates. That question is itself derived from Fizz Buzz, a popular children's game for teaching division. [https://en.wikipedia.org/wiki/Fizz_buzz](https://en.wikipedia.org/wiki/Fizz_buzz)

