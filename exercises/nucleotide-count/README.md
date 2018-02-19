# Nucleotide Count

Given a single stranded DNA string, compute how many times each nucleotide occurs in the string. Also if the
given input strand contains invalid nucleotides, throw the error "Invalid nucleotide in strand"

The genetic language of every living thing on the planet is DNA. DNA is a large molecule that is built from an extremely long sequence of individual elements called nucleotides. 4 types of nucleotides exist in DNA and these differ only slightly and can be represented as the following symbols: 'A' for adenine, 'C' for cytosine, 'G' for guanine, and 'T' for thymine.

## Example 1

Given the strand `ACGT`

The count of "A C G T" is `1 1 1 1`, respectively

## Example 2

Given the strand `GAG`

The count of "A C G T" is `1 0 2 0`, respectively

## Example 3

Given the strand `TX`

As `X` is an invalid nucleotide, it should give the error `Invalid nucleotide in strand`

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

The Calculating DNA Nucleotides_problem at Rosalind [http://rosalind.info/problems/dna/](http://rosalind.info/problems/dna/)

## Submitting Incomplete Solutions
It's possible to submit an incomplete solution so you can see how others have completed the exercise.
