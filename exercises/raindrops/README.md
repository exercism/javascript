# Raindrops

Convert a number to a string, the contents of which depend on the number's factors.

- If the number has 3 as a factor, output 'Pling'.
- If the number has 5 as a factor, output 'Plang'.
- If the number has 7 as a factor, output 'Plong'.
- If the number does not have 3, 5, or 7 as a factor,
  just pass the number's digits straight through.

## Examples

- 28's factors are 1, 2, 4, **7**, 14, 28.
  - In raindrop-speak, this would be a simple "Plong".
- 30's factors are 1, 2, **3**, **5**, 6, 10, 15, 30.
  - In raindrop-speak, this would be a "PlingPlang".
- 34 has four factors: 1, 2, 17, and 34.
  - In raindrop-speak, this would be "34".

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
jasmine raindrops.spec.js
```

In many test suites all but the first test have been marked "pending".
Once you get a test passing, activate the next one by changing `xit` to `it`.

## Source

A variation on a famous interview question intended to weed out potential candidates. [http://jumpstartlab.com](http://jumpstartlab.com)

## Submitting Incomplete Solutions
It's possible to submit an incomplete solution so you can see how others have completed the exercise.
