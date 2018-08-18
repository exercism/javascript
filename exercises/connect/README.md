# Connect

Compute the result for a game of Hex / Polygon.

The abstract boardgame known as
[Hex](https://en.wikipedia.org/wiki/Hex_%28board_game%29) / Polygon /
CON-TAC-TIX is quite simple in rules, though complex in practice. Two players
place stones on a rhombus with hexagonal fields. The player to connect his/her
stones to the opposite side first wins. The four sides of the rhombus are
divided between the two players (i.e. one player gets assigned a side and the
side directly opposite it and the other player gets assigned the two other
sides).

Your goal is to build a program that given a simple representation of a board
computes the winner (or lack thereof). Note that all games need not be "fair".
(For example, players may have mismatched piece counts.)

The boards look like this (with spaces added for readability, which won't be in
the representation passed to your code):

```text
. O . X .
 . X X O .
  O O O X .
   . X O X O
    X O O O X
```

"Player `O`" plays from top to bottom, "Player `X`" plays from left to right. In
the above example `O` has made a connection from left to right but nobody has
won since `O` didn't connect top and bottom.

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
jasmine connect.spec.js
```

In many test suites all but the first test have been marked "pending".
Once you get a test passing, activate the next one by changing `xit` to `it`.

## Submitting Incomplete Solutions
It's possible to submit an incomplete solution so you can see how others have completed the exercise.
