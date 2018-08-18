# Crypto Square

Implement the classic method for composing secret messages called a square code.

Given an English text, output the encoded version of that text.

First, the input is normalized: the spaces and punctuation are removed
from the English text and the message is downcased.

Then, the normalized characters are broken into rows.  These rows can be
regarded as forming a rectangle when printed with intervening newlines.

For example, the sentence

> If man was meant to stay on the ground, god would have given us roots.

is normalized to:

> ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots

The plaintext should be organized in to a rectangle.  The size of the
rectangle (`r x c`) should be decided by the length of the message,
such that `c >= r` and `c - r <= 1`, where `c` is the number of columns
and `r` is the number of rows.

Our normalized text is 54 characters long, dictating a rectangle with
`c = 8` and `r = 7`:

```text
ifmanwas
meanttos
tayonthe
groundgo
dwouldha
vegivenu
sroots
```

The coded message is obtained by reading down the columns going left to
right.

The message above is coded as:

```text
imtgdvsfearwermayoogoanouuiontnnlvtwttddesaohghnsseoau
```

Output the encoded text in chunks.  Phrases that fill perfect rectangles
`(r X c)` should be output `c` chunks of `r` length, separated by spaces.
Phrases that do not fill perfect rectangles will have `n` empty spaces.
Those spaces should be distributed evenly, added to the end of the last
`n` chunks.

```text
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn  sseoau 
```

Notice that were we to stack these, we could visually decode the
cyphertext back in to the original message:

```text
imtgdvs
fearwer
mayoogo
anouuio
ntnnlvt
wttddes
aohghn
sseoau
```

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
jasmine crypto-square.spec.js
```

In many test suites all but the first test have been marked "pending".
Once you get a test passing, activate the next one by changing `xit` to `it`.

## Source

J Dalbey's Programming Practice problems [http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html](http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html)

## Submitting Incomplete Solutions
It's possible to submit an incomplete solution so you can see how others have completed the exercise.
