# Minesweeper

Add the numbers to a minesweeper board.

Minesweeper is a popular game where the user has to find the mines using
numeric hints that indicate how many mines are directly adjacent
(horizontally, vertically, diagonally) to a square.

In this exercise you have to create some code that counts the number of
mines adjacent to a square and transforms boards like this (where `*`
indicates a mine):

    +-----+
    | * * |
    |  *  |
    |  *  |
    |     |
    +-----+

into this:

    +-----+
    |1*3*1|
    |13*31|
    | 2*2 |
    | 111 |
    +-----+

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
jasmine minesweeper.spec.js
```

In many test suites all but the first test have been marked "pending".
Once you get a test passing, activate the next one by changing `xit` to `it`.

## Submitting Incomplete Solutions
It's possible to submit an incomplete solution so you can see how others have completed the exercise.
