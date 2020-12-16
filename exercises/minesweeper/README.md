# Minesweeper

Add the mine counts to a completed Minesweeper board.

Minesweeper is a popular game where the user has to find the mines using
numeric hints that indicate how many mines are directly adjacent
(horizontally, vertically, diagonally) to a square.

In this exercise you have to create some code that counts the number of
mines adjacent to a given empty square and replaces that square with the
count.

The board is a rectangle composed of blank space (' ') characters. A mine
is represented by an asterisk ('\*') character.

If a given space has no adjacent mines at all, leave that square blank.

## Examples

For example you may receive a 5 x 4 board like this (empty spaces are
represented here with the '·' character for display on screen):

```
·*·*·
··*··
··*··
·····
```

And your code will transform it into this:

```
1*3*1
13*31
·2*2·
·111·
```

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
exercism submit minesweeper.js
```

## Submitting Incomplete Solutions

It's possible to submit an incomplete solution so you can see how others have
completed the exercise.

