# Resistor Color Trio

If you want to build something using a Raspberry Pi, you'll probably use _resistors_. For this exercise, you need to know only three things about them:

- Each resistor has a resistance value.
- Resistors are small - so small in fact that if you printed the resistance value on them, it would be hard to read.
  To get around this problem, manufacturers print color-coded bands onto the resistors to denote their resistance values. Each band has a position and a numeric value. For example, if they printed a brown band (value 1) followed by a green band (value 5), it would translate to the number 15.
- Each band acts as a digit of a number. For example, if they printed a brown band (value 1) followed by a green band (value 5), it would translate to the number 15.
  In this exercise, you are going to create a helpful program so that you don't have to remember the values of the bands. The program will take 3 colors as input, and outputs the correct value, in ohms.
  The colors are mapped to the numbers from 0 to 9 in the sequence:

Black - Brown - Red - Orange - Yellow - Green - Blue - Violet - Grey - White

In `resistor-color duo` you decoded the first two colors. For instance: orange-orange got the main value `33`.
The third color stands for how many zeros need to be added to the main value. The main value plus the zeros gives us a value in ohms.
For the exercise it doesn't matter what ohms really are.
For example:

- orange-orange-black would be 33 and no zeros, which becomes 33 ohms.
- orange-orange-red would be 33 and 2 zeros, which becomes 3300 ohms.
- orange-orange-orange would be 33 and 3 zeros, which becomes 33000 ohms.

(If Math is your thing, you may want to think of the zeros as exponents of 10. If Math is not your thing, go with the zeros. It really is the same thing, just in plain English instead of Math lingo.)

This exercise is about translating the colors into a label:

> "... ohms"

So an input of `"orange", "orange", "black"` should return:

> "33 ohms"

When we get more than a thousand ohms, we say "kiloohms". That's similar to saying "kilometer" for 1000 meters, and "kilograms" for 1000 grams.
So an input of `"orange", "orange", "orange"` should return:

> "33 kiloohms"

## Setup

Go through the setup instructions for Javascript to install the necessary
dependencies:

[https://exercism.io/tracks/javascript/installation](https://exercism.io/tracks/javascript/installation)

## Requirements

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

## Source

Maud de Vries, Erik Schierboom [https://github.com/exercism/problem-specifications/issues/1549](https://github.com/exercism/problem-specifications/issues/1549)

## Submitting Incomplete Solutions

It's possible to submit an incomplete solution so you can see how others have
completed the exercise.
