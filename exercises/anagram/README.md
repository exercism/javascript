# Anagram

Given a word and a list of possible anagrams, select the correct sublist.

Given `"listen"` and a list of candidates like `"enlists" "google"
"inlets" "banana"` the program should return a list containing
`"inlets"`.

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
jasmine anagram.spec.js
```

In many test suites all but the first test have been marked "pending".
Once you get a test passing, activate the next one by changing `xit` to `it`.

## Source

Inspired by the Extreme Startup game [https://github.com/rchatley/extreme_startup](https://github.com/rchatley/extreme_startup)

## Submitting Incomplete Solutions
It's possible to submit an incomplete solution so you can see how others have completed the exercise.
