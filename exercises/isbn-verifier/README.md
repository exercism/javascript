# ISBN Verifier

Check if a given string is a valid ISBN-10 number.

## Functionality

Given an unknown string the program should check if the provided string is a valid ISBN-10.
Putting this into place requires some thinking about preprocessing/parsing of the string prior to calculating the check digit for the ISBN.

The program should allow for ISBN-10 without the separating dashes to be verified as well.

## ISBN

Let's take a random ISBN-10 number, say `3-598-21508-8` for this.
The first digit block indicates the group where the ISBN belongs. Groups can consist of shared languages, geographic regions or countries. The leading '3' signals this ISBN is from a german speaking country.
The following number block is to identify the publisher. Since this is a three digit publisher number there is a 5 digit title number for this book.
The last digit in the ISBN is the check digit which is used to detect read errors.

The first 9 digits in the ISBN have to be between 0 and 9.
The check digit can additionally be an 'X' to allow 10 to be a valid check digit as well.

A valid ISBN-10 is calculated with this formula `(x1 * 10 + x2 * 9 + x3 * 8 + x4 * 7 + x5 * 6 + x6 * 5 + x7 * 4 + x8 * 3 + x9 * 2 + x10 * 1) mod 11 == 0`
So for our example ISBN this means:
(3 * 10 + 5 * 9 + 9 * 8 + 8 * 7 + 2 * 6 + 1 * 5 + 5 * 4 + 0 * 3 + 8 * 2 + 8 * 1) mod 11 = 0

Which proves that the ISBN is valid.

## Setup

Go through the setup instructions for ECMAScript to
install the necessary dependencies:

http://exercism.io/languages/ecmascript/installation

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

Once you get a test passing, you can enable the next one by
changing `xtest` to `test`.


## Source

Wikipedia [https://en.wikipedia.org/wiki/International_Standard_Book_Number#ISBN-10_check_digit_calculation](https://en.wikipedia.org/wiki/International_Standard_Book_Number#ISBN-10_check_digit_calculation)

## Submitting Incomplete Solutions
It's possible to submit an incomplete solution so you can see how others have completed the exercise.
