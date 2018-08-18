# Collatz Conjecture

The Collatz Conjecture or 3x+1 problem can be summarized as follows:

Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is
odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely.
The conjecture states that no matter which number you start with, you will
always reach 1 eventually.

Given a number n, return the number of steps required to reach 1.

## Examples

Starting with n = 12, the steps would be as follows:

0. 12
1. 6
2. 3
3. 10
4. 5
5. 16
6. 8
7. 4
8. 2
9. 1

Resulting in 9 steps. So for input n = 12, the return value would be 9.

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
jasmine collatz-conjecture.spec.js
```

In many test suites all but the first test have been marked "pending".
Once you get a test passing, activate the next one by changing `xit` to `it`.

## Source

An unsolved problem in mathematics named after mathematician Lothar Collatz [https://en.wikipedia.org/wiki/3x_%2B_1_problem](https://en.wikipedia.org/wiki/3x_%2B_1_problem)

## Submitting Incomplete Solutions
It's possible to submit an incomplete solution so you can see how others have completed the exercise.
